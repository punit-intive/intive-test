
"use client";
/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect, useRef } from "react";

const MediaVideo = ({
  src,
  preload,
  playOnHover,
  poster,
  contentType,
  shouldLoop,
  shouldAutoplay,
  shouldMute,
  showControls,
  shouldPlaysInline,
  className
}) => {
  const videoRef = useRef();

  const finalSrc = poster ? src : `${src}#t=0.01`;

  useEffect(() => {
    const playVideo = () => videoRef.current?.play();
    const stopVideo = () => videoRef.current?.pause();

    if (videoRef.current && playOnHover) {
      videoRef.current.addEventListener("mouseover", playVideo);

      videoRef.current.addEventListener("mouseleave", stopVideo);
    }

    return () => {
      videoRef.current?.removeEventListener("mouseover", playVideo);
      videoRef.current?.removeEventListener("mouseleave", stopVideo);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      preload={preload}
      poster={poster}
      loop={shouldLoop}
      muted={!shouldAutoplay ? shouldMute : true} // https://developer.chrome.com/blog/autoplay/
      autoPlay={shouldAutoplay}
      controls={showControls}
      playsInline={shouldPlaysInline}
      className={className}
    >
      <track />
      <source src={finalSrc} type={contentType} />
      Your browser does not support the video tag.
    </video>
  );
};


export default MediaVideo;
