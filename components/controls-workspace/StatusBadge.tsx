"use client";

import { Badge } from "@/components/ui/badge";
import {
  ComplianceStatus,
  ValidationStatus,
  EvidenceStatus,
} from "./types";

type Status =
  | ComplianceStatus
  | ValidationStatus
  | EvidenceStatus;

interface StatusBadgeProps {
  status: Status;
}

export default function StatusBadge({
  status,
}: StatusBadgeProps) {
  const getClassName = () => {
    switch (status) {
      // Compliance
      case "Implemented":
        return "bg-emerald-50 text-emerald-700 border border-emerald-200";

      case "In Progress":
        return "bg-blue-50 text-blue-700 border border-blue-200";

      case "Not Started":
        return "bg-slate-100 text-slate-700 border border-slate-200";

      case "Not Applicable":
        return "bg-gray-100 text-gray-600 border border-gray-200";

      // Validation
      case "Pass":
        return "bg-emerald-50 text-emerald-700 border border-emerald-200";

      case "Fail":
        return "bg-red-50 text-red-700 border border-red-200";

      case "Partial":
        return "bg-amber-50 text-amber-700 border border-amber-200";

      case "Expired":
        return "bg-red-50 text-red-700 border border-red-200";

      // Evidence
      case "Satisfied":
        return "bg-teal-50 text-teal-700 border border-teal-200";

      case "Weak":
        return "bg-orange-50 text-orange-700 border border-orange-200";

      case "Missing":
        return "bg-red-50 text-red-700 border border-red-200";

      default:
        return "bg-slate-100 text-slate-700 border border-slate-200";
    }
  };

  return (
    <Badge
      variant="outline"
      className={`rounded-md px-2.5 py-1 text-xs font-medium whitespace-nowrap ${getClassName()}`}
    >
      {status}
    </Badge>
  );
}