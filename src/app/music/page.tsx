export default function MusicPage() {
  return (
    <main className="min-h-screen flex flex-col items-center py-12 px-4 md:px-8 max-w-6xl mx-auto">
      <h1 className="text-5xl font-bold mb-8 gradient-text">Wakeysha Music</h1>
      
      <div className="w-full mb-12">
        <div className="card p-6 md:p-8 mb-8 w-full max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Latest Releases</h2>
          <div className="spotify-container w-full rounded-xl overflow-hidden">
            <iframe 
              style={{borderRadius: '12px'}} 
              src="https://open.spotify.com/embed/artist/4qC3jfqygBvCOkiQZNFd10?utm_source=generator" 
              width="100%" 
              height="352" 
              frameBorder="0" 
              allowFullScreen 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy">
            </iframe>
          </div>
        </div>
      </div>

      <section className="w-full max-w-4xl mx-auto">
        <div className="card p-6 md:p-8 animated-bg">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">About Wakeysha&apos;s Sound</h2>
          <p className="text-lg mb-4">
            Wakeysha blends ethereal vocals with captivating electronic beats, creating a unique sonic experience
            that transcends traditional genre boundaries. Each track invites listeners into a vivid soundscape
            where emotion and rhythm converge.
          </p>
          <p className="text-lg mb-6">
            Explore Wakeysha&apos;s musical journey through the latest releases, and stay connected
            for upcoming projects and collaborations.
          </p>
          <a href="/contact" className="btn btn-primary inline-block">Contact for Bookings</a>
        </div>
      </section>
    </main>
  );
}
