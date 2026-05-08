import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white">

            {/* Navbar */}
            <nav className="flex items-center justify-between px-8 py-5">

                <h1 className="text-3xl font-extrabold tracking-wide">
                    HabitTrack
                </h1>

                <div className="space-x-4">

                    <Link
                        to="/login"
                        className="px-5 py-2 rounded-xl border border-white/30 hover:bg-white/10 transition"
                    >
                        Login
                    </Link>

                    <Link
                        to="/signup"
                        className="px-5 py-2 rounded-xl bg-white text-purple-700 font-semibold hover:scale-105 transition"
                    >
                        Sign Up
                    </Link>

                </div>

            </nav>

            {/* Hero Section */}
            <div className="flex flex-col items-center justify-center text-center px-6 mt-20">

                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight max-w-4xl">

                    Transform Your Life,
                    <br />

                    <span className="text-yellow-300">
                        One Habit at a Time
                    </span>

                </h1>

                <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">

                    HabitTrack helps you build powerful daily routines,
                    stay consistent, and achieve your goals through
                    simple and smart habit tracking.

                </p>

                {/* Buttons */}
                <div className="mt-10 flex gap-4 flex-wrap justify-center">

                    <Link
                        to="/signup"
                        className="px-8 py-4 rounded-2xl bg-white text-purple-700 font-bold text-lg shadow-lg hover:scale-105 transition duration-300"
                    >
                        Get Started
                    </Link>

                    <Link
                        to="/login"
                        className="px-8 py-4 rounded-2xl border border-white/30 bg-white/10 backdrop-blur-md text-white font-semibold hover:bg-white/20 transition duration-300"
                    >
                        Explore App
                    </Link>

                </div>

            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-8 px-8 md:px-20 mt-28 pb-20">

                {/* Card 1 */}
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-xl hover:scale-105 transition duration-300">

                    <div className="text-5xl mb-4">
                        📅
                    </div>
                    <h2 className="text-2xl font-bold mb-3">
                        Daily Tracking
                    </h2>
                    <p className="text-gray-200 leading-relaxed">
                        Stay on top of your routines by tracking habits
                        consistently every single day.
                    </p>

                </div>

                {/* Card 2 */}
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-xl hover:scale-105 transition duration-300">

                    <div className="text-5xl mb-4">
                        📈
                    </div>

                    <h2 className="text-2xl font-bold mb-3">
                        Progress Insights
                    </h2>

                    <p className="text-gray-200 leading-relaxed">

                        Visualize your growth and maintain streaks
                        that keep you motivated every day.

                    </p>

                </div>

                {/* Card 3 */}
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-xl hover:scale-105 transition duration-300">

                    <div className="text-5xl mb-4">
                        🚀
                    </div>

                    <h2 className="text-2xl font-bold mb-3">
                        Become Better
                    </h2>

                    <p className="text-gray-200 leading-relaxed">

                        Build discipline, consistency, and a better
                        lifestyle through tiny daily improvements.

                    </p>

                </div>

            </div>

        </div>
    );
}

export default LandingPage;