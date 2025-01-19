import React from "react";
import Image from "next/image";
import styles from "./subcomponents.module.scss";

// Define the types for the props
interface InfographicProps {
 infographicDetails: {
  image?: {
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
  description?: string; // Optional field
  metaInformation?: string; // Optional field
 };
}

const Infographic: React.FC<InfographicProps> = ({ infographicDetails }) => {
 const { image, description, metaInformation } = infographicDetails;
 return (
  <div className={styles.the_infographic}>
   {image && (
    <Image
     src={image.asset.url}
     alt="Infographic"
     className={styles.the_image}
     width={image.asset.metadata.dimensions.width}
     height={image.asset.metadata.dimensions.height}
    />
   )}
   {description && <p className={styles.the_caption}>{description}</p>}
   {metaInformation && <p className={styles.the_meta}>{metaInformation}</p>}
  </div>
 );
};

export default Infographic;
