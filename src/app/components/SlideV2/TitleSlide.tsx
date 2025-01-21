// components/TitleSlide.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./subcomponents.module.scss";

// Define the interface for the component props
interface TitleSlideProps {
 titleSlideDetails: {
  projectTitle: string;
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

const TitleSlide: React.FC<TitleSlideProps> = ({ titleSlideDetails }) => {
 const { projectTitle, image } = titleSlideDetails;
 return (
  <div
   className={styles.the_title_slide}
   style={{
    backgroundImage: `url(${image.asset.url})`,
    //width: image.asset.metadata.dimensions.width || 'auto',   // Set default value for width if not provided
    //height: image.asset.metadata.dimensions.height || 'auto', // Set default value for height if not provided
   }}
  >
   <div className={styles.the_title_slide__text}>
    <motion.h1
     initial={{ opacity: 0, x: -50 }}
     animate={{ opacity: 1, x: 0 }}
     transition={{ duration: 1.25 }}
    >
     {projectTitle}
    </motion.h1>
    <motion.div
     className={styles.the_title_slide__text__scroll}
     initial={{ opacity: 0, x: 50 }}
     animate={{ opacity: 1, x: 0 }}
     transition={{ delay: 0.5, duration: 1 }}
    >
     <p>Scroll right to read story</p>
     <Image
      src="/arrow-right-long-solid.svg"
      alt="Long right arrow"
      width={24}
      height={24}
     />
    </motion.div>
   </div>
  </div>
 );
};

export default TitleSlide;
