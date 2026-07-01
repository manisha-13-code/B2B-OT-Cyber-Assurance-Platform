"use client";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ToolbarProps {
  search: string;
  setSearch: (value: string) => void;

  plant: string;
  setPlant: (value: string) => void;

  framework: string;
  setFramework: (value: string) => void;

  domain: string;
  setDomain: (value: string) => void;

  owner: string;
  setOwner: (value: string) => void;

  severity: string;
  setSeverity: (value: string) => void;

  totalControls: number;
}

export default function Toolbar({
  search,
  setSearch,
  plant,
  setPlant,
  framework,
  setFramework,
  domain,
  setDomain,
  owner,
  setOwner,
  severity,
  setSeverity,
  totalControls,
}: ToolbarProps) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        {/* Left Side */}
        <div className="flex flex-1 flex-wrap items-center gap-3">
          {/* Search */}
          <div className="relative min-w-[280px] flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search controls..."
              className="pl-10"
            />
          </div>

          {/* Plant */}
          <Select value={plant} onValueChange={setPlant}>
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Plant" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="all">All Plants</SelectItem>
              <SelectItem value="Dahej">Dahej</SelectItem>
              <SelectItem value="Ankleshwar">Ankleshwar</SelectItem>
              <SelectItem value="Halol">Halol</SelectItem>
              <SelectItem value="Corporate">Corporate</SelectItem>
            </SelectContent>
          </Select>

          {/* Framework */}
          <Select
            value={framework}
            onValueChange={setFramework}
          >
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Framework" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="all">
                All Frameworks
              </SelectItem>

              <SelectItem value="IEC 62443">
                IEC 62443
              </SelectItem>

              <SelectItem value="ISO 27001">
                ISO 27001
              </SelectItem>

              <SelectItem value="NIST CSF">
                NIST CSF
              </SelectItem>
            </SelectContent>
          </Select>

          {/* Domain */}
          <Select value={domain} onValueChange={setDomain}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Domain" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="all">
                All Domains
              </SelectItem>

              <SelectItem value="Authentication">
                Authentication
              </SelectItem>

              <SelectItem value="Access Control">
                Access Control
              </SelectItem>

              <SelectItem value="Integrity">
                Integrity
              </SelectItem>

              <SelectItem value="Logging">
                Logging
              </SelectItem>

              <SelectItem value="Recovery">
                Recovery
              </SelectItem>
            </SelectContent>
          </Select>

          {/* Owner */}
          <Select value={owner} onValueChange={setOwner}>
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Owner" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="all">
                All Owners
              </SelectItem>

              <SelectItem value="A. Mehta">
                A. Mehta
              </SelectItem>

              <SelectItem value="M. Joshi">
                M. Joshi
              </SelectItem>

              <SelectItem value="P. Patel">
                P. Patel
              </SelectItem>

              <SelectItem value="R. Shah">
                R. Shah
              </SelectItem>

              <SelectItem value="K. Desai">
                K. Desai
              </SelectItem>
            </SelectContent>
          </Select>

          {/* Severity */}
          <Select
            value={severity}
            onValueChange={setSeverity}
          >
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Severity" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="all">
                All Severity
              </SelectItem>

              <SelectItem value="Critical">
                Critical
              </SelectItem>

              <SelectItem value="High">
                High
              </SelectItem>

              <SelectItem value="Medium">
                Medium
              </SelectItem>

              <SelectItem value="Low">
                Low
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Right Side */}
        <div className="text-sm font-medium text-slate-500">
          {totalControls} controls
        </div>
      </div>
    </div>
  );
}