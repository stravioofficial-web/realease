import { useEffect, useRef, useState } from "react";

const services = [
  {
    number: "01",
    title: "Underwriting & Financial Modeling",
    description:
      "Acquisition, development and refinance models, returns analysis, sensitivities and market research.",
  },
  {
    number: "02",
    title: "Investor Materials & Deal Marketing",
    description:
      "Investment memos, offering memorandums, investor decks and property marketing materials.",
  },
  {
    number: "03",
    title: "Asset Management & Portfolio Reporting",
    description:
      "Performance tracking, NOI analysis, budget-to-actual monitoring and portfolio reporting.",
  },
  {
    number: "04",
    title: "Accounting & Investor Reporting",
    description:
      "Bookkeeping, reconciliations, month-end close and investor-ready financial reporting.",
  },
];

function WhatWeDo() {
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
        rootMargin: "0px 0px -70px 0px",
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`whatWeDoSection ${visible ? "whatWeDoVisible" : ""}`}
      id="services"
    >
      <div className="whatWeDoInner">
        <div className="whatWeDoStack">
          <div className="whatWeDoHeader">
            <h2>
              Your deal,
              <br />
              <span>all the way through.</span>
            </h2>
          </div>
        </div>

        <div className="dealJourney">
          {services.map((service, index) => (
            <article
              className="journeyItem"
              key={service.number}
              style={{
                "--delay": `${0.2 + index * 0.16}s`,
              }}
            >
              <div className="journeyTop">
                <span className="journeyNumber">{service.number}</span>
                <span className="journeyDot" aria-hidden="true" />
              </div>

              <h3>{service.title}</h3>

              <p className="journeyDescription">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;