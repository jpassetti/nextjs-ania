import Slide from '../Slide';
import { StoryType } from '@/app/types/story';

interface VideoStoryProps {
  story: StoryType;
}

const VideoStory: React.FC<VideoStoryProps> = ({ story }) => {
  const videoDetails = story.videoDetails;

  // Early return if videoDetails is not available
  if (!videoDetails) {
    return null; // Or you can return a fallback UI if necessary
  }

  // Extract the Vimeo ID
  const vimeoId = videoDetails.videoUrl.split('/').pop() || '';

  return (
    <Slide type="video">
      <Slide.Video vimeoId={vimeoId} />
      <Slide.Caption caption={videoDetails.caption || ''} />
      <Slide.Location location={videoDetails.location || ''} />
    </Slide>
  );
};

export default VideoStory;
