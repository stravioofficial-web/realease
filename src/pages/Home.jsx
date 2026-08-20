import Navbar from "../components/Navbar";
import ByTheNumbers from "../components/ByTheNumbers";
import VideoSection from "../components/VideoSection";
import AboutSection from "../components/AboutSection";
import WhatWeDo from "../components/WhatWeDo";
import YourSystems from "../components/YourSystems";
import WhyRealease from "../components/WhyRealease";
import WhoWeWorkFor from "../components/WhoWeWorkFor";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      {/* HERO */}

      <main className="hero">
        <Navbar />

        <section className="heroContent">
          <div className="heroLeft">

            <p className="eyebrow">
              REAL ESTATE DEAL SUPPORT ·{" "}
              <span>BUILT FOR US</span>
              <br />
              INVESTORS AND FUNDS
            </p>

            <h1 className="heroTitle">
              Real Estate,
              <br />
              <span>at Ease.</span>
            </h1>

            <p className="heroDescription">
              One dedicated team handles underwriting, accounting{" "}
              <br />
              and investor materials on US hours. You stay on the{" "}
              <br />
              deals. We handle the rest.
            </p>

            <div className="heroButtons">

              <button className="primaryButton">
                <span>Book a Call</span>
              </button>

              <button className="secondaryButton">
                <span>See How We Work</span>
              </button>

            </div>

          </div>
        </section>
      </main>


      {/* BY THE NUMBERS */}

      <ByTheNumbers />


      {/* VIDEO */}

      <VideoSection />


      {/* ABOUT */}

      <AboutSection />


      {/* WHAT WE DO */}

      <WhatWeDo />


      {/* YOUR SYSTEMS */}

      <YourSystems />


      {/* WHY REALEASE */}

      <WhyRealease />


      {/* WHO WE WORK FOR */}

      <WhoWeWorkFor />


      {/* TESTIMONIALS */}

      <Testimonials />


      {/* GET IN TOUCH */}

      <ContactSection />


      {/* FOOTER */}

      <Footer />

    </>
  );
}

export default Home;