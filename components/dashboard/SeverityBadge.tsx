interface SeverityBadgeProps {
  severity: "Critical" | "High" | "Medium";
}

export default function SeverityBadge({ severity }: SeverityBadgeProps) {
  const colors = {
    Critical: "bg-red-50 text-red-600 border-red-200",
    High: "bg-orange-50 text-orange-600 border-orange-200",
    Medium: "bg-yellow-50 text-yellow-700 border-yellow-200",
  };

  return (
    <span
      className={`rounded-md border px-3 py-1 text-xs font-semibold ${colors[severity]}`}
    >
      {severity}
    </span>
  );
}
