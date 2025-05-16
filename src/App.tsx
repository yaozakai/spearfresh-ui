import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./main/Home";
import Features from "./pages/Features";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Testimonials from "./pages/Testimonials";
import Faqs from "./pages/Faqs";
import NotFound from "./pages/NotFound";
import Header from "./main/Header";
import Footer from "./main/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen w-screen overflow-x-hidden flex flex-col bg-gradient-to-b from-[#e8f7f1] to-white dark:from-[#143059] dark:to-[#222c2a] text-[#143059] dark:text-white font-sans transition-colors duration-300">
        {/* Header */}
        <Header />
        {/* Main Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
