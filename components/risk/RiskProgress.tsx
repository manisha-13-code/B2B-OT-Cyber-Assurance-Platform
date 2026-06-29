interface Props {
  score: number;
}

export default function RiskProgress({ score }: Props) {
  const color =
    score >= 90
      ? "bg-red-500"
      : score >= 75
        ? "bg-orange-500"
        : score >= 50
          ? "bg-yellow-500"
          : "bg-green-500";

  return (
    <div className="min-w-[110px]">
      <div className="mb-1 flex justify-between">
        <span className="text-sm font-semibold">{score}</span>
      </div>
      <div className="h-2 rounded-full bg-slate-200">
        <div
          className={`h-full rounded-full ${color}`}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}
