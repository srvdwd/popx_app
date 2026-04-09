import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthForm.css";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    /* In a real app, validate credentials here. */
    navigate("/profile");
  };

  return (
    <div className="page-shell">
      <div className="phone-frame auth-frame">
        <div className="auth-content">
          <h1 className="auth-title">
            Signin to your
            <br />
            PopX account
          </h1>
          <p className="auth-subtitle">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit.
          </p>

          <form className="auth-form" onSubmit={handleLogin} noValidate>
            {/* Email */}
            <div className="field-group">
              <label className="field-label" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter email address"
                className="field-input"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password */}
            <div className="field-group">
              <label className="field-label" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter password"
                className="field-input"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary submit-btn">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
