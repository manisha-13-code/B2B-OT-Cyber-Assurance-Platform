import { ChevronRight } from "lucide-react";

const evidence = [
  { label: "Satisfied", value: 1842, color: "bg-teal-400" },
  { label: "Weak", value: 211, color: "bg-orange-400" },
  { label: "Expiring soon", value: 58, color: "bg-yellow-400" },
  { label: "Missing", value: 96, color: "bg-pink-500" },
  { label: "Expired", value: 34, color: "bg-red-500" },
];

export default function EvidenceHealth() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center justify-between border-b p-6">
        <h2 className="text-xl font-semibold text-slate-800">Evidence health</h2>
        <button className="flex items-center gap-1 font-semibold text-sky-700 hover:text-sky-900">
          View all
          <ChevronRight size={18} />
        </button>
      </div>
      <div className="space-y-6 p-6">
        {evidence.map((item) => (
          <div key={item.label} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`h-2.5 w-2.5 rounded-full ${item.color}`} />
              <span className="text-slate-700 font-medium">{item.label}</span>
            </div>
            <span className="text-2xl font-bold">{item.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
