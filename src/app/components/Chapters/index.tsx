import React from "react";
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

 return (
  <div className={styles.chapters__container}>
   <ul className={styles.chapters__list}>
    {chapters.map((chapter, index) => {
     const chapterClasses = cx({
      [`chapters__item`]: true,
      [`active`]: index === activeIndex, // Apply 'active' class for the current active chapter
     });
     return (
      <li
       key={`chapter${index}`}
       className={chapterClasses}
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
 );
};

export default Chapters;
