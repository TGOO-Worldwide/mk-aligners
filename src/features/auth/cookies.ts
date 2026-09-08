export function useSecureAuthCookies(): boolean {
  return (process.env.NEXTAUTH_URL ?? "").trim().startsWith("https://");
}

export function sessionCookieName(): string {
  return useSecureAuthCookies()
    ? "__Secure-next-auth.session-token"
    : "next-auth.session-token";
}
