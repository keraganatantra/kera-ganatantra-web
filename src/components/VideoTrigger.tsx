import { useState } from "react";

export default function VideoTrigger() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div style={{ textAlign: "center", padding: "24px 0" }}>
      {showVideo ? (
        <div className="video-frame">
          <iframe
            src="https://www.youtube.com/embed/X-UMOhxbW74?autoplay=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{
              width: "100%",
              border: "none",
              borderRadius: "12px",
            }}
          />
        </div>
      ) : (
        <button
          className="btn"
          type="button"
          aria-label="Play video message"
          style={{
            fontSize: "1rem",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
          }}
          onClick={() => setShowVideo(true)}
        >
          <span>
            जोगी आउँछन्, हजुर, देउताको भेषमा
            <br />
            जनताभन्दा, हजुर, नेता छन् यो देशमा
            <br />
            फूल फुलेर के गर्नु? भीरैभीरमा छ<br />
            जिन्दगी चल्न त चल्याछ, पीरैपीरमा छ
          </span>
          <span style={{ fontSize: "1.2em", lineHeight: 1, marginLeft: 30 }}>
            ▶
          </span>
        </button>
      )}
    </div>
  );
}
