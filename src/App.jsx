
import { useEffect, useState } from "react";
import "./App.css";
// Must be imported AFTER App.css
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

function getRoute() {
  if (typeof window === "undefined") return "/";
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();

  if (path === "/privacy" || path.startsWith("/privacy") || hash === "#privacy") {
    return "/privacy";
  }
  if (path === "/terms" || path.startsWith("/terms") || hash === "#terms") {
    return "/terms";
  }
  return "/";
}

function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const handleLocationChange = () => {
      setRoute(getRoute());
    };

    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("hashchange", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("hashchange", handleLocationChange);
    };
  }, []);

  return (
    <>
      {route === "/privacy" ? (
        <Privacy />
      ) : route === "/terms" ? (
        <Terms />
      ) : (
        <Home />
      )}
      <FloatingWhatsApp />
    </>
  );
}

export default App;