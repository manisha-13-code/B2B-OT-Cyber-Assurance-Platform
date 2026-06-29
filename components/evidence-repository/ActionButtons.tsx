"use client";

import { Button } from "@/components/ui/button";
import {
  Link2,
  FileCheck2,
  Upload,
  Plus,
} from "lucide-react";

interface ActionButtonsProps {
  onLinkExisting?: () => void;
  onValidationArtifact?: () => void;
  onBulkImport?: () => void;
  onUploadEvidence?: () => void;
}

export default function ActionButtons({
  onLinkExisting,
  onValidationArtifact,
  onBulkImport,
  onUploadEvidence,
}: ActionButtonsProps) {
  return (
    <div className="flex flex-wrap items-center justify-end gap-3">
      {/* Link Existing */}
      <Button
        variant="outline"
        className="h-11 rounded-lg border-slate-200 px-5 hover:bg-slate-100"
        onClick={onLinkExisting}
      >
        <Link2 className="mr-2 h-4 w-4" />
        Link Existing
      </Button>

      {/* Validation Artifact */}
      <Button
        variant="outline"
        className="h-11 rounded-lg border-slate-200 px-5 hover:bg-slate-100"
        onClick={onValidationArtifact}
      >
        <FileCheck2 className="mr-2 h-4 w-4" />
        From Validation Artifact
      </Button>

      {/* Bulk Import */}
      <Button
        variant="outline"
        className="h-11 rounded-lg border-slate-200 px-5 hover:bg-slate-100"
        onClick={onBulkImport}
      >
        <Upload className="mr-2 h-4 w-4" />
        Bulk Import Metadata
      </Button>

      {/* Upload */}
      <Button
        className="h-11 rounded-lg bg-slate-900 px-5 text-white hover:bg-slate-800"
        onClick={onUploadEvidence}
      >
        <Plus className="mr-2 h-4 w-4" />
        Upload Evidence
      </Button>
    </div>
  );
}