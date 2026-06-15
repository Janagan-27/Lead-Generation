import Sidebar from "./Sidebar";
import LeadTable from "./LeadTable";
import AnalyticsChart from "./AnalyticsChart";
import { leads } from "./leads";

export default function Dashboard() {
  const totalLeads = leads.length;

  const contacted = leads.filter(
    (lead) => lead.status === "Contacted"
  ).length;

  const qualified = leads.filter(
    (lead) => lead.status === "Qualified"
  ).length;

   const proposal = leads.filter(
  (lead) => lead.status.trim() === "Proposal"
).length;

  const conversion =
    totalLeads > 0
      ? Math.round((qualified / totalLeads) * 100)
      : 0;

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">
          Lead Dashboard
        </h1>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-gray-500">Total Leads</h3>
            <p className="text-3xl font-bold">{totalLeads}</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-gray-500">Contacted</h3>
            <p className="text-3xl font-bold">{contacted}</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-gray-500">Qualified</h3>
            <p className="text-3xl font-bold">{qualified}</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-gray-500">Proposal </h3>
            <p className="text-3xl font-bold">{proposal}</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-gray-500">Conversion Rate</h3>
            <p className="text-3xl font-bold">{conversion}%</p>
          </div>
        </div>

        {/* Lead Table */}
        <LeadTable />

        {/* Analytics Chart */}
        <AnalyticsChart />
      </div>
    </div>
  );
}