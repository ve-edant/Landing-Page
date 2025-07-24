import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Clients from "./pages/Clients";
import Knowledge from "./pages/Knowledge";
import Contact from "./pages/Contact";
import AboutUs from "./Subpages/AboutUs";
import Design from "./Subpages/Design";
import Technology from "./Subpages/Technology";
import { Career } from "./Subpages/Career";
import Team from "./Subpages/Team";
import Marketing from "./Subpages/Marketing";
import SmoothScroll from "./lib/smoothScroll";

function App() {
  return (
    <Router>
      <SmoothScroll>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />}/>
            <Route path="/services" element={<Services />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/knowledge" element={<Knowledge />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/career" element={<Career />} />
            <Route path="/team" element={<Team />} />
            <Route path="/design" element={<Design />} />
            <Route path="/marketing" element={<Marketing />} />
            <Route path="/technology" element={<Technology />} />
          </Routes>
        </MainLayout>
      </SmoothScroll>
    </Router>
  );
}

export default App;
