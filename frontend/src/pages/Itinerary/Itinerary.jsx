import "./Itinerary.css";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const Itinerary = () => {
  return (
    <>

      <div className="itinerary-page">

        {/* HEADER */}
        <div className="itinerary-header">
          <h1>Trip Itinerary 🌍</h1>

          <button className="add-stop-btn">
            + Add Stop
          </button>
        </div>

        {/* TIMELINE */}

        <div className="timeline">

          {/* STOP 1 */}
          <div className="timeline-card">

            <div className="timeline-top">
              <h2>
                <FaMapMarkerAlt /> Kolkata
              </h2>

              <span>
                <FaCalendarAlt /> Day 1 - Day 2
              </span>
            </div>

            <div className="activities">

              <div className="activity">
                <h3>Victoria Memorial</h3>
                <p>10:00 AM • ₹500</p>
              </div>

              <div className="activity">
                <h3>Park Street Food Tour</h3>
                <p>7:00 PM • ₹1200</p>
              </div>

            </div>

          </div>

          {/* STOP 2 */}
          <div className="timeline-card">

            <div className="timeline-top">
              <h2>
                <FaMapMarkerAlt /> Darjeeling
              </h2>

              <span>
                <FaCalendarAlt /> Day 3 - Day 5
              </span>
            </div>

            <div className="activities">

              <div className="activity">
                <h3>Tiger Hill Sunrise</h3>
                <p>5:00 AM • ₹800</p>
              </div>

              <div className="activity">
                <h3>Tea Garden Visit</h3>
                <p>2:00 PM • ₹600</p>
              </div>

            </div>

          </div>

          {/* STOP 3 */}
          <div className="timeline-card">

            <div className="timeline-top">
              <h2>
                <FaMapMarkerAlt /> Gangtok
              </h2>

              <span>
                <FaCalendarAlt /> Day 6 - Day 7
              </span>
            </div>

            <div className="activities">

              <div className="activity">
                <h3>Tsomgo Lake Tour</h3>
                <p>11:00 AM • ₹1500</p>
              </div>

              <div className="activity">
                <h3>MG Marg Walk</h3>
                <p>6:00 PM • ₹300</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
};

export default Itinerary;