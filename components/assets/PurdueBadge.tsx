interface Props {
  level: string;
}

export default function PurdueBadge({ level }: Props) {
  return (
    <div className="inline-flex flex-col">
      <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">
        {level}
      </span>

      {level === "L3.5" && (
        <span className="mt-1 text-[10px] text-slate-500">
          (Boundary)
        </span>
      )}
    </div>
  );
}