import React from "react";
import styles from "./subcomponents.module.scss";

// Define the types for the component props
interface BlockQuoteProps {
 quote?: string; // The quote text, optional
 author?: string; // The author's name, optional
 citation?: string; // The citation or source, optional
}

const BlockQuote: React.FC<BlockQuoteProps> = ({ quote, author, citation }) => {
 return (
  <blockquote className={styles.the_blockquote}>
   {/* Render the quote if it exists */}
   {quote && <p className={styles.the_blockquote_quote}>“{quote}”</p>}

   {/* Render the author and citation if they exist */}
   {(author || citation) && (
    <footer className={styles.the_blockquote_meta}>
     {author && <p className={styles.the_blockquote_author}>— {author}</p>}
     {citation && (
      <cite className={styles.the_blockquote_citation}>
       <p>{citation}</p>
      </cite>
     )}
    </footer>
   )}
  </blockquote>
 );
};

export default BlockQuote;
