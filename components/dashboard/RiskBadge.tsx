"use client"
import React from "react";

export default function RiskBadge({ risk }: { risk: "low" | "medium" | "high" }) {
  const classes =
    risk === "low" ? "bg-green-100 text-green-800" : risk === "medium" ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800";
  return <span className={`px-2 py-1 rounded text-xs font-semibold ${classes}`}>{risk}</span>;
}
