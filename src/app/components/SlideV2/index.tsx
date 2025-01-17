// components/Slide.tsx
import React from "react";
import classnames from "classnames/bind";

import styles from "./slide.module.scss";

const cx = classnames.bind(styles);

// Define allowed types for the slide
type SlideType =
 | "titleSlide"
 | "photo"
 | "video"
 | "infographic"
 | "audio"
 | "quote"
 | "spacer"
 | "bannerImage"
 | "title"
 | "textOnly"
 | "chapterTitle";

interface SlideProps {
 type?: SlideType; // Use the SlideType to restrict the type
 children?: React.ReactNode;
 width?: "small" | "medium" | "large" | "xlarge";
}

const Slide: React.FC<SlideProps> = ({ type, children, width }) => {
 // Generate class names dynamically based on props
 const slideClasses = cx({
  slide: true,
  [type as string]: type, // Cast 'type' to string since classnames expects a string key
  [`spacer--${width}`]: type === "spacer", // Add conditional class for width
 });

 return <div className={slideClasses}>{children}</div>;
};

export default Slide;
