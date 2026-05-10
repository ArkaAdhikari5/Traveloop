import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      {/* TOP SECTION */}
      <div className="footer-top">

        {/* BRAND */}
        <div className="footer-brand">
          <h1>Traveloop ✈️</h1>

          <p>
            Personalized travel planning made easy.
            Build itineraries, manage budgets,
            and explore the world smarter.
          </p>

          {/* SOCIAL ICONS */}
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>

        {/* LINKS */}
        <div className="footer-links">

          <div className="footer-column">
            <h3>Company</h3>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>

          <div className="footer-column">
            <h3>Features</h3>
            <a href="#">Trip Planner</a>
            <a href="#">Budget Tracker</a>
            <a href="#">Activities</a>
            <a href="#">Sharing</a>
          </div>

          <div className="footer-column">
            <h3>Support</h3>
            <a href="#">Help Center</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">FAQ</a>
          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>
          © 2026 Traveloop. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;