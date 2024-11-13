// components/Slide/Audio.tsx
import React from 'react';

import styles from './subcomponents.module.scss';

interface AudioProps {
  audioUrl: string;
}

const Audio: React.FC<AudioProps> = ({ audioUrl }) => (
  <div className={styles.audio}>
    <audio controls>
      <source src={audioUrl} type="audio/mpeg" />
    </audio>
  </div>
);

export default Audio;