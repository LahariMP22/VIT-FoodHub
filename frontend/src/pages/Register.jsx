import { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setMessage("Please fill in all fields.");
      return;
    }

    if (!formData.email.endsWith("@vitstudent.ac.in")) {
      setMessage("Please use your VIT student email.");
      return;
    }

    if (formData.password.length < 8) {
      setMessage("Password must contain at least 8 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    setMessage("Registration successful!");
  };

  return (
    <div className="register-page">
      <div className="register-card">

        <h1>VIT FoodHub</h1>
        <h2>Create Your Account</h2>

        <p className="subtitle">
          Register using your VIT student account
        </p>

        <form onSubmit={handleSubmit}>

          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
          />

          <label>VIT Email</label>
          <input
            type="email"
            name="email"
            placeholder="example@vitstudent.ac.in"
            value={formData.email}
            onChange={handleChange}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />

          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <button type="submit">
            Register
          </button>

        </form>

        {message && (
          <p className="message">
            {message}
          </p>
        )}

        <p className="login-link">
          Already have an account? <span>Login</span>
        </p>

      </div>
    </div>
  );
}

export default Register;