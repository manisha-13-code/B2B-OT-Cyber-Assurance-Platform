"use client";

import {
  AlertTriangle,
  Eye,
  MoreHorizontal,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import StatusBadge from "./StatusBadge";
import { Control } from "./types";

interface ControlsTableProps {
  controls: Control[];
  onView?: (control: Control) => void;
}

export default function ControlsTable({
  controls,
  onView,
}: ControlsTableProps) {
  return (
    <Card className="overflow-hidden rounded-xl border shadow-sm">
      <div className="overflow-x-auto">
        <Table>
          {/* ================= Header ================= */}

          <TableHeader className="bg-slate-50">
            <TableRow>
              <TableHead className="w-[280px]">CONTROL</TableHead>

              <TableHead className="w-[220px]">SCOPE</TableHead>

              <TableHead className="w-[260px]">PLANT / ASSET</TableHead>

              <TableHead className="w-[140px]">OWNER</TableHead>

              <TableHead className="w-[140px]">COMPLIANCE</TableHead>

              <TableHead className="w-[120px]">VALIDATION</TableHead>

              <TableHead className="w-[120px]">EVIDENCE</TableHead>

              <TableHead className="w-[90px]">FINDING</TableHead>

              <TableHead className="w-[90px] text-right">ACTION</TableHead>
            </TableRow>
          </TableHeader>

          {/* ================= Body ================= */}

          <TableBody>
            {controls.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={9}
                  className="h-32 text-center text-slate-500"
                >
                  No controls found.
                </TableCell>
              </TableRow>
            ) : (
              controls.map((control) => (
                <TableRow
                  key={control.id}
                  onClick={() => onView?.(control)}
                  className="cursor-pointer transition-colors hover:bg-slate-50"
                >
                  {/* CONTROL */}
                  <TableCell>
                    <div className="space-y-1">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        {control.controlId}
                      </p>

                      <p className="font-medium leading-6 text-slate-900">
                        {control.title}
                      </p>
                    </div>
                  </TableCell>

                  {/* SCOPE */}
                  <TableCell>
                    <p className="text-sm leading-6 text-slate-700">
                      {control.scope}
                    </p>
                  </TableCell>

                  {/* PLANT / ASSET */}
                  <TableCell>
                    <div className="space-y-1">
                      <p className="font-medium text-slate-800">
                        {control.plant}
                      </p>

                      <p className="text-sm text-slate-600">
                        {control.asset}
                      </p>
                    </div>
                  </TableCell>

                  {/* OWNER */}
                  <TableCell className="whitespace-nowrap">
                    <span className="font-medium text-slate-700">
                      {control.owner}
                    </span>
                  </TableCell>

                  {/* COMPLIANCE */}
                  <TableCell>
                    <StatusBadge status={control.compliance} />
                  </TableCell>

                  {/* VALIDATION */}
                  <TableCell>
                    <StatusBadge status={control.validation} />
                  </TableCell>

                  {/* EVIDENCE */}
                  <TableCell>
                    <StatusBadge status={control.evidence} />
                  </TableCell>

                  {/* FINDING */}
                  <TableCell>
                    {control.finding ? (
                      <div className="flex items-center gap-2 text-red-600">
                        <AlertTriangle className="h-4 w-4" />
                        <span className="text-sm">Yes</span>
                      </div>
                    ) : (
                      <span className="text-slate-400">None</span>
                    )}
                  </TableCell>

                  {/* ACTION */}
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        size="icon"
                        variant="ghost"
                        aria-label={`View ${control.controlId}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          onView?.(control);
                        }}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>

                      <Button
                        size="icon"
                        variant="ghost"
                        aria-label={`More actions for ${control.controlId}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}