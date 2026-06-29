"use client";

import { Badge } from "@/components/ui/badge";
import {
  ApprovalStatus,
  ValidityStatus,
  SatisfactionStatus,
} from "./types";

type StatusType =
  | ApprovalStatus
  | ValidityStatus
  | SatisfactionStatus;

interface StatusBadgeProps {
  status: StatusType;
}

export default function StatusBadge({
  status,
}: StatusBadgeProps) {
  const getStyles = () => {
    switch (status) {
      // Approval
      case "Approved":
        return "bg-green-50 text-green-700 border border-green-200";

      case "Rejected":
        return "bg-red-50 text-red-700 border border-red-200";

      case "Under Review":
        return "bg-blue-50 text-blue-700 border border-blue-200";

      // Validity
      case "Current":
        return "bg-emerald-50 text-emerald-700 border border-emerald-200";

      case "Expired":
        return "bg-red-50 text-red-600 border border-red-200";

      case "Expiring Soon":
        return "bg-yellow-50 text-yellow-700 border border-yellow-200";

      case "Not Approved":
        return "bg-gray-100 text-gray-700 border border-gray-200";

      // Satisfaction
      case "Satisfied-System":
        return "bg-emerald-50 text-emerald-700 border border-emerald-200";

      case "Satisfied-Manual":
        return "bg-cyan-50 text-cyan-700 border border-cyan-200";

      case "Partially Satisfied":
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
      className={`rounded-md px-2 py-1 text-xs font-medium whitespace-nowrap ${getStyles()}`}
    >
      {status}
    </Badge>
  );
}