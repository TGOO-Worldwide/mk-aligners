import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import type { PoolConfig } from "mariadb";

function parseBoolParam(value: string | null): boolean | undefined {
  if (value === null) return undefined;
  const v = value.toLowerCase();
  if (v === "true" || v === "1" || v === "yes") return true;
  if (v === "false" || v === "0" || v === "no") return false;
  return undefined;
}

export function createPrismaMariaDbFromDatabaseUrl(databaseUrl: string): PrismaMariaDb {
  const parsed = new URL(databaseUrl);
  const fromUrl = parseBoolParam(parsed.searchParams.get("allowPublicKeyRetrieval"));
  const fromEnv = process.env.DATABASE_ALLOW_PUBLIC_KEY_RETRIEVAL;
  const allowPublicKeyRetrieval =
    fromUrl ?? (fromEnv === "true" ? true : fromEnv === "false" ? false : true);

  const database = parsed.pathname.replace(/^\//, "") || undefined;
  const unixSocket =
    parsed.searchParams.get("socket") ?? parsed.searchParams.get("socketPath") ?? undefined;

  const config: PoolConfig = {
    user: decodeURIComponent(parsed.username),
    password: decodeURIComponent(parsed.password),
    database,
    allowPublicKeyRetrieval,
    connectTimeout: 60_000,
    acquireTimeout: 60_000,
  };

  if (unixSocket) {
    config.socketPath = unixSocket;
  } else {
    config.host = parsed.hostname;
    config.port = Number(parsed.port || 3306);
  }

  return new PrismaMariaDb(config as never);
}
