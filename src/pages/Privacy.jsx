import "./LegalPage.css";
import { navigateTo } from "../utils/navigation";

function Privacy() {
  return (
    <div className="legalPage">
      <header className="legalHeader">
        <div className="legalHeader__inner">
          <a
            href="/"
            className="legalHeader__logo"
            onClick={(e) => {
              e.preventDefault();
              navigateTo("/");
            }}
          >
            <img src="/logo.png" alt="RealEase" />
          </a>

          <a
            href="/"
            className="legalHeader__backBtn"
            onClick={(e) => {
              e.preventDefault();
              navigateTo("/");
            }}
          >
            <span>←</span> Back to Home
          </a>
        </div>
      </header>

      <main className="legalContainer">
        <div className="legalHero">
          <span className="legalTag">Legal Documentation</span>
          <h1>Privacy Policy</h1>
          <p>Last updated: September 2026</p>
        </div>

        <div className="legalContent">
          <section className="legalSection">
            <h2>1. Introduction</h2>
            <p>
              RealEase (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) respects your privacy and is committed to protecting the personal and proprietary information you share with us. This Privacy Policy outlines our practices concerning the collection, use, protection, and disclosure of information when you access our website or engage our real estate underwriting, asset management, and deal support services.
            </p>
          </section>

          <section className="legalSection">
            <h2>2. Information We Collect</h2>
            <p>We may collect information directly from you when you interact with our website or engage our team:</p>
            <ul>
              <li>
                <strong>Contact Information:</strong> Name, email address (e.g., when contacting us or scheduling through Calendly), phone number, company name, and job title.
              </li>
              <li>
                <strong>Deal & Underwriting Data:</strong> Financial statements, property operating records, rent rolls, investment committee memos, debt sizing parameters, or other project data you provide to us for analysis and modeling.
              </li>
              <li>
                <strong>Communication Records:</strong> Notes, emails, inquiries, and meeting requests exchanged with our analysts and management team.
              </li>
              <li>
                <strong>Technical Information:</strong> Basic analytics such as browser type, referring pages, and device information to maintain website reliability and performance.
              </li>
            </ul>
          </section>

          <section className="legalSection">
            <h2>3. Deal Data Confidentiality</h2>
            <p>
              In the real estate investment industry, confidentiality is paramount. RealEase treats all client deal metrics, underwriting models, investment memos, and property-level financial details as strictly confidential:
            </p>
            <ul>
              <li>Client deal files and proprietary models are never shared with unauthorized third parties or other clients.</li>
              <li>We operate under strict Non-Disclosure Agreements (NDAs) whenever requested by our clients.</li>
              <li>Access to client files is restricted solely to team members actively assigned to your engagement.</li>
            </ul>
          </section>

          <section className="legalSection">
            <h2>4. How We Use Your Information</h2>
            <p>We use collected information solely for legitimate operational and business purposes, including:</p>
            <ul>
              <li>Delivering financial modeling, underwriting analysis, investor presentations, and asset management support.</li>
              <li>Scheduling meetings and introductory calls via Calendly.</li>
              <li>Responding to inquiries submitted via our contact forms or direct communications.</li>
              <li>Maintaining service quality, operational security, and client relationship management.</li>
            </ul>
          </section>

          <section className="legalSection">
            <h2>5. Data Sharing and Third-Party Services</h2>
            <p>
              We do not sell, rent, or trade your personal information or deal documents. We only share information with reputable service providers who assist our operations (such as scheduling software, encrypted cloud storage, and secure email providers), strictly subject to confidentiality and security obligations.
            </p>
          </section>

          <section className="legalSection">
            <h2>6. Data Security</h2>
            <p>
              We implement industry-standard administrative, technical, and physical safeguards designed to protect your personal information and deal files against unauthorized access, loss, alteration, or disclosure.
            </p>
          </section>

          <section className="legalSection">
            <h2>7. Your Rights and Choices</h2>
            <p>
              You may contact us at any time to review, update, or request the deletion of your contact information or previously submitted deal files. We will respond promptly in accordance with applicable data privacy laws.
            </p>
          </section>

          <section className="legalSection">
            <h2>8. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please reach out to:
            </p>
            <p>
              <strong>RealEase</strong><br />
              Email: <a href="mailto:vmanchanda@therealeease.com">vmanchanda@therealeease.com</a><br />
              Phone: <a href="tel:+919582232812">+91 95822 32812</a><br />
              LinkedIn: <a href="https://www.linkedin.com/company/the-real-ease/" target="_blank" rel="noopener noreferrer">linkedin.com/company/the-real-ease</a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Privacy;
