import React from "react";
import "./Profile.css";

function CameraIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="white"
      width="14"
      height="14"
      aria-hidden="true"
    >
      <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-10.97L17.5 3h-3l-1.83 2H8.33L6.5 3h-3L1.57 4.53A1.5 1.5 0 0 0 1 5.75V18c0 .83.67 1.5 1.5 1.5h19c.83 0 1.5-.67 1.5-1.5V5.75c0-.49-.23-.94-.57-1.22zM12 17a5 5 0 0 1-5-5 5 5 0 0 1 5-5 5 5 0 0 1 5 5 5 5 0 0 1-5 5z" />
    </svg>
  );
}

function Profile() {
  return (
    <div className="page-shell">
      <div className="phone-frame profile-frame">
        {/* ── Top bar ── */}
        <div className="profile-topbar">
          <h2 className="profile-topbar-title">Account Settings</h2>
        </div>

        {/* ── Divider ── */}
        <div className="profile-divider-top" />

        {/* ── User card ── */}
        <div className="profile-user-section">
          {/* Avatar with camera badge */}
          <div className="avatar-wrapper">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Marry Doe"
              className="avatar-img"
            />
            <span className="avatar-camera-badge" aria-label="Change photo">
              <CameraIcon />
            </span>
          </div>

          {/* Name + email */}
          <div className="profile-user-info">
            <p className="profile-user-name">Marry Doe</p>
            <p className="profile-user-email">Marry@Gmail.Com</p>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="profile-divider" />

        {/* ── Bio / lorem block ── */}
        <div className="profile-bio-section">
          <p className="profile-bio-text">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>

        {/* ── Bottom divider ── */}
        <div className="profile-divider" />
      </div>
    </div>
  );
}

export default Profile;
