import { LayoutDashboard } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen p-5">
      <div className="glass-card h-full flex flex-col">

        {/* Logo */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white">
            Lead<span className="text-cyan-400">Flow</span>
          </h2>

          <p className="text-slate-400 text-sm mt-1">
            Lead Management Dashboard
          </p>
        </div>

        {/* Dashboard Menu */}
        <nav className="flex-1">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-400/20 hover:bg-cyan-500/30 transition-all duration-300">
            <LayoutDashboard size={20} />
            Dashboard
          </button>
        </nav>

        {/* Footer */}
        <div className="border-t border-white/10 pt-5">
          <div className="flex items-center gap-3">

            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-white font-bold">
              L
            </div>

            <div>
              <p className="text-white font-semibold">
                LeadFlow
              </p>
            
            </div>

          </div>
        </div>

      </div>
    </aside>
  );
}