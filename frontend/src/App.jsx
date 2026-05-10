import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home/Home";

import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";

import Dashboard from "./pages/Dashboard/Dashboard";
import CreateTrip from "./pages/CreateTrip/CreateTrip";

import Itinerary from "./pages/Itinerary/Itinerary";
import Budget from "./pages/Budget/Budget";
import MyTrips from "./pages/MyTrips/MyTrips";
import Activities from "./pages/Activities/Activities";
import CitySearch from "./pages/CitySearch/CitySearch";
import Packing from "./pages/Packing/Packing";

// ✅ NEW: unified trip page (added, not removed anything)
import Trip from "./pages/Trip/Trip";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* DASHBOARD */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* CREATE TRIP */}
        <Route path="/create-trip" element={<CreateTrip />} />

        {/* ============================= */}
        {/* OLD ROUTES (KEEP AS YOU WANTED) */}
        {/* ============================= */}

        <Route path="/itinerary" element={<Itinerary />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/my-trips" element={<MyTrips />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/city-search" element={<CitySearch />} />
        <Route path="/packing" element={<Packing />} />

        {/* ============================= */}
        {/* NEW IMPROVED TRIP FLOW */}
        {/* ============================= */}

        <Route path="/trip/:tripName" element={<Trip />} />

      </Routes>
    </>
  );
};

export default App;