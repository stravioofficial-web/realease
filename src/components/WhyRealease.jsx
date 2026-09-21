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
  const touchStartX = useRef(null);
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

  const activeIndex =
    progress < 0.22 ? 0 : progress < 0.48 ? 1 : progress < 0.74 ? 2 : 3;

  const scrollToCard = (index) => {
    if (!sectionRef.current || typeof window === "undefined") return;
    const section = sectionRef.current;
    const scrollableDistance = section.offsetHeight - window.innerHeight;
    const targetPercentages = [0.03, 0.32, 0.60, 0.90];
    const targetTop = section.offsetTop + targetPercentages[index] * scrollableDistance;
    window.scrollTo({ top: targetTop, behavior: "smooth" });
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0 && activeIndex < 3) {
        scrollToCard(activeIndex + 1);
      } else if (diff < 0 && activeIndex > 0) {
        scrollToCard(activeIndex - 1);
      }
    }
    touchStartX.current = null;
  };

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
        <div
          className="disperseStage"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {reasons.map((reason, index) => {
            /* Desktop horizontal spread window */
            const start = index * 0.13;
            const end = start + 0.61;

            const cardProgress = Math.min(
              Math.max(
                (progress - start) / (end - start),
                0
              ),
              1
            );

            /* Mobile stacking window */
            const enterStart = index === 0 ? 0 : 0.08 + (index - 1) * 0.26;
            const enterEnd = index === 0 ? 0 : enterStart + 0.20;
            const mobileIn =
              index === 0
                ? 1
                : Math.min(
                    Math.max((progress - enterStart) / (enterEnd - enterStart), 0),
                    1
                  );

            const exitStart = index < 3 ? 0.08 + index * 0.26 : 1;
            const exitEnd = index < 3 ? exitStart + 0.20 : 1;
            const mobileOut =
              index < 3
                ? Math.min(
                    Math.max((progress - exitStart) / (exitEnd - exitStart), 0),
                    1
                  )
                : 0;

            return (
              <article
                key={reason.number}
                className={`disperseCard disperseCard${index + 1}`}
                style={{
                  "--card-progress": cardProgress,
                  "--card-index": index,
                  "--mobile-in": mobileIn,
                  "--mobile-out": mobileOut,
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

        {/* MOBILE PAGINATION DOTS & NAVIGATION */}
        <div className="disperseMobileNav">
          {reasons.map((r, i) => (
            <button
              key={r.number}
              type="button"
              className={`disperseMobileDot ${
                activeIndex === i ? "disperseMobileDot--active" : ""
              }`}
              onClick={() => scrollToCard(i)}
              aria-label={`View step ${r.number}: ${r.title}`}
            >
              <span className="disperseMobileDot__num">{r.number}</span>
              <span className="disperseMobileDot__bar" />
            </button>
          ))}
        </div>

        {/* MOBILE SWIPE / SCROLL HINT */}
        <div
          className="disperseMobileHint"
          style={{
            opacity: Math.max(1 - progress * 4.5, 0),
          }}
        >
          <span>Scroll to explore</span>
          <span className="disperseMobileHintIcon">↓</span>
        </div>

        {/* DESKTOP SCROLL INDICATOR */}
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