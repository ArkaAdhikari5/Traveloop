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
const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
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
        {/* City Search */}
        <Route path="/city-search" element={<CitySearch />} />
        {/* Packing */}
        <Route path="/packing" element={<Packing />} />


      </Routes>
    </>
  );
};

export default App;