import React from 'react';
import classnames from 'classnames/bind';
import Image from 'next/image';

import styles from './Slide.module.scss';

const cx = classnames.bind(styles);

// Define types for props
interface SlideProps {
  children: React.ReactNode; // For the children prop
  type: string; // For the type prop
}

interface CaptionProps {
  caption: string; // For the caption prop
}

interface LocationProps {
  location: string; // For the location prop
}

interface ImageProps {
  sourceUrl: string; // URL of the image
  altText: string; // Alt text for the image
  mediaDetails: {
    width: number; // Width of the image
    height: number; // Height of the image
  };
}

// Main Slide component
const Slide: React.FC<SlideProps> & {
  Caption: React.FC<CaptionProps>;
  Location: React.FC<LocationProps>;
  Image: React.FC<ImageProps>;
} = ({ children, type }) => {
  const slideClasses = cx({
    'slide': true,
    'default': type === 'photo' || type === 'video' || type === 'audio' || type === 'infographic',
    'title': type === 'title',
  });
  return <article className={slideClasses}>{children}</article>; 
};

// Caption sub-component
Slide.Caption = ({ caption }: CaptionProps) => {
  return <p className={styles.the_caption}>{caption}</p>;
};
Slide.Caption.displayName = 'Caption';

// Location sub-component
Slide.Location = ({ location }: LocationProps) => {
  return <p className={styles.the_location}>{location}</p>;
};
Slide.Location.displayName = 'Location';

// Image sub-component
Slide.Image = ({ sourceUrl, altText, mediaDetails }: ImageProps) => {
  return (
    <Image
      src={sourceUrl}
      alt={altText}
      width={mediaDetails.width}
      height={mediaDetails.height}
      className={styles.the_image}
    />
  );
};
Slide.Image.displayName = 'Image';

Slide.Title = ({title}) => {
  return (
    <h1 className={styles.the_title}>
      {title}
    </h1>
  );
}
Slide.Title.displayName = 'Title';

Slide.Excerpt = ({excerpt}) => {
  return (
    <p className={styles.the_excerpt}>
      {excerpt}
    </p>
  );
}
Slide.Excerpt.displayName = 'Excerpt';

Slide.Video = ({vimeoId}) => {
  const videoClasses = cx({
    'embed-responsive' : true,
    'embed-responsive-16by9' : true,
  })
  const iframeClasses = cx({
    'embed-responsive-item' : true,
  })
  return (
    <div className={videoClasses}>
    <iframe
      src={`https://player.vimeo.com/video/${vimeoId}`}
      width="640"
      height="360"
      frameBorder="0"
      allow="autoplay; fullscreen"
      allowFullScreen
      className={iframeClasses}
    />
    </div>
  );
}
Slide.Video.displayName = 'Video';

export default Slide;
