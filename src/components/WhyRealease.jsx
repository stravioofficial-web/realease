import { useEffect, useRef, useState } from "react";

const reasons = [
  {
    number: "01",
    title: "Underwriting depth",
    text: "Institutional thinking behind every model.",
  },
  {
    number: "02",
    title: "One team, end to end",
    text: "One team stays connected across the deal.",
  },
  {
    number: "03",
    title: "Built around your workflow",
    text: "We fit the way your team already works.",
  },
  {
    number: "04",
    title: "Aligned with US hours",
    text: "Available when your deals are moving.",
  },
];

function WhyRealease() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();

      const scrollableDistance =
        section.offsetHeight - window.innerHeight;

      if (scrollableDistance <= 0) return;

      const scrolled = -rect.top;

      const newProgress = Math.min(
        Math.max(scrolled / scrollableDistance, 0),
        1
      );

      setProgress(newProgress);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="disperseSection"
    >
      <div className="disperseSticky">

        {/* HEADING */}

        <div className="disperseHeading">
          <h2>
            Built differently,
            <br />
            <span>for real estate.</span>
          </h2>
        </div>

        {/* CARDS */}

        <div className="disperseStage">
          {reasons.map((reason, index) => {
            /*
              Each card gets its own animation window.

              01 moves first
              02 moves second
              03 moves third
              04 moves last
            */

            /* Windows overlap and the last card's window ends
               exactly at progress 1, so the animation finishes
               right as the pin releases — no idle scrolling
               once the cards are done moving. */
            const start = index * 0.13;
            const end = start + 0.61;

            const cardProgress = Math.min(
              Math.max(
                (progress - start) / (end - start),
                0
              ),
              1
            );

            return (
              <article
                key={reason.number}
                className={`disperseCard disperseCard${index + 1}`}
                style={{
                  "--card-progress": cardProgress,
                  "--card-index": index,
                }}
              >
                <div className="disperseCardTop">
                  <span className="disperseNumber">
                    {reason.number}
                  </span>

                  <span className="disperseMiniLine" />
                </div>

                <div className="disperseCardContent">
                  <h3>{reason.title}</h3>

                  <p>{reason.text}</p>
                </div>
              </article>
            );
          })}
        </div>

        {/* SCROLL INDICATOR */}

        <div
          className="disperseScroll"
          style={{
            opacity: Math.max(1 - progress * 4, 0),
          }}
        >
          <span>SCROLL</span>
          <div className="disperseScrollLine" />
        </div>

      </div>
    </section>
  );
}

export default WhyRealease;