export type ApprovalStatus =
  | "Approved"
  | "Rejected"
  | "Under Review";

export type ValidityStatus =
  | "Current"
  | "Expired"
  | "Expiring Soon"
  | "Not Approved";

export type SatisfactionStatus =
  | "Satisfied-System"
  | "Satisfied-Manual"
  | "Partially Satisfied"
  | "Missing"
  | "Expired";

export type EvidenceType =
  | "Configuration Export"
  | "System Log Export"
  | "Review Record"
  | "Screenshot"
  | "Audit Report"
  | "Policy Document"
  | "Network Capture"
  | "Certificate";

export interface Evidence {
  id: string;

  // Evidence Details
  title: string;
  type: EvidenceType;
  scope: string;
  description?: string;

  // Mapping
  mappedControls: number;

  // Ownership
  owner: string;
  uploadedBy: string;
  uploadedAt: string;

  // Status
  approval: ApprovalStatus;
  validity: ValidityStatus;
  satisfaction: SatisfactionStatus;

  // File Information
  fileName: string;
  fileSize: string;
  version: string;

  // Metadata
  framework: string[];
  tags: string[];

  // Optional
  expiresOn?: string;
  reviewedOn?: string;
}