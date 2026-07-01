"use client";

import { Button } from "@/components/ui/button";
import {
  Plus,
  Upload,
  Download,
  UserPlus,
} from "lucide-react";

interface ActionButtonsProps {
  onAssign?: () => void;
  onImport?: () => void;
  onExport?: () => void;
  onCreate?: () => void;
}

export default function ActionButtons({
  onAssign,
  onImport,
  onExport,
  onCreate,
}: ActionButtonsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      <Button
        variant="outline"
        onClick={onAssign}
        className="h-11 rounded-lg"
      >
        <UserPlus className="mr-2 h-4 w-4" />
        Assign Owner
      </Button>

      <Button
        variant="outline"
        onClick={onImport}
        className="h-11 rounded-lg"
      >
        <Upload className="mr-2 h-4 w-4" />
        Import Controls
      </Button>

      <Button
        variant="outline"
        onClick={onExport}
        className="h-11 rounded-lg"
      >
        <Download className="mr-2 h-4 w-4" />
        Export
      </Button>

      <Button
        onClick={onCreate}
        className="h-11 rounded-lg bg-slate-900 hover:bg-slate-800"
      >
        <Plus className="mr-2 h-4 w-4" />
        New Control
      </Button>
    </div>
  );
}