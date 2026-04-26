import { useState } from "react";
import "./login.css";// reuse same CSS

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  
  return (
    <div className="wrapper">
      <div className="container">

        {/* LEFT SIDE IMAGE */}
        <div className="right">
          <div className="right-text">
            <h2>Join Us!</h2>
            <p>Create your account and start your journey</p>

            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="signup"
              style={{ width: "120px", marginTop: "20px" }}
            />
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="left">
          <h2 className="heading-container">Signup</h2>
          <p>Create your account to continue</p>

          {/* Google */}
          <a
            href="https://accounts.google.com/"
            target="_blank"
            rel="noreferrer"
            className="social-btn"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
              alt="Google"
              className="icon"
            />
            Sign up with Google
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            className="social-btn"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
              className="icon"
            />
            Sign up with Facebook
          </a>

        </div>

      </div>
    </div>
  );
}