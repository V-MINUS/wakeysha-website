"use client";

import { useState } from "react";

type VideoType = {
  id: string;
  src: string;
  title: string;
};

// This would normally come from a CMS or API
const videos: VideoType[] = [
  {
    id: "1",
    src: "/wakeysha__1722679610_3426404277187260834_18315225037.mp4",
    title: "Video 01"
  },
  {
    id: "2",
    src: "/wakeysha__1621409328_2576890520175671811_18315225037.mp4",
    title: "Video 02"
  },
  {
    id: "3",
    src: "/wakeysha__1637742155_2713900027484502105_18315225037.mp4",
    title: "Video 03"
  },
  {
    id: "4",
    src: "/wakeysha__1638780700_2722611766979763782_18315225037.mp4",
    title: "Video 04"
  },
  {
    id: "5",
    src: "/wakeysha__1638954895_2724071670160657236_18315225037.mp4",
    title: "Video 05"
  },
  {
    id: "6",
    src: "/wakeysha__1673264407_3011880796497396687_18315225037.mp4",
    title: "Video 06"
  },
  {
    id: "7",
    src: "/wakeysha__1674813321_3024875142189874027_18315225037.mp4",
    title: "Video 07"
  },
  {
    id: "8",
    src: "/wakeysha__1675410863_3029887788764969767_18315225037.mp4",
    title: "Video 08"
  },
  {
    id: "9",
    src: "/wakeysha__1681646989_3082195054226387647_18315225037.mp4",
    title: "Video 09"
  },
  {
    id: "10",
    src: "/wakeysha__1704451510_3273496384843690120_18315225037.mp4",
    title: "Video 10"
  },
  {
    id: "11",
    src: "/wakeysha__1704793698_3276366296134051161_18315225037.mp4",
    title: "Video 11"
  },
  {
    id: "12",
    src: "/wakeysha__1721900301_3419866576342500643_18315225037.mp4",
    title: "Video 12"
  }
];

export default function GalleryPage() {
  const [selectedVideo, setSelectedVideo] = useState<VideoType | null>(null);
  const [filter, setFilter] = useState("all");

  // Function to open video modal
  const openVideoModal = (video: VideoType) => {
    setSelectedVideo(video);
  };

  // Function to close video modal
  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <main className="min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center gradient-text">Media Gallery</h1>
        <p className="text-lg text-text-muted text-center max-w-3xl mx-auto mb-12">
          Explore Wakeysha&apos;s performances, studio sessions, and creative process through these visual highlights.
        </p>

        {/* Filter tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-background-alt rounded-lg p-1">
            <button 
              onClick={() => setFilter("all")} 
              className={`px-4 py-2 rounded-md transition-all ${filter === "all" ? "bg-primary text-white" : "hover:bg-background-alt/80"}`}
            >
              All Videos
            </button>
            <button 
              onClick={() => setFilter("performances")} 
              className={`px-4 py-2 rounded-md transition-all ${filter === "performances" ? "bg-primary text-white" : "hover:bg-background-alt/80"}`}
            >
              Performances
            </button>
            <button 
              onClick={() => setFilter("studio")} 
              className={`px-4 py-2 rounded-md transition-all ${filter === "studio" ? "bg-primary text-white" : "hover:bg-background-alt/80"}`}
            >
              Studio
            </button>
          </div>
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {videos.map((video) => (
            <div key={video.id} className="card overflow-hidden group hover:scale-[1.02] transition-all duration-300">
              <div className="relative aspect-video cursor-pointer" onClick={() => openVideoModal(video)}>
                <video 
                  src={video.src} 
                  className="w-full h-full object-cover bg-background-alt"
                  muted 
                  playsInline
                  onMouseOver={(e) => e.currentTarget.play()}
                  onMouseOut={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 opacity-100 group-hover:opacity-90 transition-opacity">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{video.title}</h3>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={closeVideoModal}>
            <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
              <div className="absolute -top-12 right-0 md:right-2">
                <button 
                  onClick={closeVideoModal}
                  className="bg-primary/20 hover:bg-primary/40 p-2 rounded-full transition-colors"
                  aria-label="Close video"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              <div className="bg-background-alt rounded-lg overflow-hidden">
                <video 
                  src={selectedVideo.src} 
                  className="w-full aspect-video" 
                  controls 
                  autoPlay
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{selectedVideo.title}</h3>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Additional content - call to action */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">Want to See More?</h2>
          <p className="text-lg text-text-muted mb-8 max-w-2xl mx-auto">Follow Wakeysha on social media for the latest updates, behind-the-scenes content, and exclusive releases.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="btn btn-primary">Instagram</a>
            <a href="#" className="btn border border-secondary hover:bg-secondary/20 transition-colors">YouTube</a>
          </div>
        </div>
      </div>
    </main>
  );
}
