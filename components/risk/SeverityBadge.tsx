interface Props {
  severity: "Critical" | "High" | "Medium" | "Low";
}

export default function SeverityBadge({
  severity,
}: Props) {
  const colors = {
    Critical:
      "bg-red-50 border border-red-200 text-red-700",

    High:
      "bg-orange-50 border border-orange-200 text-orange-700",

    Medium:
      "bg-yellow-50 border border-yellow-200 text-yellow-700",

    Low:
      "bg-blue-50 border border-blue-200 text-blue-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${colors[severity]}`}
    >
      {severity}
    </span>
  );
}