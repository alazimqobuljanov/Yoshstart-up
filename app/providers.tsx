"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";

interface Toast {
  id: number;
  message: string;
  variant: "ok" | "err";
}

interface ToastContextValue {
  showToast: (message: string, variant?: "ok" | "err") => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within Providers");
  return ctx;
}

function ToastHost({ toasts }: { toasts: Toast[] }) {
  return (
    <div className="fixed bottom-6 left-1/2 z-[100] flex w-full -translate-x-1/2 flex-col items-center gap-2 px-4">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`flex max-w-sm items-center gap-2.5 rounded-full bg-ink px-5 py-3 text-center text-[13.5px] font-medium text-white shadow-card-hover animate-in-up ${
            t.variant === "err" ? "ring-1 ring-inset ring-danger/40" : "ring-1 ring-inset ring-brand/40"
          }`}
        >
          {t.variant === "err" ? (
            <XCircle className="h-4 w-4 flex-shrink-0 text-danger" />
          ) : (
            <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-brand-100" />
          )}
          {t.message}
        </div>
      ))}
    </div>
  );
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string, variant: "ok" | "err" = "ok") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, variant }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 2600);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastHost toasts={toasts} />
    </ToastContext.Provider>
  );
}
