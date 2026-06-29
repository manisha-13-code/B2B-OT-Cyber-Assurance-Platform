"use client";

import Link from "next/link";
import {
  ArrowLeft,
  AlertTriangle,
  ShieldAlert,
  Clock3,
  CheckCircle2,
} from "lucide-react";

import SummaryCard from "./SummaryCard";

export default function RiskHeader() {
  return (
    <div className="space-y-6">

      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
      >
        <ArrowLeft size={18} />
        Back to Dashboard
      </Link>

      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Risk Command Center
        </h1>

        <p className="mt-2 text-slate-600">
          Consolidated platform-generated findings across all monitored
          plants. Prioritize and track remediation activities.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

        <SummaryCard
          title="Open Findings"
          value={8}
          icon={AlertTriangle}
          color="bg-red-500"
        />

        <SummaryCard
          title="Critical"
          value={3}
          icon={ShieldAlert}
          color="bg-orange-500"
        />

        <SummaryCard
          title="Due This Week"
          value={5}
          icon={Clock3}
          color="bg-blue-500"
        />

        <SummaryCard
          title="Resolved"
          value={21}
          icon={CheckCircle2}
          color="bg-emerald-500"
        />

      </div>

    </div>
  );
}