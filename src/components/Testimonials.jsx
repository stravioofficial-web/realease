import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "We were turning down deals because our two analysts were already buried. RealEase gave us a first-pass model in forty-eight hours, every time, and we tripled the number of deals we could look at without adding a single hire.",
  },
  {
    quote:
      "What sold us was that the deck and the model came from the same team. No more chasing which version of the numbers was right. Month-end closes on time now, and our investor reporting has never been cleaner.",
  },
];

function Testimonials() {
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
      className={`testimonialsSection ${
        visible ? "testimonialsVisible" : ""
      }`}
    >
      <div className="testimonialsInner">

        {/* HEADER */}
        <div className="testimonialsHeader">
          <h2>
            In their <span>words.</span>
          </h2>
        </div>

        {/* TESTIMONIALS */}
        <div className="testimonialsGrid">

          {testimonials.map((testimonial, index) => (
            <article
              className="testimonialItem"
              key={index}
              style={{
                "--testimonial-delay": `${0.2 + index * 0.22}s`,
              }}
            >
              <div className="testimonialStars">
                ★★★★★
              </div>

              <blockquote>
                {testimonial.quote}
              </blockquote>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;