export const CALENDLY_URL = "https://calendly.com/vmanchanda-therealeease/30min";

export function openCalendly(url = CALENDLY_URL) {
  if (typeof window === "undefined") return;

  if (window.Calendly && typeof window.Calendly.initPopupWidget === "function") {
    window.Calendly.initPopupWidget({ url });
    return;
  }

  // Fallback: Dynamically inject Calendly assets if not already present
  if (!document.getElementById("calendly-widget-css")) {
    const link = document.createElement("link");
    link.id = "calendly-widget-css";
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);
  }

  let script = document.getElementById("calendly-widget-script");
  if (!script) {
    script = document.createElement("script");
    script.id = "calendly-widget-script";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => {
      if (window.Calendly && typeof window.Calendly.initPopupWidget === "function") {
        window.Calendly.initPopupWidget({ url });
      } else {
        window.open(url, "_blank", "noopener,noreferrer");
      }
    };
    script.onerror = () => {
      window.open(url, "_blank", "noopener,noreferrer");
    };
    document.body.appendChild(script);
  } else {
    // If already loading, poll briefly
    const pollInterval = setInterval(() => {
      if (window.Calendly && typeof window.Calendly.initPopupWidget === "function") {
        clearInterval(pollInterval);
        window.Calendly.initPopupWidget({ url });
      }
    }, 100);

    setTimeout(() => {
      clearInterval(pollInterval);
      if (!window.Calendly) {
        window.open(url, "_blank", "noopener,noreferrer");
      }
    }, 2000);
  }
}
