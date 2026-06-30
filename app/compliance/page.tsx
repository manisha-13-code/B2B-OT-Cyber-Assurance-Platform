import DashboardLayout from "@/components/layout/DashboardLayout";
import Header from "@/components/compliance/Header";
import Disclosure from "@/components/compliance/Disclosure";
import OverallScore from "@/components/compliance/OverallScore";
import FrameworkGrid from "@/components/compliance/FrameworkGrid";

export default function CompliancePage() {
  return (
    <DashboardLayout
      title="Compliance Center"
      subtitle="Framework Alignment and consolidated Compliance Alignment"
    >
      <Header />
      <Disclosure />
      <OverallScore />
      <FrameworkGrid />
    </DashboardLayout>
  );
}