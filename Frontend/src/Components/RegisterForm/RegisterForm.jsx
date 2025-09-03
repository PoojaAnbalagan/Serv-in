import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterForm.css"

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    localStorage.setItem("user", JSON.stringify({ username, password }));

    alert("Registered successfully!");
    navigate("/login"); // redirect to login
  };

  return (
    <div className="register">
    <div className="title1">
    <h1 className="title">SERV-IN</h1>
    <h2 className="slogan">Quick Help, Right at Your Doorstep.</h2>
    </div>
    <div className="signup">
    <form onSubmit={handleRegister}>
      <h2 className="Register">Sign Up</h2>

      <div className="input_fields">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required className="username"
      />
      <br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required className="Password"
      />
      </div>

      <br />
      <button type="submit" className="signup_button">Sign Up</button>
    </form>
    </div>
    </div>
    
  );
}
