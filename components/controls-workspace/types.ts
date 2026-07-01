export type ComplianceStatus =
  | "Not Started"
  | "In Progress"
  | "Implemented"
  | "Not Applicable";

export type ValidationStatus =
  | "Pass"
  | "Fail"
  | "Partial"
  | "Expired";

export type EvidenceStatus =
  | "Satisfied"
  | "Weak"
  | "Missing"
  | "Expired";

export type Severity =
  | "Critical"
  | "High"
  | "Medium"
  | "Low";

export interface Control {
  id: string;

  controlId: string;
  title: string;
  description: string;

  // Scope
  scope: string;

  // Asset Information
  plant: string;
  asset: string;

  // Ownership
  owner: string;

  // Framework
  framework: string;
  domain: string;

  // Status
  compliance: ComplianceStatus;
  validation: ValidationStatus;
  evidence: EvidenceStatus;

  // Risk
  severity: Severity;
  finding: boolean;

  // Progress
  completion: number;

  // Dates
  createdAt: string;
  updatedAt: string;

  // Optional
  dueDate?: string;
  lastValidated?: string;
  lastEvidenceUploaded?: string;

  // Related Items
  mappedEvidence: number;
  mappedRisks: number;
  mappedAssets: number;

  // Tags
  tags: string[];
}