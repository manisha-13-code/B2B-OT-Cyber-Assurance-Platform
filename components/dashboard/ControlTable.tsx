import { ChevronRight } from "lucide-react";
import SeverityBadge from "./SeverityBadge";

const controls = [
  {
    control: "CR 3.1 — Communication Integrity",
    asset: "PLC-114 / Zone B",
    plant: "Dahej Specialty Chemicals",
    issue: "No validated integrity control on inter-zone traffic",
    severity: "Critical",
  },
  {
    control: "CR 1.5 — Authenticator Management",
    asset: "HMI-09 / Control Room",
    plant: "Ankleshwar Pigments Unit",
    issue: "Shared local accounts, no rotation evidence",
    severity: "Critical",
  },
  {
    control: "SR 5.2 — Zone Boundary Protection",
    asset: "Zone IT/OT Boundary",
    plant: "Dahej Specialty Chemicals",
    issue: "Firewall rule allows unrestricted east-west traffic",
    severity: "High",
  },
  {
    control: "CR 2.1 — Authorization Enforcement",
    asset: "Historian-02",
    plant: "Ankleshwar Pigments Unit",
    issue: "Vendor account has standing write access",
    severity: "High",
  },
] as const;

export default function ControlTable() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center justify-between border-b p-6">
        <h2 className="text-xl font-semibold text-slate-800">Top control gaps</h2>
        <button className="flex items-center gap-1 font-semibold text-sky-700 hover:text-sky-900">
          View all
          <ChevronRight size={18} />
        </button>
      </div>
      <table className="w-full">
        <thead className="bg-slate-100 text-xs font-semibold uppercase tracking-wide text-slate-700">
          <tr className="text-left">
            <th className="px-5 py-6">Control</th>
            <th className="px-5 py-6">Plant</th>
            <th className="px-5 py-6">Issue</th>
            <th className="px-5 py-6">Severity</th>
          </tr>
        </thead>
        <tbody>
          {controls.map((item) => (
            <tr key={item.control} className="border-t hover:bg-slate-50">
              <td className="px-5 py-6">
                <p className="font-semibold">{item.control}</p>
                <p className="mt-1 text-sm text-slate-500">{item.asset}</p>
              </td>
              <td className="px-5 py-6 text-slate-700 font-medium">{item.plant}</td>
              <td className="px-5 py-6 text-slate-700 font-medium">{item.issue}</td>
              <td className="px-5 py-6">
                <SeverityBadge severity={item.severity} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
