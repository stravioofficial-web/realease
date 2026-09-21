import "./LegalPage.css";
import { navigateTo } from "../utils/navigation";

function Terms() {
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
          <h1>Terms of Service</h1>
          <p>Last updated: September 2026</p>
        </div>

        <div className="legalContent">
          <section className="legalSection">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using the website and professional deal support services provided by RealEase (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), you agree to be bound by these Terms of Service. If you do not agree with these terms, please do not use our website or services.
            </p>
          </section>

          <section className="legalSection">
            <h2>2. Scope of Services</h2>
            <p>
              RealEase provides real estate underwriting, financial analysis, asset management support, accounting assistance, and investor deck/memorandum preparation for real estate investors, private equity sponsors, lenders, and fund managers. Specific deliverables, turnaround schedules, and fee structures are governed by our respective project proposals, statements of work, or service agreements.
            </p>
          </section>

          <section className="legalSection">
            <h2>3. Professional & Advisory Disclaimer</h2>
            <p>
              RealEase provides operational financial modeling, analytical support, and document preparation based on assumptions and inputs provided by you. 
            </p>
            <p>
              <strong>Important Notice:</strong> RealEase is not a registered investment advisor, securities broker-dealer, certified legal counsel, or public accounting firm. Our work product does not constitute investment advice, legal advice, or a formal fairness opinion. You remain solely responsible for your investment decisions, due diligence, and underwriting determinations.
            </p>
          </section>

          <section className="legalSection">
            <h2>4. Client Responsibilities & Input Data</h2>
            <p>
              The accuracy of any financial model, debt sizing, or cash flow projection depends directly upon the quality and accuracy of the information provided to us. Clients agree to provide accurate, timely property records, assumptions, rent rolls, and historical financials necessary for our team to perform the requested analysis.
            </p>
          </section>

          <section className="legalSection">
            <h2>5. Intellectual Property & Deliverable Ownership</h2>
            <ul>
              <li>
                <strong>Client Deliverables:</strong> Upon full payment of agreed fees, clients retain ownership of the custom financial models, customized presentations, and deal-specific work products prepared specifically for their engagement.
              </li>
              <li>
                <strong>Proprietary Frameworks:</strong> RealEase retains all rights, title, and interest in its proprietary Excel macros, standardized modeling templates, internal algorithms, and general methodologies.
              </li>
            </ul>
          </section>

          <section className="legalSection">
            <h2>6. Confidentiality</h2>
            <p>
              We treat all client deal pipeline information, investment committee materials, financial models, and property records with strict confidentiality. Both parties agree to execute and abide by mutual Non-Disclosure Agreements upon request.
            </p>
          </section>

          <section className="legalSection">
            <h2>7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, RealEase and its representatives shall not be liable for any indirect, incidental, consequential, special, or punitive damages, or loss of investment opportunity, profits, or data resulting from the use of our website or analytical services.
            </p>
          </section>

          <section className="legalSection">
            <h2>8. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with applicable laws, without giving effect to any conflict of law provisions.
            </p>
          </section>

          <section className="legalSection">
            <h2>9. Contact Information</h2>
            <p>
              For questions regarding these Terms of Service or our service agreements, please contact:
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

export default Terms;
