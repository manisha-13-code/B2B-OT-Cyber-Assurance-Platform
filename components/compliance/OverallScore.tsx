import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function OverallScore() {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-semibold text-xl">
            Consolidated Compliance Alignment
          </h2>

          <p className="text-slate-500 mt-3">
            Weighted, normalized aggregation across all enabled frameworks.
          </p>
        </div>

        <Badge className="text-3xl px-5 py-4 rounded-xl">
          73
        </Badge>
      </div>
    </Card>
  );
}