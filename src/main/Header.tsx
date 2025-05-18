import logo from '/logos/logo.svg'
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [appsOpen, setAppsOpen] = useState(false);
  const [platformsOpen, setPlatformsOpen] = useState(false);

  return (
    <header className="w-full mx-auto flex items-center justify-between px-8 py-4 bg-white/80 dark:bg-[#1a2332]/90 shadow-sm fixed top-0 left-1/2 -translate-x-1/2 z-30">
      <div className="flex items-center gap-3">
        <Link to="/" className='flex items-center'>
          <img src={logo} alt="App Logo" className="h-7 w-auto" /> <div className='items-baseline'><span className="header">S</span><span className="header text-xl">pearfresh</span></div>
        </Link>
      </div>
      <nav className="hidden md:flex gap-8 text-base font-medium items-center">
        {/* Apps Dropdown */}
        <div className="relative" onMouseEnter={() => setAppsOpen(true)} onMouseLeave={() => setAppsOpen(false)}>
          <button className="btn-nav">Social Media Management <span className="text-xs">▼</span></button>
          {appsOpen && (
            <div className="absolute left-0 mt-2 bg-white dark:bg-[#1a2332] shadow-lg rounded z-30 min-w-[220px]">
              <NavLink to="/push-to-sprinklr" className="btn-nav-select">Push to Sprinklr</NavLink>
              <NavLink to="/push-to-hootsuite" className="btn-nav-select ">Push to Hootsuite</NavLink>
              <NavLink to="/spearfresh-social-planner" className="btn-nav-select">Spearfresh Social Planner</NavLink>
            </div>
          )}
        </div>
        {/* Platforms Dropdown */}
        <div className="relative" onMouseEnter={() => setPlatformsOpen(true)} onMouseLeave={() => setPlatformsOpen(false)}>
          <button className="btn-nav">Trading Platform<span className="text-xs">▼</span></button>
          {platformsOpen && (
            <div className="absolute left-0 mt-2 bg-white dark:bg-[#1a2332] shadow-lg rounded z-30 min-w-[180px]">
              <NavLink to="/dexter-city" className="block px-4 py-2 hover:bg-[#e8f7f1] dark:hover:bg-[#143059]">Dexter City</NavLink>
            </div>
          )}
        </div>
        {/* About (Home) */}
        <NavLink to="/" className={({ isActive }) => `hover:text-[#0c915e] dark:hover:text-[#42D49C] ${isActive ? 'font-bold underline' : ''}`}>About</NavLink>
      </nav>
    </header>
  );
}

export default Header;
