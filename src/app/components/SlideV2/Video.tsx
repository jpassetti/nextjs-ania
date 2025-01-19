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

 // Intersection Observer setup
 useEffect(() => {
  const observer = new IntersectionObserver(
   (entries) => {
    entries.forEach((entry) => {
     const iframe = entry.target as HTMLIFrameElement;
     if (entry.isIntersecting) {
      // Play the video when it is in view
      if (!autoplayed) {
       iframe.src = iframe.src + "?autoplay=1"; // Append autoplay=1 to the URL
       setAutoplayed(true);
      } else {
       iframe.contentWindow?.postMessage({ method: "play" }, "*"); // Play the video when it comes back into view
      }
     } else {
      // Pause the video when it goes out of view
      iframe.contentWindow?.postMessage({ method: "pause" }, "*"); // Pause the video
     }
    });
   },
   {
    root: null,
    threshold: 0.5, // Trigger when 50% of the video is in view
   }
  );

  if (videoRef.current) {
   observer.observe(videoRef.current);
  }

  return () => {
   if (videoRef.current) {
    observer.unobserve(videoRef.current);
   }
  };
 }, [autoplayed]);

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
      style={{ border: "none" }} // Replacing frameBorder with style
      allow="autoplay; fullscreen"
      allowFullScreen={true} // Use boolean true for allowFullScreen
     ></iframe>
    )}
   </div>
   {caption && <p className={styles.the_caption}>{caption}</p>}
   {meta_information && <p className={styles.the_meta}>{meta_information}</p>}
  </div>
 );
};

export default Video;
