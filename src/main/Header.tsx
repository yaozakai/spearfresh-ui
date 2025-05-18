import logo from '/logos/logo.svg'
import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaSun, FaMoon } from 'react-icons/fa';

function Header() {
  const [appsOpen, setAppsOpen] = useState(false);
  const [platformsOpen, setPlatformsOpen] = useState(false);
  const [appsTimeout, setAppsTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);
  const [platformsTimeout, setPlatformsTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  // Handlers for Apps dropdown
  const handleAppsEnter = () => {
    if (appsTimeout) clearTimeout(appsTimeout);
    setAppsOpen(true);
  };
  const handleAppsLeave = () => {
    const timeout = setTimeout(() => setAppsOpen(false), 180);
    setAppsTimeout(timeout);
  };

  // Handlers for Platforms dropdown
  const handlePlatformsEnter = () => {
    if (platformsTimeout) clearTimeout(platformsTimeout);
    setPlatformsOpen(true);
  };
  const handlePlatformsLeave = () => {
    const timeout = setTimeout(() => setPlatformsOpen(false), 180);
    setPlatformsTimeout(timeout);
  };

  // Toggle dark mode and update html class
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('theme', next ? 'dark' : 'light');
      return next;
    });
  };

  // On mount, sync with localStorage or system
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else if (saved === 'light') {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <header className="w-full mx-auto flex items-center justify-between px-8 py-4 bg-white/80 dark:bg-[#1a2332]/90 shadow-sm fixed top-0 left-1/2 -translate-x-1/2 z-30">
      <div className="flex items-center gap-3">
        <Link to="/" className='flex items-center'>
          <img src={logo} alt="App Logo" className="h-7 w-auto" /> <div className='items-baseline'><span className="header">S</span><span className="header text-xl">pearfresh</span></div>
        </Link>
      </div>
      <nav className="hidden md:flex gap-8 text-base font-medium items-center">
        {/* Apps Dropdown */}
        <div className="relative group" onMouseEnter={handleAppsEnter} onMouseLeave={handleAppsLeave}>
          <button className="btn-nav">Social Media Management <span className="text-xs">▼</span></button>
          <div
            className={`absolute left-0 mt-2 bg-white dark:bg-[#1a2332] shadow-lg rounded z-30 min-w-[220px] transition-opacity duration-150 ${appsOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            onMouseEnter={handleAppsEnter}
            onMouseLeave={handleAppsLeave}
          >
            <NavLink to="/push-to-sprinklr" className="btn-nav-select">Push to Sprinklr</NavLink>
            <NavLink to="/push-to-hootsuite" className="btn-nav-select ">Push to Hootsuite</NavLink>
            <NavLink to="/spearfresh-social-planner" className="btn-nav-select">Spearfresh Social Planner</NavLink>
          </div>
        </div>
        {/* Platforms Dropdown */}
        <div className="relative group" onMouseEnter={handlePlatformsEnter} onMouseLeave={handlePlatformsLeave}>
          <button className="btn-nav">Trading Platform<span className="text-xs">▼</span></button>
          <div
            className={`absolute left-0 mt-2 bg-white dark:bg-[#1a2332] shadow-lg rounded z-30 min-w-[180px] transition-opacity duration-150 ${platformsOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            onMouseEnter={handlePlatformsEnter}
            onMouseLeave={handlePlatformsLeave}
          >
            <NavLink to="/dexter-city" className="block px-4 py-2 hover:bg-[#e8f7f1] dark:hover:bg-[#143059]">Dexter City</NavLink>
          </div>
        </div>
        {/* About (Home) */}
        <NavLink to="/" className={({ isActive }) => `hover:text-[#0c915e] dark:hover:text-[#42D49C] ${isActive ? 'font-bold underline' : ''}`}>About</NavLink>
        {/* Support */}
        <NavLink to="/support" className={({ isActive }) => `hover:text-[#0c915e] dark:hover:text-[#42D49C] ${isActive ? 'font-bold underline' : ''}`}>Support</NavLink>
        {/* Light/Dark mode switch */}
        <button
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          onClick={toggleDarkMode}
          className="ml-4 p-2 rounded-full border border-transparent hover:border-gray-300 dark:hover:border-gray-600 transition-colors bg-white dark:bg-[#1a2332] text-gray-700 dark:text-gray-200 flex items-center justify-center"
        >
          {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
        </button>
      </nav>
    </header>
  );
}

export default Header;
