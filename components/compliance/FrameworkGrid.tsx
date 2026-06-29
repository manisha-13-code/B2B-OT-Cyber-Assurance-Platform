import FrameworkCard from "./FrameworkCard";
import { frameworks } from "./data";

export default function FrameworkGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">
      {frameworks.map((framework) => (
        <FrameworkCard
          key={framework.id}
          framework={framework}
        />
      ))}
    </div>
  );
}