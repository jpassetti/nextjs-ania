// components/SlideV2/Quote.tsx
import React from 'react';

import styles from './subcomponents.module.scss';

interface QuoteProps {
  quoteText: string;
  author: string;
  cite?: string;
}

const Quote: React.FC<QuoteProps> = ({ quoteText, author, cite }) => (
  <div className={styles.quote}>
    <blockquote>
      {/* Escape quotes properly */}
      <p className={styles.the_quote}>“{quoteText}”</p>
      <footer className={styles.the_quote_author}>
        — {author}
        {cite && <cite className={styles.the_quote_citation}>{cite}</cite>}
      </footer>
    </blockquote>
  </div>
);

export default Quote;