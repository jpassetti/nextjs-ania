import React from "react";
import { PortableText } from "@portabletext/react"; // Import the PortableText component for rendering block content
import styles from "./subcomponents.module.scss";

// Define the types for the props
interface ChapterTitleProps {
 title?: string; // Title should be a string
 excerpt?: string; // Excerpt should be a string
 richExcerpt?: any; // richExcerpt should be a block content (array of blocks)
 chapterIndex?: number; // Story index should be a number
}

const ChapterTitle: React.FC<ChapterTitleProps> = ({
 title,
 excerpt,
 chapterIndex,
 richExcerpt,
}) => {
 return (
  <div className="observer_chapter" id={`chapter${chapterIndex}`}>
   <div className={styles.the_title_block}>
    {title && <h1 className={styles.the_title}>{title}</h1>}
   </div>
   {excerpt && <p className={styles.the_excerpt}>{excerpt}</p>}
   {richExcerpt && (
    <div className={styles.the_rich_excerpt}>
     <PortableText value={richExcerpt} />
    </div>
   )}
  </div>
 );
};

export default ChapterTitle;
