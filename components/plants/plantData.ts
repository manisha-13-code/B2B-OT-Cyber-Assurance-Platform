export interface Plant {
  plant: string;
  location: string;
  criticality: "Critical" | "High" | "Medium" | "Low";
  connectivity: string;
  compliance: number;
  assurance: number;
  assuranceStatus: string;
  architecture: number;
  architectureStatus: string;
  highRisk: number;
  owner: string;
}

export const plants: Plant[] = [
  {
    plant: "Vadodara Polymer Works",
    location: "Vadodara, Gujarat",
    criticality: "Critical",
    connectivity: "Enterprise Connected",
    compliance: 71,
    assurance: 74,
    assuranceStatus: "Adequate",
    architecture: 68,
    architectureStatus: "Weak",
    highRisk: 6,
    owner: "R. Desai",
  },
  {
    plant: "Halol Pharma Plant 2",
    location: "Halol, Gujarat",
    criticality: "Critical",
    connectivity: "Internal OT Only",
    compliance: 88,
    assurance: 86,
    assuranceStatus: "Strong",
    architecture: 90,
    architectureStatus: "Strong",
    highRisk: 1,
    owner: "S. Verma",
  },
  {
    plant: "Dahej Specialty Chemicals",
    location: "Dahej, Gujarat",
    criticality: "High",
    connectivity: "Internet Connected",
    compliance: 54,
    assurance: 58,
    assuranceStatus: "Weak",
    architecture: 49,
    architectureStatus: "Critical",
    highRisk: 11,
    owner: "A. Mehta",
  },
  {
    plant: "Jamnagar Refinery Aux.",
    location: "Jamnagar, Gujarat",
    criticality: "Critical",
    connectivity: "Enterprise Connected",
    compliance: 79,
    assurance: 81,
    assuranceStatus: "Adequate",
    architecture: 77,
    architectureStatus: "Adequate",
    highRisk: 3,
    owner: "K. Das",
  },
  {
    plant: "Sanand Auto Components",
    location: "Sanand, Gujarat",
    criticality: "Medium",
    connectivity: "Air Gapped",
    compliance: 95,
    assurance: 93,
    assuranceStatus: "Strong",
    architecture: 97,
    architectureStatus: "Strong",
    highRisk: 0,
    owner: "P. Shah",
  },
];