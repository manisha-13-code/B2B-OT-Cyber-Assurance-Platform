import DashboardLayout from "@/components/layout/DashboardLayout";
import RiskHeader from "@/components/risk/RiskHeader";
import RiskToolbar from "@/components/risk/RiskToolbar";
import RiskTable from "@/components/risk/RiskTable";

export default function RiskCommandCenterPage() {
  return (
    <DashboardLayout
      title="Risk Command Center"
      subtitle="Consolidated platform-generated findings across all monitored plants. Prioritize and track remediation activities."
    >
      <RiskHeader />
      <RiskToolbar />
      <RiskTable />
    </DashboardLayout>
  );
}