import React from "react";

const AnimatedBackgroundVector: React.FC = () => (
  <svg
    className="bg-vector"
    aria-hidden="true"
    viewBox="0 0 1200 800"
    style={{
      width: "100%",
      height: "100%",
      position: "absolute",
      left: 0,
      top: 0,
      zIndex: -1,
    }}
  >
    <defs>
      <linearGradient id="bgLine" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ffe600" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#ff3b3b" stopOpacity="0.25" />
      </linearGradient>
      <radialGradient id="orb" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ffe600" stopOpacity="0.18" />
        <stop offset="70%" stopColor="#ffe600" stopOpacity="0.04" />
        <stop offset="100%" stopColor="#ffe600" stopOpacity="0" />
      </radialGradient>
    </defs>
    <g
      className="drift"
      stroke="url(#bgLine)"
      strokeWidth={1.2}
      fill="none"
      opacity={0.55}
    >
      <path d="M0 200 Q300 120 600 200 T1200 200" />
      <path d="M0 400 Q300 320 600 400 T1200 400" />
      <path d="M0 600 Q300 520 600 600 T1200 600" />
    </g>
    <g className="drift2">
      <circle cx={900} cy={180} r={180} fill="url(#orb)" />
      <circle cx={300} cy={560} r={240} fill="url(#orb)" />
    </g>
  </svg>
);

export default AnimatedBackgroundVector;
