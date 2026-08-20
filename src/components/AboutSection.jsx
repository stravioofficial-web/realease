import { useEffect, useRef, useState } from "react";

function AboutSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -70px 0px",
      }
    );

    observer.observe(section);

    return () => {
      observer.unobserve(section);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`aboutSection ${visible ? "aboutVisible" : ""}`}
      id="about"
    >
      <div className="aboutInner">
        <div className="aboutMain">
          <div className="aboutContent">
            <h2>
              Built around the work behind{" "}
              <br />
              <span>every deal.</span>
            </h2>

            <p>
              <span className="aboutHighlight">
                We’ve sat on your side of the table
              </span>{" "}
              — building models, sizing debt and preparing investment committee materials. RealEase brings that experience to every deal, from first model to final memo.
            </p>
          </div>

          <div className="aboutVisualWrap">
            <img
              className="aboutVisual"
              src="/who-building.png"
              alt="Commercial real estate underwriting and investment analysis"
            />
            <div className="aboutVisualCaption">
              Institutional-grade underwriting, delivered with clarity.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;