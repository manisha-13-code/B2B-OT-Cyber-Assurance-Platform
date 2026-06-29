import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

import DashboardCards from "../dashboard/DashboardCards";
import ControlTable from "../dashboard/ControlTable";
import EvidenceHealth from "../dashboard/EvidenceHealth";
import PlantAssurancePosture from "../dashboard/PlantAssurancePosture";
import RecentValidationChanges from "../dashboard/RecentValidationChanges";
import ArchitectureFindings from "../dashboard/ArchitectureFindings";
import ConnectorHealth from "../dashboard/ConnectorHealth";

interface DashboardLayoutProps {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export default function DashboardLayout({
  children,
  title = "Dashboard",
  subtitle = "Executive assurance posture across 8 plants • Updated 4 min ago",
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-[#F3F6FB]">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <TopBar title={title} subtitle={subtitle} />

          {children ? (
            <div className="mt-6">{children}</div>
          ) : (
            <>
              <DashboardCards />

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

              <div className="mt-8 space-y-8">
                <RecentValidationChanges />
                <ArchitectureFindings />
                <ConnectorHealth />
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}