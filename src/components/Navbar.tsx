import { Cpu, Send, Twitter, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <nav className={`fixed w-full z-40 top-0 transition-all duration-300 ${scrolled ? 'bg-black/80' : ''}`}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-xl border-b border-white/5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <Cpu className="w-8 h-8 text-[var(--color-m3-primary)]" />
            <span className="m3-title-large font-bold tracking-tighter">Hacker<span className="gradient-text">House</span></span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {isHome ? (
              <>
                <a href="#about" className="m3-label-large text-[var(--color-m3-on-surface-variant)] hover:text-[var(--color-m3-primary)] transition-colors">About</a>
                <a href="#amenities" className="m3-label-large text-[var(--color-m3-on-surface-variant)] hover:text-[var(--color-m3-primary)] transition-colors">Amenities</a>
                <a href="#projects" className="m3-label-large text-[var(--color-m3-on-surface-variant)] hover:text-[var(--color-m3-primary)] transition-colors">Projects</a>
              </>
            ) : (
              <>
                <Link to="/#about" className="m3-label-large text-[var(--color-m3-on-surface-variant)] hover:text-[var(--color-m3-primary)] transition-colors">About</Link>
                <Link to="/#amenities" className="m3-label-large text-[var(--color-m3-on-surface-variant)] hover:text-[var(--color-m3-primary)] transition-colors">Amenities</Link>
                <Link to="/projects" className="m3-label-large text-[var(--color-m3-on-surface-variant)] hover:text-[var(--color-m3-primary)] transition-colors">Projects</Link>
              </>
            )}
            <Link to="/apply" className="m3-label-large text-[var(--color-m3-on-surface-variant)] hover:text-[var(--color-m3-primary)] transition-colors">Apply</Link>
            <Link to="/support" className="m3-label-large text-[var(--color-m3-on-surface-variant)] hover:text-[var(--color-m3-primary)] transition-colors">Support</Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="https://t.me/HackerHouseBLR" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-[var(--color-m3-surface-container-highest)] rounded-full transition-colors">
              <Send className="w-5 h-5 text-[var(--color-m3-on-surface-variant)]" />
            </a>
            <a href="https://x.com/HackerHouseBLR" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-[var(--color-m3-surface-container-highest)] rounded-full transition-colors">
              <Twitter className="w-5 h-5 text-[var(--color-m3-on-surface-variant)]" />
            </a>
            <Link to="/apply" className="m3-button-filled h-10 px-6 hidden sm:flex">
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
