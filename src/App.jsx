// import Hero from "./component/Hero";
// import Navbar from "./component/Navbar";
// import OurWork from "./component/OurWork";
// import WhatWeDo from "./component/WhatWeDo";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <WhatWeDo/>
//        <OurWork />
//     </>
//   );
// }

// export default App;
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import WhatWeDo from "./component/WhatWeDo";
import OurWork from "./component/OurWork";
import AboutUs from "./component/Aboutus";
import ServiceHero from "./component/ServiceHero";

const Home = () => (
  <>
    <Hero />
    <WhatWeDo />
    <OurWork />
  </>
);

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services/:service" element={<ServiceHero />} />
      </Routes>
    </>
  );
}

export default App;
