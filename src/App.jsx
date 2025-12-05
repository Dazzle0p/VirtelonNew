import React from "react";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import Whatwebuild from "./components/Whatwebuild";
import HowWeDeliver from "./components/HowWeDeliver";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import { PricingSection } from "./components/PricingSection";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactUs from "./pages/ContactUs";

// Important: You must ensure the 'Megabyte' font is correctly imported and available,
// likely through your public/index.html or the main CSS file.
// Example in a standard HTML index file:
// <link href="https://fonts.googleapis.com/css2?family=Megabyte&display=swap" rel="stylesheet">

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
