"use client";

import { Search } from "lucide-react";

interface SearchInputProps {
  placeholder?: string;
}

export default function SearchInput({
  placeholder = "Search assets...",
}: SearchInputProps) {
  return (
    <div className="relative w-full lg:w-[320px]">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="text"
        placeholder={placeholder}
        className="h-12 w-full rounded-full border border-slate-300 bg-white pl-11 pr-4 text-sm text-slate-700 placeholder:text-slate-400 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
      />
    </div>
  );
}
