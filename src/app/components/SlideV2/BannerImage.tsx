// components/Slide/BannerImage.tsx
import { Fragment } from "react";
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
  mobileImage: {
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
  mobileQuote: string;
  mobileCitation: string;
 };
}

const BannerImage: React.FC<BannerImageProps> = ({ bannerImageDetails }) => {
 const { image, mobileImage, mobileQuote, mobileCitation } = bannerImageDetails;
 return (
  <Fragment>
   <div
    className={styles.the_banner_image}
    style={{
     backgroundImage: `url(${image.asset.url})`,
    }}
   ></div>
   {mobileImage && (
    <div className={styles.the_banner_image_mobile}>
     {mobileImage && (
      <Image
       src={mobileImage.asset.url}
       alt="Banner Image"
       width={mobileImage.asset.metadata.dimensions.width}
       height={mobileImage.asset.metadata.dimensions.height}
      />
     )}
     <div className={styles.the_banner_image_mobile_content}>
      {mobileQuote && <p className={styles.the_quote}>{mobileQuote}</p>}
      {mobileCitation && (
       <p className={styles.the_citation}>{mobileCitation}</p>
      )}
     </div>
    </div>
   )}
  </Fragment>
 );
};

export default BannerImage;
