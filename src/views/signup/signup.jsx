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

        
        </div>

      </div>
    </div>
  );
}