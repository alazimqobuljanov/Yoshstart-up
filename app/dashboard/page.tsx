import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getRole } from "@/lib/roles";
import { DashboardClient } from "@/components/DashboardClient";

export default async function DashboardPage() {
  let user = null;

  if (process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && process.env.CLERK_SECRET_KEY) {
    try {
      user = await currentUser();
    } catch {
      user = null;
    }
  }

  const email = user?.primaryEmailAddress?.emailAddress ?? user?.emailAddresses[0]?.emailAddress;
  const name = user ? (user.fullName ?? user.firstName ?? email) : null;

  if (!user || !email || !name) {
    redirect("/");
  }

  const role = await getRole(email);

  return (
    <DashboardClient
      name={name}
      email={email}
      initialRole={role}
    />
  );
}
