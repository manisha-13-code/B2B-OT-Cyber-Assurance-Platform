import * as React from "react";

export function Table({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={`w-full overflow-hidden rounded-xl border border-slate-200 bg-white ${className}`}><table className="min-w-full divide-y divide-slate-200">{children}</table></div>;
}

export function TableHeader({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <thead className={`bg-slate-50 ${className}`}>{children}</thead>;
}

export function TableBody({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <tbody className={className}>{children}</tbody>;
}

export function TableRow({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <tr className={className}>{children}</tr>;
}

export function TableHead({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <th className={`whitespace-nowrap px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 ${className}`}>{children}</th>;
}

export function TableCell({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <td className={`whitespace-nowrap px-4 py-4 text-sm text-slate-700 ${className}`}>{children}</td>;
}
