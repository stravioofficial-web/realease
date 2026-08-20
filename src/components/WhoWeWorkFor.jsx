import { useEffect, useRef, useState } from "react";

const clients = [
  "Real estate investors & syndicators",
  "Private equity firms & funds",
  "Property management companies",
  "Developers & owners",
  "Small & mid-sized firms",
];

function WhoWeWorkFor() {
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
        threshold: 0.12,
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
      className={`whoSection ${visible ? "whoVisible" : ""}`}
      id="serve"
    >
      <div className="whoInner">

        <div className="whoHeading">
          <h2 className="builtTeamsTitle">
            Built for teams
            <br />
            <span>that have to move fast.</span>
          </h2>
        </div>

        <div className="whoContent">

          {/* LEFT — CLIENT TYPES */}
          <div className="whoList">
            {clients.map((client, index) => (
              <article
                className="whoItem"
                key={client}
                style={{
                  "--who-delay": `${0.2 + index * 0.12}s`,
                }}
              >
                <span className="whoNumber">0{index + 1}</span>
                <h3>{client}</h3>
              </article>
            ))}
          </div>

          {/* RIGHT — ARCHITECTURAL VISUAL */}
          <div className="whoVisual" />

        </div>
      </div>
    </section>
  );
}

export default WhoWeWorkFor;