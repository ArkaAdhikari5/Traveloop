import "./Dashboard.css";
import {
  FaMapMarkerAlt,
  FaWallet,
  FaPlaneDeparture,
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <>

      <div className="dashboard">

        {/* TOP SECTION */}
        <div className="dashboard-header">

          <div>
            <h1>Hello, Traveler 👋</h1>
            <p>Plan your next adventure with Traveloop</p>
          </div>

          <button className="trip-btn">
            + Plan New Trip
          </button>

        </div>

        {/* STATS */}
        <div className="stats-container">

          {/* CARD 1 */}
          <div className="stat-card">
            <FaPlaneDeparture className="stat-icon" />

            <h2>12</h2>
            <p>Total Trips</p>
          </div>

          {/* CARD 2 */}
          <div className="stat-card">
            <FaMapMarkerAlt className="stat-icon" />

            <h2>28</h2>
            <p>Destinations</p>
          </div>

          {/* CARD 3 */}
          <div className="stat-card">
            <FaWallet className="stat-icon" />

            <h2>₹45K</h2>
            <p>Total Budget</p>
          </div>

        </div>

        {/* RECENT TRIPS */}
        <div className="recent-section">

          <h2>Recent Trips</h2>

          <div className="trip-cards">

            {/* CARD */}
            <div className="trip-card">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                alt="trip"
              />

              <div className="trip-info">
                <h3>Goa Vacation</h3>
                <p>4 Days • ₹12,000</p>
              </div>
            </div>

            {/* CARD */}
            <div className="trip-card">
              <img
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c"
                alt="trip"
              />

              <div className="trip-info">
                <h3>Darjeeling Tour</h3>
                <p>5 Days • ₹18,000</p>
              </div>
            </div>

            {/* CARD */}
            <div className="trip-card">
              <img
                src="https://images.unsplash.com/photo-1493558103817-58b2924bce98"
                alt="trip"
              />

              <div className="trip-info">
                <h3>Kerala Trip</h3>
                <p>6 Days • ₹25,000</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </>
  );
};

export default Dashboard;