import styles from "./subcomponents.module.scss";

const BlockQuote = ({ quote, author, citation }) => {
 return (
  <blockquote className={styles.the_blockquote}>
   {/* Escape quotes properly */}
   {quote && <p className={styles.the_blockquote_quote}>“{quote}”</p>}
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
