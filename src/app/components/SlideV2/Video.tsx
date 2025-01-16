import React from 'react';
import classNames from 'classnames/bind';
import styles from './subcomponents.module.scss';

const cx = classNames.bind(styles);

interface VideoProps {
  videoUrl: string;
  coverImage?: string;
  caption?: string;
  metaInformation?: string;
}

// videoUrl is the Vimeo URL of the video
const Video: React.FC<VideoProps> = ({ videoUrl, coverImage, caption, metaInformation }) => {
 //console.log({ videoUrl});
  const vimeoClasses = cx({
    [`embed-responsive`]: true,
    [`embed-responsive-16by9`]: true,
  });
  const iframeClasses = cx({
    [`embed-responsive-item`]: true,
  });

  // The videoUrl prop will be the Vimeo URL of the video
  //const vimeoId = videoUrl?.match(/\/(\d+)$/)?.[1];
  // The videoUrl prop will be the Vimeo URL of the video
const vimeoId = videoUrl?.match(/vimeo\.com\/(\d+)/)?.[1];

  return (
    <div className={styles.the_video}>
      <div className={vimeoClasses}>
        <iframe
          className={iframeClasses}
          title="Blinded Flight"
          src={`https://player.vimeo.com/video/${vimeoId}`}
          width="500"
          height="281"
          style={{ border: 'none' }} // Replacing frameBorder with style
          allow="autoplay; fullscreen"
          allowFullScreen={true} // Use boolean true for allowFullScreen
        ></iframe>
      </div>
      {caption && <p className={styles.the_caption}>{caption}</p>}
      {metaInformation && <p className={styles.the_meta}>{metaInformation}</p>}
    </div>
  );
};

export default Video;