import DashboardLayout from "@/components/layout/DashboardLayout";
import ComplianceHeader from "@/components/compliance/Header";
import Disclosure from "@/components/compliance/Disclosure";
import OverallScore from "@/components/compliance/OverallScore";
import FrameworkGrid from "@/components/compliance/FrameworkGrid";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <section id="compliance" className="mt-10 space-y-8">
        <div className="grid gap-6 lg:grid-cols-[1.8fr_1fr]">
          <ComplianceHeader />
          <Disclosure />
        </div>

        <OverallScore />

        <FrameworkGrid />
      </section>
    </DashboardLayout>
  );
}
