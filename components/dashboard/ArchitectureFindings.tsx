import { ChevronRight } from "lucide-react";

const findings = [
  {
    rule: "AR-12 Unsegmented IT/OT Link",
    plant: "Dahej Chemicals",
    severity: "Critical",
    owner: "A. Mehta",
  },
  {
    rule: "AR-04 Direct Internet Exposure",
    plant: "Halol Pharma",
    severity: "Critical",
    owner: "R. Patel",
  },
  {
    rule: "AR-09 Unapproved Conduit",
    plant: "Ankleshwar",
    severity: "High",
    owner: "M. Shah",
  },
  {
    rule: "AR-15 Flat Network Segment",
    plant: "Vadodara",
    severity: "Medium",
    owner: "J. Kumar",
  },
];

function Severity({ severity }: { severity: string }) {
  const colors: Record<string, string> = {
    Critical: "bg-red-100 text-red-700",
    High: "bg-orange-100 text-orange-700",
    Medium: "bg-yellow-100 text-yellow-700",
  };

  return (
    <span className={`rounded-md border px-2 py-1 text-xs font-semibold ${colors[severity]}`}>
      {severity}
    </span>
  );
}

export default function ArchitectureFindings() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center justify-between border-b p-6">
        <h2 className="text-lg font-semibold text-slate-800">Architecture Findings</h2>
        <button className="flex items-center gap-1 font-semibold text-sky-700 hover:text-sky-900">
          View all
          <ChevronRight size={16} />
        </button>
      </div>
      <table className="w-full">
        <thead className="bg-slate-100 text-xs font-semibold uppercase tracking-wide text-slate-700">
          <tr>
            <th className="px-6 py-4 text-left">Rule</th>
            <th className="px-6 py-4 text-left">Plant</th>
            <th className="px-6 py-4 text-left">Severity</th>
            <th className="px-6 py-4 text-left">Owner</th>
          </tr>
        </thead>
        <tbody>
          {findings.map((item) => (
            <tr key={item.rule} className="border-t hover:bg-slate-50">
              <td className="px-6 py-5">{item.rule}</td>
              <td className="px-6 py-5">{item.plant}</td>
              <td className="px-6 py-5">
                <Severity severity={item.severity} />
              </td>
              <td className="px-6 py-5">{item.owner}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
