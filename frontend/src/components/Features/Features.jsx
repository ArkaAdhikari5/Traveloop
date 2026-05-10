import "./Features.css";
import {
  FaMapMarkedAlt,
  FaWallet,
  FaCalendarAlt,
  FaUsers,
} from "react-icons/fa";

const Features = () => {
  return (
    <section className="features">

      <div className="features-header">
        <h1>Why Choose Traveloop?</h1>
        <p>
          Smart travel planning tools designed to make
          your journey simple, organized, and exciting.
        </p>
      </div>

      <div className="features-container">

        {/* Card 1 */}
        <div className="feature-card">
          <FaMapMarkedAlt className="feature-icon" />

          <h2>Multi-City Planning</h2>

          <p>
            Build customized itineraries with multiple
            destinations and seamless trip organization.
          </p>
        </div>

        {/* Card 2 */}
        <div className="feature-card">
          <FaWallet className="feature-icon" />

          <h2>Budget Tracking</h2>

          <p>
            Monitor expenses, estimate travel costs,
            and stay within your planned budget easily.
          </p>
        </div>

        {/* Card 3 */}
        <div className="feature-card">
          <FaCalendarAlt className="feature-icon" />

          <h2>Smart Itinerary</h2>

          <p>
            Organize daily activities, schedules,
            and travel timelines visually.
          </p>
        </div>

        {/* Card 4 */}
        <div className="feature-card">
          <FaUsers className="feature-icon" />

          <h2>Share Trips</h2>

          <p>
            Share your travel plans publicly or
            collaborate with friends and family.
          </p>
        </div>

      </div>

    </section>
  );
};

export default Features;