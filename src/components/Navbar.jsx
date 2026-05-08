import React from "react";
import { Calendar, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
function Navbar() {

  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b border-white/10 backdrop-blur-lg">

      {/* Left */}
      <div className="flex items-center gap-10">

        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-white">
          HabitTrack
        </h1>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm">

          <button className="bg-white/20 text-white px-4 py-2 rounded-xl font-medium">
            <Link to="/dashboard">Dashboard</Link>
            
          </button>

          <button className="flex items-center gap-2 text-gray-200 hover:text-white transition">
            <Calendar size={16} />
            Calendar
          </button>

          <button className="flex items-center gap-2 text-gray-200 hover:text-white transition">
            <BarChart3 size={16} />
            Analytics
          </button>

        </div>

      </div>

      {/* Profile */}
      <div className="w-10 h-10 rounded-full bg-white text-purple-700 flex items-center justify-center font-bold shadow-lg">
        <Link to="/profile">R</Link>
      </div>

    </nav>
  );
}

export default Navbar;