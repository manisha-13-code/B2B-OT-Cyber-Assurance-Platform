import AssetRow from "./AssetRow";
import { assets } from "./assetData";

export default function AssetTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
      <div className="max-h-[650px] overflow-auto">
        <table className="w-full">
          <thead className="sticky top-0 z-30 bg-white shadow-sm">
            <tr className="text-left text-xs font-bold uppercase tracking-wide text-slate-700">
              <th className="px-4 py-4">Asset</th>
              <th className="px-4 py-4">Plant</th>
              <th className="px-4 py-4">Zone</th>
              <th className="px-4 py-4">Purdue</th>
              <th className="px-4 py-4">Criticality</th>
              <th className="px-4 py-4">Support</th>
              <th className="px-4 py-4">Exposure</th>
              <th className="px-4 py-4">Owner</th>
              <th className="px-4 py-4">Controls</th>
              <th className="px-4 py-4">Findings</th>
              <th className="px-4 py-4">Status</th>
              <th className="px-4 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset, index) => (
              <AssetRow
                key={asset.id}
                asset={asset}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between border-t px-6 py-4">
        <p className="text-sm text-slate-500">Showing 1–7 of 9 assets</p>
        <div className="flex gap-2">
          <button className="rounded-lg border px-4 py-2 hover:bg-slate-50">Previous</button>
          <button className="rounded-lg border bg-sky-600 px-4 py-2 text-white">1</button>
          <button className="rounded-lg border px-4 py-2 hover:bg-slate-50">2</button>
          <button className="rounded-lg border px-4 py-2 hover:bg-slate-50">Next</button>
        </div>
      </div>

      <div className="flex items-center justify-between border-t bg-slate-50 px-6 py-4">
        <p className="text-sm text-slate-600">Showing 9 of 9 assets</p>
        <div className="flex gap-6">
          <p>
            Critical: <span className="font-bold text-red-600">3</span>
          </p>
          <p>
            High: <span className="font-bold text-orange-600">2</span>
          </p>
          <p>
            Medium: <span className="font-bold text-blue-600">4</span>
          </p>
        </div>
      </div>
    </div>
  );
}
