export interface RiskFinding {
  id: string;
  source: string;
  severity: "Critical" | "High" | "Medium" | "Low";
  risk: number;
  plant: string;
  issue: string;
  owner: string;
  due: string;
  status: "Open" | "In Progress" | "Resolved";
  category?: string;
  selected?: boolean;
}

export const findings: RiskFinding[] = [
  {
    id: "FND-2291",
    source: "Validation",
    severity: "Critical",
    risk: 95,
    plant: "Dahej Specialty Chemicals",
    issue: "No integrity validation on PLC communications",
    owner: "A. Mehta",
    due: "12 Jul 2025",
    status: "Open",
    category: "Communication Integrity",
    selected: false,
  },
  {
    id: "FND-2287",
    source: "Architecture",
    severity: "Critical",
    risk: 91,
    plant: "Ankleshwar Pigments",
    issue: "Missing firewall between Purdue L2 & L3",
    owner: "R. Desai",
    due: "15 Jul 2025",
    status: "Open",
    category: "Network Segmentation",
    selected: false,
  },
  {
    id: "FND-2280",
    source: "Connector Health",
    severity: "High",
    risk: 82,
    plant: "Vadodara Polymer Works",
    issue: "Connector heartbeat lost",
    owner: "K. Shah",
    due: "18 Jul 2025",
    status: "In Progress",
    category: "Connector Health",
    selected: false,
  },
  {
    id: "FND-2275",
    source: "Evidence",
    severity: "Medium",
    risk: 64,
    plant: "Halol Pharma Plant",
    issue: "Expired evidence for CR 3.2",
    owner: "P. Singh",
    due: "20 Jul 2025",
    status: "Resolved",
    category: "Evidence Management",
    selected: false,
  },
];
