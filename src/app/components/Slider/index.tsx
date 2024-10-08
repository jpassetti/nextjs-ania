// components/Slider.tsx
import { Fragment } from 'react';
import { StoryType } from '@/app/types/story';
import Slide from '../Slide';
import Story from '../Story';

import styles from './Slider.module.scss';

interface SliderProps {
  stories: StoryType[];
}

const Slider: React.FC<SliderProps> = ({ stories }) => {
  return (
    <section>
      <div className={styles.slider}>
        {stories.map((story, index) => (
          <Fragment key={index}>
           <Slide type="title">
            {story.title && <Slide.Title title={story.title}/>}
            {story.excerpt && <Slide.Excerpt excerpt={story.excerpt}/>}
            </Slide>
          <Story key={story._id} story={story} type={story.type} />
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default Slider;
