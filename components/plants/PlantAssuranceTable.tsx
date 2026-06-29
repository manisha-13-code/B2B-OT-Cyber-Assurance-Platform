import { plants } from "./plantData";
import PlantRow from "./PlantRow";

export default function PlantAssuranceTable() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-lg">

      <div className="border-b px-8 py-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Plant Assurance Posture
        </h2>

        <p className="mt-1 text-slate-600">
          Assurance summary across all monitored plants
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">

          <thead className="bg-slate-100 text-left text-xs font-bold uppercase tracking-wider text-slate-700">

            <tr>

              <th className="px-6 py-4">Plant</th>

              <th className="px-6 py-4">Location</th>

              <th className="px-6 py-4">Criticality</th>

              <th className="px-6 py-4">Connectivity</th>

              <th className="px-6 py-4">Compliance</th>

              <th className="px-6 py-4">Assurance</th>

              <th className="px-6 py-4">Architecture</th>

              <th className="px-6 py-4">High Risk</th>

              <th className="px-6 py-4">Owner</th>

            </tr>

          </thead>

          <tbody>
            {plants.map((plant) => (
              <PlantRow key={plant.plant} plant={plant} />
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}