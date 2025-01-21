// components/SlideV2/Quote.tsx
import React from "react";

import BlockQuote from "./BlockQuote";

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
   <BlockQuote quote={quoteText} author={author} citation={cite} />
  </div>
 );
};

export default Quote;
