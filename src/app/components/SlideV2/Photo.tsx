// components/Slide/Photo.tsx
import React from 'react';
import Image from 'next/image';
import styles from './subcomponents.module.scss';

interface PhotoProps {
  image: string;
  caption?: string;
  location?: string;
  width: number;
  height: number;
}

const Photo: React.FC<PhotoProps> = ({ image, caption, location, width, height }) => (
  <div className={styles.photo}>
    <Image src={image} alt="Photo" className={styles.the_photo} width={width} height={height} />
    {caption && <p className={styles.the_caption}>{caption}</p>}
    {location && <p className={styles.the_meta}>{location}</p>}
  </div>
);

export default Photo;