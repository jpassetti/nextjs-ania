import styles from "./subcomponents.module.scss";

// Define the types for the props
interface ChapterTitleProps {
 title?: string; // Title should be a string
 excerpt?: string; // Excerpt should be a string
 chapterIndex?: number; // Story index should be a number
}

const ChapterTitle: React.FC<ChapterTitleProps> = ({
 title,
 excerpt,
 chapterIndex,
}) => {
 return (
  <div className="observer_chapter" id={`chapter${chapterIndex}`}>
   <div className={styles.the_title_block}>
    {title && <h1 className={styles.the_title}>{title}</h1>}
   </div>
   <p className={styles.the_excerpt}>{excerpt}</p>
  </div>
 );
};

export default ChapterTitle;
