type RequestLike = { headers: { get(name: string): string | null } };

function isInternalHost(host: string): boolean {
  const hostname = host.split(":")[0]?.toLowerCase() ?? "";
  return (
    hostname === "localhost" ||
    hostname === "0.0.0.0" ||
    hostname === "127.0.0.1" ||
    host.endsWith(":8080")
  );
}

function firstHeaderValue(value: string | null): string | null {
  return value?.split(",")[0]?.trim() ?? null;
}

export function getAppBaseUrl(request?: RequestLike): string {
  if (request) {
    const forwardedHost = firstHeaderValue(request.headers.get("x-forwarded-host"));
    const forwardedProto = firstHeaderValue(request.headers.get("x-forwarded-proto"));

    if (forwardedHost && !isInternalHost(forwardedHost)) {
      const proto = forwardedProto ?? "https";
      return `${proto}://${forwardedHost}`;
    }

    const host = firstHeaderValue(request.headers.get("host"));
    if (host && !isInternalHost(host)) {
      const proto =
        forwardedProto ??
        (host.includes("localhost") || host.startsWith("127.0.0.1") ? "http" : "https");
      return `${proto}://${host}`;
    }
  }

  const fromEnv = process.env.NEXTAUTH_URL?.trim().replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  return "http://localhost:3000";
}
