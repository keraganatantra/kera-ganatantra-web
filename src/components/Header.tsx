import React from "react";

const Header: React.FC = () => (
  <header>
    <div className="wrap topbar">
      <div className="brand">
        {/* Mini logo: banana + megaphone */}
        <svg
          aria-hidden="true"
          width="28"
          height="28"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#FFE600" />
              <stop offset="1" stopColor="#FFC400" />
            </linearGradient>
          </defs>
          <path
            d="M10 42c8 10 28 10 36-6 2-4-1-10-7-8-7 2-11 0-17-1-6-1-10 8-12 15z"
            fill="url(#g1)"
            stroke="#141414"
            strokeWidth="3"
          />
          <path d="M48 13l10 6-6 10-10-6 6-10z" fill="#ff3b3b" />
          <path
            d="M40 19l12 7"
            stroke="#fff"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        <h1>
          Kera Ganatantra
          <span className="badge">“Banana Republic”</span>
        </h1>
      </div>
    </div>
  </header>
);

export default Header;
