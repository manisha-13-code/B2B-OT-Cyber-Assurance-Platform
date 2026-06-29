import DashboardLayout from "@/components/layout/DashboardLayout";
import RiskHeader from "@/components/risk/RiskHeader";
import RiskToolbar from "@/components/risk/RiskToolbar";
import RiskTable from "@/components/risk/RiskTable";

export default function RiskCommandCenterPage() {
  return (
    <DashboardLayout>
      <RiskHeader />
      <RiskToolbar />
      <RiskTable />
    </DashboardLayout>
  );
}