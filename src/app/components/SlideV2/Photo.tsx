// components/Slide/Photo.tsx
import React from "react";
import MyImage from "../MyImage";
import styles from "./subcomponents.module.scss";

interface PhotoProps {
 photoDetails: {
  title?: string;
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
  caption?: string;
  location?: string;
 };
}

const Photo: React.FC<PhotoProps> = ({ photoDetails }) => {
 const { image, caption, location, title } = photoDetails;
 return (
  <div className={styles.photo}>
   {image && (
    <MyImage
     src={image.asset.url}
     alt="Photo"
     width={image.asset.metadata.dimensions.width}
     height={image.asset.metadata.dimensions.height}
    />
   )}
   {title && <h3 className={styles.the_photo_title}>{title}</h3>}
   {caption && <p className={styles.the_caption}>{caption}</p>}
   {location && <p className={styles.the_meta}>{location}</p>}
  </div>
 );
};

export default Photo;
