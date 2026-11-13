import { BrowserRouter as Router, Routes, Route } from "react-router";

import "./App.css";
import Homepage from "./Page/HomePage";
import FeaturedProducts from "./Component/FeaturedProducts";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Services from "./Component/Services";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<FeaturedProducts />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
       
      </Routes>
    </Router>
  );
}

export default App;
