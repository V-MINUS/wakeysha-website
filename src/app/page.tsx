export default function Home() {
  return (
    <>
      {/* Hero Section with Immersive Video Background */}
      <section className="relative flex items-center justify-center min-h-[95vh] w-full overflow-hidden">
        {/* Video background */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-label="Wakeysha performance video background"
        />
        
        {/* Gradient overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/70 z-10" 
          aria-hidden="true" 
        />
        
        {/* Geometric shapes for visual interest */}
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          {/* Animated circles */}
          <div className="absolute top-[25%] left-[15%] w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float"></div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-grid opacity-[0.03]"></div>
        </div>
        
        {/* Main hero content */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 py-24 sm:py-32 max-w-5xl mx-auto">
          <h1 className="text-6xl sm:text-8xl font-extrabold text-gradient glow-text leading-none mb-6 tracking-tighter">
            WAKEYSHA
          </h1>
          
          <p className="text-xl sm:text-2xl font-medium text-text-light/90 max-w-2xl mb-10 drop-shadow-md tracking-wide">
            Pulsing beats. Electric soul. <span className="text-secondary">Soundscapes for the night.</span>
          </p>
          
          {/* Interactive call-to-action buttons with enhanced styling */}
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="/music" 
              className="btn-primary px-8 py-4 text-lg font-bold tracking-wider glow-sm hover:glow-md transition-all duration-500 hover:scale-105"
            >
              LISTEN NOW
            </a>
            <a 
              href="/events" 
              className="btn-outline px-8 py-4 text-lg font-bold tracking-wider hover:bg-secondary/10 transition-all duration-500"
            >
              UPCOMING SHOWS
            </a>
          </div>
          
          {/* Animated sound wave visualization */}
          <div className="mt-16 w-full max-w-md flex justify-center items-center gap-1.5">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className="w-1.5 h-12 bg-gradient-to-t from-primary to-secondary rounded-full"
                style={{
                  animation: `sound-wave 1.5s ease-in-out infinite ${i * 0.05}s`,
                  opacity: 0.5 + Math.abs((i - 10) / 20)
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
          <div className="animate-bounce p-2 bg-surface/30 backdrop-blur-sm rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="section relative overflow-hidden z-10">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -left-32 top-32 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute -right-32 bottom-32 w-80 h-80 rounded-full bg-secondary/10 blur-3xl"></div>
        </div>
        
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-16 items-center justify-between">
            {/* Image/Visual side */}
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
                <div className="card-interactive relative overflow-hidden rounded-2xl border border-border/50 bg-surface/80 backdrop-blur-sm aspect-square">
                  <div className="absolute inset-0 opacity-20 bg-noise"></div>
                  <div className="h-full w-full p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="relative mb-6 inline-block">
                        <div className="absolute inset-0 bg-secondary/20 blur-xl animate-pulse-slow"></div>
                        <div className="relative text-7xl">🎧</div>
                      </div>
                      <p className="text-xl font-display font-medium text-text-light/80">Artist Photo Coming Soon</p>
                    </div>
                  </div>
                  
                  {/* Decorative circles */}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content side */}
            <div className="w-full md:w-1/2 space-y-8 order-1 md:order-2">
              {/* Section title with animated underline */}
              <div className="relative">
                <h2 className="text-display-2 font-extrabold tracking-tight mb-2">About <span className="text-gradient glow-text">WAKEYSHA</span></h2>
                <div className="w-20 h-1 bg-secondary rounded-full"></div>
              </div>
              
              <div className="space-y-6 text-text-light/90">
                <p className="text-body-lg">
                  Wakeysha is an electronic music artist crafting hypnotic soundscapes that blend deep bass, atmospheric synths, and pulsating rhythms that transcend conventional genres.
                </p>
                <p className="text-body-lg">
                  From intimate underground venues to festival main stages, each performance transforms spaces into immersive sonic journeys that connect with audiences on a visceral level.
                </p>
              </div>
              
              {/* Features highlight */}
              <div className="grid grid-cols-2 gap-6 py-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18V5l12-2v13"></path>
                      <circle cx="6" cy="18" r="3"></circle>
                      <circle cx="18" cy="16" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Original Tracks</h3>
                    <p className="text-sm text-text-light/70">Innovative compositions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polygon points="10 8 16 12 10 16 10 8"></polygon>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Live Performances</h3>
                    <p className="text-sm text-text-light/70">Immersive experiences</p>
                  </div>
                </div>
              </div>
              
              <a href="/gallery" className="btn-primary inline-flex items-center">
                Explore Gallery
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Latest Releases Preview */}
      <section className="py-24 w-full bg-surface/30 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-background to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-background to-transparent"></div>
          <div className="absolute inset-0 bg-grid opacity-[0.03]"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="flex flex-col items-center mb-20">
            <span className="px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-semibold tracking-wider mb-4">ELECTRONIC SOUNDSCAPES</span>
            <h2 className="text-display-1 font-extrabold text-center text-gradient glow-text mb-6">Latest Releases</h2>
            <p className="text-body-lg text-center max-w-xl text-text-light/80">Experience the atmospheric journeys and rhythmic adventures of Wakeysha&apos;s most recent musical creations.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Track 1: FREE by Wakeysha, SCLIF, FIFI */}
            <div className="group">
              <div className="relative mb-8 overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="aspect-square bg-surface border border-border/30 relative overflow-hidden">
                  {/* Spotify Embed */}
                  <iframe 
                    src="https://open.spotify.com/embed/track/3qQbEVbabmbRmLlEoQJixL" 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy"
                    className="absolute inset-0"
                  ></iframe>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/0 to-background/80 pointer-events-none"></div>
                </div>
              </div>
              
              <div className="px-2">
                <h3 className="text-heading-2 font-bold mb-2">FREE</h3>
                <p className="text-text-light/70 mb-4">A collaborative single featuring Wakeysha, SCLIF, and FIFI with infectious beats and atmospheric synths.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-secondary">2023 • Single</span>
                  <a href="https://open.spotify.com/track/3qQbEVbabmbRmLlEoQJixL" target="_blank" rel="noopener noreferrer" className="btn-text group/btn">
                    <span>Listen Now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 group-hover/btn:translate-x-1 transition-transform duration-300">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Track 2: Fabulous by Wakeysha */}
            <div className="group">
              <div className="relative mb-8 overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="aspect-square bg-surface border border-border/30 relative overflow-hidden">
                  {/* Spotify Embed */}
                  <iframe 
                    src="https://open.spotify.com/embed/track/5fJKruHJLHCeT5W8gjiZQw" 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy"
                    className="absolute inset-0"
                  ></iframe>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/0 to-background/80 pointer-events-none"></div>
                </div>
              </div>
              
              <div className="px-2">
                <h3 className="text-heading-2 font-bold mb-2">Fabulous</h3>
                <p className="text-text-light/70 mb-4">Wakeysha&apos;s signature solo track featuring hypnotic rhythms and ethereal melodies.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-secondary">2023 • Single</span>
                  <a href="https://open.spotify.com/track/5fJKruHJLHCeT5W8gjiZQw" target="_blank" rel="noopener noreferrer" className="btn-text group/btn">
                    <span>Listen Now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 group-hover/btn:translate-x-1 transition-transform duration-300">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Track 3: jump_up_jam.exe by Wakeysha */}
            <div className="group">
              <div className="relative mb-8 overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="aspect-square bg-surface border border-border/30 relative overflow-hidden">
                  {/* Spotify Embed */}
                  <iframe 
                    src="https://open.spotify.com/embed/track/3h9CmUqcSlY2zLifMzKqcT" 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy"
                    className="absolute inset-0"
                  ></iframe>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/0 to-background/80 pointer-events-none"></div>
                </div>
              </div>
              
              <div className="px-2">
                <h3 className="text-heading-2 font-bold mb-2">jump_up_jam.exe</h3>
                <p className="text-text-light/70 mb-4">High-energy dance floor anthem with intricate sound design and driving beats.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-secondary">2022 • Single</span>
                  <a href="https://open.spotify.com/track/3h9CmUqcSlY2zLifMzKqcT" target="_blank" rel="noopener noreferrer" className="btn-text group/btn">
                    <span>Listen Now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 group-hover/btn:translate-x-1 transition-transform duration-300">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Animated gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] rounded-full bg-gradient-to-r from-primary/30 to-secondary/10 opacity-40 blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-1/4 w-[20rem] h-[20rem] rounded-full bg-gradient-to-l from-accent/20 to-secondary/10 opacity-30 blur-3xl animate-pulse-slow"></div>
          
          {/* Grid patterns */}
          <div className="absolute inset-0 bg-grid opacity-[0.02]"></div>
        </div>
        
        {/* Content */}
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="card-interactive bg-surface/40 backdrop-blur-md border border-border/50 rounded-3xl overflow-hidden">
              <div className="relative p-12 md:p-16 flex flex-col items-center text-center">
                {/* Decorative elements */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
                <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
                
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full flex items-center justify-center mb-8">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                    <path d="M12 20.5a1.5 1.5 0 0 1-1.5-1.5v-7A1.5 1.5 0 0 1 12 10.5v0a1.5 1.5 0 0 1 1.5 1.5v7a1.5 1.5 0 0 1-1.5 1.5v0Z"></path>
                    <path d="M12 3.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5"></path>
                    <path d="M12 7V4"></path>
                    <path d="M8 16.5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1 1 1 0 0 1 1 1v2a1 1 0 0 1-1 1Z"></path>
                    <path d="M16 16.5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1 1 1 0 0 1 1 1v2a1 1 0 0 1-1 1Z"></path>
                    <path d="M7.088 2.65a4 4 0 0 1 9.824 0"></path>
                    <path d="M14.088 22.65a4 4 0 1 0-4.176-6.5"></path>
                  </svg>
                </div>
                
                {/* Content */}
                <h2 className="text-display-2 font-extrabold text-gradient glow-text mb-6">Join the Journey</h2>
                <p className="text-body-lg text-text-light/80 max-w-2xl mb-10">
                  Connect with WAKEYSHA to stay updated on new releases, upcoming performances, and exclusive behind-the-scenes content. Let&apos;s explore the sonic universe together.
                </p>
                
                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <a 
                    href="/contact" 
                    className="btn-primary px-8 py-4 font-bold tracking-wider glow-sm hover:glow-md transition-all duration-500 hover:scale-105"
                  >
                    GET IN TOUCH
                  </a>
                  <a 
                    href="/music" 
                    className="btn-outline px-8 py-4 font-bold tracking-wider hover:bg-secondary/10 transition-all duration-500"
                  >
                    EXPLORE MUSIC
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
