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
  <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex text-white relative overflow-hidden">

    {/* Background Glow */}
    <div className="absolute top-0 left-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-[140px]" />
    <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-600/20 blur-[160px]" />

    {/* Sidebar */}
    <Sidebar />

    {/* Main Content */}
    <main className="flex-1 p-8 relative z-10">

      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">
          Lead Dashboard
        </h1>

        <p className="text-slate-400 mt-2">
          Track and manage your sales pipeline efficiently.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">

        <div className="glass-card">
          <p className="text-slate-400">Total Leads</p>
          <h2 className="text-4xl font-bold mt-2">{totalLeads}</h2>
        </div>

        <div className="glass-card">
          <p className="text-slate-400">Contacted</p>
          <h2 className="text-4xl font-bold mt-2">{contacted}</h2>
        </div>

        <div className="glass-card">
          <p className="text-slate-400">Qualified</p>
          <h2 className="text-4xl font-bold mt-2">{qualified}</h2>
        </div>

        <div className="glass-card">
          <p className="text-slate-400">Proposal</p>
          <h2 className="text-4xl font-bold mt-2">{proposal}</h2>
        </div>

        <div className="glass-card">
          <p className="text-slate-400">Conversion</p>
          <h2 className="text-4xl font-bold mt-2">{conversion}%</h2>
        </div>

      </div>

      <div className="mt-8">
        <LeadTable />
      </div>

      <div className="mt-8">
        <AnalyticsChart />
      </div>

    </main>

  </div>
);
};