interface Props {
  level: string;
}

export default function CriticalityBadge({
  level,
}: Props) {
  const colors: Record<string, string> = {
    Critical: "bg-red-100 text-red-700",

    High: "bg-orange-100 text-orange-700",

    Medium: "bg-blue-100 text-blue-700",

    Low: "bg-slate-100 text-slate-700",
  };

  return (
    <span
      className={`rounded-md px-2 py-1 text-xs font-semibold ${colors[level]}`}
    >
      {level}
    </span>
  );
}