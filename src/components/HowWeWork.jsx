import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "A 20-minute call",
    description:
      "You tell us how your team works, where the bottlenecks are, and what you need help with.",
  },
  {
    number: "02",
    title: "One live deal",
    description:
      "We start with real work so you can see exactly how we operate, communicate, and deliver.",
  },
  {
    number: "03",
    title: "A dedicated team",
    description:
      "Once we're aligned, you get a consistent team that stays close to your work and grows with your needs.",
  },
];

function HowWeWork() {
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
      className={`howWeWorkSection ${
        visible ? "howWeWorkVisible" : ""
      }`}
    >
      <div className="howWeWorkInner">

        {/* =========================
            TOP
        ========================== */}

        <div className="howWeWorkTop">

          <div className="howWeWorkHeading">

            <p className="howWeWorkEyebrow">
              HOW WE WORK
            </p>

            <h2>
              Three steps.
              <br />
              <span>No long onboarding.</span>
            </h2>

          </div>


          <div className="howWeWorkTopCopy">

            <p>
              Start with a conversation, test us on real work,
              and build from there.
            </p>

          </div>

        </div>


        {/* =========================
            PROCESS
        ========================== */}

        <div className="workProcess">

          {/* PROGRESS LINE */}

          <div className="workProgressLine">
            <div className="workProgressFill"></div>
          </div>


          {/* 01 → 02 → 03 */}

          {steps.map((step, index) => (

            <div
              className="workStep"
              key={step.number}
              style={{
                "--work-delay": `${0.25 + index * 0.28}s`,
              }}
            >

              <div className="workStepMarker">

                <span className="workStepDot"></span>

                <span className="workStepNumber">
                  {step.number}
                </span>

              </div>


              <div className="workStepContent">

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.description}
                </p>

              </div>

            </div>

          ))}

        </div>


        {/* =========================
            BOTTOM
        ========================== */}

        <div className="howWeWorkBottom">

          <p>
            Start small.
          </p>

          <p>
            Scale when it works.
          </p>

        </div>

      </div>
    </section>
  );
}

export default HowWeWork;