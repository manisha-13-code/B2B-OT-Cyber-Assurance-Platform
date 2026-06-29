import Header from "@/components/compliance/Header";
import Disclosure from "@/components/compliance/Disclosure";
import OverallScore from "@/components/compliance/OverallScore";
import FrameworkGrid from "@/components/compliance/FrameworkGrid";

export default function CompliancePage() {
  return (
    <div className="bg-slate-50 min-h-screen p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <Header />

        <Disclosure />

        <OverallScore />

        <FrameworkGrid />
      </div>
    </div>
  );
}