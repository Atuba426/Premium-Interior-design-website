"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

export default function VideoPlayer({ src, poster, title }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="group relative aspect-video w-full overflow-hidden rounded-card card-shadow-lg">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        controls={playing}
        playsInline
        className="h-full w-full object-cover"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />

      {!playing && (
        <button
          onClick={toggle}
          aria-label={`Play video: ${title}`}
          className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors duration-300 group-hover:bg-black/40"
        >
          <motion.span
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-background sm:h-20 sm:w-20"
          >
            <Play size={28} fill="currentColor" className="ml-1" />
          </motion.span>
        </button>
      )}
    </div>
  );
}
