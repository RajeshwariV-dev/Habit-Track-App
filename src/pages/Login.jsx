import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const API = "http://localhost:3005/users";

  // Validation
  const validate = () => {
    let err = {};
    const emailPattern =
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!emailPattern.test(form.email)) {
      err.email = "Invalid email format";
    }

    if (form.password.length < 4) {
      err.password =
        "Password must contain at least 4 characters";
    }

    setErrors(err);

    return Object.keys(err).length === 0;
  };

  // Handle Login
  const handleSubmit = async (e) => {

    e.preventDefault();
    if (!validate()) return;
    try {
      // Fetch Users
      const response = await axios.get(API);
      const users = response.data;
      // Match Existing User
      const existingUser = users.find(
        (user) =>
          user.email === form.email &&
          user.password === form.password
      );

      if (existingUser) {
        setMessage("Login Successful ✅");
        console.log(existingUser);

      } else {
        setMessage("Invalid Email or Password ❌");
      }
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
            Welcome Back
          </h1>
          <p className="text-gray-200 text-sm">
            Continue building your better habits
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

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

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-white text-purple-700 font-bold text-lg hover:scale-105 transition duration-300 shadow-lg"
          >
            <Link to="/dashboard">Login</Link>
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
          Don't have an account?
          <Link
            to="/signup"
            className="font-semibold text-white ml-1 hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;