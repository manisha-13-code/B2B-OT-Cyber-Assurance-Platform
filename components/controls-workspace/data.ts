import { Control } from "./types";

export const controlsData: Control[] = [
  {
    id: "1",
    controlId: "CR 1.1",
    title: "Identification and Authentication",
    description:
      "Ensure all users and devices are uniquely identified before accessing OT assets.",

    scope: "Corporate OT Network",
    plant: "Dahej",
    asset: "Domain Controller",

    owner: "A. Mehta",

    framework: "IEC 62443",
    domain: "Identification & Authentication",

    compliance: "Implemented",
    validation: "Pass",
    evidence: "Satisfied",

    severity: "High",
    finding: false,

    completion: 100,

    createdAt: "2026-06-01",
    updatedAt: "2026-06-20",

    dueDate: "2026-07-01",

    mappedEvidence: 5,
    mappedRisks: 2,
    mappedAssets: 1,

    tags: ["Authentication", "Identity"],
  },

  {
    id: "2",
    controlId: "CR 1.5",
    title: "Authenticator Management",
    description:
      "Manage passwords, certificates and authentication mechanisms.",

    scope: "Plant Network",
    plant: "Ankleshwar",
    asset: "HMI-09",

    owner: "M. Joshi",

    framework: "IEC 62443",
    domain: "Authentication",

    compliance: "In Progress",
    validation: "Fail",
    evidence: "Weak",

    severity: "Critical",
    finding: true,

    completion: 62,

    createdAt: "2026-06-05",
    updatedAt: "2026-06-18",

    dueDate: "2026-07-10",

    mappedEvidence: 2,
    mappedRisks: 3,
    mappedAssets: 2,

    tags: ["Password", "Certificates"],
  },

  {
    id: "3",
    controlId: "CR 2.1",
    title: "Use Control",
    description:
      "Restrict access to authorized personnel only.",

    scope: "Process Control",
    plant: "Halol",
    asset: "Engineering Workstation",

    owner: "R. Shah",

    framework: "IEC 62443",
    domain: "Access Control",

    compliance: "Implemented",
    validation: "Pass",
    evidence: "Satisfied",

    severity: "Medium",
    finding: false,

    completion: 100,

    createdAt: "2026-06-02",
    updatedAt: "2026-06-19",

    mappedEvidence: 4,
    mappedRisks: 1,
    mappedAssets: 1,

    tags: ["Access"],
  },

  {
    id: "4",
    controlId: "CR 3.1",
    title: "Communication Integrity",
    description:
      "Protect communication channels against tampering.",

    scope: "Zone B",
    plant: "Dahej",
    asset: "PLC-114",

    owner: "P. Patel",

    framework: "IEC 62443",
    domain: "System Integrity",

    compliance: "In Progress",
    validation: "Partial",
    evidence: "Weak",

    severity: "High",
    finding: true,

    completion: 55,

    createdAt: "2026-06-06",
    updatedAt: "2026-06-21",

    mappedEvidence: 2,
    mappedRisks: 2,
    mappedAssets: 3,

    tags: ["PLC", "Integrity"],
  },

  {
    id: "5",
    controlId: "CR 3.4",
    title: "Software Integrity",
    description:
      "Verify software authenticity before deployment.",

    scope: "Production Network",
    plant: "Ankleshwar",
    asset: "SCADA Server",

    owner: "N. Singh",

    framework: "NIST CSF",
    domain: "Integrity",

    compliance: "Not Started",
    validation: "Expired",
    evidence: "Missing",

    severity: "Critical",
    finding: true,

    completion: 10,

    createdAt: "2026-06-08",
    updatedAt: "2026-06-12",

    mappedEvidence: 0,
    mappedRisks: 4,
    mappedAssets: 2,

    tags: ["SCADA"],
  },

  {
    id: "6",
    controlId: "CR 4.2",
    title: "Data Confidentiality",
    description:
      "Protect sensitive OT information from unauthorized disclosure.",

    scope: "Historian",
    plant: "Halol",
    asset: "Historian Server",

    owner: "V. Kumar",

    framework: "ISO 27001",
    domain: "Confidentiality",

    compliance: "Implemented",
    validation: "Pass",
    evidence: "Satisfied",

    severity: "Medium",
    finding: false,

    completion: 100,

    createdAt: "2026-06-04",
    updatedAt: "2026-06-18",

    mappedEvidence: 6,
    mappedRisks: 1,
    mappedAssets: 1,

    tags: ["Encryption"],
  },

  {
    id: "7",
    controlId: "CR 5.1",
    title: "Restricted Data Flow",
    description:
      "Restrict communication between OT security zones.",

    scope: "Firewall",
    plant: "Dahej",
    asset: "Firewall-01",

    owner: "A. Desai",

    framework: "IEC 62443",
    domain: "Network Security",

    compliance: "Implemented",
    validation: "Pass",
    evidence: "Satisfied",

    severity: "High",
    finding: false,

    completion: 100,

    createdAt: "2026-06-01",
    updatedAt: "2026-06-25",

    mappedEvidence: 7,
    mappedRisks: 3,
    mappedAssets: 5,

    tags: ["Firewall", "Zones"],
  },

  {
    id: "8",
    controlId: "CR 6.2",
    title: "Audit Log Management",
    description:
      "Generate and retain security audit logs.",

    scope: "SIEM",
    plant: "Corporate",

    asset: "Log Server",

    owner: "S. Verma",

    framework: "ISO 27001",
    domain: "Logging",

    compliance: "In Progress",
    validation: "Partial",
    evidence: "Weak",

    severity: "Medium",
    finding: true,

    completion: 70,

    createdAt: "2026-06-03",
    updatedAt: "2026-06-24",

    mappedEvidence: 3,
    mappedRisks: 2,
    mappedAssets: 2,

    tags: ["Audit", "Logs"],
  },

  {
    id: "9",
    controlId: "CR 7.1",
    title: "Resource Availability",
    description:
      "Maintain availability of OT resources during incidents.",

    scope: "Backup Infrastructure",

    plant: "Halol",

    asset: "Backup Server",

    owner: "D. Patel",

    framework: "NIST CSF",
    domain: "Availability",

    compliance: "Implemented",
    validation: "Pass",
    evidence: "Satisfied",

    severity: "Low",
    finding: false,

    completion: 100,

    createdAt: "2026-06-05",
    updatedAt: "2026-06-19",

    mappedEvidence: 4,
    mappedRisks: 1,
    mappedAssets: 2,

    tags: ["Backup"],
  },

  {
    id: "10",
    controlId: "CR 7.5",
    title: "Disaster Recovery",
    description:
      "Ensure disaster recovery plans are maintained and tested.",

    scope: "Entire Plant",

    plant: "Dahej",

    asset: "DR Site",

    owner: "K. Sharma",

    framework: "ISO 27001",
    domain: "Recovery",

    compliance: "Not Applicable",
    validation: "Expired",
    evidence: "Expired",

    severity: "Low",
    finding: false,

    completion: 100,

    createdAt: "2026-06-07",
    updatedAt: "2026-06-22",

    mappedEvidence: 1,
    mappedRisks: 0,
    mappedAssets: 1,

    tags: ["Recovery", "Business Continuity"],
  },
];