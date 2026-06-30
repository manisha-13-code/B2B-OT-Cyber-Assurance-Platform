import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardCards from "@/components/dashboard/DashboardCards";
import ControlTable from "@/components/dashboard/ControlTable";
import EvidenceHealth from "@/components/dashboard/EvidenceHealth";
import PlantAssurancePosture from "@/components/dashboard/PlantAssurancePosture";
import ConnectorHealth from "@/components/dashboard/ConnectorHealth";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="mt-10">
        <DashboardCards />
      </div>

      <div className="mt-6 grid grid-cols-12 gap-6">
        <div className="col-span-9">
          <ControlTable />
        </div>

        <div className="col-span-3">
          <EvidenceHealth />
        </div>
      </div>

      <div className="mt-8">
        <PlantAssurancePosture />
      </div>

      <div className="mt-8">
        <ConnectorHealth />
      </div>
    </DashboardLayout>
  );
}
