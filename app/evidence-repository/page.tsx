"use client";

import { useMemo, useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Header from "@/components/evidence-repository/Header";
import SearchFilter from "@/components/evidence-repository/SearchFilter";
import EvidenceTabs from "@/components/evidence-repository/EvidenceTabs";
import EvidenceTable from "@/components/evidence-repository/EvidenceTable";
import { evidenceData } from "@/components/evidence-repository/data";
import { Evidence } from "@/components/evidence-repository/types";

const filterEvidence = (
  data: Evidence[],
  search: string,
  framework: string,
  approval: string,
) => {
  return data.filter((item) => {
    const matchesSearch =
      !search ||
      [item.title, item.fileName, item.scope, item.owner]
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesFramework =
      framework === "all" || item.framework.includes(framework);

    const matchesApproval =
      approval === "all" || item.approval === approval;

    return matchesSearch && matchesFramework && matchesApproval;
  });
};

export default function EvidenceRepositoryPage() {
  const [search, setSearch] = useState("");
  const [framework, setFramework] = useState("all");
  const [approval, setApproval] = useState("all");
  const [tabValue, setTabValue] = useState("all");

  const filteredData = useMemo(
    () => filterEvidence(evidenceData, search, framework, approval),
    [search, framework, approval],
  );

  const visibleEvidence = useMemo(() => {
    if (tabValue === "all") return filteredData;

    return filteredData.filter((item) => {
      switch (tabValue) {
        case "review":
          return item.approval === "Under Review";
        case "rejected":
          return item.approval === "Rejected";
        case "expiring":
          return item.validity === "Expiring Soon";
        case "expired":
          return item.validity === "Expired";
        case "missing":
          return item.satisfaction === "Missing";
        default:
          return true;
      }
    });
  }, [filteredData, tabValue]);

  return (
    <DashboardLayout
      title="Evidence Repository"
      subtitle="Evidence registry — versioned, scoped, mapped to Control Instances"
    >
      <Header />

      <div className="space-y-6">
        <SearchFilter
          search={search}
          setSearch={setSearch}
          framework={framework}
          setFramework={setFramework}
          approval={approval}
          setApproval={setApproval}
          onReset={() => {
            setSearch("");
            setFramework("all");
            setApproval("all");
          }}
        />

        <EvidenceTabs
          value={tabValue}
          onValueChange={setTabValue}
        />

        <EvidenceTable data={visibleEvidence} />
      </div>
    </DashboardLayout>
  );
}