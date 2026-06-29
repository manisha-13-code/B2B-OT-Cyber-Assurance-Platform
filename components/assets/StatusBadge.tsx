interface Props {
  value: "Critical" | "High" | "Medium";
}

export default function StatusBadge({ value }: Props) {
  const colors = {
    Critical:
      "bg-red-50 border border-red-200 text-red-700",

    High:
      "bg-orange-50 border border-orange-200 text-orange-700",

    Medium:
      "bg-blue-50 border border-blue-200 text-blue-700",
  };

  return (
    <span
      className={`rounded-md px-3 py-1 text-xs font-semibold ${colors[value]}`}
    >
      {value}
    </span>
  );
}