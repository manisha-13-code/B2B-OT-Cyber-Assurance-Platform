"use client";

import { ChevronDown } from "lucide-react";

interface FilterSelectProps {
  label: string;
  options: string[];
}

export default function FilterSelect({
  label,
  options,
}: FilterSelectProps) {
  return (
    <div className="relative">
      <select
        className="h-12 appearance-none rounded-xl border border-slate-300 bg-white px-4 pr-10 text-sm text-slate-700 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
        defaultValue=""
      >
        <option value="" disabled>
          {label}
        </option>

        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>

      <ChevronDown
        size={18}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
      />
    </div>
  );
}