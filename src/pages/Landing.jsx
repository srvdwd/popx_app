import React from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";

const DOTS = [
  { id: 1, top: 38, left: 39 },
  { id: 2, top: 46, left: 32 },
  { id: 3, top: 54, left: 37 },
  { id: 4, top: 61, left: 45 },
  { id: 5, top: 68, left: 53 },
  { id: 6, top: 25, left: 22 },
  { id: 7, top: 31, left: 30 },
  { id: 8, top: 12, left: 60 },
  { id: 12, top: 6, left: 10 },
  { id: 13, top: 72, left: 25 },
  { id: 14, top: 63, left: 64 },
];

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="page-shell">
      <div className="phone-frame landing-frame">
        {/* ── Illustration area with floating dots ── */}
        <div className="landing-illustration">
          {DOTS.map((dot) => (
            <span
              key={dot.id}
              className="dot"
              style={{ top: `${dot.top}%`, left: `${dot.left}%` }}
            />
          ))}
        </div>

        {/* ── Bottom content card ── */}
        <div className="landing-content">
          <h1 className="landing-title">
            Welcome to <span className="brand">PopX</span>
          </h1>
          <p className="landing-subtitle">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit.
          </p>

          <button
            className="btn btn-primary"
            onClick={() => navigate("/signup")}
          >
            Create Account
          </button>

          <button
            className="btn btn-secondary"
            onClick={() => navigate("/login")}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
