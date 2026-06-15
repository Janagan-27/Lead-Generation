import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

import { leads } from "./leads";

export default function AnalyticsChart() {
  const data = [
   {
      status: "Qualified",
      count: leads.filter(
        (lead) => lead.status.trim() === "Qualified"
      ).length,
    },
    {
      status: "New",
      count: leads.filter(
        (lead) => lead.status.trim() === "New"
      ).length,
    },
    {
      status: "Contacted",
      count: leads.filter(
        (lead) => lead.status.trim() === "Contacted"
      ).length,
    },
    {
      status: "Proposal",
      count: leads.filter(
        (lead) => lead.status.trim() === "Proposal"
      ).length,
    },
  ];

  const colors = [
    "#3B82F6", // Blue - New
    "#EAB308", // Yellow - Contacted
    "#22C55E", // Green - Qualified
    "#A855F7", // Purple - Proposal
  ];

  return (
    <div className="bg-white rounded-xl shadow p-6 mt-6">
      <h2 className="text-xl font-bold mb-4">
        Lead Analytics
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="status" />
          <YAxis />
          <Tooltip />

          <Bar dataKey="count">
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}