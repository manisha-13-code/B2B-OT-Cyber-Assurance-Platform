import DashboardLayout from "@/components/layout/DashboardLayout";
import AssetsHeader from "@/components/assets/AssetsHeader";
import AssetToolbar from "@/components/assets/AssetToolbar";
import AssetTable from "@/components/assets/AssetTable";

export default function AssetsPage() {
  return (
    <DashboardLayout>
      <AssetsHeader />
      <AssetToolbar />
      <AssetTable />
    </DashboardLayout>
  );
}