import React from 'react';
import Image from 'next/image';
import styles from './subcomponents.module.scss';

// Define the types for the props
interface InfographicProps {
  image: string;
  description?: string; // Optional field
  metaInformation?: string; // Optional field
  width: number;
  height: number;
}

const Infographic: React.FC<InfographicProps> = ({ image, description, metaInformation, width, height }) => {
  return (
    <div className={styles.the_infographic}>
      <Image src={image} alt="Infographic" className={styles.the_image} width={width} height={height} />
      {description && <p className={styles.the_caption}>{description}</p>}
      {metaInformation && <p className={styles.the_meta}>{metaInformation}</p>}
    </div>
  );
};

export default Infographic;