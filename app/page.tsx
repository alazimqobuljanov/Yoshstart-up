import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getStartups } from "@/lib/db";
import { Hero } from "@/components/Hero";
import { SiteHeader } from "@/components/SiteHeader";
import { Features } from "@/components/Features";
import { CategoryShowcase } from "@/components/CategoryShowcase";
import { CTASection } from "@/components/CTASection";
import { SiteFooter } from "@/components/SiteFooter";

export default async function HomePage() {
  const { userId } = await auth();
  if (userId) {
    redirect("/dashboard");
  }

  const startups = await getStartups();

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <Hero startupCount={startups.length} />
      <Features />
      <CategoryShowcase />
      <CTASection />
      <SiteFooter />
    </div>
  );
}
