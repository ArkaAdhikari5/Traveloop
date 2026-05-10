import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // temporary logic (later connect backend)
    navigate("/"); 
  };

  return (
    <div className="login">
      <div className="login-container">

        {/* LEFT SIDE */}
        <div className="login-left">
          <h1>
            Welcome Back to <span>ChainRaiser</span>
          </h1>
          <p>
            Continue your journey in transparent fundraising and smart investing.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="login-right">
          <h2>Login</h2>

          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button onClick={handleLogin}>Login</button>

          <p className="signup-text">
            Don’t have an account? <span onClick={() => navigate("/signup")}>Sign Up</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;