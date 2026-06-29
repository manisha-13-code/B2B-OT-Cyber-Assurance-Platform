import {
  Wifi,
  Globe,
  UserRound,
  Shield,
} from "lucide-react";

export default function ExposureIcons({
  items,
}: {
  items: string[];
}) {
  return (
    <div className="flex gap-2">
      {items.includes("user") && (
        <UserRound className="text-amber-500" size={15} />
      )}
      {items.includes("wifi") && (
        <Wifi className="text-orange-500" size={15} />
      )}
      {items.includes("internet") && (
        <Globe className="text-red-500" size={15} />
      )}
      {items.includes("vendor") && (
        <Shield className="text-blue-500" size={15} />
      )}
    </div>
  );
}
