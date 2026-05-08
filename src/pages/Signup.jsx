import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Signup() {

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");

    const API = "http://localhost:3005/users";

    // Validation
    const validate = () => {

        let err = {};

        const namePattern = /^[A-Za-z ]{3,}$/;

        const emailPattern =
            /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        if (!namePattern.test(form.username)) {
            err.username =
                "Username must contain at least 3 letters";
        }

        if (!emailPattern.test(form.email)) {
            err.email = "Invalid email format";
        }

        if (form.password.length < 4) {
            err.password =
                "Password must contain at least 4 characters";
        }

        if (form.password !== form.confirmPassword) {
            err.confirmPassword = "Passwords do not match";
        }

        setErrors(err);

        return Object.keys(err).length === 0;
    };

    // Signup
    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!validate()) return;

        try {

            const response = await axios.get(API);

            const users = response.data;

            const existingUser = users.find(
                (user) => user.email === form.email
            );

            if (existingUser) {

                setMessage("User already exists ❌");

                return;
            }

            await axios.post(API, {
                username: form.username,
                email: form.email,
                password: form.password,
            });

            setMessage("Signup Successful ✅");

            setForm({
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
            });

        } catch (error) {

            console.log(error);

        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center px-4">

            {/* Card */}
            <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8">

                {/* Heading */}
                <div className="text-center mb-8">

                    <h1 className="text-4xl font-extrabold text-white mb-2">
                        HabitTrack
                    </h1>

                    <p className="text-gray-200 text-sm">
                        Tiny Habits. Extraordinary Results.
                    </p>

                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    {/* Username */}
                    <div>

                        <input
                            type="text"
                            placeholder="Username"
                            value={form.username}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    username: e.target.value,
                                })
                            }
                            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-200 border border-white/20 outline-none focus:ring-2 focus:ring-pink-300"
                        />

                        {errors.username && (
                            <p className="text-pink-200 text-sm mt-1">
                                {errors.username}
                            </p>
                        )}

                    </div>

                    {/* Email */}
                    <div>

                        <input
                            type="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    email: e.target.value,
                                })
                            }
                            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-200 border border-white/20 outline-none focus:ring-2 focus:ring-pink-300"
                        />

                        {errors.email && (
                            <p className="text-pink-200 text-sm mt-1">
                                {errors.email}
                            </p>
                        )}

                    </div>

                    {/* Password */}
                    <div>

                        <input
                            type="password"
                            placeholder="Password"
                            value={form.password}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    password: e.target.value,
                                })
                            }
                            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-200 border border-white/20 outline-none focus:ring-2 focus:ring-pink-300"
                        />

                        {errors.password && (
                            <p className="text-pink-200 text-sm mt-1">
                                {errors.password}
                            </p>
                        )}

                    </div>

                    {/* Confirm Password */}
                    <div>

                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={form.confirmPassword}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    confirmPassword: e.target.value,
                                })
                            }
                            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-200 border border-white/20 outline-none focus:ring-2 focus:ring-pink-300"
                        />

                        {errors.confirmPassword && (
                            <p className="text-pink-200 text-sm mt-1">
                                {errors.confirmPassword}
                            </p>
                        )}

                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-white text-purple-700 font-bold text-lg hover:scale-105 transition duration-300 shadow-lg"
                    >
                        <Link to="/dashboard">
                         Create Account
                        </Link>
                       
                    </button>

                </form>

                {/* Message */}
                {message && (
                    <p className="text-center text-white mt-5 font-medium">
                        {message}
                    </p>
                )}

                {/* Footer */}
                <p className="text-center text-gray-200 text-sm mt-6">

                    Already have an account?

                    <span className="font-semibold text-white cursor-pointer ml-1 hover:underline">
                        <Link to="/login" className="font-semibold text-white ml-1 hover:underline">
                        Login
                        </Link>
                    </span>

                </p>

            </div>
        </div>
    );
}

export default Signup;