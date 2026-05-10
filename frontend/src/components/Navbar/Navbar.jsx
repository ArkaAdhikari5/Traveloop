import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">


      {/* Logo */}
      <div className="logo">
        <h2>Traveloop ✈️</h2>
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/activities">Activities</Link>
        <Link to="/citySearch">City Information</Link>
        <Link to="/my-trips">My Trips</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>

    </nav>
  );
};

export default Navbar;