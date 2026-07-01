"use client";

import {
  AlertTriangle,
  Building2,
  Calendar,
  FileText,
  Layers3,
  Server,
  Shield,
  User,
} from "lucide-react";

import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import StatusBadge from "./StatusBadge";
import { Control } from "./types";

interface ControlDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  control: Control | null;
}

export default function ControlDrawer({
  open,
  onOpenChange,
  control,
}: ControlDrawerProps) {
  if (!control) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full overflow-y-auto sm:max-w-3xl">
        <SheetHeader className="space-y-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              {control.controlId}
            </p>

            <SheetTitle className="mt-1 text-2xl">
              {control.title}
            </SheetTitle>

            <SheetDescription className="mt-2 text-base">
              {control.description}
            </SheetDescription>
          </div>
        </SheetHeader>

        <div className="mt-8 space-y-8">
          {/* ================= Summary ================= */}

          <div className="rounded-xl border bg-slate-50 p-6">
            <div className="flex flex-wrap gap-3">
              <StatusBadge status={control.compliance} />
              <StatusBadge status={control.validation} />
              <StatusBadge status={control.evidence} />
            </div>

            <div className="mt-6">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium text-slate-600">
                  Implementation Progress
                </span>

                <span className="font-semibold text-slate-900">
                  {control.completion}%
                </span>
              </div>

              <Progress value={control.completion} />
            </div>
          </div>

          {/* ================= Information ================= */}

          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Control Information
            </h3>

            <div className="grid gap-4 md:grid-cols-2">
              {/* Plant */}
              <div className="rounded-xl border p-4">
                <div className="mb-3 flex items-center gap-2 text-slate-500">
                  <Building2 className="h-4 w-4" />
                  <span className="text-sm font-medium">Plant</span>
                </div>

                <p className="font-semibold text-slate-900">
                  {control.plant}
                </p>
              </div>

              {/* Asset */}
              <div className="rounded-xl border p-4">
                <div className="mb-3 flex items-center gap-2 text-slate-500">
                  <Server className="h-4 w-4" />
                  <span className="text-sm font-medium">Asset</span>
                </div>

                <p className="font-semibold text-slate-900">
                  {control.asset}
                </p>
              </div>

              {/* Owner */}
              <div className="rounded-xl border p-4">
                <div className="mb-3 flex items-center gap-2 text-slate-500">
                  <User className="h-4 w-4" />
                  <span className="text-sm font-medium">Owner</span>
                </div>

                <p className="font-semibold text-slate-900">
                  {control.owner}
                </p>
              </div>

              {/* Framework */}
              <div className="rounded-xl border p-4">
                <div className="mb-3 flex items-center gap-2 text-slate-500">
                  <Shield className="h-4 w-4" />
                  <span className="text-sm font-medium">Framework</span>
                </div>

                <p className="font-semibold text-slate-900">
                  {control.framework}
                </p>
              </div>

              {/* Domain */}
              <div className="rounded-xl border p-4">
                <div className="mb-3 flex items-center gap-2 text-slate-500">
                  <Layers3 className="h-4 w-4" />
                  <span className="text-sm font-medium">Domain</span>
                </div>

                <p className="font-semibold text-slate-900">
                  {control.domain}
                </p>
              </div>

              {/* Due Date */}
              <div className="rounded-xl border p-4">
                <div className="mb-3 flex items-center gap-2 text-slate-500">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">Due Date</span>
                </div>

                <p className="font-semibold text-slate-900">
                  {control.dueDate || "Not Assigned"}
                </p>
              </div>
            </div>
          </div>

          <Separator />

          {/* ================= Metrics ================= */}

          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Related Information
            </h3>

            <div className="grid gap-4 md:grid-cols-3">
              {/* Evidence */}
              <div className="rounded-xl border p-5 transition-shadow hover:shadow-sm">
                <div className="flex items-center gap-2 text-slate-500">
                  <FileText className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    Evidence
                  </span>
                </div>

                <p className="mt-3 text-3xl font-bold text-slate-900">
                  {control.mappedEvidence}
                </p>
              </div>

              {/* Risks */}
              <div className="rounded-xl border p-5 transition-shadow hover:shadow-sm">
                <div className="flex items-center gap-2 text-slate-500">
                  <AlertTriangle className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    Risks
                  </span>
                </div>

                <p className="mt-3 text-3xl font-bold text-slate-900">
                  {control.mappedRisks}
                </p>
              </div>

              {/* Assets */}
              <div className="rounded-xl border p-5 transition-shadow hover:shadow-sm">
                <div className="flex items-center gap-2 text-slate-500">
                  <Server className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    Assets
                  </span>
                </div>

                <p className="mt-3 text-3xl font-bold text-slate-900">
                  {control.mappedAssets}
                </p>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}