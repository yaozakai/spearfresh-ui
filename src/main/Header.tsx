import logo from '/logos/logo.svg'
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full max-w-[1100px] mx-auto flex items-center justify-between px-8 py-4 bg-white/80 dark:bg-[#1a2332]/90 shadow-sm sticky top-0 z-20">
      <div className="flex items-center gap-3">
        <Link to="/">
          <img src={logo} alt="App Logo" className="h-10 w-auto" />
        </Link>
      </div>
      <nav className="hidden md:flex gap-8 text-base font-medium">
        <Link to="/features" className="hover:text-[#0c915e] dark:hover:text-[#42D49C]">Features</Link>
        <Link to="/about" className="hover:text-[#0c915e] dark:hover:text-[#42D49C]">About</Link>
        <Link to="/pricing" className="hover:text-[#0c915e] dark:hover:text-[#42D49C]">Pricing</Link>
        <Link to="/testimonials" className="hover:text-[#0c915e] dark:hover:text-[#42D49C]">Testimonials</Link>
        <Link to="/faqs" className="hover:text-[#0c915e] dark:hover:text-[#42D49C]">FAQs</Link>
      </nav>
      <a href="#cta" className="btn-teal px-6 py-2 rounded font-bold shadow hover:scale-105 transition">Join Waitlist</a>
    </header>
  );
}

export default Header;
