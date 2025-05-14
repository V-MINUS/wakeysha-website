"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Create particles for background effect - initialized on client side only to avoid hydration errors
  const [particles, setParticles] = useState<Array<{id: number, size: number, left: number, top: number, delay: number}>>([]);
  
  // Generate particles only on the client side to avoid hydration mismatch
  useEffect(() => {
    setParticles(Array.from({ length: 6 }, (_, i) => ({
      id: i,
      size: 4 + Math.random() * 10,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5
    })));
  }, []);

  const navClasses = `fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-surface/80 backdrop-blur-md shadow-md py-3' : 'py-6'}`;
  
  return (
    <nav className={navClasses}>
      {/* Floating particles in navbar */}
      {!isOpen && particles.map((particle) => (
        <div 
          key={particle.id}
          className="particle hidden lg:block"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}

      <div className="container-custom flex items-center justify-between">
        <Link href="/" className="relative z-10 text-3xl md:text-4xl font-extrabold tracking-tighter text-gradient glow-text">
          WAKEYSHA
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="/" label="HOME" currentPath={pathname} />
          <NavLink href="/music" label="MUSIC" currentPath={pathname} />
          <NavLink href="/gallery" label="GALLERY" currentPath={pathname} />
          <NavLink href="/events" label="EVENTS" currentPath={pathname} />
          <NavLink href="/contact" label="CONTACT" currentPath={pathname} />
          <a 
            href="https://open.spotify.com/artist/4qC3jfqygBvCOkiQZNFd10" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-icon bg-gradient-primary ml-2 glow-sm"
            aria-label="Spotify"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.52 17.34c-.24.36-.66.48-1.02.24-2.82-1.74-6.36-2.1-10.56-1.14-.42.12-.78-.12-.9-.48-.12-.42.12-.78.48-.9 4.56-1.02 8.52-.6 11.64 1.26.42.18.48.66.24 1.02zm1.44-3.3c-.3.42-.84.6-1.26.3-3.24-1.98-8.16-2.58-11.94-1.38-.48.12-.99-.12-1.11-.6-.12-.48.12-.99.6-1.11 4.38-1.32 9.78-.66 13.5 1.62.36.18.54.78.3 1.26v-.09zm.12-3.36c-3.84-2.28-10.2-2.52-13.86-1.38-.6.12-1.2-.24-1.32-.84-.12-.6.24-1.2.84-1.32 4.2-1.26 11.16-.96 15.48 1.62.54.3.72 1.08.42 1.62-.3.42-1.08.66-1.62.36l.06-.06z"/>
            </svg>
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden bg-surface/80 backdrop-blur-sm p-2 rounded-full focus:outline-none border border-border" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-5 flex items-center justify-center">
            <span className={`absolute h-0.5 w-6 bg-secondary transform transition duration-300 ease-out ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}></span>
            <span className={`absolute h-0.5 w-6 bg-secondary transform transition duration-300 ease-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`absolute h-0.5 w-6 bg-secondary transform transition duration-300 ease-out ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}></span>
          </div>
        </button>
      </div>
      
      {/* Mobile Menu Panel */}
      <div className={`md:hidden fixed inset-0 bg-background/95 backdrop-blur-md z-40 transition-all duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="h-full flex flex-col items-center justify-center gap-8 text-center">
          <NavLink href="/" label="HOME" currentPath={pathname} mobile />
          <NavLink href="/music" label="MUSIC" currentPath={pathname} mobile />
          <NavLink href="/gallery" label="GALLERY" currentPath={pathname} mobile />
          <NavLink href="/events" label="EVENTS" currentPath={pathname} mobile />
          <NavLink href="/contact" label="CONTACT" currentPath={pathname} mobile />
          
          <div className="flex items-center gap-4 mt-6">
            <a 
              href="https://open.spotify.com/artist/4qC3jfqygBvCOkiQZNFd10" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-icon bg-surface hover:bg-surface/50 text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.52 17.34c-.24.36-.66.48-1.02.24-2.82-1.74-6.36-2.1-10.56-1.14-.42.12-.78-.12-.9-.48-.12-.42.12-.78.48-.9 4.56-1.02 8.52-.6 11.64 1.26.42.18.48.66.24 1.02zm1.44-3.3c-.3.42-.84.6-1.26.3-3.24-1.98-8.16-2.58-11.94-1.38-.48.12-.99-.12-1.11-.6-.12-.48.12-.99.6-1.11 4.38-1.32 9.78-.66 13.5 1.62.36.18.54.78.3 1.26v-.09zm.12-3.36c-3.84-2.28-10.2-2.52-13.86-1.38-.6.12-1.2-.24-1.32-.84-.12-.6.24-1.2.84-1.32 4.2-1.26 11.16-.96 15.48 1.62.54.3.72 1.08.42 1.62-.3.42-1.08.66-1.62.36l.06-.06z"/>
                </svg>
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-icon bg-surface hover:bg-surface/50 text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-icon bg-surface hover:bg-surface/50 text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

interface NavLinkProps {
  href: string;
  label: string;
  currentPath: string;
  mobile?: boolean;
}

function NavLink({ href, label, currentPath, mobile = false }: NavLinkProps) {
  const isActive = currentPath === href;
  
  if (mobile) {
    return (
      <Link 
        href={href} 
        className={`text-2xl font-display font-semibold tracking-wide ${isActive ? 'text-gradient glow-text' : 'text-text-light hover:text-secondary'} transition-all duration-300`}
      >
        {label}
      </Link>
    );
  }
  
  return (
    <Link 
      href={href} 
      className={`nav-link text-sm tracking-widest font-bold ${isActive ? 'nav-link-active' : ''}`}
    >
      {label}
      <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 ${isActive ? 'w-full' : ''}`}></span>
    </Link>
  );
}
