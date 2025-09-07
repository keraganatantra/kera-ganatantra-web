import Contribute from "./Contribute";
import IssueCard from "./IssueCard";
import { ImpactSection } from "./scandal/ImpactSection";
import VideoTrigger from "./VideoTrigger";

export default function MainContent() {
  return (
    <main className="wrap">
      <section className="hero" aria-label="Hero">
        <div>
          <div className="kicker">केरा गणतन्त्र • Citizen Protest</div>
          <h2 className="title">
            NO TO{" "}
            <span
              style={{
                background: "linear-gradient(180deg, #ffe600, #ffc400)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              CORRUPTION
            </span>
            .<br />
            <span style={{ color: "var(--success)", fontWeight: 700 }}>
              PROTECT OUR DEMOCRACY.
            </span>
          </h2>
          <p className="subtitle">
            Nepal deserves accountable leadership and free expression. This page
            is a peaceful, creative stand against systemic <b>corruption</b> and
            attempts to <b>silence citizens</b> online. Raise your voice. Share
            the message.
          </p>
        </div>
        <div className="art" aria-hidden="true">
          <div className="censor-overlay" aria-hidden="true">
            <span className="word">CENSORED/SILENCED</span>
          </div>
          {/* SVG art */}
          <svg
            viewBox="0 0 540 420"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
          >
            <defs>
              <linearGradient id="bananaG" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#FFE600" />
                <stop offset="1" stopColor="#FFC400" />
              </linearGradient>
              <filter id="grain">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.8"
                  numOctaves="2"
                  stitchTiles="stitch"
                />
                <feColorMatrix type="saturate" values="0" />
                <feBlend mode="soft-light" in2="SourceGraphic" />
              </filter>
            </defs>
            <rect width="100%" height="100%" rx="24" fill="#121216" />
            <g filter="url(#grain)"></g>
            <g transform="translate(70,40)" className="banana-anchor">
              <g className="banana-gavel">
                <path
                  d="M20 160c60 90 220 90 280-50 14-33-18-68-56-56-60 18-98 6-150 0-52-6-90 70-74 106z"
                  fill="url(#bananaG)"
                  stroke="#0f0f10"
                  strokeWidth={8}
                />
                <rect
                  x={270}
                  y={60}
                  width={150}
                  height={28}
                  rx={14}
                  fill="#d9a35b"
                  stroke="#0f0f10"
                  strokeWidth={6}
                />
                <rect
                  x={390}
                  y={54}
                  width={28}
                  height={40}
                  rx={10}
                  fill="#b8833d"
                  stroke="#0f0f10"
                  strokeWidth={6}
                />
                <circle cx={300} cy={74} r={6} fill="#0f0f10" />
              </g>
            </g>
            <g
              className="sound-lines"
              stroke="#ffe600"
              strokeWidth={6}
              strokeLinecap="round"
              opacity={0.9}
            >
              <path d="M420 120h40" />
              <path d="M430 145h60" />
              <path d="M440 170h40" />
            </g>
          </svg>
        </div>
      </section>

      <section className="video-embed" aria-label="Video message">
        <div
          className="video-placeholder"
          style={{ textAlign: "center", padding: "24px 0" }}
        >
          <VideoTrigger />
          <noscript>
            <p style={{ marginTop: 12 }}>
              <a
                className="btn"
                href="https://youtu.be/X-UMOhxbW74"
                target="_blank"
                rel="noopener"
              >
                Watch Video
              </a>
            </p>
          </noscript>
        </div>
      </section>

      <ImpactSection />

      <section className="grid" aria-label="Key issues">
        <IssueCard
          tag="Corruption"
          svg={
            <svg
              className="corner"
              viewBox="0 0 120 120"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 100c40 30 80-20 70-60"
                fill="none"
                stroke="#ffe600"
                strokeWidth={10}
              />
            </svg>
          }
          title="Accountability Now"
          text="Nepal deserves accountable leaders, fair tenders, and budgets the public can see. Corruption steals from classrooms, clinics, and every citizen’s future. Silencing voices only protects the corrupt, let the people speak."
        />
        <IssueCard
          tag="Free Speech"
          svg={
            <svg
              className="corner"
              viewBox="0 0 120 120"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x={10}
                y={70}
                width={100}
                height={30}
                rx={8}
                fill="#ff3b3b"
              />
            </svg>
          }
          title="No Social Media Ban"
          text="Attempts to block platforms silence journalists, creators, and citizens. Real democracies debate they don’t disconnect. Keep the internet open and inclusive."
        />
        <IssueCard
          tag="Rights"
          svg={
            <svg
              className="corner"
              viewBox="0 0 120 120"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 90l30-30 30 30"
                stroke="#ffe600"
                strokeWidth={10}
                fill="none"
              />
            </svg>
          }
          title="Peaceful Protest"
          text="Organize peacefully, document responsibly, and look out for one another. The goal is reform, not chaos. We stand for dignity and rights for all Nepalis."
        />
        <IssueCard
          tag="Digital"
          svg={
            <svg
              className="corner"
              viewBox="0 0 120 120"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx={60}
                cy={60}
                r={40}
                stroke="#ff3b3b"
                strokeWidth={10}
                fill="none"
              />
            </svg>
          }
          title="Protect Yourself"
          text="Use 2FA, VPNs, and fact-check before sharing. Stay safe online and keep the fight for free expression strong."
        />
      </section>

      <section
        className="grid"
        style={{ marginTop: 56 }}
        aria-label="How to support"
      >
        <article className="card" style={{ gridColumn: "span 16" }}>
          <div className="tag">Take Action</div>
          <h3>4 Ways to Make Your Voice Heard Today</h3>
          <ol style={{ margin: "10px 0 0 20px", lineHeight: 1.7 }}>
            <li>
              Share this page and <b>#LetNepalSpeak</b> across your social
              networks.
            </li>
            <li>
              Display a poster in your window, shop, campus, or community board.
            </li>
            <li>
              Contact your local representatives. Demand transparency,
              accountability, and an end to blanket censorship.
            </li>
            <li>
              <b>“Hamro lai haina, ramro lai chhanam”</b> – support the right
              leaders, not just familiar faces.
            </li>
          </ol>
        </article>
      </section>

      <Contribute />

      <footer>
        <div>
          <span>Made by citizens for citizens. ✊</span>
          <span className="mono">केरा गणतन्त्र • Kera Ganatantra</span>
        </div>
        <div className="share-links" style={{ marginTop: 12 }}>
          <a
            href="https://twitter.com/intent/tweet?text=Raise%20your%20voice%20for%20Nepal%20against%20corruption%20and%20censorship!%20%23LetNepalSpeak%20https://keraganatantra.com"
            target="_blank"
            rel="noopener"
            aria-label="Share on Twitter"
            className="btn"
            style={{ marginRight: 8 }}
          >
            Share on Twitter
          </a>
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https://keraganatantra.com"
            target="_blank"
            rel="noopener"
            aria-label="Share on Facebook"
            className="btn"
            style={{ marginRight: 8 }}
          >
            Share on Facebook
          </a>
          <a
            href="https://wa.me/?text=Raise%20your%20voice%20for%20Nepal%20against%20corruption%20and%20censorship!%20%23LetNepalSpeak%20https://keraganatantra.com"
            target="_blank"
            rel="noopener"
            aria-label="Share on WhatsApp"
            className="btn"
          >
            Share on WhatsApp
          </a>
        </div>
      </footer>
    </main>
  );
}
