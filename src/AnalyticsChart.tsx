import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import { leads } from "./leads";

export default function AnalyticsChart() {
  const data = [
    {
      name: "Qualified",
      value: leads.filter(
        (lead) => lead.status.trim() === "Qualified"
      ).length,
    },
    {
      name: "New",
      value: leads.filter(
        (lead) => lead.status.trim() === "New"
      ).length,
    },
    {
      name: "Contacted",
      value: leads.filter(
        (lead) => lead.status.trim() === "Contacted"
      ).length,
    },
    {
      name: "Proposal",
      value: leads.filter(
        (lead) => lead.status.trim() === "Proposal"
      ).length,
    },
  ];

  const COLORS = [
    "#06B6D4", // Cyan
    "#3B82F6", // Blue
    "#22C55E", // Green
    "#A855F7", // Purple
  ];

  return (
    <div className="glass-card mt-8 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white">
          Lead Analytics
        </h2>

        <p className="text-slate-400 text-sm">
          Lead status distribution
        </p>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={110}
            innerRadius={55}
            paddingAngle={4}
            label
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip
            contentStyle={{
              background: "#1E293B",
              border: "1px solid rgba(255,255,255,.15)",
              borderRadius: "12px",
              color: "#fff",
            }}
          />

          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}