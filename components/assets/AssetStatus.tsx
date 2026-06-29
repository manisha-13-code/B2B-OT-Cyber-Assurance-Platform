interface Props {
  status: "Active" | "Offline" | "Maintenance";
}

export default function AssetStatus({ status }: Props) {
  const colors = {
    Active: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    Offline: "bg-red-50 text-red-700 border border-red-200",
    Maintenance:
      "bg-yellow-50 text-yellow-700 border border-yellow-200",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${colors[status]}`}>
      {status}
    </span>
  );
}
