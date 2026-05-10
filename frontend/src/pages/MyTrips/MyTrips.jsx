import "./MyTrips.css";

import {
  FaEdit,
  FaTrash,
  FaMapMarkerAlt,
} from "react-icons/fa";

const MyTrips = () => {
  return (
    <>

      <div className="mytrips-page">

        {/* HEADER */}
        <div className="mytrips-header">

          <div>
            <h1>My Trips ✈️</h1>

            <p>
              View and manage all your travel plans.
            </p>
          </div>

          <button className="new-trip-btn">
            + New Trip
          </button>

        </div>

        {/* TRIP CARDS */}

        <div className="mytrips-container">

          {/* CARD 1 */}
          <div className="mytrip-card">

            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              alt="trip"
            />

            <div className="trip-content">

              <h2>Goa Vacation</h2>

              <p>
                <FaMapMarkerAlt /> Goa, India
              </p>

              <span>
                4 Days • ₹12,000
              </span>

              <div className="trip-buttons">

                <button className="edit-btn">
                  <FaEdit /> Edit
                </button>

                <button className="delete-btn">
                  <FaTrash /> Delete
                </button>

              </div>

            </div>

          </div>

          {/* CARD 2 */}
          <div className="mytrip-card">

            <img
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c"
              alt="trip"
            />

            <div className="trip-content">

              <h2>Darjeeling Tour</h2>

              <p>
                <FaMapMarkerAlt /> Darjeeling
              </p>

              <span>
                5 Days • ₹18,000
              </span>

              <div className="trip-buttons">

                <button className="edit-btn">
                  <FaEdit /> Edit
                </button>

                <button className="delete-btn">
                  <FaTrash /> Delete
                </button>

              </div>

            </div>

          </div>

          {/* CARD 3 */}
          <div className="mytrip-card">

            <img
              src="https://images.unsplash.com/photo-1493558103817-58b2924bce98"
              alt="trip"
            />

            <div className="trip-content">

              <h2>Kerala Adventure</h2>

              <p>
                <FaMapMarkerAlt /> Kerala
              </p>

              <span>
                7 Days • ₹26,000
              </span>

              <div className="trip-buttons">

                <button className="edit-btn">
                  <FaEdit /> Edit
                </button>

                <button className="delete-btn">
                  <FaTrash /> Delete
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
};

export default MyTrips;