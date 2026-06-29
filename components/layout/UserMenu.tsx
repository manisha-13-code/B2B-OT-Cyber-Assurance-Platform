"use client";
import { ChevronDown } from "lucide-react";

export default function UserMenu() {
  return (
    <button className="flex items-center gap-3 rounded-xl border bg-white px-4 py-2 hover:bg-slate-50">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
        A
      </div>
      <div className="text-left">
        <p className="font-semibold">Admin</p>
        <p className="text-xs text-slate-500">OT Security Lead</p>
      </div>
      <ChevronDown size={18} />
    </button>
  );
}
