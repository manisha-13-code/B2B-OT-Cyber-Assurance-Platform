import DashboardLayout from "@/components/layout/DashboardLayout";
import PlantsPageContent from "@/components/plants/PlantsPageContent";

export default function PlantsPage() {
  return (
    <DashboardLayout
      title="Plants"
      subtitle="Operational view of plants, assets, and assurance posture"
    >
      <PlantsPageContent />
    </DashboardLayout>
  );
}
