import DashboardCard from "./DashboardCard";

export default function DashboardCards() {
  const scrollToCompliance = () => {
    const target = document.getElementById("compliance");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-5">
      <DashboardCard
        title="Assurance Score"
        value={78}
        status="Adequate"
        subtitle="Org-wide, all plants"
        trend="+2 this week"
      />
      <DashboardCard
        title="Compliance Alignment"
        value={73}
        status="Adequate"
        subtitle="5 of 5 frameworks"
        trend="+1"
        onClick={scrollToCompliance}
      />
      <DashboardCard
        title="Validation Coverage"
        value={81}
        status="Adequate"
        subtitle="Applicable controls"
        trend="-2"
      />
      <DashboardCard
        title="Architecture Score"
        value={76}
        status="Adequate"
        subtitle="Current design"
        trend="-5"
      />
      <DashboardCard
        title="High-Risk Findings"
        value={18}
        status="Critical"
        subtitle="Open Critical / High"
        danger
      />
    </div>
  );
}
