function Footer() {
  return (
    <footer className="siteFooter">
      <div className="siteFooter__divider" />

      <div className="siteFooter__bottom">
        <p>
          © 2026 RealEase. All rights reserved. &nbsp;·&nbsp;
          <a href="#privacy">Privacy Policy</a> &nbsp;·&nbsp;
          <a href="#terms">Terms</a>
        </p>

        <p className="siteFooter__note">
          Items shown in red are placeholders to be confirmed before publication.
        </p>

        <p className="siteFooter__credit">
          Developed by{" "}
          <a href="https://straviomedia.com" target="_blank" rel="noopener">
            Stravio Media
          </a>
        </p>
      </div>

    </footer>
  );
}

export default Footer;
