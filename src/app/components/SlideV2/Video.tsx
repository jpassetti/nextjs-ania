import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames/bind";
import styles from "./subcomponents.module.scss";

const cx = classNames.bind(styles);

interface VideoProps {
 videoDetails: {
  videoUrl?: string;
  coverImage?: {
   asset: {
    url: string;
    metadata: {
     dimensions: {
      width: number;
      height: number;
      aspectRatio: number;
     };
    };
   };
  };
  caption?: string;
  meta_information?: string;
 };
}

const Video: React.FC<VideoProps> = ({ videoDetails }) => {
 const [autoplayed, setAutoplayed] = useState(false);
 const [isPaused, setIsPaused] = useState(true); // To track the state of the video (paused/playing)
 const videoRef = useRef<HTMLIFrameElement | null>(null);

 const { videoUrl, coverImage, caption, meta_information } = videoDetails;

 const vimeoClasses = cx({
  [`embed-responsive`]: true,
  [`embed-responsive-16by9`]: true,
 });

 const iframeClasses = cx({
  [`embed-responsive-item`]: true,
 });

 // Extract Vimeo ID
 const vimeoId = videoUrl?.match(/vimeo\.com\/(\d+)/)?.[1];

 // Intersection Observer setup with debouncing mechanism
 useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    const iframeEl = videoRef.current;

    if (!iframeEl) return;

  const observer = new IntersectionObserver(
   (entries) => {
    entries.forEach((entry) => {
     const iframe = entry.target as HTMLIFrameElement;

     if (entry.isIntersecting) {
      // If video is in view, delay the autoplay or resume play
      if (timer) clearTimeout(timer); // Clear any existing timeouts
      timer = setTimeout(() => {
       if (isPaused && !autoplayed) {
        iframe.src = iframe.src + "?autoplay=1"; // Append autoplay=1 to the URL
        setAutoplayed(true);
        setIsPaused(false); // Mark as playing
       } else if (isPaused && autoplayed) {
        iframe.contentWindow?.postMessage({ method: "play" }, "*"); // Resume play if already autoplayed
        setIsPaused(false); // Mark as playing
       }
      }, 100); // Delay the autoplay or play action by 100ms
     } else {
      // If video is out of view, pause it with a slight delay
      if (timer) clearTimeout(timer); // Clear any existing timeouts
      timer = setTimeout(() => {
       iframe.contentWindow?.postMessage({ method: "pause" }, "*"); // Pause the video
       setIsPaused(true); // Mark as paused
      }, 100); // Delay the pause action by 100ms
     }
    });
   },
   {
    root: null,
    threshold: 0.5, // Trigger when 50% of the video is in view
   }
  );

    observer.observe(iframeEl);

  return () => {
    observer.unobserve(iframeEl); // Clean up observer when component unmounts
    observer.disconnect();
   if (timer) clearTimeout(timer); // Clean up timeout if it's set
  };
 }, [autoplayed, isPaused]);

 return (
  <div className={styles.the_video}>
   <div className={vimeoClasses}>
    {videoUrl && (
     <iframe
      ref={videoRef}
      className={iframeClasses}
      title="Blinded Flight"
      src={`https://player.vimeo.com/video/${vimeoId}?title=0&byline=0&portrait=0&badge=0&app=0`}
      width="500"
      height="281"
      style={{ border: "none" }}
      allow="autoplay; fullscreen"
      allowFullScreen={true}
     ></iframe>
    )}
   </div>
   {caption && <p className={styles.the_caption}>{caption}</p>}
   {meta_information && <p className={styles.the_meta}>{meta_information}</p>}
  </div>
 );
};

export default Video;
