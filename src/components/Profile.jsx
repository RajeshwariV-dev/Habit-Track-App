import React, { useState } from "react";

import {
  User,
  Mail,
  Calendar,
  Trophy,
  Target,
  Camera,
  Save,
  LogOut,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

function Profile() {

  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    name: "Habit Tracker",
    email: "user@habittrack.app",
    bio: "",
  });

  // LOGOUT FUNCTION
  const handleLogout = () => {

    // REMOVE USER DATA
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // CLEAR SESSION
    sessionStorage.clear();

    // REDIRECT
    navigate("/login");
  };

  // SAVE PROFILE
  const handleSave = () => {
    localStorage.setItem("profile", JSON.stringify(profile));

    alert("Profile updated successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white">

      {/* Navbar */}
      <Navbar />

      {/* Main */}
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Heading */}
        <div className="mb-10">

          <h1 className="text-5xl font-extrabold mb-3">
            My Profile 👤
          </h1>

          <p className="text-gray-200 text-lg">
            Manage your personal information and track your progress.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* LEFT SIDE */}
          <div className="lg:col-span-1">

            {/* PROFILE CARD */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl text-center">

              {/* Avatar */}
              <div className="relative w-fit mx-auto mb-6">

                <div className="w-32 h-32 rounded-full bg-white text-purple-700 flex items-center justify-center text-5xl font-extrabold shadow-xl border-4 border-white">

                  {profile.name.charAt(0)}

                </div>

                {/* Camera Icon */}
                <button className="absolute bottom-2 right-2 bg-pink-500 p-2 rounded-full shadow-lg hover:scale-110 transition">

                  <Camera size={18} />

                </button>

              </div>

              <h2 className="text-3xl font-bold mb-2">
                {profile.name}
              </h2>

              <p className="text-gray-200 mb-6">
                {profile.email}
              </p>

              {/* Member */}
              <div className="bg-white/10 rounded-2xl p-4">

                <p className="text-gray-300 text-sm">
                  Member since May 2026
                </p>

              </div>

            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-4 mt-6">

              {/* Habits */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 text-center shadow-xl">

                <Target
                  size={28}
                  className="mx-auto mb-2 text-yellow-300"
                />

                <h2 className="text-3xl font-bold">
                  12
                </h2>

                <p className="text-gray-200 text-sm">
                  Habits
                </p>

              </div>

              {/* Days */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 text-center shadow-xl">

                <Calendar
                  size={28}
                  className="mx-auto mb-2 text-green-300"
                />

                <h2 className="text-3xl font-bold">
                  87
                </h2>

                <p className="text-gray-200 text-sm">
                  Days
                </p>

              </div>

              {/* Rewards */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 text-center shadow-xl">

                <Trophy
                  size={28}
                  className="mx-auto mb-2 text-pink-300"
                />

                <h2 className="text-3xl font-bold">
                  9
                </h2>

                <p className="text-gray-200 text-sm">
                  Rewards
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-2">

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">

              <h2 className="text-3xl font-bold mb-8">
                Edit Profile
              </h2>

              {/* FORM */}
              <div className="space-y-6">

                {/* NAME */}
                <div>

                  <label className="block mb-2 font-medium">
                    Full Name
                  </label>

                  <div className="relative">

                    <User
                      className="absolute left-4 top-4 text-gray-300"
                      size={20}
                    />

                    <input
                      type="text"
                      value={profile.name}
                      onChange={(e) =>
                        setProfile({
                          ...profile,
                          name: e.target.value,
                        })
                      }
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/20 text-white placeholder-gray-200 border border-white/20 outline-none focus:ring-2 focus:ring-pink-300"
                    />

                  </div>

                </div>

                {/* EMAIL */}
                <div>

                  <label className="block mb-2 font-medium">
                    Email Address
                  </label>

                  <div className="relative">

                    <Mail
                      className="absolute left-4 top-4 text-gray-300"
                      size={20}
                    />

                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) =>
                        setProfile({
                          ...profile,
                          email: e.target.value,
                        })
                      }
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/20 text-white placeholder-gray-200 border border-white/20 outline-none focus:ring-2 focus:ring-pink-300"
                    />

                  </div>

                </div>

                {/* BIO */}
                <div>

                  <label className="block mb-2 font-medium">
                    Bio
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Tell us about your goals and habits..."
                    value={profile.bio}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        bio: e.target.value,
                      })
                    }
                    className="w-full p-4 rounded-2xl bg-white/20 text-white placeholder-gray-200 border border-white/20 outline-none focus:ring-2 focus:ring-pink-300 resize-none"
                  />

                </div>

                {/* SAVE BUTTON */}
                <button
                  onClick={handleSave}
                  className="w-full flex items-center justify-center gap-3 bg-white text-purple-700 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition shadow-xl"
                >

                  <Save size={22} />

                  Save Changes

                </button>

                {/* LOGOUT BUTTON */}
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 text-white py-4 rounded-2xl font-bold text-lg transition shadow-xl"
                >

                  <LogOut size={22} />

                  Logout

                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;