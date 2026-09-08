# Máquina de Vendas — imagem para Cloud Run (Next.js + Prisma)
FROM node:20-alpine AS base
RUN apk add --no-cache libc6-compat openssl
WORKDIR /app

FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
ENV DATABASE_URL="mysql://build:build@127.0.0.1:3306/build"
ENV SHADOW_DATABASE_URL="mysql://build:build@127.0.0.1:3306/build_shadow"
RUN npx prisma generate
RUN npm run build
RUN npm prune --omit=dev

FROM base AS runner
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=8080
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

WORKDIR /app

COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/prisma.config.ts ./

RUN chown -R nextjs:nodejs /app/.next

USER nextjs
EXPOSE 8080
CMD ["npm", "run", "start"]
