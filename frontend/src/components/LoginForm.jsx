
import { useState } from "react";
import axios from "axios";

const LoginForm = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:5000/auth/login", {
        username,
        password,
      });
      setToken(res.data.token);
    } catch (err) {
      alert("Invalid username or password",err);
    }
  };

  return (
    <div className="login-container">
      <h3 className="login-title">Login</h3>
      <input
        className="login-input"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="login-input"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="login-btn" onClick={login}>
        Login
      </button>
    </div>
  );
};

export default LoginForm;

