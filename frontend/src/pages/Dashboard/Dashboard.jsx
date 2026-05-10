import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Dashboard.css";

import {
  FaMapMarkerAlt,
  FaWallet,
  FaPlaneDeparture,
} from "react-icons/fa";

const Dashboard = () => {

  const navigate = useNavigate();
  const [trips, setTrips] = useState([]);

  // load saved trips
  useEffect(() => {
    const savedTrips = JSON.parse(localStorage.getItem("trips")) || [];
    setTrips(savedTrips);
  }, []);

  return (
    <div className="dashboard">

      {/* HEADER */}
      <div className="dashboard-header">

        <div>
          <h1>Hello, Traveler 👋</h1>
          <p>Plan your next adventure with Traveloop</p>
        </div>

        <button
          className="trip-btn"
          onClick={() => navigate("/create-trip")}
        >
          + Plan New Trip
        </button>

      </div>

      {/* STATS (STATIC OK) */}
      <div className="stats-container">

        <div className="stat-card">
          <FaPlaneDeparture className="stat-icon" />
          <h2>{trips.length}</h2>
          <p>Total Trips</p>
        </div>

        <div className="stat-card">
          <FaMapMarkerAlt className="stat-icon" />
          <h2>28</h2>
          <p>Destinations</p>
        </div>

        <div className="stat-card">
          <FaWallet className="stat-icon" />
          <h2>₹45K</h2>
          <p>Total Budget</p>
        </div>

      </div>

      {/* RECENT TRIPS (DYNAMIC) */}
      <div className="recent-section">

        <h2>Recent Trips</h2>

        <div className="trip-cards">

          {trips.length === 0 ? (
            <p>No trips created yet 🚀</p>
          ) : (
            trips.map((trip) => (
              <div
                key={trip.id}
                className="trip-card"
                onClick={() => navigate(`/trip/${trip.name.toLowerCase()}`)}
              >

                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                  alt="trip"
                />

                <div className="trip-info">
                  <h3>{trip.name}</h3>
                  <p>{trip.budget} • {trip.startDate}</p>
                </div>

              </div>
            ))
          )}

        </div>

      </div>

    </div>
  );
};

export default Dashboard;