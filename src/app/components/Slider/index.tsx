// components/Slider.tsx
import React from 'react';
import { Story } from '@/app/types/story';
import Slide from '../Slide';

import styles from './Slider.module.scss';

interface SliderProps {
  stories: Story[];
}

const Slider: React.FC<SliderProps> = ({ stories }) => {
  return (
    <section>
      <div className={styles.sliderContainer}>
        {stories.map(story => (
          <Slide key={story._id} story={story} />
        ))}
      </div>
    </section>
  );
};

export default Slider;
