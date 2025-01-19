import styles from "./subcomponents.module.scss";

// Define the types for the props
interface ChapterTitleProps {
 title?: string; // Title should be a string
 excerpt?: string; // Excerpt should be a string
}

const ChapterTitle: React.FC<ChapterTitleProps> = ({ title, excerpt }) => {
 return (
  <div>
   <div className={styles.the_title_block}>
    {title && <h1 className={styles.the_title}>{title}</h1>}
   </div>
   <p className={styles.the_excerpt}>{excerpt}</p>
  </div>
 );
};

export default ChapterTitle;
