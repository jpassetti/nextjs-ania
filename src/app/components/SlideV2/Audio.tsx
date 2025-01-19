import React from "react";

import styles from "./subcomponents.module.scss";

interface AudioProps {
 audioDetails: {
  audioUrl: string;
 };
}

const Audio: React.FC<AudioProps> = ({ audioDetails }) => {
 const { audioUrl } = audioDetails;

 return (
  <div className={styles.audio}>
   {audioUrl ? (
    <audio controls>
     <source src={audioUrl} type="audio/mpeg" />
    </audio>
   ) : (
    <p>No audio available</p>
   )}
  </div>
 );
};

export default Audio;
