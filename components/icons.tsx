import type { ReactNode } from "react";

export function GoogleIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.26 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.85A11 11 0 0012 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09A6.6 6.6 0 015.5 12c0-.73.13-1.43.34-2.09V7.06H2.18A11 11 0 001 12c0 1.77.43 3.45 1.18 4.94l3.66-2.85z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1a11 11 0 00-9.82 6.06l3.66 2.85C6.71 7.31 9.14 5.38 12 5.38z"
      />
    </svg>
  );
}

const base = (path: ReactNode, viewBox = "0 0 24 24") => (
  { className = "h-4 w-4" }: { className?: string } = {}
) => (
  <svg
    className={className}
    viewBox={viewBox}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {path}
  </svg>
);

export const BulbIcon = base(
  <path d="M9 18h6M10 22h4M12 2a6 6 0 00-4 10.5c.6.6 1 1.4 1 2.5h6c0-1.1.4-1.9 1-2.5A6 6 0 0012 2z" />
);
export const HandshakeIcon = base(
  <path d="M8 12l3 3 6-6M3 12l4-4 4 2 3-2 4 3-4 4-3-1-3 2-4-4z" strokeWidth="1.8" />
);
export const MailIcon = base(
  <>
    <path d="M4 4h16v16H4z" />
    <path d="M22 6l-10 7L2 6" />
  </>
);
export const TrashIcon = base(<path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14" />);
export const SwitchIcon = base(<path d="M7 7h11l-3-3M17 17H6l3 3" />);
export const LogoutIcon = base(
  <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" />
);
export const EditIcon = base(
  <path d="M12 20h9M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4 12.5-12.5z" />
);
export const EmptyIcon = base(
  <path d="M21 8v11a2 2 0 01-2 2H5a2 2 0 01-2-2V8M1 3h22l-3 5H4l-3-5z" strokeWidth="1.6" />
);
export function KebabIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="5" r="1.8" />
      <circle cx="12" cy="12" r="1.8" />
      <circle cx="12" cy="19" r="1.8" />
    </svg>
  );
}
