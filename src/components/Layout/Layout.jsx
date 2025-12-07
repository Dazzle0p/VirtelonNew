import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      delay: 100,
      easing: "ease-out-cubic",
      disable: window.innerWidth < 768, // Optional: disable on mobile
      startEvent: "DOMContentLoaded",
    });

    // Store AOS globally for easy access (optional)
    window.AOS = AOS;

    // Refresh AOS when window loads
    const handleLoad = () => AOS.refresh();
    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    // Refresh AOS when route changes (after a small delay to allow DOM to update)
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 50);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
