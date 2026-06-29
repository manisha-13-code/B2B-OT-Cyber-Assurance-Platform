interface Props {
  value: string;
}

export default function CoverageBar({ value }: Props) {
  const [done, total] = value.split("/").map(Number);
  const percent = Math.round((done / total) * 100);

  return (
    <div className="min-w-[120px]">
      <div className="mb-1 flex justify-between text-xs text-slate-600">
        <span>{value}</span>
        <span>{percent}%</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-slate-200">
        <div
          className={`h-full rounded-full ${
            percent >= 80
              ? "bg-emerald-500"
              : percent >= 60
              ? "bg-amber-500"
              : "bg-red-500"
          }`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}