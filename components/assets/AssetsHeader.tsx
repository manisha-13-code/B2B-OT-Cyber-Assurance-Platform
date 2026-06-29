"use client";

import {
  History,
  RefreshCw,
  Upload,
  Plus,
} from "lucide-react";

import ActionButton from "./ActionButton";

export default function AssetsHeader() {
  return (
    <div className="mb-8 rounded-2xl bg-white p-8 shadow-sm border border-slate-200">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        {/* Left Side */}
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Assets
          </h1>

          <p className="mt-2 text-slate-600">
            OT asset registry across all monitored plants
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-wrap gap-3">

          <ActionButton
            icon={History}
            label="Import History"
          />

          <ActionButton
            icon={RefreshCw}
            label="Reconcile Candidates"
          />

          <ActionButton
            icon={Upload}
            label="Bulk Import"
          />

          <ActionButton
            icon={Plus}
            label="Add Asset"
            variant="primary"
          />

        </div>

      </div>

    </div>
  );
}
