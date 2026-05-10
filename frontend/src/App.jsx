import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import CreateTrip from "./pages/CreateTrip/CreateTrip";
import Itinerary from "./pages/Itinerary/Itinerary";
import Budget from "./pages/Budget/Budget";
import MyTrips from "./pages/MyTrips/MyTrips";
import Activities from "./pages/Activities/Activities";
const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Auth */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Create Trip */}
        <Route path="/create-trip" element={<CreateTrip />} />
        {/* Itinerary */}
        <Route path="/itinerary" element={<Itinerary />} />
        {/* Budget */}
        <Route path="/budget" element={<Budget />} />
        {/* My Trips */}
        <Route path="/my-trips" element={<MyTrips />} />
        {/* Activities */}
        <Route path="/activities" element={<Activities />} />


      </Routes>
    </>
  );
};

export default App;