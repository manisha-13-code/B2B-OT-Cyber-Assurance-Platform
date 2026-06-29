import { ChevronRight } from "lucide-react";

const changes = [
  {
    control: "CR 3.1 - Communication Integrity",
    previous: "Pass",
    current: "Fail",
    source: "Firewall Connector",
    time: "Today, 06:12",
  },
  {
    control: "CR 1.5 - Authenticator Management",
    previous: "Unknown",
    current: "Pass",
    source: "Manual Validation",
    time: "Today, 04:40",
  },
  {
    control: "SR 5.2 - Zone Boundary Protection",
    previous: "Partial",
    current: "Fail",
    source: "Network Connector",
    time: "Yesterday",
  },
  {
    control: "CR 7.3 - Audit Logging",
    previous: "Pass",
    current: "Expired",
    source: "Evidence Repository",
    time: "Yesterday",
  },
];

function Status({ value }: { value: string }) {
  const colors: Record<string, string> = {
    Pass: "bg-green-100 text-green-700",
    Fail: "bg-red-100 text-red-700",
    Partial: "bg-yellow-100 text-yellow-700",
    Unknown: "bg-slate-100 text-slate-700",
    Expired: "bg-red-100 text-red-700",
  };

  return (
    <span className={`rounded-md border px-2 py-1 text-xs font-semibold ${colors[value]}`}>
      {value}
    </span>
  );
}

export default function RecentValidationChanges() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center justify-between border-b p-6">
        <h2 className="text-lg font-semibold text-slate-800">Recent Validation Changes</h2>
        <button className="flex items-center gap-1 font-semibold text-sky-700 hover:text-sky-900">
          View all
          <ChevronRight size={16} />
        </button>
      </div>
      <table className="w-full">
        <thead className="bg-slate-100 text-xs font-semibold uppercase tracking-wide text-slate-700">
          <tr>
            <th className="px-6 py-4 text-left">Control</th>
            <th className="px-6 py-4 text-left">Previous</th>
            <th className="px-6 py-4 text-left">Current</th>
            <th className="px-6 py-4 text-left">Source</th>
            <th className="px-6 py-4 text-left">Time</th>
          </tr>
        </thead>
        <tbody>
          {changes.map((item) => (
            <tr key={item.control} className="border-t hover:bg-slate-50">
              <td className="px-6 py-5">{item.control}</td>
              <td className="px-6 py-5">
                <Status value={item.previous} />
              </td>
              <td className="px-6 py-5">
                <Status value={item.current} />
              </td>
              <td className="px-6 py-5">{item.source}</td>
              <td className="px-6 py-5">{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
