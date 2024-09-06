// components/Slide.tsx
import React from 'react';
import { Story } from '@/types/story';
import styles from './Slide.module.scss';

interface SlideProps {
  story: Story;
}

const Slide: React.FC<SlideProps> = ({ story }) => {
  return story.photoDetails && story.photoDetails.length > 0 ? (
        story.photoDetails.map((detail, index) => {
          console.log('Photo Detail:', detail); // Debug logging
          return <div key={index} className={styles.slide}>
           {detail.image ? (
                  <img src={detail.image.asset.url} alt={detail.caption || 'Photo'} className="w-full h-auto" />
                ) : (
                  <p className="text-gray-500">No image available</p>
                )}
                {detail.caption && (
                  <p className="italic text-lg mt-2">{detail.caption}</p>
                )}
                {detail.location && (
                  <p className="text-gray-600 text-sm mt-1">{detail.location}</p>
                )}
          </div>
        })
      ) : (
        <p>No photo details available.</p>
      )};


export default Slide;
