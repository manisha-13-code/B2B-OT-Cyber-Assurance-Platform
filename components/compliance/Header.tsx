import { Button } from "@/components/ui/button";
import { Layers, Download } from "lucide-react";

export default function Header() {
  return (
    <div className="bg-white rounded-xl border p-6 flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold">
          Compliance Center
        </h1>

        <p className="text-slate-500 mt-1">
          Framework Alignment and consolidated Compliance Alignment
        </p>
      </div>

      <div className="flex gap-3">
        <Button variant="outline">
          <Layers className="mr-2 h-4 w-4" />
          Cross-framework Mapping
        </Button>

        <Button>
          <Download className="mr-2 h-4 w-4" />
          Generate Report
        </Button>
      </div>
    </div>
  );
}