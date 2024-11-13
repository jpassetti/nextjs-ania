"use client";

import { useState, useRef, useEffect } from 'react';
import { StoryTypeV2 } from '../../types/story_v2';

// Subcomponents
import Slide from '../SlideV2';
import Photo from '../SlideV2/Photo';
import Video from '../SlideV2/Video';
import Infographic from '../SlideV2/Infographic';
import Audio from '../SlideV2/Audio';
import Quote from '../SlideV2/Quote';
import Spacer from '../SlideV2/Spacer';
import Title from '../SlideV2/Title';
import Excerpt from '../SlideV2/Excerpt';
import BannerImage from '../SlideV2/BannerImage';
import Chapters from '../Chapters';

// Styles
import styles from './sliderv2.module.scss';

interface SliderV2Props {
  stories: StoryTypeV2[];
}

const SliderV2: React.FC<SliderV2Props> = ({ stories }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderTrainRef = useRef<HTMLDivElement | null>(null);

  // Map the stories array to extract the menuLabel for the Chapters component
  const chapters = stories.map((story) => story.menuLabel);

  // Set up the Intersection Observer to detect when a story is in view within the scroll container
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const storyId = entry.target.id.replace('story', ''); // Extract index from story ID
            setActiveIndex(Number(storyId)); // Update active index when a story enters the viewport
          }
        });
      },
      { 
        root: sliderTrainRef.current, // Set root to the scroll container
        threshold: 0.5, // Trigger when 50% of the story is in view
      }
    );

    const storyElements = sliderTrainRef.current?.querySelectorAll('.story');
    storyElements?.forEach((element) => {
      observer.observe(element); // Start observing each story
    });

    // Cleanup the observer on component unmount
    return () => {
      storyElements?.forEach((element) => {
        observer.unobserve(element); // Stop observing each story
      });
    };
  }, []);

  // Scroll to the correct story when the activeIndex changes
  useEffect(() => {
    if (sliderTrainRef.current) {
      const storyElement = document.getElementById(`story${activeIndex}`);
      if (storyElement) {
        // Scroll to the story element, aligning to the left of the viewport
        storyElement.scrollIntoView({
          behavior: 'smooth',
          inline: 'start', // Align to the left edge of the scroll container
        });
      }
    }
  }, [activeIndex]);

  return (
    <section>
      <Chapters
        chapters={chapters}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex} // Pass down setActiveIndex for chapter clicks
      />
      <div className={styles.slider_v2}>
        <div className={styles.slider_v2_train} ref={sliderTrainRef}>
          {stories.map((story, index) => (
            <div key={index} className={styles.story} id={`story${index}`}>
              {story.includeTitleSlide && (
                <Slide type="title">
                  {story.title && <Title title={story.title} />}
                  {story.excerpt && <Excerpt excerpt={story.excerpt} />}
                </Slide>
              )}

              {story.slides &&
                story.slides.map((slide, slideIndex) => (
                  <Slide key={slideIndex} type={slide.type} width={slide.type === 'spacer' && slide.spacerDetails ? slide.spacerDetails.width : 'small'}>
                    {slide.type === 'photo' && slide.photoDetails && (
                      <Photo
                        image={slide.photoDetails.image.asset.url}
                        caption={slide.photoDetails.caption}
                        location={slide.photoDetails.location}
                        width={slide.photoDetails.image.asset.metadata.dimensions.width}
                        height={slide.photoDetails.image.asset.metadata.dimensions.height}
                      />
                    )}

                    {slide.type === 'video' && slide.videoDetails && (
                      <Video
                        videoUrl={slide.videoDetails.videoUrl}
                        coverImage={slide.videoDetails.coverImage?.asset?.url}
                        caption={slide.videoDetails.caption}
                        metaInformation={slide.videoDetails.meta_information}
                      />
                    )}

                    {slide.type === 'audio' && slide.audioDetails && (
                      <Audio audioUrl={slide.audioDetails.audioUrl} />
                    )}

                    {slide.type === 'quote' && slide.quoteDetails && (
                      <Quote
                        quoteText={slide.quoteDetails.quoteText}
                        author={slide.quoteDetails.author}
                        cite={slide.quoteDetails.cite}
                      />
                    )}

                    {slide.type === 'bannerImage' && slide.bannerImageDetails && (
                      <BannerImage image={slide.bannerImageDetails.image.asset.url} width={slide.bannerImageDetails.image.asset.metadata.dimensions.width}
                      height={slide.bannerImageDetails.image.asset.metadata.dimensions.height} />
                    )}

                    {slide.type === 'infographic' && slide.infographicDetails && (
                      <Infographic
                        image={slide.infographicDetails.infographicImage.asset.url}
                        description={slide.infographicDetails.description}
                        metaInformation={slide.infographicDetails.meta_information}
                        width={slide.infographicDetails.infographicImage.asset.metadata.dimensions.width}
                        height={slide.infographicDetails.infographicImage.asset.metadata.dimensions.height}
                      />
                    )}
                  </Slide>
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SliderV2;