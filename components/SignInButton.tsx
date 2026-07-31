"use client";

import { SignInButton as ClerkSignInButton } from "@clerk/nextjs";
import { GoogleIcon } from "./icons";
import { Button } from "./ui/button";

export function SignInButton({ compact = false }: { compact?: boolean }) {
  return (
    <ClerkSignInButton mode="modal" forceRedirectUrl="/dashboard">
      {compact ? (
        <Button size="sm" variant="white" className="gap-2">
          <GoogleIcon className="h-4 w-4" />
          Kirish
        </Button>
      ) : (
        <Button size="lg" variant="white" className="gap-3">
          <GoogleIcon className="h-10 w-5" />
          Google bilan boshlash
        </Button>
      )}
    </ClerkSignInButton>
  );
}
