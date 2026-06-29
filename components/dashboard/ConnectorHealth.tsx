import { ChevronRight } from "lucide-react";

const connectors = [
  {
    name: "Palo Alto Firewall",
    health: "Healthy",
    run: "12 min ago",
    freshness: "Current",
    issue: "-",
  },
  {
    name: "Active Directory",
    health: "Healthy",
    run: "18 min ago",
    freshness: "Current",
    issue: "-",
  },
  {
    name: "Cisco Switches",
    health: "Degraded",
    run: "2 hrs ago",
    freshness: "Stale",
    issue: "Slow response",
  },
  {
    name: "Historian",
    health: "Healthy",
    run: "25 min ago",
    freshness: "Current",
    issue: "-",
  },
  {
    name: "Vendor VPN",
    health: "Offline",
    run: "Yesterday",
    freshness: "Expired",
    issue: "Connection timeout",
  },
];

function Health({ health }: { health: string }) {
  const colors: Record<string, string> = {
    Healthy: "bg-green-100 text-green-700",
    Degraded: "bg-yellow-100 text-yellow-700",
    Offline: "bg-red-100 text-red-700",
  };

  return (
    <span className={`rounded-md border px-2 py-1 text-xs font-semibold ${colors[health]}`}>
      {health}
    </span>
  );
}

export default function ConnectorHealth() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center justify-between border-b p-6">
        <h2 className="text-lg font-semibold text-slate-800">Connector Health</h2>
        <button className="flex items-center gap-1 font-semibold text-sky-700 hover:text-sky-900">
          View all
          <ChevronRight size={16} />
        </button>
      </div>
      <table className="w-full">
        <thead className="bg-slate-100 text-xs font-semibold uppercase tracking-wide text-slate-700">
          <tr>
            <th className="px-6 py-4 text-left">Connector</th>
            <th className="px-6 py-4 text-left">Health</th>
            <th className="px-6 py-4 text-left">Last Run</th>
            <th className="px-6 py-4 text-left">Freshness</th>
            <th className="px-6 py-4 text-left">Issue</th>
          </tr>
        </thead>
        <tbody>
          {connectors.map((item) => (
            <tr key={item.name} className="border-t hover:bg-slate-50">
              <td className="px-6 py-5">{item.name}</td>
              <td className="px-6 py-5">
                <Health health={item.health} />
              </td>
              <td className="px-6 py-5">{item.run}</td>
              <td className="px-6 py-5">{item.freshness}</td>
              <td className="px-6 py-5">{item.issue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
