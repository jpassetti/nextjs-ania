// components/Slide/BannerImage.tsx
import React from "react";
import Image from "next/image";

import styles from "./subcomponents.module.scss";

interface BannerImageProps {
 bannerImageDetails: {
  image: {
   asset: {
    url: string;
    metadata: {
     dimensions: {
      width: number;
      height: number;
     };
    };
   };
  };
 };
}

const BannerImage: React.FC<BannerImageProps> = ({ bannerImageDetails }) => {
 const { image } = bannerImageDetails;
 return (
  <div
   className={styles.the_banner_image}
   style={{
    backgroundImage: `url(${image.asset.url})`,
   }}
  ></div>
 );
};

export default BannerImage;
