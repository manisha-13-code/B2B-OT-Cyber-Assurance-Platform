import { Plant } from "./plantData";
import ScoreBadge from "./ScoreBadge";
import CriticalityBadge from "./CriticalityBadge";

export default function PlantRow({
  plant,
}: {
  plant: Plant;
}) {
  return (
    <tr className="border-b hover:bg-slate-50">
      <td className="px-6 py-5 font-semibold text-slate-800">
        {plant.plant}
      </td>

      <td className="px-6 py-5 text-slate-700">
        {plant.location}
      </td>

      <td className="px-6 py-5">
        <CriticalityBadge level={plant.criticality} />
      </td>

      <td className="px-6 py-5 text-slate-700">
        {plant.connectivity}
      </td>

      <td className="px-6 py-5 font-semibold">
        {plant.compliance}
      </td>

      <td className="px-6 py-5">
        <ScoreBadge
          value={plant.assurance}
          status={plant.assuranceStatus}
        />
      </td>

      <td className="px-6 py-5">
        <ScoreBadge
          value={plant.architecture}
          status={plant.architectureStatus}
        />
      </td>

      <td className="px-6 py-5 font-bold text-red-600">
        {plant.highRisk}
      </td>

      <td className="px-6 py-5 text-slate-700">
        {plant.owner}
      </td>
    </tr>
  );
}