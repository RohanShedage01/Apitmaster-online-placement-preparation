import { useState } from "react";
import "./login.css";


export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login form submitted:", formData);
  };
  
  return (
    <div className="auth-wrapper">
      <div className="auth-container">

        {/* LEFT SIDE */}
        <div className="auth-left">
          <h2 className="auth-heading-container">Login</h2>
          <p>Enter to improve your sleep and bring peace to your life</p>

          {/* Google */}
          <a
            href="https://accounts.google.com/"
            target="_blank"
            rel="noreferrer"
            className="auth-social-btn"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
              alt="Google"
              className="auth-icon"
            />
            Sign in with Google
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            className="auth-social-btn"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
              className="auth-icon"
            />
            Sign in with Facebook
          </a>
          {/* FORM */}
          <form onSubmit={handleSubmit}>
            <div className="auth-divider">or</div>

            <label>Email</label>
            <input
              type="email"
              name="email"
              className="auth-input-field"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              className="auth-input-field"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button type="submit" className="login-btn">
              Login
            </button>
          </form>


           
        </div>

        {/* RIGHT SIDE */}
        <div className="auth-right">
          <div className="auth-right-text">
            <h2>Welcome Back!</h2>
            <p>Don't have an account? <a href="/signup">Sign up</a> now.</p>
          </div>
        </div>

      </div>
    </div>
  );
}