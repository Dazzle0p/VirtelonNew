import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialized AOS with mobile support
    AOS.init({
      duration: 600, // Slightly faster on mobile
      once: true,
      offset: 50, // Lower offset for mobile
      delay: 50, // Shorter delay for mobile
      easing: "ease-out-cubic",
      disable: false, // ENABLE ON MOBILE
      startEvent: "DOMContentLoaded",
      throttleDelay: 99,
      debounceDelay: 50,
      // Mobile settings:
      mobile: true, // Enable on mobile
      tablet: true, // Enable on tablet
    });

    // Store AOS globally
    window.AOS = AOS;

    return () => {
      // Optional cleanup
      AOS.refreshHard();
    };
  }, []);

  useEffect(() => {
    // Refresh AOS on route change
    setTimeout(() => {
      AOS.refresh();
    }, 100);
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
