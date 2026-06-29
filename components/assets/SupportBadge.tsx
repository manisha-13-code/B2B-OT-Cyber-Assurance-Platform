interface Props {
  supported: "Supported" | "Unsupported";
}

export default function SupportBadge({ supported }: Props) {
  const isSupported = supported === "Supported";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
        isSupported
          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
          : "bg-red-50 text-red-700 border border-red-200"
      }`}
    >
      <span
        className={`h-2 w-2 rounded-full ${
          isSupported ? "bg-emerald-500" : "bg-red-500"
        }`}
      />
      {supported}
    </span>
  );
}