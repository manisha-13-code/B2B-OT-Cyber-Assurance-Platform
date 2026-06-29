"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  Eye,
  Download,
  MoreHorizontal,
} from "lucide-react";

import { Evidence } from "./types";
import StatusBadge from "./StatusBadge";

interface EvidenceTableProps {
  data: Evidence[];
}

export default function EvidenceTable({ data }: EvidenceTableProps) {
  return (
    <Card className="overflow-hidden rounded-xl border shadow-sm">
      <Table>
        <TableHeader className="bg-slate-50">
          <TableRow>
            <TableHead className="w-[300px]">Evidence</TableHead>

            <TableHead>Type</TableHead>

            <TableHead>Scope</TableHead>

            <TableHead>Mapped Controls</TableHead>

            <TableHead>Owner</TableHead>

            <TableHead>Approval</TableHead>

            <TableHead>Validity</TableHead>

            <TableHead>Satisfaction</TableHead>

            <TableHead className="text-right">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              {/* Evidence */}
              <TableCell className="align-top">
                <div className="space-y-1">
                  <p className="font-semibold text-slate-900">
                    {item.title}
                  </p>

                  <p className="text-xs text-slate-500">
                    {item.fileName}
                  </p>

                  <Badge
                    variant="outline"
                    className="mt-1"
                  >
                    {item.version}
                  </Badge>
                </div>
              </TableCell>

              {/* Type */}
              <TableCell>{item.type}</TableCell>

              {/* Scope */}
              <TableCell>{item.scope}</TableCell>

              {/* Controls */}
              <TableCell>
                <Badge variant="secondary">
                  {item.mappedControls} linked
                </Badge>
              </TableCell>

              {/* Owner */}
              <TableCell>
                <div>
                  <p>{item.owner}</p>

                  <p className="text-xs text-slate-500">
                    {item.uploadedBy}
                  </p>
                </div>
              </TableCell>

              {/* Approval */}
              <TableCell>
                <StatusBadge
                  status={item.approval}
                />
              </TableCell>

              {/* Validity */}
              <TableCell>
                <StatusBadge
                  status={item.validity}
                />
              </TableCell>

              {/* Satisfaction */}
              <TableCell>
                <StatusBadge
                  status={item.satisfaction}
                />
              </TableCell>

              {/* Actions */}
              <TableCell>
                <div className="flex justify-end gap-2">
                  <Button
                    size="icon"
                    variant="ghost"
                  >
                    <Eye className="h-4 w-4" />
                  </Button>

                  <Button
                    size="icon"
                    variant="ghost"
                  >
                    <Download className="h-4 w-4" />
                  </Button>

                  <Button
                    size="icon"
                    variant="ghost"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}