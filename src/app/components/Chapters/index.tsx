import React, { useEffect, useRef } from "react";
import classNames from "classnames/bind";
import styles from "./chapters.module.scss";

const cx = classNames.bind(styles);

// Define the interface for the Chapters component
interface ChaptersProps {
 activeIndex: number; // Index of the currently active chapter
 chapters: string[]; // Array of chapter titles
 setActiveIndex: (index: number) => void; // Function to update the active chapter index
}

const Chapters: React.FC<ChaptersProps> = ({
 chapters,
 activeIndex,
 setActiveIndex,
}) => {
 // Reference to the chapter list container
 const chaptersContainerRef = useRef<HTMLDivElement | null>(null);

 // Function to handle the click and scrolling behavior
 const handleChapterClick = (index: number) => {
  setActiveIndex(index); // Set the active index
  const storyElement = document.getElementById(`story${index}`); // Get the corresponding story
  if (storyElement) {
   // Scroll to the corresponding story element, aligning to the left of the viewport
   storyElement.scrollIntoView({
    behavior: "smooth",
    inline: "start", // Align to the left edge of the scroll container
   });
  }
 };

 // useEffect to handle scrolling of the chapter tab into view when activeIndex changes
 useEffect(() => {
  // Ensure the manual chapter items exist
  const manualChapters = document.querySelectorAll(".manual__chapter__item");

  // Make sure the activeIndex is within bounds to prevent errors
  if (manualChapters.length > activeIndex && manualChapters[activeIndex]) {
   (manualChapters[activeIndex] as HTMLElement).scrollIntoView({
    behavior: "smooth",
    block: "center", // Center the active chapter tab in the viewport
   });
  }
 }, [activeIndex]); // Trigger when activeIndex changes

 return (
  <div className={styles.chapters}>
   <div className={styles.chapters__container} ref={chaptersContainerRef}>
    <ul className={styles.chapters__list}>
     {chapters.map((chapter, index) => {
      const chapterClasses = cx({
       [`chapters__item`]: true,
       active: index === activeIndex, // Dynamically add the 'active' class for the current active chapter
      });

      return (
       <li
        key={`chapter${index}`}
        className={`${chapterClasses} manual__chapter__item`}
        onClick={(e) => {
         e.preventDefault();
         handleChapterClick(index); // Handle chapter click and scroll
        }}
       >
        {chapter}
       </li>
      );
     })}
    </ul>
   </div>
  </div>
 );
};

export default Chapters;
