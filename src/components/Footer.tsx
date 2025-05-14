import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-surface/30 overflow-hidden border-t border-border/20">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-gradient-to-tr from-primary to-secondary blur-3xl"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gradient-to-bl from-accent to-secondary blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10 pt-16 pb-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand section */}
          <div className="col-span-1 sm:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <h2 className="text-2xl font-extrabold tracking-tighter text-gradient glow-text">WAKEYSHA</h2>
            </Link>
            
            <p className="text-text-light/80 mb-8 max-w-md">
              Pushing the boundaries of electronic music with atmospheric soundscapes and hypnotic beats. Experience the journey through sound and visual artistry.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="https://open.spotify.com/artist/4qC3jfqygBvCOkiQZNFd10" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-icon bg-surface hover:bg-surface/50 text-secondary"
                aria-label="Spotify"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.52 17.34c-.24.36-.66.48-1.02.24-2.82-1.74-6.36-2.1-10.56-1.14-.42.12-.78-.12-.9-.48-.12-.42.12-.78.48-.9 4.56-1.02 8.52-.6 11.64 1.26.42.18.48.66.24 1.02zm1.44-3.3c-.3.42-.84.6-1.26.3-3.24-1.98-8.16-2.58-11.94-1.38-.48.12-.99-.12-1.11-.6-.12-.48.12-.99.6-1.11 4.38-1.32 9.78-.66 13.5 1.62.36.18.54.78.3 1.26v-.09zm.12-3.36c-3.84-2.28-10.2-2.52-13.86-1.38-.6.12-1.2-.24-1.32-.84-.12-.6.24-1.2.84-1.32 4.2-1.26 11.16-.96 15.48 1.62.54.3.72 1.08.42 1.62-.3.42-1.08.66-1.62.36l.06-.06z"/>
                </svg>
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-icon bg-surface hover:bg-surface/50 text-secondary"
                aria-label="Instagram"
              >
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
                className="btn-icon bg-surface hover:bg-surface/50 text-secondary"
                aria-label="YouTube"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-bold tracking-wide mb-6 text-gradient">EXPLORE</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="footer-link">HOME</Link>
              </li>
              <li>
                <Link href="/music" className="footer-link">MUSIC</Link>
              </li>
              <li>
                <Link href="/gallery" className="footer-link">GALLERY</Link>
              </li>
              <li>
                <Link href="/events" className="footer-link">EVENTS</Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link">CONTACT</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="text-lg font-bold tracking-wide mb-6 text-gradient">CONTACT</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-secondary mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">contact@wakeysha.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-secondary mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm">Los Angeles, CA<br />United States</span>
              </li>
              <li>
                <a href="/contact" className="btn-outline mt-4">Send Message</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter section */}
        <div className="bg-surface/30 backdrop-blur-sm border border-border/30 rounded-2xl p-6 md:p-8 mt-16 mb-8">
          <div className="grid md:grid-cols-5 gap-6 items-center">
            <div className="md:col-span-3">
              <h3 className="text-xl font-bold mb-2">Join the Journey</h3>
              <p className="text-text-light/70">Subscribe to receive updates on new releases, events, and exclusive content.</p>
            </div>
            <div className="md:col-span-2">
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="flex-1 bg-background border border-border/50 rounded-l-lg px-4 py-2 focus:outline-none focus:border-secondary"
                />
                <button 
                  type="submit" 
                  className="btn-primary rounded-l-none"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/30 text-sm text-text-light/50">
          <p>&copy; {currentYear} Wakeysha. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-secondary transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
