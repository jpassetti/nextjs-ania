// components/Slide.tsx
import React from 'react';

import styles from './Story.module.scss';

import PhotoStory from './PhotoStory';
import VideoStory from './VideoStory';
import AudioStory from './AudioStory';
import InfographicStory from './InfographicStory';

import { StoryType } from '@/app/types/story';

interface StoryProps {
  story: StoryType;
  type: string;
}

const Story: React.FC<StoryProps> = ({ story, type }) => {
  switch (story.type) {
    case 'photo':
      return (
        <PhotoStory story={story }/>
      );
    case 'video':
      return (
       <VideoStory story={story} />
      );
    case 'audio':
      return (
        <AudioStory story={story}/>
      );
    case 'infographic':
      return (
        <InfographicStory story={story} />
      );
    default:
      return null;
  }
}


export default Story;