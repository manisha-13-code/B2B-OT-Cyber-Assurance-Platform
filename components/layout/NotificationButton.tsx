"use client";
import { Bell } from "lucide-react";

export default function NotificationButton() {
  return (
    <button className="relative rounded-xl border bg-white p-3 hover:bg-slate-50">
      <Bell size={20} />
      <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
    </button>
  );
}
