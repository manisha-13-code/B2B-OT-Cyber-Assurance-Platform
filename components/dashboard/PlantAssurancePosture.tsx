import { ChevronRight } from "lucide-react";

const plants = [
  {
    plant: "Vadodara Polymer Works",
    assurance: 74,
    assuranceStatus: "Adequate",
    compliance: 71,
    validation: "71%",
    architecture: 68,
    architectureStatus: "Weak",
    risk: 6,
  },
  {
    plant: "Halol Pharma Plant 2",
    assurance: 86,
    assuranceStatus: "Strong",
    compliance: 88,
    validation: "88%",
    architecture: 90,
    architectureStatus: "Strong",
    risk: 1,
  },
  {
    plant: "Dahej Specialty Chemicals",
    assurance: 58,
    assuranceStatus: "Weak",
    compliance: 54,
    validation: "54%",
    architecture: 49,
    architectureStatus: "Critical",
    risk: 11,
  },
  {
    plant: "Jamnagar Refinery Aux.",
    assurance: 81,
    assuranceStatus: "Adequate",
    compliance: 79,
    validation: "79%",
    architecture: 77,
    architectureStatus: "Adequate",
    risk: 3,
  },
  {
    plant: "Sanand Auto Components",
    assurance: 93,
    assuranceStatus: "Strong",
    compliance: 95,
    validation: "95%",
    architecture: 97,
    architectureStatus: "Strong",
    risk: 0,
  },
  {
    plant: "Ankleshwar Pigments Unit",
    assurance: 65,
    assuranceStatus: "Weak",
    compliance: 62,
    validation: "60%",
    architecture: 55,
    architectureStatus: "Weak",
    risk: 8,
  },
];

const Badge = ({ value, status }: { value: number; status: string }) => {
  const styles: Record<string, string> = {
    Strong: "border border-green-300 bg-green-50 text-green-700",
    Adequate: "border border-blue-300 bg-blue-50 text-blue-700",
    Weak: "border border-orange-300 bg-orange-50 text-orange-700",
    Critical: "border border-red-300 bg-red-50 text-red-700",
  };

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-lg border px-3 py-1 ${styles[status]}`}
    >
      <div className="h-6 w-1 rounded-full bg-current opacity-70" />
      <span className="font-semibold">{value}</span>
      <span className="text-sm">{status}</span>
    </div>
  );
};

export default function PlantAssurancePosture() {
  return (
    <div className="mt-8 rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center justify-between border-b p-6">
        <h2 className="text-lg font-semibold text-slate-800">Plant Assurance Posture</h2>
        <button className="flex items-center gap-1 font-semibold text-sky-700 hover:text-sky-900">
          View all
          <ChevronRight size={16} />
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-100 text-xs font-semibold uppercase tracking-wide text-slate-700">
            <tr>
              <th className="px-6 py-4 text-left">Plant</th>
              <th className="px-6 py-4 text-left">Assurance</th>
              <th className="px-6 py-4 text-left">Compliance</th>
              <th className="px-6 py-4 text-left">Validation</th>
              <th className="px-6 py-4 text-left">Architecture</th>
              <th className="px-6 py-4 text-left">High Risk</th>
              <th className="px-6 py-4 text-left">Trend</th>
            </tr>
          </thead>
          <tbody>
            {plants.map((item) => (
              <tr key={item.plant} className="border-t hover:bg-slate-50">
                <td className="px-6 py-5 font-semibold text-slate-800">{item.plant}</td>
                <td className="px-6 py-5">
                  <Badge value={item.assurance} status={item.assuranceStatus} />
                </td>
                <td className="px-6 py-5 text-slate-700 font-medium">{item.compliance}</td>
                <td className="px-6 py-5 text-slate-700 font-medium">{item.validation}</td>
                <td className="px-6 py-5">
                  <Badge value={item.architecture} status={item.architectureStatus} />
                </td>
                <td className="px-6 py-5 font-semibold text-red-600">{item.risk}</td>
                <td className="px-6 py-5">📈</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
