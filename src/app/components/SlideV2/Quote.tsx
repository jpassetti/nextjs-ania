// components/SlideV2/Quote.tsx
import React from "react";

import styles from "./subcomponents.module.scss";

interface QuoteProps {
 quoteDetails: {
  quoteText: string;
  author: string;
  cite?: string;
 };
}

const Quote: React.FC<QuoteProps> = ({ quoteDetails }) => {
 const { quoteText, author, cite } = quoteDetails;
 return (
  <div className={styles.quote}>
   <blockquote>
    {/* Escape quotes properly */}
    <p className={styles.the_quote}>“{quoteText}”</p>
    <footer className={styles.the_quote_author}>
     <p>— {author}</p>
     {cite && (
      <cite className={styles.the_quote_citation}>
       <p>{cite}</p>
      </cite>
     )}
    </footer>
   </blockquote>
  </div>
 );
};

export default Quote;
