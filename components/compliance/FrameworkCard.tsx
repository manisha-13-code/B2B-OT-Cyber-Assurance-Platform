import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function FrameworkCard({ framework }: any) {
  const positive = framework.trend.startsWith("+");

  return (
    <Card className="p-5 hover:shadow-lg transition">
      <div className="flex justify-between">
        <span className="text-xs text-slate-500">
          {framework.priority}
        </span>

        <div
          className={`flex items-center text-sm ${
            positive ? "text-green-600" : "text-red-600"
          }`}
        >
          {positive ? (
            <ArrowUpRight size={16} />
          ) : (
            <ArrowDownRight size={16} />
          )}

          {framework.trend}
        </div>
      </div>

      <h3 className="font-semibold mt-5">
        {framework.name}
      </h3>

      <div className="mt-5 flex items-center gap-2">
        <div className="text-3xl font-bold">
          {framework.score}
        </div>

        <Badge variant="secondary">
          {framework.status}
        </Badge>
      </div>

      <div className="mt-5 flex justify-between text-slate-500 text-sm">
        <span>Weight</span>
        <span>{framework.weight}%</span>
      </div>
    </Card>
  );
}