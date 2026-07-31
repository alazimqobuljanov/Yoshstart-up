import { promises as fs } from "fs";
import path from "path";
import type { Role } from "./types";

const ROLES_PATH = path.join(process.cwd(), "data", "roles.json");

async function ensureFile() {
  try {
    await fs.access(ROLES_PATH);
  } catch {
    await fs.mkdir(path.dirname(ROLES_PATH), { recursive: true });
    await fs.writeFile(ROLES_PATH, "{}", "utf-8");
  }
}

async function readRoles(): Promise<Record<string, Role>> {
  await ensureFile();
  const raw = await fs.readFile(ROLES_PATH, "utf-8");
  try {
    return JSON.parse(raw) as Record<string, Role>;
  } catch {
    return {};
  }
}

export async function getRole(email: string): Promise<Role | null> {
  const roles = await readRoles();
  return roles[email] ?? null;
}

export async function setRole(email: string, role: Role): Promise<void> {
  const roles = await readRoles();
  roles[email] = role;
  await ensureFile();
  await fs.writeFile(ROLES_PATH, JSON.stringify(roles, null, 2), "utf-8");
}
