export interface ControlGap {
  control: string;
  asset: string;
  plant: string;
  issue: string;
  severity: "Critical" | "High" | "Medium";
}
