import { Asset } from "./assetData";
import AssetStatus from "./AssetStatus";
import PurdueBadge from "./PurdueBadge";
import StatusBadge from "./StatusBadge";
import ExposureIcons from "./ExposureIcons";
import SupportBadge from "./SupportBadge";
import { MoreVertical } from "lucide-react";

export default function AssetRow({
  asset,
  index,
}: {
  asset: Asset;
  index: number;
}) {
  return (
    <tr
      className={`border-b hover:bg-sky-50 transition-all duration-300 ${
        index % 2 === 0 ? "bg-white" : "bg-slate-50/40"
      }`}>
      <td className="px-4 py-5">
        <h3 className="font-semibold text-slate-800">
          {asset.asset}
        </h3>

        <p className="text-sm text-slate-500">
          {asset.subtitle}
        </p>
      </td>

      <td className="px-4">{asset.plant}</td>

      <td className="px-4">{asset.zone}</td>

      <td className="px-4">
        <PurdueBadge level={asset.purdue} />
      </td>

      <td className="px-4">
        <StatusBadge value={asset.criticality} />
      </td>

      <td className="px-4">
        <SupportBadge supported={asset.support} />
      </td>

      <td className="px-4">
        <ExposureIcons items={asset.exposure} />
      </td>

      <td className="px-4">{asset.owner}</td>

      <td className="px-4">
        <div>
          <p className="font-semibold">{asset.controls}</p>
          <div className="mt-2 h-2 rounded-full bg-slate-200">
            <div
              style={{
                width: `${(parseInt(asset.controls) / 18) * 100}%`,
              }}
              className="h-full rounded-full bg-sky-500"
            />
          </div>
        </div>
      </td>

      <td className="px-4 font-bold text-red-600">
        {asset.findings}
      </td>

      <td className="px-4">
        <AssetStatus status={asset.status} />
      </td>

      <td className="px-4 text-right">
        <button className="rounded-lg p-2 hover:bg-slate-100">
          <MoreVertical size={18} />
        </button>
      </td>
    </tr>
  );
}
