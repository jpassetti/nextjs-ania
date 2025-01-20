import BlockContent from "@sanity/block-content-to-react"; // Import the block content renderer

import styles from "./subcomponents.module.scss";

interface TextOnlyProps {
 textOnlyDetails: {
  text?: string;
  richText?: string;
 };
}

const TextOnly: React.FC<TextOnlyProps> = ({ textOnlyDetails }) => {
 console.log({ textOnlyDetails });
 return (
  <div className={styles.textOnly_container}>
   <div className={styles.the_title_block} />
   {textOnlyDetails?.text && (
    <p className={styles.the_excerpt}>{textOnlyDetails.text}</p>
   )}
   {textOnlyDetails?.richText && (
    <div
     className={styles.the_rich_excerpt}
     dangerouslySetInnerHTML={{ __html: textOnlyDetails.richText }}
    />
   )}
  </div>
 );
};

export default TextOnly;
