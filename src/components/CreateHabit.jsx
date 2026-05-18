import React, { useState } from "react";

import {
  ArrowLeft,
  Sparkles,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function CreateHabit() {

  const navigate = useNavigate();

  const [habitName, setHabitName] = useState("");
  const [description, setDescription] = useState("");
  const [frequency, setFrequency] = useState("Daily");
  const [time, setTime] = useState("09:00");

  const [selectedColor, setSelectedColor] =
    useState("bg-indigo-500");

  const [loading, setLoading] =
    useState(false);

  const [aiSuggestions, setAiSuggestions] =
    useState([]);

  const colors = [
    "bg-indigo-500",
    "bg-emerald-500",
    "bg-amber-500",
    "bg-red-500",
    "bg-violet-500",
    "bg-pink-500",
    "bg-cyan-500",
    "bg-lime-500",
  ];

  // GEMINI AI
  const generateAISuggestions = async () => {

    if (!habitName.trim()) {
      alert("Enter a habit name first");
      return;
    }

    setLoading(true);

    try {

      const apiKey =
        import.meta.env.VITE_GEMINI_API_KEY;

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `Give me 5 habit suggestions related to ${habitName}. Return comma-separated values only.`,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();

      console.log(data);

      const text =
        data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

      if (text) {

        const suggestionsArray = text
          .split(",")
          .map((item) => item.trim());

        setAiSuggestions(
          suggestionsArray
        );
      }

    } catch (error) {

      console.log(error);

      alert("AI Error ❌");
    }

    setLoading(false);
  };

  // CREATE HABIT
  const handleCreateHabit = () => {

    const newHabit = {
      habitName,
      description,
      frequency,
      time,
      color: selectedColor,
    };

    console.log(
      "NEW HABIT:",
      newHabit
    );

    alert(
      "Habit Created Successfully ✅"
    );

    // OPTIONAL RESET
    setHabitName("");
    setDescription("");
    setFrequency("Daily");
    setTime("09:00");
    setSelectedColor("bg-indigo-500");
    setAiSuggestions([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">

      <div className="max-w-4xl mx-auto">

        {/* BACK BUTTON */}
        <button
          onClick={() =>
            navigate("/dashboard")
          }
          className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 mb-6 font-medium"
        >
          <ArrowLeft size={20} />

          Back to Dashboard
        </button>

        {/* CARD */}
        <div className="bg-white rounded-3xl shadow-lg p-10">

          {/* TITLE */}
          <h1 className="text-5xl font-bold text-gray-900 mb-10">
            Create New Habit
          </h1>

          {/* HABIT NAME */}
          <div className="mb-8">

            <label className="block text-lg font-semibold text-gray-800 mb-3">
              Habit Name
            </label>

            <div className="flex gap-3">

              <input
                type="text"
                placeholder="e.g., Morning Exercise"
                value={habitName}
                onChange={(e) =>
                  setHabitName(
                    e.target.value
                  )
                }
                className="flex-1 border border-gray-300 rounded-xl px-5 py-4 text-lg outline-none focus:ring-2 focus:ring-indigo-500"
              />

              {/* AI BUTTON */}
              <button
                onClick={
                  generateAISuggestions
                }
                disabled={loading}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 rounded-xl font-semibold transition duration-300 flex items-center gap-2"
              >

                <Sparkles size={20} />

                {loading
                  ? "Loading..."
                  : "AI"}

              </button>

            </div>

          </div>

          {/* AI SUGGESTIONS */}
          <div className="mb-8">

            <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-700 mb-4">
              💡 AI Suggestions
            </h2>

            <div className="flex flex-wrap gap-3">

              {aiSuggestions.map(
                (
                  suggestion,
                  index
                ) => (
                  <button
                    key={index}
                    onClick={() =>
                      setHabitName(
                        suggestion
                      )
                    }
                    className="bg-indigo-100 hover:bg-indigo-200 text-indigo-600 px-5 py-3 rounded-xl font-semibold transition duration-300"
                  >
                    {suggestion}
                  </button>
                )
              )}

            </div>

          </div>

          {/* DESCRIPTION */}
          <div className="mb-8">

            <label className="block text-lg font-semibold text-gray-800 mb-3">
              Description
            </label>

            <textarea
              rows="4"
              placeholder="Add notes about this habit..."
              value={description}
              onChange={(e) =>
                setDescription(
                  e.target.value
                )
              }
              className="w-full border border-gray-300 rounded-xl px-5 py-4 text-lg outline-none focus:ring-2 focus:ring-indigo-500"
            />

          </div>

          {/* FREQUENCY */}
          <div className="mb-8">

            <label className="block text-lg font-semibold text-gray-800 mb-4">
              Frequency
            </label>

            <div className="grid grid-cols-3 gap-4">

              {[
                "Daily",
                "Weekly",
                "Custom",
              ].map((item) => (

                <button
                  key={item}
                  onClick={() =>
                    setFrequency(item)
                  }
                  className={`py-4 rounded-2xl border-2 text-lg font-semibold transition duration-300 ${
                    frequency === item
                      ? "border-indigo-500 bg-indigo-100 text-indigo-600"
                      : "border-gray-300 hover:border-indigo-400"
                  }`}
                >
                  {item}
                </button>

              ))}

            </div>

          </div>

          {/* TIME */}
          <div className="mb-8">

            <label className="block text-lg font-semibold text-gray-800 mb-3">
              Reminder Time
            </label>

            <input
              type="time"
              value={time}
              onChange={(e) =>
                setTime(
                  e.target.value
                )
              }
              className="w-full border border-gray-300 rounded-xl px-5 py-4 text-lg outline-none focus:ring-2 focus:ring-indigo-500"
            />

          </div>

          {/* COLORS */}
          <div className="mb-10">

            <label className="block text-lg font-semibold text-gray-800 mb-4">
              Color
            </label>

            <div className="flex flex-wrap gap-4">

              {colors.map(
                (color, index) => (

                  <button
                    key={index}
                    onClick={() =>
                      setSelectedColor(
                        color
                      )
                    }
                    className={`w-14 h-14 rounded-2xl ${color} transition duration-300 ${
                      selectedColor ===
                      color
                        ? "ring-4 ring-offset-2 ring-indigo-400 scale-110"
                        : ""
                    }`}
                  />

                )
              )}

            </div>

          </div>

          {/* CREATE BUTTON */}
          <button
            onClick={
              handleCreateHabit
            }
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-5 rounded-2xl text-xl font-bold transition duration-300"
          >
            Create Habit
          </button>

        </div>

      </div>

    </div>
  );
}

export default CreateHabit;