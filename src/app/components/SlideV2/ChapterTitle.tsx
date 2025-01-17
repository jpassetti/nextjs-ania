import styles from "./subcomponents.module.scss";

const ChapterTitle = ({ title, excerpt }) => {
 return (
  <div>
   <div className={styles.the_title_block}>
    {title && <h1 className={styles.the_title}>{title}</h1>}
   </div>
   <p>{excerpt}</p>
  </div>
 );
};
export default ChapterTitle;
