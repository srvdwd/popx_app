import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthForm.css";

function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/profile");
  };

  return (
    <div className="page-shell">
      <div className="phone-frame auth-frame">
        <div className="auth-content">
          <h1 className="auth-title">
            Create your
            <br />
            PopX account
          </h1>

          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            {/* Full Name */}
            <div className="field-group">
              <label className="field-label required" htmlFor="fullName">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Marry Doe"
                className="field-input"
                value={form.fullName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone */}
            <div className="field-group">
              <label className="field-label required" htmlFor="phone">
                Phone number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Marry Doe"
                className="field-input"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="field-group">
              <label className="field-label required" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Marry Doe"
                className="field-input"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password */}
            <div className="field-group">
              <label className="field-label required" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Marry Doe"
                className="field-input"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            {/* Company */}
            <div className="field-group">
              <label className="field-label" htmlFor="company">
                Company name
              </label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Marry Doe"
                className="field-input"
                value={form.company}
                onChange={handleChange}
              />
            </div>

            {/* Agency radio */}
            <div className="field-group">
              <p className="field-label required">Are you an Agency?</p>
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="isAgency"
                    value="yes"
                    checked={form.isAgency === "yes"}
                    onChange={handleChange}
                    className="radio-input"
                  />
                  <span className="radio-custom" />
                  Yes
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="isAgency"
                    value="no"
                    checked={form.isAgency === "no"}
                    onChange={handleChange}
                    className="radio-input"
                  />
                  <span className="radio-custom" />
                  No
                </label>
              </div>
            </div>

            <button type="submit" className="btn btn-primary submit-btn">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
