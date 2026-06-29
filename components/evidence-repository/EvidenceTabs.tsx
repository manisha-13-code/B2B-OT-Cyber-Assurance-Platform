"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

interface EvidenceTabsProps {
  value: string;
  onValueChange: (value: string) => void;
}

const tabs = [
  {
    value: "all",
    label: "All Evidence",
    count: 8,
  },
  {
    value: "review",
    label: "Under Review",
    count: 2,
  },
  {
    value: "rejected",
    label: "Rejected",
    count: 1,
  },
  {
    value: "expiring",
    label: "Expiring Soon",
    count: 1,
  },
  {
    value: "expired",
    label: "Expired",
    count: 1,
  },
  {
    value: "missing",
    label: "Missing",
    count: 2,
  },
];

export default function EvidenceTabs({
  value,
  onValueChange,
}: EvidenceTabsProps) {
  return (
    <Tabs
      value={value}
      onValueChange={onValueChange}
      className="w-full"
    >
      <TabsList className="flex h-auto w-full flex-wrap justify-start gap-2 bg-transparent p-0">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="
              h-10
              rounded-lg
              border
              border-slate-200
              bg-white
              px-4
              text-sm
              font-medium
              text-slate-600
              shadow-sm
              data-[state=active]:border-slate-900
              data-[state=active]:bg-slate-900
              data-[state=active]:text-white
            "
          >
            <span>{tab.label}</span>

            <Badge
              variant="secondary"
              className="
                ml-2
                rounded-full
                px-2
                py-0
                text-xs
                data-[state=active]:bg-white
              "
            >
              {tab.count}
            </Badge>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}