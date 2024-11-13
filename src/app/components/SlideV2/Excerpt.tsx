import styles from './subcomponents.module.scss';

// Define the interface for the component's props
interface ExcerptProps {
  excerpt: string; // The 'excerpt' prop should be a string
}

const Excerpt: React.FC<ExcerptProps> = ({ excerpt }) => {
  return (
    <p className={styles.the_excerpt}>
      {excerpt}
    </p>
  );
};

export default Excerpt;