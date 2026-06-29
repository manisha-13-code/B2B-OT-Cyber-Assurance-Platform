interface Props {
  score: number;
}

export default function RiskScore({
  score,
}: Props) {
  const color =
    score >= 90
      ? "text-red-600"
      : score >= 75
      ? "text-orange-600"
      : "text-yellow-600";

  return (
    <span className={`font-bold ${color}`}>
      {score}
    </span>
  );
}