import { useEffect, useRef, useState } from "react";

function CountUp({ end, duration = 1800, suffix = "" }) {
  // Starts at the final value so the number is present in the markup
  // for crawlers/no-JS clients that never trigger the scroll-in animation.
  const [count, setCount] = useState(end);
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false);

  const numberRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setIsVisible(true);
        }
      },
      {
        threshold: 0.35,
      }
    );

    if (numberRef.current) {
      observer.observe(numberRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    setCount(0);

    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;

      const progress = Math.min(
        elapsed / duration,
        1
      );

      // Smooth count-up effect
      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      const currentValue = Math.floor(
        easedProgress * end
      );

      setCount(currentValue);

      if (progress < 1) {
        animationFrame =
          requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame =
      requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [isVisible, end, duration]);

  return (
    <span ref={numberRef} suppressHydrationWarning>
      {count}
      {suffix}
    </span>
  );
}


function ByTheNumbers() {
  return (
    <section className="numbersSection">
      <div className="numbersContainer">
        <div className="numbersContent">
          <div className="numbersGrid">
            <div className="numberItem">
              <p className="numberValue">
                <CountUp end={10000} suffix="+" duration={2000} />
              </p>

              <p>
                DEALS
                <br />
                UNDERWRITTEN
              </p>
            </div>

            <div className="numberItem">
              <p className="numberValue">
                <CountUp end={48} suffix=" hrs" duration={1800} />
              </p>

              <p>
                AVERAGE
                <br />
                TURNAROUND
              </p>
            </div>

            <div className="numberItem">
              <p className="numberValue">
                <CountUp end={10} suffix="+ yrs" duration={1600} />
              </p>

              <p>
                FOUNDER-LED
                <br />
                EXPERIENCE
              </p>
            </div>

            <div className="numberItem">
              <p className="numberValue">
                <CountUp end={9} duration={1500} />
              </p>

              <p>
                ASSET CLASSES
                <br />
                COVERED
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ByTheNumbers;