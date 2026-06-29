"use client";

import { useState } from "react";
import {
  Upload,
  FileText,
  Calendar,
  User,
  Tag,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function UploadDialog() {
  const [open, setOpen] = useState(false);
  const [evidenceType, setEvidenceType] = useState("config");
  const [framework, setFramework] = useState("iec");
  const [approvalStatus, setApprovalStatus] = useState("approved");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-slate-900 hover:bg-slate-800">
          <Upload className="mr-2 h-4 w-4" />
          Upload Evidence
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Upload Evidence</DialogTitle>

          <DialogDescription>
            Upload evidence and map it to compliance controls.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 py-4">

          {/* Evidence Name */}
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Evidence Title
            </label>

            <Input placeholder="Firewall Configuration Export" />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Description
            </label>

            <Textarea
              rows={3}
              placeholder="Describe the uploaded evidence..."
            />
          </div>

          {/* Grid */}
          <div className="grid gap-4 md:grid-cols-2">

            <div className="space-y-2">
              <label className="text-sm font-medium">
                Evidence Type
              </label>

              <Select value={evidenceType} onValueChange={setEvidenceType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="config">
                    Configuration Export
                  </SelectItem>

                  <SelectItem value="log">
                    System Log Export
                  </SelectItem>

                  <SelectItem value="policy">
                    Policy Document
                  </SelectItem>

                  <SelectItem value="review">
                    Review Record
                  </SelectItem>

                  <SelectItem value="audit">
                    Audit Report
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">
                Framework
              </label>

              <Select value={framework} onValueChange={setFramework}>
                <SelectTrigger>
                  <SelectValue placeholder="Select framework" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="iec">
                    IEC 62443
                  </SelectItem>

                  <SelectItem value="iso">
                    ISO 27001
                  </SelectItem>

                  <SelectItem value="nist">
                    NIST CSF
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

          </div>

          {/* Scope & Owner */}
          <div className="grid gap-4 md:grid-cols-2">

            <div className="space-y-2">
              <label className="text-sm font-medium">
                Scope
              </label>

              <Input
                placeholder="HMI-09 / Plant-1"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">
                Owner
              </label>

              <Input
                placeholder="John Doe"
              />
            </div>

          </div>

          {/* Expiry */}
          <div className="grid gap-4 md:grid-cols-2">

            <div className="space-y-2">
              <label className="text-sm font-medium">
                Expiry Date
              </label>

              <Input type="date" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">
                Tags
              </label>

              <Input
                placeholder="Firewall, OT, Network"
              />
            </div>

          </div>

          {/* Upload Box */}

          <div className="rounded-xl border-2 border-dashed border-slate-300 p-10">

            <div className="flex flex-col items-center justify-center">

              <Upload className="mb-3 h-10 w-10 text-slate-400" />

              <p className="font-medium">
                Drag & Drop your file
              </p>

              <p className="mt-2 text-sm text-slate-500">
                or click below to browse
              </p>

              <Button
                variant="outline"
                className="mt-5"
              >
                Choose File
              </Button>

            </div>

          </div>

          {/* Metadata */}

          <div className="grid gap-4 md:grid-cols-3">

            <div className="rounded-lg border p-4">

              <div className="flex items-center gap-2">

                <FileText className="h-4 w-4" />

                <span className="text-sm">
                  Version
                </span>

              </div>

              <Input
                className="mt-3"
                placeholder="v1.0"
              />

            </div>

            <div className="rounded-lg border p-4">

              <div className="flex items-center gap-2">

                <User className="h-4 w-4" />

                <span className="text-sm">
                  Uploaded By
                </span>

              </div>

              <Input
                className="mt-3"
                placeholder="Admin"
              />

            </div>

            <div className="rounded-lg border p-4">

              <div className="flex items-center gap-2">

                <ShieldCheck className="h-4 w-4" />

                <span className="text-sm">
                  Approval Status
                </span>

              </div>

              <Select value={approvalStatus} onValueChange={setApprovalStatus}>
                <SelectTrigger className="mt-3">
                  <SelectValue placeholder="Pending" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="approved">
                    Approved
                  </SelectItem>

                  <SelectItem value="review">
                    Under Review
                  </SelectItem>

                  <SelectItem value="rejected">
                    Rejected
                  </SelectItem>
                </SelectContent>
              </Select>

            </div>

          </div>

        </div>

        <DialogFooter>

          <Button
            variant="outline"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>

          <Button>
            Upload Evidence
          </Button>

        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}