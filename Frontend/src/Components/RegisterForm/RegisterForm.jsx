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
    <form onSubmit={handleRegister}>
      <h2 className="Register">Register</h2>
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
      <br />
      <button type="submit" className="submit_button">Register</button>
    </form>
  );
}
