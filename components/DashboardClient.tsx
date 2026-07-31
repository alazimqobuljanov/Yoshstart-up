"use client";

import { useState } from "react";
import type { Role } from "@/lib/types";
import { RoleSelect } from "./RoleSelect";
import { CreatorDashboard } from "./CreatorDashboard";
import { ProviderDashboard } from "./ProviderDashboard";

interface DashboardClientProps {
  name: string;
  email: string;
  initialRole: Role | null;
}

export function DashboardClient({ name, email, initialRole }: DashboardClientProps) {
  const [role, setRole] = useState<Role | null>(initialRole);

  if (!role) {
    return (
      <div className="flex min-h-screen flex-col bg-bg">
        <RoleSelect firstName={name.split(" ")[0]} onSelect={setRole} />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      {role === "creator" ? (
        <CreatorDashboard name={name} email={email} onSwitchRole={() => setRole(null)} />
      ) : (
        <ProviderDashboard name={name} email={email} onSwitchRole={() => setRole(null)} />
      )}
    </div>
  );
}
