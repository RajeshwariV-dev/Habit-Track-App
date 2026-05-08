import React from "react";
import {
  Target,
  Flame,
  Trophy,
  Plus,
} from "lucide-react";

import Navbar from "../components/Navbar.jsx"

function Dashboard() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white">

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Greeting */}
        <div className="mb-8">

          <h1 className="text-4xl font-extrabold mb-2">
            Good Afternoon 👋
          </h1>

          <p className="text-gray-200">
            Friday, May 8, 2026
          </p>

        </div>

        {/* Daily Tip */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 mb-8 shadow-xl">

          <h2 className="font-bold text-lg mb-1">
            💡 Daily Tip
          </h2>

          <p className="text-gray-200">
            Start small. Tiny habits repeated daily create
            extraordinary results over time.
          </p>

        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          {/* Progress */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-xl hover:scale-105 ">

            <div className="flex justify-center mb-4">
              <div className="bg-indigo-500/30 p-4 rounded-full">
                <Target size={32} />
              </div>
            </div>

            <h2 className="text-4xl font-extrabold text-center">
              0/0
            </h2>

            <p className="text-center text-gray-200 mt-2">
              Today's Progress
            </p>

          </div>

          {/* Streak */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-xl hover:scale-105 transition duration-300">

            <div className="flex justify-center mb-4">
              <div className="bg-orange-500/30 p-4 rounded-full">
                <Flame size={32} />
              </div>
            </div>

            <h2 className="text-4xl font-extrabold text-center">
              0
            </h2>

            <p className="text-center text-gray-200 mt-2">
              Active Streaks
            </p>

          </div>

          {/* Achievement */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-xl hover:scale-105 transition duration-300">

            <div className="flex justify-center mb-4">
              <div className="bg-pink-500/30 p-4 rounded-full">
                <Trophy size={32} />
              </div>
            </div>

            <h2 className="text-4xl font-extrabold text-center">
              0
            </h2>

            <p className="text-center text-gray-200 mt-2">
              Achievements
            </p>

          </div>

        </div>

        {/* Habits Section */}
        <div>

          <div className="flex items-center justify-between mb-6">

            <h2 className="text-3xl font-bold">
              Today's Habits
            </h2>

            <button className="flex items-center gap-2 bg-white text-purple-700 px-5 py-3 rounded-xl font-semibold hover:scale-105 transition">

              <Plus size={18} />

              Add Habit

            </button>

          </div>

          {/* Empty State */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl min-h-[350px] flex flex-col items-center justify-center text-center p-10 shadow-xl">

            <div className="bg-indigo-500/30 p-6 rounded-full mb-6">

              <Target size={45} />

            </div>

            <h2 className="text-3xl font-bold mb-3">
              No habits yet
            </h2>

            <p className="text-gray-200 max-w-md leading-relaxed mb-8">

              Start building better habits today.
              Focus on one small change you can
              do consistently.

            </p>

            <button className="bg-white text-purple-700 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition shadow-lg">

              + Create Your First Habit

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;