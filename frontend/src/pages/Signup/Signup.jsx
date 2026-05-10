import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (role === "founder") {
      navigate("/founder-dashboard");
    } else if (role === "investor") {
      navigate("/investor-dashboard");
    } else {
      alert("Please select a role");
    }
  };

  return (
    <div className="signup">
      <div className="signup-container">
        
        {/* LEFT SIDE */}
        <div className="signup-left">
          <h1>
            Join <span>ChainRaiser</span>
          </h1>
          <p>
            Raise funds or invest in startups with complete transparency.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="signup-right">
          <h2>Create Account</h2>

          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Re-enter password" />


          <p className="role-title">Join as</p>

          <div className="roles">
            <div
              className={`role-card ${role === "founder" ? "active" : ""}`}
              onClick={() => setRole("founder")}
            >
              <h3>👨‍💼 Startup</h3>
              <p>Raise funds for your startup</p>
            </div>

            <div
              className={`role-card ${role === "investor" ? "active" : ""}`}
              onClick={() => setRole("investor")}
            >
              <h3>💰 Investor</h3>
              <p>Invest in startups</p>
            </div>
          </div>

          <button onClick={handleSignup}>Create Account</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;