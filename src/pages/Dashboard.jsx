import React, { useState } from "react";
import { Target, Flame, Trophy, Plus, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

function Dashboard() {
  const navigate = useNavigate();

  const [habits, setHabits] = useState([
    { id: 1, name: "Drink Water", completed: false },
    { id: 2, name: "Exercise", completed: false },
  ]);

  // ✅ Toggle complete
  const toggleComplete = (id) => {
    setHabits((prev) =>
      prev.map((h) =>
        h.id === id ? { ...h, completed: !h.completed } : h
      )
    );
  };

  // 🗑 Delete habit
  const deleteHabit = (id) => {
    setHabits((prev) => prev.filter((h) => h.id !== id));
  };

  // 📊 Stats
  const total = habits.length;
  const completed = habits.filter((h) => h.completed).length;

  // 🔥 simple streak logic
  let streak = 0;
  for (let h of habits) {
    if (h.completed) streak++;
    else break;
  }

  const achievements = Math.floor(completed / 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white">

      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold mb-2">
            Good Afternoon 👋
          </h1>
          <p className="text-gray-200">Your Habit Dashboard</p>
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white/10 p-8 rounded-3xl text-center">
            <Target size={40} className="mx-auto mb-2" />
            <h2 className="text-4xl font-bold">{completed}/{total}</h2>
            <p>Progress</p>
          </div>

          <div className="bg-white/10 p-8 rounded-3xl text-center">
            <Flame size={40} className="mx-auto mb-2" />
            <h2 className="text-4xl font-bold">{streak}</h2>
            <p>Streak</p>
          </div>

          <div className="bg-white/10 p-8 rounded-3xl text-center">
            <Trophy size={40} className="mx-auto mb-2" />
            <h2 className="text-4xl font-bold">{achievements}</h2>
            <p>Achievements</p>
          </div>

        </div>

        {/* HEADER ROW */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Today's Habits</h2>

          <button
            onClick={() => navigate("/createhabit")}
            className="flex items-center gap-2 bg-white text-purple-700 px-5 py-3 rounded-xl font-semibold"
          >
            <Plus size={18} />
            Add Habit
          </button>
        </div>

        {/* HABITS LIST */}
        <div className="space-y-4">

         {habits.length === 0 && (
  <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 text-center shadow-xl">

    <div className="text-5xl mb-4">🚀</div>

    <h2 className="text-2xl font-bold mb-2">
      No habits yet
    </h2>

    <p className="text-gray-200 mb-6">
      Start building your routine today. Add your first habit and stay consistent.
    </p>

    <button
      onClick={() => navigate("/createhabit")}
      className="bg-white text-purple-700 px-6 py-3 rounded-xl font-bold hover:scale-105 transition"
    >
      + Add Your First Habit
    </button>

  </div>
)}

          {habits.map((habit) => (
            <div
              key={habit.id}
              className="bg-white/10 p-5 rounded-2xl flex justify-between items-center"
            >

              {/* 👇 Habit name with strike-through */}
              <span
                className={`text-lg transition ${
                  habit.completed ? "line-through text-gray-300" : ""
                }`}
              >
                {habit.name}
              </span>

              <div className="flex items-center gap-3">

                {/* COMPLETE BUTTON */}
                <button
                  onClick={() => toggleComplete(habit.id)}
                  className={`px-4 py-2 rounded-xl font-bold transition ${
                    habit.completed
                      ? "bg-green-500 text-white"
                      : "bg-white text-purple-700"
                  }`}
                >
                  {habit.completed ? "Done ✓" : "Mark"}
                </button>

                {/* DELETE BUTTON */}
                <button
                  onClick={() => deleteHabit(habit.id)}
                  className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-xl"
                >
                  <Trash2 size={18} />
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default Dashboard;