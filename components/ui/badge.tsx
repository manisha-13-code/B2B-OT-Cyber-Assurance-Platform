import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary";
  className?: string;
}

export function Badge({
  variant = "default",
  className = "",
  ...props
}: BadgeProps) {
  const baseStyles = "inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold";
  const variantStyles =
    variant === "secondary"
      ? "bg-slate-100 text-slate-800"
      : "bg-slate-950 text-white";

  return (
    <span className={`${baseStyles} ${variantStyles} ${className}`} {...props} />
  );
}
