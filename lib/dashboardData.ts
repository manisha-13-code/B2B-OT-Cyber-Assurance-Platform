import { DashboardCard } from "@/types/card";
import { ControlGap } from "@/types/control";
import { EvidenceItem } from "@/types/evidence";

export const cards: DashboardCard[] = [
  {
    title: "Assurance Score",
    value: 78,
    status: "Adequate",
    subtitle: "Org-wide, all plants",
  },
  {
    title: "Compliance Alignment",
    value: 73,
    status: "Adequate",
    subtitle: "5 of 5 frameworks",
  },
  {
    title: "Validation Coverage",
    value: 81,
    status: "Adequate",
    subtitle: "Applicable controls",
  },
  {
    title: "Architecture Score",
    value: 76,
    status: "Adequate",
    subtitle: "Current design",
  },
  {
    title: "High-Risk Findings",
    value: 18,
    status: "Critical",
    subtitle: "Open Critical / High",
    color: "#dc2626",
  },
];

export const controls: ControlGap[] = [
  {
    control: "CR 3.1 — Communication Integrity",
    asset: "PLC-114 / Zone B",
    plant: "Dahej Specialty Chemicals",
    issue: "No validated integrity control",
    severity: "Critical",
  },
  {
    control: "CR 1.5 — Authenticator Management",
    asset: "HMI-09",
    plant: "Ankleshwar Pigments",
    issue: "Shared local accounts",
    severity: "Critical",
  },
  {
    control: "SR 5.2 — Zone Boundary Protection",
    asset: "Firewall",
    plant: "Dahej Specialty Chemicals",
    issue: "Firewall rule allows unrestricted traffic",
    severity: "High",
  },
];

export const evidence: EvidenceItem[] = [
  { label: "Satisfied", value: 1842, color: "#14b8a6" },
  { label: "Weak", value: 211, color: "#f59e0b" },
  { label: "Expiring Soon", value: 58, color: "#eab308" },
  { label: "Missing", value: 96, color: "#ef4444" },
  { label: "Expired", value: 34, color: "#dc2626" },
];
