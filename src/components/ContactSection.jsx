import { useEffect, useRef, useState } from "react";

function ContactSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`reContact ${
        visible ? "reContact--visible" : ""
      }`}
    >

      {/* LEFT */}
      <div className="reContact__left">

        <div className="reContact__intro">
          <h2>
            Let’s talk about
            <span>your next deal.</span>
          </h2>

          <p>
            Tell us what you’re working on.
            <br />
            We’ll take it from there.
          </p>
        </div>

        <div className="reContact__details">

          <img
            src="/logo.png"
            alt="RealEase"
            className="reContact__logo"
          />

          <a href="mailto:vmanchanda@therealeease.com">
            vmanchanda@therealeease.com
          </a>

          <a href="tel:+919582232812">
            +91 95822 32812
          </a>

          <a
            href="https://www.linkedin.com/company/the-real-ease/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/company/the-real-ease
          </a>

        </div>

      </div>


      {/* RIGHT */}
      <div className="reContact__right">

        <form
          className="reContact__form"
          onSubmit={handleSubmit}
        >

          <div className="reContact__row">

            <input
              type="text"
              placeholder="First Name"
              required
            />

            <input
              type="text"
              placeholder="Last Name"
              required
            />

          </div>


          <div className="reContact__row">

            <input
              type="email"
              placeholder="Email"
              required
            />

            <input
              type="text"
              placeholder="Company Name (Optional)"
            />

          </div>


          <input
            type="tel"
            placeholder="Phone Number (Optional)"
          />


          <textarea
            placeholder="Describe your requirements, product application, order quantity…"
            required
          />


          <button type="submit">
            <span>SUBMIT INQUIRY</span>
          </button>

        </form>

      </div>

    </section>
  );
}

export default ContactSection;