export type Role = "creator" | "provider";

export interface Startup {
  id: string;
  title: string;
  desc: string;
  category: string;
  need: string;
  creatorName: string;
  creatorEmail: string;
  createdAt: string;
}

export interface StartupInput {
  title: string;
  desc: string;
  category: string;
  need: string;
  creatorEmail: string;
}
