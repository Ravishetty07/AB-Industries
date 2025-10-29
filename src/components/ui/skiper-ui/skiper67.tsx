"use client";

import { AnimatePresence, motion, useSpring } from "framer-motion";
import { Play, Plus } from "lucide-react";
import {
  MediaControlBar,
  MediaController,
  MediaMuteButton,
  MediaPlayButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaTimeDisplay,
  MediaTimeRange,
  MediaVolumeRange,
} from "media-chrome/react";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

/* ----------- Video Player Components ----------- */
export const VideoPlayer = ({ style, ...props }) => (
  <MediaController style={{ ...style }} {...props} />
);

export const VideoPlayerControlBar = (props) => <MediaControlBar {...props} />;

export const VideoPlayerTimeRange = ({ className, ...props }) => (
  <MediaTimeRange
    className={cn(
      "[--media-range-thumb-opacity:0] [--media-range-track-height:2px]",
      className
    )}
    {...props}
  />
);

export const VideoPlayerPlayButton = ({ className, ...props }) => (
  <MediaPlayButton className={cn("", className)} {...props} />
);

export const VideoPlayerMuteButton = ({ className, ...props }) => (
  <MediaMuteButton className={cn("", className)} {...props} />
);

export const VideoPlayerContent = ({ className, ...props }) => (
  <video className={cn("mb-0 mt-0", className)} {...props} />
);

/* ----------- Main Component ----------- */
export const Skiper67 = () => {
  const [showVideoPopOver, setShowVideoPopOver] = useState(false);

  const SPRING = { mass: 0.1 };
  const x = useSpring(0, SPRING);
  const y = useSpring(0, SPRING);
  const opacity = useSpring(0, SPRING);

  const handlePointerMove = (e) => {
    opacity.set(1);
    const bounds = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - bounds.left);
    y.set(e.clientY - bounds.top);
  };

  return (
    <section className="relative flex h-[70vh] w-full items-center justify-center bg-white rounded-4xl text-white overflow-hidden">
      {/* Soft Glows */}
      <motion.div
        className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full"
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Hint Text */}
      <div className="absolute top-[25%] text-center">
        <span className="relative text-xs uppercase tracking-wider opacity-60 text-black">
          Click the video to play
          <span className="absolute left-1/2 top-full mt-3 h-12 w-px bg-black"></span>
        </span>
      </div>

      {/* Video Thumbnail */}
      <AnimatePresence>
        {showVideoPopOver && (
          <VideoPopOver setShowVideoPopOver={setShowVideoPopOver} />
        )}
      </AnimatePresence>

      <div
        onMouseMove={handlePointerMove}
        onMouseLeave={() => opacity.set(0)}
        onClick={() => setShowVideoPopOver(true)}
        className="relative w-[260px] h-[160px] cursor-pointer overflow-hidden rounded-xl shadow-xl border border-white/10 transition hover:scale-105 hover:shadow-2xl"
      >
        <motion.div
          style={{ x, y, opacity }}
          className="absolute z-20 flex items-center justify-center gap-2 text-sm text-white mix-blend-exclusion font-medium"
        >
          <Play className="size-4 fill-white" /> Play
        </motion.div>

        <video
          autoPlay
          muted
          playsInline
          loop
          className="h-full w-full object-cover"
        >
          <source src="/showreel/ab-industries.mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      </div>
    </section>
  );
};

/* ----------- Popover Modal ----------- */
const VideoPopOver = ({ setShowVideoPopOver }) => {
  return (
    <div className="fixed inset-0 z-[101] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={() => setShowVideoPopOver(false)}
      />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.4, type: 'spring', stiffness: 100 }}
        className="relative aspect-video max-w-5xl w-[90%] overflow-hidden rounded-xl shadow-2xl"
      >
        <VideoPlayer style={{ width: "100%", height: "100%" }}>
          <VideoPlayerContent
            src="/showreel/ab-industries.mp4"
            autoPlay
            slot="media"
            className="h-full w-full object-cover"
          />
          <button
            onClick={() => setShowVideoPopOver(false)}
            className="absolute right-2 top-2 z-10 rounded-full bg-black/40 p-1 hover:bg-black/60 transition"
          >
            <Plus className="size-5 rotate-45 text-white" />
          </button>
          <VideoPlayerControlBar className="absolute bottom-0 left-1/2 flex w-full max-w-5xl -translate-x-1/2 items-center justify-center px-5 bg-black/30 backdrop-blur-md">
            <VideoPlayerPlayButton className="h-4 bg-transparent" />
            <VideoPlayerTimeRange className="mx-3 bg-transparent" />
            <VideoPlayerMuteButton className="size-4 bg-transparent" />
          </VideoPlayerControlBar>
        </VideoPlayer>
      </motion.div>
    </div>
  );
};
