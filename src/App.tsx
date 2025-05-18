import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./pages/About";

import Faqs from "./pages/Faqs";
import NotFound from "./pages/NotFound";
import Header from "./main/Header";
import Footer from "./main/Footer";
import PushToSprinklr from "./pages/apps/PushToSprinklr";

function App() {
  return (
    <Router>
      <div className="min-h-screen w-screen overflow-x-hidden flex flex-col bg-gradient-to-b from-[#e8f7f1] to-white dark:from-[#143059] dark:to-[#222c2a] text-[#143059] dark:text-white  transition-colors duration-300">
        {/* Header */}
        <Header />
        {/* Main Content */}
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/push-to-sprinklr" element={<PushToSprinklr />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
