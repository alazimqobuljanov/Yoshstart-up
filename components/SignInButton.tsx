"use client";

import Link from "next/link";
import { SignInButton as ClerkSignInButton } from "@clerk/nextjs";
import { GoogleIcon } from "./icons";
import { Button } from "./ui/button";

const hasClerkConfig = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);

export function SignInButton({ compact = false }: { compact?: boolean }) {
  const buttonContent = compact ? (
    <>
      <GoogleIcon className="h-4 w-4" />
      Kirish
    </>
  ) : (
    <>
      <GoogleIcon className="h-10 w-5" />
      Google bilan boshlash
    </>
  );

  if (!hasClerkConfig) {
    return (
      <Button asChild size={compact ? "sm" : "lg"} variant="white" className="gap-2">
        <Link href="/sign-in">{buttonContent}</Link>
      </Button>
    );
  }

  return (
    <ClerkSignInButton mode="modal" forceRedirectUrl="/dashboard">
      <Button size={compact ? "sm" : "lg"} variant="white" className="gap-2">
        {buttonContent}
      </Button>
    </ClerkSignInButton>
  );
}
