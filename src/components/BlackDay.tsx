import React from "react";
import { Link } from "react-router-dom";

const CasualtyToll: React.FC = () => {
  const deathsTarget = 50;
  const injuredTarget = 1300;

  const prefersReduced = React.useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  // Simple count-up hook (inline for this file)
  const useCountUp = (target: number, duration = 1600) => {
    const [val, setVal] = React.useState(prefersReduced ? target : 0);
    const startedRef = React.useRef(false);
    const nodeRef = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
      if (prefersReduced) return; // No animation
      const el = nodeRef.current;
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting && !startedRef.current) {
              startedRef.current = true;
              const start = performance.now();
              const animate = (t: number) => {
                const p = Math.min(1, (t - start) / duration);
                const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
                setVal(Math.round(eased * target));
                if (p < 1) requestAnimationFrame(animate);
              };
              requestAnimationFrame(animate);
            }
          });
        },
        { threshold: 0.4 }
      );
      observer.observe(el);
      return () => observer.disconnect();
    }, [target, duration, prefersReduced]);

    return { value: val, ref: nodeRef } as const;
  };

  const deaths = useCountUp(deathsTarget, 1800);
  const injured = useCountUp(injuredTarget, 1800);

  return (
    <section aria-labelledby="casualty-heading">
      <div className="casualty-head">
        <h3 id="casualty-heading" className="title">
          Human Cost
        </h3>
      </div>
      <div className="stat-grid" role="list">
        <div
          role="listitem"
          className="stat-card focusable"
          tabIndex={0}
          aria-label={`Confirmed deaths ${deathsTarget} +`}
        >
          <div className="stat-label mono">Confirmed Deaths</div>
          <div
            ref={deaths.ref}
            className="stat-value deaths"
            data-target={deathsTarget}
          >
            {deaths.value}+
          </div>
        </div>
        <div
          role="listitem"
          className="stat-card focusable"
          tabIndex={0}
          aria-label={`Injured ${injuredTarget} +`}
        >
          <div className="stat-label mono">Injured</div>
          <div
            ref={injured.ref}
            className="stat-value injured"
            data-target={injuredTarget}
          >
            {injured.value}+
          </div>
        </div>
      </div>
      <p className="stat-disclaimer">
        Figures are changing; for more accurate information, please do your own
        research. These were the figures as of 13 Sept 2025. Every life lost and
        every injury matters; this memorial honors them without endorsing any
        form of violence.
      </p>
    </section>
  );
};

const BlackDay: React.FC = () => {
  return (
    <main className="wrap" style={{ paddingTop: 48 }}>
      <section className="hero" aria-label="Black Day – Memorial">
        <div>
          <div className="kicker" style={{ color: "#ff3b3b" }}>
            REST IN PEACE BEAUTIFUL SOULS
          </div>
          <h2 className="title" style={{ lineHeight: 1.1 }}>
            We remember the students & young voices lost.
          </h2>
          <p className="subtitle" style={{ maxWidth: 780 }}>
            The government that kills its own children, crushing not only young
            lives but also the dreams and hopes of an entire generation, has
            revealed its true face, monsters in human form who fear the voices
            of their own people more than justice and truth.
          </p>
        </div>
        <div className="art" aria-hidden="true">
          <svg
            viewBox="0 0 520 360"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
          >
            <defs>
              <linearGradient id="memG" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#2a2a2e" />
                <stop offset="1" stopColor="#111" />
              </linearGradient>
              <linearGradient id="candle" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#ffe9b0" />
                <stop offset="1" stopColor="#ff9d2e" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" rx="24" fill="url(#memG)" />
            <g>
              {Array.from({ length: 7 }).map((_, i) => (
                <g key={i} transform={`translate(${70 + i * 60}, 60)`}>
                  <rect
                    x={-8}
                    y={40}
                    width={16}
                    height={90}
                    rx={4}
                    fill="#222"
                    stroke="#333"
                  />
                  <rect
                    x={-6}
                    y={42}
                    width={12}
                    height={60}
                    rx={3}
                    fill="#2d2d2f"
                  />
                  <circle cx={0} cy={38} r={10} fill="#111" />
                  <path
                    d="M0 22c4 3 6 7 6 11 0 5-3 10-6 10s-6-5-6-10c0-4 2-8 6-11z"
                    fill="url(#candle)"
                  />
                  <circle cx={0} cy={24} r={3} fill="#fff3d5" />
                </g>
              ))}
            </g>
            <text
              x="50%"
              y="310"
              textAnchor="middle"
              fontSize="28"
              fontFamily="system-ui, sans-serif"
              fill="#ffe600"
              style={{ fontWeight: 600 }}
            >
              NEVER SILENCED
            </text>
          </svg>
        </div>
      </section>

      {/* Casualty toll section */}
      <CasualtyToll />

      <footer style={{ marginTop: 56 }}>
        <div>
          <span>
            In memory of the lives lost we continue the peaceful call for
            change.
          </span>
          <span className="mono">केरा गणतन्त्र • Kera Ganatantra</span>
        </div>
        <p style={{ marginTop: 12, fontSize: 12, opacity: 0.7 }}>
          No endorsement of violence. This page condemns all unlawful force and
          promotes peaceful civic engagement.
        </p>
        <div style={{ marginTop: 12 }}>
          <Link to="/dashboard" className="btn" aria-label="Back to main page">
            ← Back Home
          </Link>
        </div>
      </footer>
    </main>
  );
};

export default BlackDay;
