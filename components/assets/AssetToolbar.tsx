"use client";

import SearchInput from "./SearchInput";
import FilterSelect from "./FilterSelect";

export default function AssetToolbar() {
  return (
    <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-md">

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        {/* Left Section */}
        <div className="flex flex-1 flex-col gap-4 lg:flex-row lg:items-center">

          <SearchInput />

          <FilterSelect
            label="All Types"
            options={[
              "PLC",
              "HMI",
              "Firewall",
              "Historian",
              "Engineering Workstation",
              "Switch",
            ]}
          />

          <FilterSelect
            label="Plant"
            options={[
              "Dahej",
              "Vadodara",
              "Halol",
              "Ankleshwar",
              "Jamnagar",
            ]}
          />

          <FilterSelect
            label="Criticality"
            options={[
              "Critical",
              "High",
              "Medium",
              "Low",
            ]}
          />

        </div>

        {/* Right Section */}
        <div className="text-sm font-semibold text-slate-500">
          9 Assets
        </div>

      </div>

    </div>
  );
}