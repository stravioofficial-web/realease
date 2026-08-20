import { useEffect, useRef, useState } from "react";

function VideoSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  /* Detect when section comes into view */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  /* Play video */
  const handlePlay = () => {
    setIsPlaying(true);

    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 100);
  };

  return (
    <section
      ref={sectionRef}
      className={`videoSection ${
        isVisible ? "videoSectionVisible" : ""
      }`}
    >
      {/* SUBTLE BACKGROUND EFFECT */}
      <div className="videoGlow"></div>

      {/* VIDEO DABBA */}
      <div className="videoFrame">

        {/* COVER IMAGE */}
        {!isPlaying && (
          <div className="videoCover">

            <img
              src="/reel-cover.png"
              alt="RealEase video preview"
            />

            {/* subtle dark overlay */}
            <div className="videoCoverOverlay"></div>

            {/* PLAY BUTTON */}
            <button
              className="videoPlayButton"
              onClick={handlePlay}
              aria-label="Play video"
            >
              <span className="playTriangle">
                ▶
              </span>
            </button>

          </div>
        )}

        {/* ACTUAL VIDEO */}
        {isPlaying && (
          <video
            ref={videoRef}
            className="realeaseVideo"
            src="https://res.cloudinary.com/rtozh6o5/video/upload/v1787240925/lv_0_20260815164452_p7pd3u.mp4"
            controls
            playsInline
          />
        )}

      </div>

    </section>
  );
}

export default VideoSection;