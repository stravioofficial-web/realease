import { useEffect, useRef, useState } from "react";

const tools = [
  {
    name: "ARGUS Enterprise",
    logo: "/logos/ARGUS-Enterprise-logo.png",
  },
  {
    name: "Yardi",
    logo: "/logos/yardi-logo-white.png",
  },
  {
    name: "AppFolio",
    logo: "/logos/AppFolio-logo-white.png",
  },
  {
    name: "QuickBooks",
    logo: "/logos/QuickBooks-logo-clean.png",
  },
  {
    name: "MRI",
    logo: "/logos/MRI-logo-clean.png",
  },
  {
    name: "RealPage",
    logo: "/logos/RealPage-logo-white.png",
  },
  {
    name: "Rabbet",
    logo: "/logos/Rabbet-logo-clean.png",
  },
  {
    name: "Buildium",
    logo: "/logos/Buildium-logo-clean.png",
  },
  {
    name: "Microsoft Excel",
    logo: "/logos/MicrosoftExcel-logo-white.png",
  },
  {
    name: "Sage",
    logo: "/logos/Sage-logo-white.png",
  },
];

function YourSystems() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px",
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
      className={`systemsSection ${
        visible ? "systemsVisible" : ""
      }`}
    >
      <div className="systemsInner">

        <div
          className="systemsArchitectural"
          aria-hidden="true"
        />

        <div className="systemsContent">

          <div className="systemsText">

            <h2>
              We move smoothly through the tools
              <br />
              <span>
                your team already relies on.
              </span>
            </h2>

          </div>

          <div
            className="systemsMarquee"
            role="presentation"
            aria-label="Software and systems used by RealEase"
          >
            <div className="systemsTrack">

              {[...tools, ...tools, ...tools].map(
                (tool, index) => (
                  <div
                    className="marqueeItem"
                    key={`${tool.name}-${index}`}
                  >
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className="logoMark"
                    />
                  </div>
                )
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default YourSystems;
