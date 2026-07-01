"use client";

import { useMemo, useState } from "react";

import Header from "@/components/controls-workspace/Header";
import Toolbar from "@/components/controls-workspace/Toolbar";
import StatusTabs from "@/components/controls-workspace/StatusTabs";
import ControlsTable from "@/components/controls-workspace/ControlsTable";
import ControlDrawer from "@/components/controls-workspace/ControlDrawer";

import { controlsData } from "@/components/controls-workspace/data";
import type { Control } from "@/components/controls-workspace/types";
import DashboardLayout from "@/components/layout/DashboardLayout";

export default function ControlsWorkspacePage() {
  const [selectedControl, setSelectedControl] =
    useState<Control | null>(null);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const [status, setStatus] = useState("all");
  const [search, setSearch] = useState("");
  const [plant, setPlant] = useState("all");
  const [framework, setFramework] = useState("all");
  const [domain, setDomain] = useState("all");
  const [owner, setOwner] = useState("all");
  const [severity, setSeverity] = useState("all");

  const filteredControls = useMemo(() => {
    return controlsData.filter((control) => {
      const matchesSearch =
        search === "" ||
        control.controlId
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        control.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        control.description
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesPlant =
        plant === "all" || control.plant === plant;

      const matchesFramework =
        framework === "all" ||
        control.framework === framework;

      const matchesDomain =
        domain === "all" || control.domain === domain;

      const matchesOwner =
        owner === "all" || control.owner === owner;

      const matchesSeverity =
        severity === "all" ||
        control.severity === severity;

      const matchesStatus =
        status === "all" ||
        control.compliance.toLowerCase() ===
          status.toLowerCase();

      return (
        matchesSearch &&
        matchesPlant &&
        matchesFramework &&
        matchesDomain &&
        matchesOwner &&
        matchesSeverity &&
        matchesStatus
      );
    });
  }, [
    search,
    plant,
    framework,
    domain,
    owner,
    severity,
    status,
  ]);

  return (
  <DashboardLayout>
    <div className="space-y-6">
      <Header />

      <Toolbar
        search={search}
        setSearch={setSearch}
        plant={plant}
        setPlant={setPlant}
        framework={framework}
        setFramework={setFramework}
        domain={domain}
        setDomain={setDomain}
        owner={owner}
        setOwner={setOwner}
        severity={severity}
        setSeverity={setSeverity}
        totalControls={filteredControls.length}
      />

      <StatusTabs
        value={status}
        onValueChange={setStatus}
      />

      <ControlsTable
        controls={filteredControls}
        onView={(control) => {
          setSelectedControl(control);
          setDrawerOpen(true);
        }}
      />
    </div>

    <ControlDrawer
      open={drawerOpen}
      onOpenChange={(open) => {
        setDrawerOpen(open);

        if (!open) {
          setSelectedControl(null);
        }
      }}
      control={selectedControl}
    />
  </DashboardLayout>
);
}