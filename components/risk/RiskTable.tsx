import { ArrowUpDown } from "lucide-react";

import { findings } from "./riskData";
import RiskRow from "./RiskRow";

export default function RiskTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">

      <div className="mb-4 flex items-center justify-between border-b border-slate-200 bg-white p-4 shadow-sm">
        <span className="text-sm text-slate-600">
          Select findings to perform bulk actions
        </span>
        <div className="flex gap-2">
          <button className="rounded-lg border px-4 py-2 hover:bg-slate-50">
            Assign
          </button>
          <button className="rounded-lg border px-4 py-2 hover:bg-slate-50">
            Export
          </button>
          <button className="rounded-lg bg-sky-600 px-4 py-2 text-white hover:bg-sky-700">
            Mark Resolved
          </button>
        </div>
      </div>

      <div className="max-h-[650px] overflow-auto">

        <table className="w-full">

          <thead className="sticky top-0 bg-slate-100 text-left text-xs font-semibold uppercase tracking-wide text-slate-700">

            <tr>

              <th className="px-5 py-4">
                <input type="checkbox" />
              </th>
              <th className="px-5 py-4">
                <button className="flex items-center gap-1">
                  Finding ID
                  <ArrowUpDown size={14} className="text-slate-400" />
                </button>
              </th>
              <th className="px-5 py-4">Source</th>
              <th className="px-5 py-4">
                <button className="flex items-center gap-1">
                  Severity
                  <ArrowUpDown size={14} className="text-slate-400" />
                </button>
              </th>
              <th className="px-5 py-4">
                <button className="flex items-center gap-1">
                  Risk
                  <ArrowUpDown size={14} className="text-slate-400" />
                </button>
              </th>
              <th className="px-5 py-4">Plant</th>
              <th className="px-5 py-4">Issue</th>
              <th className="px-5 py-4">Owner</th>
              <th className="px-5 py-4">
                <button className="flex items-center gap-1">
                  Due Date
                  <ArrowUpDown size={14} className="text-slate-400" />
                </button>
              </th>
              <th className="px-5 py-4">
                <button className="flex items-center gap-1">
                  Status
                  <ArrowUpDown size={14} className="text-slate-400" />
                </button>
              </th>
              <th className="px-5 py-4"></th>

            </tr>

          </thead>

          <tbody>

            {findings.map((finding, index) => (
              <RiskRow
                key={finding.id}
                finding={finding}
                index={index}
              />
            ))}

          </tbody>

        </table>

      </div>

      <div className="flex items-center justify-between border-t bg-slate-50 px-6 py-4">
        <p className="text-sm text-slate-600">
          Showing 4 of 4 findings
        </p>

        <div className="flex gap-2">
          <button className="rounded-lg border px-4 py-2 hover:bg-slate-100">
            Previous
          </button>

          <button className="rounded-lg bg-sky-600 px-4 py-2 text-white">
            1
          </button>

          <button className="rounded-lg border px-4 py-2 hover:bg-slate-100">
            Next
          </button>
        </div>
      </div>

    </div>
  );
}