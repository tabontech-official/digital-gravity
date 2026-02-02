import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import WhatWeDo from "./component/WhatWeDo";
import OurWork from "./component/OurWork";
import AboutUs from "./component/Aboutus";
import ServiceHero from "./component/ServiceHero";
import { AnimatePresence } from "framer-motion";
import Work from "./component/work";
import CaseStudy from "./component/pages/CaseStudy";
import Footer from "./component/Footer";

const Home = () => (
  <>
    <Hero />
    <WhatWeDo />
    <OurWork />
  </>
);

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />

      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/case-studies" element={<Work />} />
        <Route path="/case-study/:id" element={<CaseStudy />} />

          <Route path="/services/:service" element={<ServiceHero />} />
        </Routes>
        <Footer/>
      </AnimatePresence>
    </>
  );
}

export default App;
