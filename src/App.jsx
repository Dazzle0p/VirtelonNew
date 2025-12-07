import React from "react";
import Layout from "./components/Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactUs from "./pages/ContactUs";
import ROBSection from "./pages/ROBSection";
import ProjectPage from "./pages/Projects";
import AdvancedEngineering from "./pages/AdvancedEngineering";
import CoreBuilds from "./pages/CoreBuilds";
import ServicesPage from "./pages/ServicesPage";

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
          <Route path="robs" element={<ROBSection />} />
          <Route path="projects" element={<ProjectPage />} />
          <Route path="adv-eng" element={<AdvancedEngineering />} />
          <Route path="core-builds" element={<CoreBuilds />} />
          <Route path="services" element={<ServicesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
