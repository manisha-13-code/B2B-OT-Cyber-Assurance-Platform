"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Link2,
  FileCheck2,
  Upload,
  Plus,
} from "lucide-react";

export default function Header() {
  return (
    <Card className="rounded-xl border border-slate-200 shadow-sm">
      <div className="flex flex-col gap-6 p-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Left Section */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Evidence Repository
          </h1>

          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
            Evidence registry — versioned, scoped, mapped to Control
            Instances
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            className="h-11 rounded-lg px-5"
          >
            <Link2 className="mr-2 h-4 w-4" />
            Link Existing
          </Button>

          <Button
            variant="outline"
            className="h-11 rounded-lg px-5"
          >
            <FileCheck2 className="mr-2 h-4 w-4" />
            From Validation Artifact
          </Button>

          <Button
            variant="outline"
            className="h-11 rounded-lg px-5"
          >
            <Upload className="mr-2 h-4 w-4" />
            Bulk Import Metadata
          </Button>

          <Button className="h-11 rounded-lg bg-slate-900 px-5 hover:bg-slate-800">
            <Plus className="mr-2 h-4 w-4" />
            Upload Evidence
          </Button>
        </div>
      </div>
    </Card>
  );
}