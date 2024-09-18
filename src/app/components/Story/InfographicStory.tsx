import Slide from '../Slide';

import { StoryType } from '@/app/types/story';

interface InfographicProps {
  story: StoryType;
}

const InfographicStory: React.FC<InfographicProps> = ({ story }) => {
  return <Slide type="infographic">Infographic story</Slide>
}
export default InfographicStory;