import { PrismaClient } from "@prisma/client";
import { createPrismaMariaDbFromDatabaseUrl } from "@/lib/mariadbAdapter";

declare global {
  var prisma: PrismaClient | undefined;
}

export function isDatabaseConfigured(): boolean {
  const url = process.env.DATABASE_URL?.trim();
  if (!url) return false;

  try {
    const parsed = new URL(url);
    const placeholderUser = parsed.username === "user" || parsed.username === "build";
    const placeholderHost = parsed.hostname === "127.0.0.1" || parsed.hostname === "localhost";
    if (placeholderUser && placeholderHost) return false;
  } catch {
    return false;
  }

  return true;
}

function createPrismaClient() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("DATABASE_URL não definida.");
  }

  const adapter = createPrismaMariaDbFromDatabaseUrl(databaseUrl);
  return new PrismaClient({ adapter });
}

export function getPrisma(): PrismaClient {
  if (!global.prisma) {
    global.prisma = createPrismaClient();
  }
  return global.prisma;
}
