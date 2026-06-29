"use client";

import { LucideIcon } from "lucide-react";

interface ActionButtonProps {
  icon: LucideIcon;
  label: string;
  variant?: "primary" | "secondary";
}

export default function ActionButton({
  icon: Icon,
  label,
  variant = "secondary",
}: ActionButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200";

  const styles =
    variant === "primary"
      ? "bg-sky-600 text-white hover:bg-sky-700 shadow-sm"
      : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50";

  return (
    <button className={`${base} ${styles}`}>
      <Icon size={18} />
      {label}
    </button>
  );
}
