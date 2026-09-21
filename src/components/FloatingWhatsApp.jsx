import "./FloatingWhatsApp.css";

const WHATSAPP_URL = "https://wa.me/919582232812";

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="floatingWhatsApp"
      aria-label="Chat with us on WhatsApp (+91 95822 32812)"
    >
      <span className="floatingWhatsApp__tooltip">Chat on WhatsApp</span>
      <div className="floatingWhatsApp__btn">
        <span className="floatingWhatsApp__pulse" aria-hidden="true" />
        <svg
          className="floatingWhatsApp__icon"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2ZM12.04 20.16C10.56 20.16 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.3C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16ZM16.56 14.39C16.31 14.27 15.09 13.67 14.86 13.59C14.64 13.5 14.47 13.46 14.31 13.71C14.14 13.96 13.66 14.53 13.51 14.7C13.37 14.86 13.22 14.89 12.97 14.76C12.72 14.64 11.92 14.38 10.97 13.53C10.23 12.87 9.73 12.06 9.58 11.81C9.44 11.56 9.56 11.43 9.69 11.3C9.8 11.19 9.93 11.02 10.06 10.87C10.18 10.72 10.22 10.62 10.3 10.45C10.38 10.29 10.34 10.14 10.28 10.02C10.22 9.89 9.73 8.69 9.52 8.19C9.32 7.7 9.12 7.77 8.96 7.76C8.82 7.75 8.65 7.75 8.48 7.75C8.32 7.75 8.05 7.81 7.82 8.06C7.59 8.31 6.95 8.91 6.95 10.13C6.95 11.35 7.84 12.53 7.96 12.69C8.08 12.86 9.71 15.37 12.2 16.44C12.79 16.7 13.25 16.85 13.61 16.97C14.21 17.16 14.75 17.13 15.18 17.07C15.66 17 16.66 16.46 16.87 15.88C17.08 15.29 17.08 14.79 17.01 14.68C16.95 14.57 16.81 14.51 16.56 14.39Z"
          />
        </svg>
      </div>
    </a>
  );
}

export default FloatingWhatsApp;
