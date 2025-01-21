// components/Slide/BannerImage.tsx
import { Fragment } from "react";
import Image from "next/image";
import BlockQuote from "./BlockQuote";

import styles from "./subcomponents.module.scss";

import { BannerImageDetails } from "../../types/story_v2";

interface BannerImageProps {
 bannerImageDetails: BannerImageDetails;
}

const BannerImage: React.FC<BannerImageProps> = ({ bannerImageDetails }) => {
 const {
  image,
  mobileImage,
  mobileText,
  mobileQuote,
  mobileQuoteAuthor,
  mobileCitation,
 } = bannerImageDetails;
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
      {mobileText && <p className={styles.the_caption}>{mobileText}</p>}
      <BlockQuote
       quote={mobileQuote}
       author={mobileQuoteAuthor}
       citation={mobileCitation}
      />
     </div>
    </div>
   )}
  </Fragment>
 );
};

export default BannerImage;
