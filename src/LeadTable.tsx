import { useState } from "react";
import { leads } from "./leads";
import LeadDetail from "./LeadDetail";

function getStatusColor(status: string) {
  switch (status) {
    case "New":
      return "bg-blue-100 text-blue-700";

    case "Contacted":
      return "bg-yellow-100 text-yellow-700";

    case "Qualified":
      return "bg-green-100 text-green-700";

    case "Proposal":
      return "bg-purple-100 text-purple-700";

    default:
      return "bg-gray-100 text-gray-700";
  }
}

export default function LeadTable() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedLead, setSelectedLead] = useState<any>(null);
  const [showAll, setShowAll] = useState(false);

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch = lead.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All"
        ? true
        : lead.status.trim() === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <>
      <div className="bg-white rounded-xl shadow p-6 mt-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">
            Recent Leads
          </h2>

          <button
            onClick={() => setShowAll(!showAll)}
            className="text-purple-600 font-medium hover:text-purple-800"
          >
            {showAll ? "Show Less" : "View All"}
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="text"
            placeholder="Search leads..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg flex-1"
          />

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg"
          >
            <option value="All">All Status</option>
            <option value="New">New</option>
            <option value="Contacted">Contacted</option>
            <option value="Qualified">Qualified</option>
            <option value="Proposal">Proposal</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="text-left p-3">Name</th>
                <th className="text-left p-3">Company</th>
                <th className="text-left p-3">Status</th>
                <th className="text-left p-3">Source</th>
              </tr>
            </thead>

            <tbody>
              {filteredLeads.length > 0 ? (
                (showAll
                  ? filteredLeads
                  : filteredLeads.slice(0, 4)
                ).map((lead) => (
                  <tr
                    key={lead.id}
                    onClick={() => setSelectedLead(lead)}
                    className="border-b hover:bg-gray-50 cursor-pointer"
                  >
                    <td className="p-3">{lead.name}</td>

                    <td className="p-3">{lead.company}</td>

                    <td className="p-3">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                          lead.status.trim()
                        )}`}
                      >
                        {lead.status.trim()}
                      </span>
                    </td>

                    <td className="p-3">{lead.source}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    className="text-center p-6 text-gray-500"
                  >
                    No leads found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <LeadDetail lead={selectedLead} />
    </>
  );
}