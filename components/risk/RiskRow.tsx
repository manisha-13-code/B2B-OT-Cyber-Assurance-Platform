import { MoreVertical } from "lucide-react";

import { RiskFinding } from "./riskData";
import SeverityBadge from "./SeverityBadge";
import StatusBadge from "./StatusBadge";
import RiskProgress from "./RiskProgress";

export default function RiskRow({
  finding,
  index,
}: {
  finding: RiskFinding;
  index: number;
}) {
  return (
    <tr className={`border-b border-slate-100 transition-all duration-300 hover:bg-sky-50 ${index % 2 === 0 ? "bg-white" : "bg-slate-50/40"}`}>

      <td className="px-5 py-4">
        <input type="checkbox" checked={finding.selected || false} readOnly />
      </td>

      <td className="px-5 py-4 font-semibold text-sky-700">
        {finding.id}
      </td>

      <td className="px-5 py-4">
        {finding.source}
      </td>

      <td className="px-5 py-4">
        <SeverityBadge severity={finding.severity} />
      </td>

      <td className="px-5 py-4">
        <RiskProgress score={finding.risk} />
      </td>

      <td className="px-5 py-4">
        {finding.plant}
      </td>

      <td className="px-5 py-4 max-w-sm">
        {finding.issue}
      </td>

      <td className="px-5 py-4">
        {finding.owner}
      </td>

      <td className="px-5 py-4">
        {finding.due}
      </td>

      <td className="px-5 py-4">
        <StatusBadge status={finding.status} />
      </td>

      <td className="px-5 py-4 text-right">
        <button className="rounded-lg p-2 hover:bg-slate-100">
          <MoreVertical size={18} />
        </button>
      </td>

    </tr>
  );
}