// components/TitleSlide.tsx
import React from 'react';
import styles from './subcomponents.module.scss';

// Define the interface for the component props
interface TitleSlideProps {
  projectTitle: string;
  image: string;
  width?: number;  // Optional width
  height?: number; // Optional height
}

const TitleSlide: React.FC<TitleSlideProps> = ({ projectTitle, image, width, height }) => {
  return (
    <div
      className={styles.the_title_slide}
      style={{
        backgroundImage: `url(${image})`,
        width: width || 'auto',   // Set default value for width if not provided
        height: height || 'auto', // Set default value for height if not provided
      }}
    >
      <div className={styles.the_title_slide__text}>
        <h1>{projectTitle}</h1>
        <p>scroll right to read story</p>
      </div>
    </div>
  );
};

export default TitleSlide;