interface Props {
  status: "Open" | "In Progress" | "Resolved";
}

export default function StatusBadge({
  status,
}: Props) {
  const colors = {
    Open: "bg-red-500",
    "In Progress": "bg-blue-500",
    Resolved: "bg-green-500",
  };

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm">
      <div className={`h-2 w-2 rounded-full ${colors[status]}`} />
      {status}
    </div>
  );
}