"use client";

interface Props {
  label: string;
  color: string;
  active?: boolean;
}

export default function FilterChip({
  label,
  color,
  active = false,
}: Props) {
  return (
    <button
      className={`rounded-full border px-4 py-2 text-sm font-medium transition-all
      ${
        active
          ? `${color} shadow-sm`
          : "border-slate-300 bg-white text-slate-600 hover:bg-slate-50"
      }`}
    >
      {label}
    </button>
  );
}