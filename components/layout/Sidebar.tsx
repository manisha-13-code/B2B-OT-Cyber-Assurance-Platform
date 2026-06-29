"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Factory,
  Cpu,
  ShieldAlert,
  ShieldCheck,
  FolderOpen,
  ClipboardCheck,
  CheckCircle2,
  Network,
  Sparkles,
  FileBarChart2,
  Settings,
} from "lucide-react";

const menu = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Factory, label: "Plants", href: "/plants" },
  { icon: Cpu, label: "Assets", href: "/assets" },

  
  {
    icon: ShieldAlert,
    label: "Risk Command Center",
    href: "/risk-command-center",
  },

  { icon: ShieldCheck, label: "Compliance Center", href: "/compliance" },
  { icon: FolderOpen, label: "Evidence Repository", href: "/evidence" },
  { icon: ClipboardCheck, label: "Controls Workspace", href: "/controls" },
  { icon: CheckCircle2, label: "Validation Center", href: "/validation" },
  { icon: Network, label: "Architecture Assurance", href: "/architecture" },
  { icon: Sparkles, label: "Assurance Intelligence", href: "/assurance" },
  { icon: FileBarChart2, label: "Reports", href: "/reports" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="min-h-screen w-72 border-r border-slate-300 bg-[#0F172A] text-slate-300">
      <div className="border-b border-slate-700 p-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-white">
          ArmourIQ
        </h1>
      </div>

      <nav className="mt-6 px-3">
        {menu.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`mb-2 flex w-full items-center gap-3 rounded-lg px-4 py-3 transition ${
                isActive
                  ? "bg-sky-600 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}