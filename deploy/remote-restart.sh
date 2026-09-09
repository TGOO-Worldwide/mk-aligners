#!/usr/bin/env bash
# Reinicia a app no CloudPanel. NÃO usa git — o código chega só via rsync.
set -euo pipefail

DEPLOY_PATH="${1:?Informe o caminho do deploy}"
APP_NAME="${2:-mkaligners}"

cd "$DEPLOY_PATH"
chmod +x deploy/remote-restart.sh 2>/dev/null || true

if [[ ! -f .env ]]; then
  echo "ERRO: arquivo .env não encontrado em $DEPLOY_PATH"
  echo "Crie o .env no servidor a partir de .env.example antes do primeiro deploy."
  exit 1
fi

if [[ ! -d .next ]]; then
  echo "ERRO: pasta .next ausente. O build do CI não foi sincronizado."
  exit 1
fi

# Carrega variáveis do .env para o processo PM2 (--update-env)
set -a
# shellcheck disable=SC1091
source .env
set +a

export NODE_ENV=production
export NEXT_TELEMETRY_DISABLED=1

# prisma CLI está em devDependencies — instala tudo, gera client, depois remove dev
echo "→ npm ci"
npm ci

echo "→ prisma generate"
npx prisma generate

echo "→ npm prune --omit=dev"
npm prune --omit=dev

if ! command -v pm2 >/dev/null 2>&1; then
  echo "ERRO: pm2 não encontrado no PATH do usuário SSH."
  echo "Instale com: npm install -g pm2"
  echo "Ou reinicie o app Node.js pelo CloudPanel após o sync."
  exit 1
fi

if pm2 describe "$APP_NAME" >/dev/null 2>&1; then
  echo "→ pm2 reload $APP_NAME"
  pm2 reload "$APP_NAME" --update-env
else
  echo "→ pm2 start (primeira vez)"
  pm2 start "$DEPLOY_PATH/deploy/ecosystem.config.cjs" --only "$APP_NAME" --update-env
fi

pm2 save
echo "Deploy OK: $APP_NAME em $DEPLOY_PATH (sem git)"
