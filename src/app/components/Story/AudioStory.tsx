import Slide from '../Slide';

import { StoryType } from '@/app/types/story';

interface AudioStoryProps {
  story: StoryType;
}

const AudioStory: React.FC<AudioStoryProps> = ({ story }) => {
  return <Slide type="audio">Audio story</Slide>
}
export default AudioStory;