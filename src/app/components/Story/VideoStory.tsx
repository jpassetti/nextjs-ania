import Slide from '../Slide';

const VideoStory = ({ story }) => {
  console.log(story);
  // https://vimeo.com/765840736
  const vimeoId = story.videoDetails?.videoUrl.split('/').pop();
  return <Slide type="video">
    <Slide.Video vimeoId={vimeoId} />
    <Slide.Caption caption={story.videoDetails?.caption} />
    <Slide.Location location={story.videoDetails?.location} />
  </Slide>
}
export default VideoStory;