// components/TitleSlide.tsx
import React from 'react';
import styles from './subcomponents.module.scss';

// Define the interface for the component props
interface TitleSlideProps {
  titleSlideDetails : {
    projectTitle: string;
    image: {
      asset : {
        url: string;
        metadata : {
          dimensions : {
            width: number;
            height: number;
          }
        }
      }
    }
  }
}

const TitleSlide: React.FC<TitleSlideProps> = ({ titleSlideDetails }) => {
  const { projectTitle, image } = titleSlideDetails;
  return (
    <div
      className={styles.the_title_slide}
      style={{
        backgroundImage: `url(${image.asset.url})`,
        width: image.asset.metadata.dimensions.width || 'auto',   // Set default value for width if not provided
        height: image.asset.metadata.dimensions.height || 'auto', // Set default value for height if not provided
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