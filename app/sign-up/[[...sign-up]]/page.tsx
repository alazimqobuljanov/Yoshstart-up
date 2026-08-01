import { SignUp } from "@clerk/nextjs";

const hasClerkConfig = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);

export default function SignUpPage() {
  if (!hasClerkConfig) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-bg px-4 py-10 text-center text-white">
        <p className="max-w-md text-lg font-medium">
          Clerk is not configured. Please set NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY in your environment.
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg px-4 py-10">
      <SignUp
        path="/sign-up"
        signInUrl="/sign-in"
        fallbackRedirectUrl="/dashboard"
      />
    </div>
  );
}
