import { Link } from "react-router-dom";
import "./Sign-Up.css";
import { useState } from "react";
import axios from "axios";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post(
        "https://olayiimiikas-blog-app-api.onrender.com/api/auth/register",
        {
          username,
          email,
          password,
        }
      );
      res.data &&
        window.location.replace(
         "https://olayiimiika-blog-app.netlify.app/Login"
        );
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="Sign-Up">
      <span className="Sign-UpTitle">Register</span>
      <form className="Sign-UpForm" onSubmit={handleSubmit}>
        {" "}
        <label>Username</label>
        <input
          type="text"
          className="Sign-UpInput"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          className="Sign-UpInput"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="Sign-UpInput"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="Sign-UpButton" type="submit">
          Sign-Up
        </button>
      </form>
      <button className="Sign-UpSign-upButton">
        <Link className="link" to="/Login">
          LOGIN
        </Link>
      </button>
      {error && (
        <span style={{ color: "red", marginTop: "10px" }}>
          Something went wrong!
        </span>
      )}
    </div>
  );
}
