import { Suspense } from "react";
import VerifyCodePage from "./VerifyCodeClient";

export default function Page() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-ink text-paper">
          A carregar…
        </main>
      }
    >
      <VerifyCodePage />
    </Suspense>
  );
}
