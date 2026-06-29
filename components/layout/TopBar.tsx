import SearchBar from "./SearchBar";
import NotificationButton from "./NotificationButton";
import UserMenu from "./UserMenu";

interface TopBarProps {
  title?: string;
  subtitle?: string;
}

export default function TopBar({
  title = "Dashboard",
  subtitle = "Executive assurance posture across 8 plants • Updated 4 min ago",
}: TopBarProps) {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="text-4xl font-bold text-slate-900">{title}</h1>
        <p className="mt-2 text-lg text-slate-500">{subtitle}</p>
      </div>
      <div className="flex items-center gap-4">
        <SearchBar />
        <NotificationButton />
        <UserMenu />
      </div>
    </div>
  );
}
