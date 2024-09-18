import { Fragment } from 'react';

import Slide from '../Slide';

import { StoryType } from '@/app/types/story';

const PhotoStory = ({ story }) => {
 //console.log(story.photoDetails);
  return <Fragment>
    {story.photoDetails?.map((photo, index) => (
      <Slide key={index} type="photo">
        <Slide.Image sourceUrl={photo.image.asset.url} altText={photo.caption} mediaDetails={{
          width: photo.image.asset.metadata.dimensions.width,
          height: photo.image.asset.metadata.dimensions.height,
        }} />
        <Slide.Caption caption={photo.caption} />
        <Slide.Location location={photo.location} />
      </Slide>
    ))}
  </Fragment>
}
export default PhotoStory;