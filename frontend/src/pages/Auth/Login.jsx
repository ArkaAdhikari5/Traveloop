import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    navigate("/dashboard");
  };

  return (
    <>


      <div className="auth-page">

        <div className="auth-container">

          <h1>Welcome Back 👋</h1>

          <p>
            Login to continue planning your trips.
          </p>

          <form onSubmit={handleLogin}>

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
                placeholder="Enter your password"
                required
              />

            </div>

            {/* BUTTON */}
            <button type="submit" className="auth-btn">
              Login
            </button>

          </form>

          <p className="bottom-text">
            Don’t have an account?
            <Link to="/signup"> Signup</Link>
          </p>

        </div>

      </div>
    </>
  );
};

export default Login;