"use client";

/**
 * The signature visual motif of YoshStart: a dashed line linking a
 * "g'oya" (idea) node to a "yordam" (help) node, with a pulse of light
 * traveling along it — idea + help = connection.
 */
export function Connector({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 260 140"
      fill="none"
      className={className}
      style={{ overflow: "visible" }}
    >
      <path
        id="connector-line"
        d="M20 110 C 90 110, 90 30, 240 30"
        className="connector-path text-white/25"
      />
      <circle r="4.5" className="connector-dot fill-brand" style={{ offsetPath: "path('M20 110 C 90 110, 90 30, 240 30')" }} />
      <circle
        r="4.5"
        className="connector-dot connector-dot--delay fill-amber"
        style={{ offsetPath: "path('M20 110 C 90 110, 90 30, 240 30')" }}
      />
    </svg>
  );
}

/** Slim vertical variant used as the rail in "how it works" steps. */
export function ConnectorRail({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 100" fill="none" className={className} preserveAspectRatio="none">
      <path d="M10 0 V100" className="connector-path text-border" />
      <circle r="4" className="connector-dot fill-brand" style={{ offsetPath: "path('M10 0 V100')" }} />
    </svg>
  );
}
