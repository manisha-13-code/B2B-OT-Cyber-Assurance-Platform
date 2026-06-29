interface Props {
  value: number;
  status: string;
}

export default function ScoreBadge({
  value,
  status,
}: Props) {
  const colors: Record<string, string> = {
    Strong:
      "border-emerald-300 bg-emerald-50 text-emerald-700",

    Adequate:
      "border-blue-300 bg-blue-50 text-blue-700",

    Weak:
      "border-orange-300 bg-orange-50 text-orange-700",

    Critical:
      "border-red-300 bg-red-50 text-red-700",
  };

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 ${colors[status]}`}
    >
      <div className="h-6 w-1 rounded-full bg-current" />

      <span className="font-bold">{value}</span>

      <span className="text-sm">{status}</span>
    </div>
  );
}