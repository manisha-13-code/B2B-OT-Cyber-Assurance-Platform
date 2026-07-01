"use client";

import ActionButtons from "./ActionButtons";

export default function Header() {
  return (
    <div className="rounded-xl border bg-white shadow-sm">
      <div className="flex flex-col gap-6 p-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Controls Workspace
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Applicable Control Instances — scope, ownership and compliance
            status
          </p>
        </div>

        {/* Right */}
        <ActionButtons
          onAssign={() => console.log("Assign Owner")}
          onImport={() => console.log("Import Controls")}
          onExport={() => console.log("Export")}
          onCreate={() => console.log("Create Control")}
        />
      </div>
    </div>
  );
}