import React from 'react';

const HeroVideo: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden h-full w-full">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover animate-slow-zoom opacity-90"
      >
        <source 
          src="https://videos.pexels.com/video-files/5926716/5926716-uhd_2160_4096_25fps.mp4" 
          type="video/mp4" 
        />
        {/* Fallback */}
        <img 
          src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=2070" 
          alt="Biryani Background" 
          className="h-full w-full object-cover"
        />
      </video>
      
      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-black/30" />
    </div>
  );
}

export default HeroVideo;