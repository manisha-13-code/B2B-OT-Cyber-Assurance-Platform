import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "icon";
  className?: string;
}

export function Button({
  variant = "default",
  size = "default",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400";
  const variantStyles =
    variant === "outline"
      ? "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50"
      : variant === "ghost"
      ? "bg-transparent text-slate-900 hover:bg-slate-100"
      : "bg-slate-950 text-white hover:bg-slate-800";
  const sizeStyles =
    size === "icon"
      ? "h-10 w-10 rounded-full p-0"
      : "px-4 py-2 text-sm font-semibold";

  return (
    <button className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`} {...props} />
  );
}
