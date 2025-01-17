// components/Slide/Photo.tsx
import React from 'react';
import Image from 'next/image';
import styles from './subcomponents.module.scss';

interface PhotoProps {
  photoDetails: {
    image: {
      asset: {
        url: string;
        metadata : {
          dimensions : {
            width: number;
            height: number;
          }
        }
      }
    }
    caption?: string;
    location?: string;
  }
}

const Photo: React.FC<PhotoProps> = ({ photoDetails }) => {
  const { image, caption, location } = photoDetails;
  return <div className={styles.photo}>
    {image && <Image src={image.asset.url} alt="Photo" className={styles.the_photo} width={image.asset.metadata.dimensions.width} height={image.asset.metadata.dimensions.height} />}
    {caption && <p className={styles.the_caption}>{caption}</p>}
    {location && <p className={styles.the_meta}>{location}</p>}
  </div>
};

export default Photo;