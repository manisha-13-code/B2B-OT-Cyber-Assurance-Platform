"use client";

import { Search, SlidersHorizontal, RefreshCcw } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SearchFilterProps {
  search: string;
  setSearch: (value: string) => void;

  framework: string;
  setFramework: (value: string) => void;

  approval: string;
  setApproval: (value: string) => void;

  onReset: () => void;
}

export default function SearchFilter({
  search,
  setSearch,
  framework,
  setFramework,
  approval,
  setApproval,
  onReset,
}: SearchFilterProps) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border bg-white p-4 shadow-sm lg:flex-row lg:items-center lg:justify-between">
      {/* Search */}
      <div className="relative w-full lg:max-w-md">
        <Search className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />

        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search evidence..."
          className="pl-10"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Framework */}
        <Select
          value={framework}
          onValueChange={setFramework}
        >
          <SelectTrigger className="w-[180px]">
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

        {/* Approval */}
        <Select
          value={approval}
          onValueChange={setApproval}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Approval" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">
              All Approval
            </SelectItem>

            <SelectItem value="Approved">
              Approved
            </SelectItem>

            <SelectItem value="Rejected">
              Rejected
            </SelectItem>

            <SelectItem value="Under Review">
              Under Review
            </SelectItem>
          </SelectContent>
        </Select>

        {/* Advanced Filter */}
        <Button variant="outline">
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          Filters
        </Button>

        {/* Reset */}
        <Button
          variant="ghost"
          onClick={onReset}
        >
          <RefreshCcw className="mr-2 h-4 w-4" />
          Reset
        </Button>
      </div>
    </div>
  );
}