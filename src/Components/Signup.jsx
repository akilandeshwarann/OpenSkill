import React, { useState } from "react";
import "./Signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function Signup() {
  const [inputdata, setInput] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setInput({ ...inputdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/profile", inputdata);
      alert("Account created successfully!");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert("Error creating account");
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit}>
        <div className="input">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={inputdata.username}
            onChange={handleChange}
          />
        </div>

        <div className="input">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={inputdata.email}
            onChange={handleChange}
          />
        </div>

        <div className="input">
          <FontAwesomeIcon icon={faLock} className="icon" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={inputdata.password}
            onChange={handleChange}
          />
        </div>

        <div className="input">
          <FontAwesomeIcon icon={faLock} className="icon" />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={inputdata.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="signup-btn">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
