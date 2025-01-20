import { PortableText } from "@portabletext/react"; // Using @portabletext/react for rendering block content

import styles from "./subcomponents.module.scss";

interface TextOnlyProps {
 textOnlyDetails: {
  text?: string; // For plain text
  richText?: any; // Rich text content (array of blocks)
 };
}

const TextOnly: React.FC<TextOnlyProps> = ({ textOnlyDetails }) => {
 return (
  <div className={styles.textOnly_container}>
   {/* keep this div for styling */}
   <div className={styles.the_title_block} />
   {/* You can keep other styling as needed */}
   {textOnlyDetails?.text && (
    <p className={styles.the_excerpt}>{textOnlyDetails.text}</p>
   )}

   {textOnlyDetails?.richText && (
    <div className={styles.the_rich_excerpt}>
     {/* Rendering rich text using PortableText */}
     <PortableText value={textOnlyDetails.richText} />
    </div>
   )}
  </div>
 );
};

export default TextOnly;
