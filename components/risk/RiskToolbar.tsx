"use client";

import { Download } from "lucide-react";

import SearchFindings from "./SearchFindings";
import FilterChip from "./FilterChip";
import FilterSelect from "./FilterSelect";

export default function RiskToolbar() {
  return (
    <div className="my-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">

        {/* Left */}
        <div className="flex flex-1 flex-col gap-4 xl:flex-row xl:items-center">

          <SearchFindings />

          <FilterChip
            label="Critical (3)"
            color="bg-red-50 border-red-300 text-red-700"
            active
          />

          <FilterChip
            label="High (2)"
            color="bg-orange-50 border-orange-300 text-orange-700"
          />

          <FilterChip
            label="Medium (2)"
            color="bg-yellow-50 border-yellow-300 text-yellow-700"
          />

          <FilterChip
            label="Low (1)"
            color="bg-blue-50 border-blue-300 text-blue-700"
          />

          <FilterSelect
            label="Plant"
            options={[
              "Dahej",
              "Vadodara",
              "Halol",
              "Ankleshwar",
            ]}
          />

          <FilterSelect
            label="Status"
            options={[
              "Open",
              "In Progress",
              "Closed",
            ]}
          />

        </div>

        {/* Right */}
        <div className="flex items-center gap-4">

          <span className="text-sm font-semibold text-slate-500">
            8 Open Findings
          </span>

          <button className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
            <Download size={16} />
            Export
          </button>

        </div>

      </div>
    </div>
  );
}