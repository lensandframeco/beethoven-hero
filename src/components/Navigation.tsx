import { useState, useEffect, useRef } from 'react';
import { type PageName } from '../App';

interface NavigationProps {
  currentPage: PageName;
  navigate: (page: PageName) => void;
}

export default function Navigation({ currentPage, navigate }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [filmsDropdownOpen, setFilmsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setFilmsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavigate = (page: PageName) => {
    navigate(page);
    setMobileMenuOpen(false);
    setFilmsDropdownOpen(false);
  };

  return (
    <nav
      className={`fixed top-1 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0f1923]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={() => handleNavigate('home')} className="flex-shrink-0">
            <img
              src="https://images.squarespace-cdn.com/content/v1/652f8f89cec326539e792de6/2a6968b0-5299-4606-8c2b-6d172dbae1fc/logowithsubtitle-transparent.png"
              alt="Beethoven Hero"
              className="h-14 w-auto"
            />
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Films Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setFilmsDropdownOpen(!filmsDropdownOpen)}
                className="nav-link flex items-center gap-1"
              >
                Films
                <svg className={`w-3 h-3 transition-transform ${filmsDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {filmsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-[#1a2633] border border-white/10 rounded shadow-xl dropdown-enter">
                  <button
                    onClick={() => handleNavigate('following-the-ninth')}
                    className="block w-full text-left px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase' }}
                  >
                    Following the Ninth
                  </button>
                  <button
                    onClick={() => handleNavigate('love-and-justice')}
                    className="block w-full text-left px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase' }}
                  >
                    Love and Justice
                  </button>
                  <button
                    onClick={() => handleNavigate('last-will')}
                    className="block w-full text-left px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase' }}
                  >
                    Last Will & Testament
                  </button>
                </div>
              )}
            </div>

            <button onClick={() => handleNavigate('filmmakers')} className="nav-link">
              Filmmakers
            </button>
            <button onClick={() => handleNavigate('press')} className="nav-link">
              Press
            </button>
            <button onClick={() => handleNavigate('get-involved')} className="nav-link">
              Get Involved
            </button>
            <button onClick={() => handleNavigate('login')} className="nav-link">
              Login
            </button>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 ml-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0f1923]/98 backdrop-blur-md border-t border-white/10">
          <div className="px-6 py-4 space-y-1">
            <p className="text-white/40 text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Films
            </p>
            <button onClick={() => handleNavigate('following-the-ninth')} className="block w-full text-left py-2 nav-link">
              Following the Ninth
            </button>
            <button onClick={() => handleNavigate('love-and-justice')} className="block w-full text-left py-2 nav-link">
              Love and Justice
            </button>
            <button onClick={() => handleNavigate('last-will')} className="block w-full text-left py-2 nav-link">
              Last Will & Testament
            </button>
            <div className="border-t border-white/10 my-3" />
            <button onClick={() => handleNavigate('filmmakers')} className="block w-full text-left py-2 nav-link">
              Filmmakers
            </button>
            <button onClick={() => handleNavigate('press')} className="block w-full text-left py-2 nav-link">
              Press
            </button>
            <button onClick={() => handleNavigate('get-involved')} className="block w-full text-left py-2 nav-link">
              Get Involved
            </button>
            <button onClick={() => handleNavigate('login')} className="block w-full text-left py-2 nav-link">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
