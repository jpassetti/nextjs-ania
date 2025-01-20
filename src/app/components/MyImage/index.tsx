import React, { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css"; // Import lightbox styles
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import styles from "./myimage.module.scss"; // Adjust the styles accordingly

// Define the types for the props
interface MyImageProps {
 src: string; // The source URL of the image
 alt: string; // The alt text for the image
 width: number; // The width of the image
 height: number; // The height of the image
}

const MyImage: React.FC<MyImageProps> = ({ src, alt, width, height }) => {
 const [isLoading, setIsLoading] = useState(true); // State to track loading status
 const [isOpen, setIsOpen] = useState(false); // State to track if the lightbox is open

 const handleImageLoad = () => {
  setIsLoading(false); // Set loading to false when image has loaded
 };

 const handleImageError = () => {
  setIsLoading(false); // Handle error case
 };

 const handleImageClick = () => {
  setIsOpen(true); // Open the lightbox when image is clicked
 };

 return (
  <div className={styles.imageContainer}>
   {isLoading && (
    <div className={styles.spinner}>
     {/* You can use any spinner or loading animation */}
     <div className="spinner"></div>
    </div>
   )}
   <Image
    className={styles.the_photo}
    src={src} // Dynamic image source passed as a prop
    alt={alt} // Dynamic alt text passed as a prop
    width={width} // Dynamic width passed as a prop
    height={height} // Dynamic height passed as a prop
    onLoad={handleImageLoad} // Trigger when image is loaded
    onError={handleImageError} // Trigger if there's an error loading the image
    priority // Optional: load the image faster if it's critical
    onClick={handleImageClick} // Open lightbox when image is clicked
   />

   {/* Magnifying glass icon */}
   <div className={styles.magnifyIcon}>
    <Image
     src="/magnify-glass.svg"
     alt="Magnify Glass Icon"
     width={48}
     height={48}
    />
   </div>

   {/* Lightbox Component */}
   {isOpen && (
    <Lightbox
     open={isOpen}
     close={() => setIsOpen(false)} // Close the lightbox when it's clicked
     slides={[{ src, alt }]} // Use the image passed as a slide in the lightbox
     plugins={[Zoom]}
    />
   )}
  </div>
 );
};

export default MyImage;
