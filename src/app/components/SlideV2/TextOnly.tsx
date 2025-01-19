import styles from "./subcomponents.module.scss";

interface TextOnlyProps {
 textOnlyDetails: {
  text?: string;
 };
}

const TextOnly: React.FC<TextOnlyProps> = ({ textOnlyDetails }) => {
 const { text } = textOnlyDetails;
 return (
  <div className={styles.textOnly_container}>
   <div className={styles.the_title_block} />
   <p className={styles.the_excerpt}>{text}</p>
  </div>
 );
};

export default TextOnly;
