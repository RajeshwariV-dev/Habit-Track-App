import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import Profile from "./components/Profile";
import CreateHabit from "./components/CreateHabit";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  // HABITS STATE
  const [habits, setHabits] = useState([]);

  // ADD HABIT
  const addHabit = (habit) => {

    const newHabit = {
      id: Date.now(),
      ...habit,
      completed: false,
    };

    setHabits((prev) => [...prev, newHabit]);
  };

  // TOGGLE COMPLETE
  const toggleHabit = (id) => {

    setHabits((prev) =>
      prev.map((habit) =>
        habit.id === id
          ? {
              ...habit,
              completed: !habit.completed,
            }
          : habit
      )
    );
  };

  // DELETE HABIT
  const deleteHabit = (id) => {

    setHabits((prev) =>
      prev.filter((habit) => habit.id !== id)
    );
  };

  return (
    <Routes>

      {/* PUBLIC ROUTES */}

      <Route
        path="/"
        element={<LandingPage />}
      />

      <Route
        path="/signup"
        element={<Signup />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      {/* PROTECTED DASHBOARD */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard
              habits={habits}
              toggleHabit={toggleHabit}
              deleteHabit={deleteHabit}
            />
          </ProtectedRoute>
        }
      />

      {/* PROTECTED PROFILE */}

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      {/* PROTECTED CREATE HABIT */}

      <Route
        path="/createHabit"
        element={
          <ProtectedRoute>
            <CreateHabit addHabit={addHabit} />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;