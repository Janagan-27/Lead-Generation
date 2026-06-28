import { useState } from "react";

type Props = {
  lead: any;
};

export default function LeadDetail({ lead }: Props) {

  if (!lead) return null;

  return (
    <div className="glass-card p-8 mt-8 text-white animate-fade-in">

      {/* Header */}
      <div className="flex items-center gap-4 mb-8">

        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-2xl font-bold">
          {lead.name.charAt(0)}
        </div>

        <div>
          <h2 className="text-3xl font-bold">
            {lead.name}
          </h2>

          <p className="text-slate-400">
            {lead.company}
          </p>
        </div>

        <span className="ml-auto px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-sm font-semibold">
          {lead.status}
        </span>

      </div>

      {/* Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
          <p className="text-slate-400 text-sm">Email</p>
          <p className="mt-1">{lead.email}</p>
        </div>

        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
          <p className="text-slate-400 text-sm">Phone</p>
          <p className="mt-1">{lead.phone}</p>
        </div>

        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
          <p className="text-slate-400 text-sm">Company</p>
          <p className="mt-1">{lead.company}</p>
        </div>

        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
          <p className="text-slate-400 text-sm">Source</p>
          <p className="mt-1">{lead.source}</p>
        </div>

        <div className="md:col-span-2 bg-white/5 rounded-xl p-4 border border-white/10">
          <p className="text-slate-400 text-sm">Notes</p>
          <p className="mt-2">{lead.notes}</p>
        </div>

      </div>

      
      
    </div>
  );
}