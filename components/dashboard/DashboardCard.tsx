interface DashboardCardProps {
  title: string;
  value: number;
  status: string;
  subtitle: string;
  trend?: string;
  danger?: boolean;
}

export default function DashboardCard({
  title,
  value,
  status,
  subtitle,
  trend,
  danger = false,
}: DashboardCardProps) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        danger ? "border-red-200 bg-red-50" : "border-slate-200"
      }`}
    >
      <p className={`text-sm font-semibold ${danger ? "text-red-600" : "text-slate-700"}`}>
        {title}
      </p>

      <div className="mt-4 flex items-center">
        <div
          className={`mr-4 flex h-14 w-14 items-center justify-center rounded-xl ${
            danger ? "bg-red-50" : "bg-blue-50"
          }`}
        >
          <div
            className={`h-9 w-1 rounded-full ${
              danger ? "bg-red-500" : "bg-blue-500"
            }`}
          />
        </div>

        <div>
          <div className="flex items-center gap-3">
            <span
              className={`text-5xl font-extrabold ${
                danger ? "text-red-600" : "text-slate-900"
              }`}
            >
              {value}
            </span>

            {!danger && (
              <span className="rounded-lg border border-blue-300 bg-blue-50 px-3 py-1 text-sm text-blue-700">
                {status}
              </span>
            )}
          </div>

          <p className="mt-2 text-sm text-slate-600">{subtitle}</p>

          {trend && (
            <p
              className={`mt-2 text-sm ${
                trend.startsWith("+") ? "text-green-600" : "text-red-500"
              }`}
            >
              {trend}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
