import React from "react";

const GITHUB_REPO_URL = "https://github.com/keraganatantra/kera-ganatantra-web";

const Contribute: React.FC = () => {
  return (
    <section
      className="strip"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "2rem 2rem",
        borderRadius: "12px",
        boxShadow: "0 4px 16px rgba(60,72,88,0.08)",
        margin: "2rem 0",
      }}
    >
      <div style={{ flex: 1, textAlign: "left" }}>
        <p style={{ fontSize: "1.15rem", margin: 0 }}>
          This project is an{" "}
          <span style={{ color: "#16a34a", fontWeight: 600 }}>
            open-source initiative
          </span>
          .<br />
          If you have data to contribute or ideas for new features, please visit
          our GitHub repository and raise a pull request!
        </p>
      </div>
      <div style={{ flexShrink: 0, marginLeft: "2rem" }}>
        <a
          href={GITHUB_REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="contribute-link"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.85rem 2rem",
            background: "#24292f",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1.1rem",
            boxShadow: "0 2px 8px rgba(36,41,47,0.08)",
            transition: "background 0.2s, transform 0.2s",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = "#444d56";
            e.currentTarget.style.transform = "translateY(-2px) scale(1.03)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = "#24292f";
            e.currentTarget.style.transform = "none";
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 7.07c.85.004 1.71.12 2.51.35 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"
              fill="#fff"
            />
          </svg>
          View on GitHub
        </a>
      </div>
    </section>
  );
};

export default Contribute;
