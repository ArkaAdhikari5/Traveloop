import "./Login.css";

import { Link, useNavigate } from "react-router-dom";

const Signup = () => {

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    navigate("/dashboard");
  };

  return (
    <>

      <div className="auth-page">

        <div className="auth-container">

          <h1>Create Account ✨</h1>

          <p>
            Join Traveloop and start planning adventures.
          </p>

          <form onSubmit={handleSignup}>

            {/* NAME */}
            <div className="form-group">

              <label>Full Name</label>

              <input
                type="text"
                placeholder="Enter your name"
                required
              />

            </div>

            {/* EMAIL */}
            <div className="form-group">

              <label>Email</label>

              <input
                type="email"
                placeholder="Enter your email"
                required
              />

            </div>

            {/* PASSWORD */}
            <div className="form-group">

              <label>Password</label>

              <input
                type="password"
                placeholder="Create password"
                required
              />

            </div>

            {/* BUTTON */}
            <button type="submit" className="auth-btn">
              Create Account
            </button>

          </form>

          <p className="bottom-text">
            Already have an account?
            <Link to="/login"> Login</Link>
          </p>

        </div>

      </div>
    </>
  );
};

export default Signup;