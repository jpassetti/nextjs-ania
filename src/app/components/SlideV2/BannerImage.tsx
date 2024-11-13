// components/Slide/BannerImage.tsx
import React from 'react';
import Image from 'next/image';

import styles from './subcomponents.module.scss';

interface BannerImageProps {
  image: string;
  width: number;
  height: number;
}

const BannerImage: React.FC<BannerImageProps> = ({ image, width, height }) => (
  <div className={styles.the_banner_image} style={{
    backgroundImage: `url(${image})`,
  }}>
    </div>
);

export default BannerImage;