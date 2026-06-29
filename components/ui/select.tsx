"use client";

import * as React from "react";

interface SelectContextValue {
  value: string;
  onValueChange: (next: string) => void;
  open: boolean;
  setOpen: (next: boolean) => void;
}

const SelectContext = React.createContext<SelectContextValue | null>(null);

export interface SelectProps {
  value: string;
  onValueChange: (next: string) => void;
  children: React.ReactNode;
}

export function Select({ value, onValueChange, children }: SelectProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <SelectContext.Provider value={{ value, onValueChange, open, setOpen }}>
      <div className="relative w-full">{children}</div>
    </SelectContext.Provider>
  );
}

export function SelectTrigger({
  className = "",
  children,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
  [key: string]: unknown;
}) {
  const context = React.useContext(SelectContext);

  if (!context) {
    throw new Error("SelectTrigger must be used within Select.");
  }

  return (
    <button
      type="button"
      className={`flex h-11 w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 shadow-sm ${className}`}
      onClick={() => context.setOpen(!context.open)}
      {...props}
    >
      {children}
    </button>
  );
}

export function SelectContent({
  className = "",
  children,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
  [key: string]: unknown;
}) {
  const context = React.useContext(SelectContext);

  if (!context) {
    throw new Error("SelectContent must be used within Select.");
  }

  if (!context.open) {
    return null;
  }

  return (
    <div
      className={`absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function SelectItem({
  value,
  children,
  className = "",
  ...props
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
  [key: string]: unknown;
}) {
  const context = React.useContext(SelectContext);

  if (!context) {
    throw new Error("SelectItem must be used within Select.");
  }

  return (
    <button
      type="button"
      className={`w-full px-4 py-3 text-left text-sm text-slate-700 hover:bg-slate-100 ${className}`}
      onClick={() => {
        context.onValueChange(value);
        context.setOpen(false);
      }}
      {...props}
    >
      {children}
    </button>
  );
}

export function SelectValue({
  placeholder,
  className = "",
  ...props
}: {
  placeholder?: string;
  className?: string;
  [key: string]: unknown;
}) {
  const context = React.useContext(SelectContext);

  if (!context) {
    throw new Error("SelectValue must be used within Select.");
  }

  return (
    <span className={className} {...props}>
      {context.value || placeholder}
    </span>
  );
}
