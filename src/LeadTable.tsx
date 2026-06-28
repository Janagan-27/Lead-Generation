import { useEffect, useState } from "react";
import { leads } from "./leads";
import LeadDetail from "./LeadDetail";

function getStatusColor(status: string) {
  switch (status.trim()) {
    case "New":
      return "bg-blue-500/20 text-blue-300 border border-blue-400/20";

    case "Contacted":
      return "bg-yellow-500/20 text-yellow-300 border border-yellow-400/20";

    case "Qualified":
      return "bg-green-500/20 text-green-300 border border-green-400/20";

    case "Proposal":
      return "bg-purple-500/20 text-purple-300 border border-purple-400/20";

    default:
      return "bg-white/10 text-white border border-white/10";
  }
}

export default function LeadTable() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortBy, setSortBy] = useState("name");
  const [selectedLead, setSelectedLead] = useState<any>(null);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  
  if (loading) {
  return (
    <div className="bg-white rounded-xl shadow p-8 mt-6 text-center">
      <div className="w-10 h-10 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto"></div>

      <p className="mt-4 text-gray-600">
        Loading leads...
      </p>
    </div>
  );
}
  if (error) {
  return (
    <div className="bg-red-100 border border-red-300 rounded-xl p-6 mt-6 text-center">
      <h2 className="text-xl font-bold text-red-600">
        Error
      </h2>

      <p className="text-red-500 mt-2">
        Failed to load leads.
      </p>
    </div>
  );
}
  const filteredLeads = leads
    .filter((lead) => {
      const matchesSearch = lead.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All"
          ? true
          : lead.status.trim() === statusFilter;

      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
  switch (sortBy) {
    case "name":
      return a.name.localeCompare(b.name);

    case "company":
      return a.company.localeCompare(b.company);

    case "status":
      return a.status.localeCompare(b.status);

    case "source":
      return a.source.localeCompare(b.source);

    default:
      return 0;
  }
});
    

  const displayedLeads = showAll
    ? filteredLeads
    : filteredLeads.slice(0, 4);

  return (
    <>
      <div className="glass-card mt-8 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">
           Recent Leads
          </h2>

          <button
           onClick={() => setShowAll(!showAll)}
           className="glass-btn"
           >
          {showAll ? "Show Less" : "View All"}
          </button>
        </div>

       
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">

          <input
            type="text"
            placeholder="Search leads..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg flex-1"
          />

          <div className="flex gap-3">

        {/* Status */}
          <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border border-gray-300 p-2 rounded-lg w-44 bg-transparent text-white"
          >
          <option value="All">All Status</option>
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Qualified">Qualified</option>
          <option value="Proposal">Proposal</option>
          </select>

        {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg w-44 bg-transparent text-white"
          >
            <option value="name">Sort by Name</option>
            <option value="company">Sort by Company</option>
            <option value="status">Sort by Status</option>
            <option value="source">Sort by Source</option>
          </select>

          </div>


          
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-white">
            <thead>
              <tr className="border-b border-white/10 text-slate-300">
                <th className="text-left p-3">Name</th>
                <th className="text-left p-3">Company</th>
                <th className="text-left p-3">Status</th>
                <th className="text-left p-3">Source</th>
              </tr>
            </thead>

            <tbody>
             {displayedLeads.length === 0 ? (
              <tr>
               <td colSpan={4} className="text-center py-10">
                <div className="flex flex-col items-center">
                 <h3 className="text-lg font-semibold text-gray-700">
                  No Leads Found
                 </h3>

                 <p className="text-gray-500 mt-2">
                  Try changing the search or filter.
                 </p>
               </div>
             </td>
           </tr>
  ) : (
    displayedLeads.map((lead) => (
      <tr
        key={lead.id}
        onClick={() => setSelectedLead(lead)}
        className="border-b border-white/5 hover:bg-white/10 hover:scale-[1.01] transition-all duration-300 cursor-pointer"
      >
        <td className="p-4">
         <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center font-bold text-white">
          {lead.name.charAt(0)}
          </div>

         <div>
          <p className="font-semibold text-white">
          {lead.name}
          </p>

          <p className="text-xs text-slate-400">
          Lead #{lead.id}
          </p>
         </div>
         </div>
       </td>
       <td className="p-4">
        <div>
         <p className="font-medium text-white">
          {lead.company}
         </p>

         <p className="text-xs text-slate-400">
          {lead.source}
         </p>
       </div>
      </td>
         <td className="p-3">
            <span
             className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide ${getStatusColor(
             lead.status
            )}`}
            >
            {lead.status.trim()}
            </span>
          </td>

       <td className="p-3">{lead.source}</td>
      </tr>
    ))
  )}
</tbody>
          </table>
        </div>
      </div>

      <LeadDetail lead={selectedLead} />
    </>
  );
}