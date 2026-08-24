import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");
    setMessage("");

    // Check empty fields
    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    // Check VIT email
    if (!email.endsWith("@vitstudent.ac.in")) {
      setError("Please use your VIT student email.");
      return;
    }

    // Frontend login success
    setMessage("Login successful!");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>VIT FoodHub</h1>

        <h2>Welcome Back!</h2>

        <p className="subtitle">
          Login using your VIT student account
        </p>

        <form onSubmit={handleLogin}>
          <label>VIT Email</label>

          <input
            type="email"
            placeholder="yourname@vitstudent.ac.in"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Login
          </button>
        </form>

        {error && <p className="error-message">{error}</p>}

        {message && <p className="success-message">{message}</p>}

        <p className="register-link">
          Don't have an account? <span>Register</span>
        </p>
      </div>
    </div>
  );
}

export default Login;