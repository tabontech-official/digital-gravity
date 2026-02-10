import React from "react";

const BackgroundVideo = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source
          src="https://cdn.shopify.com/videos/c/o/v/df08c454451b4622be7ffeb6d0eed475.mp4"
          type="video/mp4"
        />
      </video>

      {/* LIGHT GLASS OVERLAY */}
      <div className="absolute inset-0 bg-white/65 backdrop-blur-sm" />
    </div>
  );
};

export default BackgroundVideo;
