"use client";

import { useState, useEffect, useRef, Fragment } from "react";
import { StoryTypeV2 } from "../../types/story_v2";

import Slide from "../SlideV2";
import Photo from "../SlideV2/Photo";
import Video from "../SlideV2/Video";
import Infographic from "../SlideV2/Infographic";
import Audio from "../SlideV2/Audio";
import Quote from "../SlideV2/Quote";
import BannerImage from "../SlideV2/BannerImage";
import Spacer from "../SlideV2/Spacer";
import TextOnly from "../SlideV2/TextOnly";
import Title from "../SlideV2/Title";
import TitleSlide from "../SlideV2/TitleSlide";
import Chapters from "../Chapters";

import styles from "./sliderv2.module.scss";

/*
todo:
Justify "Blinded Flight" a bit left and use a smaller text
Under "Blinded Flight" text put your name in smaller lettering.
In the upper right of the "Blinded Flight" banner, add an arrow and a "scroll right to read story".
Convert the videos to Autoplay.
Add Titles above all captions so that people don't have to read captions unless they want to.
Add the quote that goes along with 1 billion birds below the 1 billion birds PNG (maybe it pops up below as you scroll)
Justify all of your section titles and section descriptions to the right so that they take up less horizontal space to decrease horizontal scroll realstate.
Use a bigger font for chapter titles.
Make sure all images are cropped the same.
Create a "Read More" section at the end.
*/

interface SliderV2Props {
  stories: StoryTypeV2[];
}

const SliderV2: React.FC<SliderV2Props> = ({ stories }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderTrainRef = useRef<HTMLDivElement | null>(null);

  // Map the stories array to extract the menuLabel for the Chapters component
  const chapters = stories.map((story) => story.menuLabel);

  useEffect(() => {
    // Scroll to the correct story when the activeIndex changes
    if (sliderTrainRef.current) {
      const storyElement = document.getElementById(`story${activeIndex}`);
      if (storyElement) {
        storyElement.scrollIntoView({
          behavior: "smooth",
          inline: "start", // Align to the left edge of the scroll container
        });
      }
    }
  }, [activeIndex]);

  return <div>
      <Chapters
        chapters={chapters}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <div className={styles.slider_v2}>
      <div className={styles.slider_v2_train} ref={sliderTrainRef}>
          {stories.map((story, index) => {
            return <div
              key={index}
              className={`${styles.story} observer_story`}
              id={`story${index}`}
            >
            
              {story.includeTitleSlide && (
                <Slide type="title">
                  <Title title={story.title} />
                  <p>{story.excerpt}</p>
                </Slide>
              )}

              {story.slides?.map((slide, slideIndex) => {
                  return <Fragment key={slideIndex}><Slide type={slide.type}>
                    {slide.type === "titleSlide" &&
                      slide.titleSlideDetails && (
                        <TitleSlide
                          titleSlideDetails={slide.titleSlideDetails}
                        />
                      )}
                    {slide.type === "photo" && slide.photoDetails && (
                      <Photo
                        photoDetails={slide.photoDetails}
                      />
                    )}

                    {slide.type === "video" && slide.videoDetails && (
                      <Video
                        videoUrl={slide.videoDetails.videoUrl}
                        coverImage={slide.videoDetails.coverImage?.asset?.url}
                        caption={slide.videoDetails.caption}
                        metaInformation={slide.videoDetails.meta_information}
                      />
                    )}

                    {slide.type === "audio" && slide.audioDetails && (
                      <Audio audioUrl={slide.audioDetails.audioUrl} />
                    )}

                    {slide.type === "quote" && slide.quoteDetails && (
                      <Quote
                        quoteText={slide.quoteDetails.quoteText}
                        author={slide.quoteDetails.author}
                        cite={slide.quoteDetails.cite}
                      />
                    )}

                    {slide.type === "bannerImage" &&
                      slide.bannerImageDetails && (
                        <BannerImage
                          image={slide.bannerImageDetails.image.asset.url}
                          width={
                            slide.bannerImageDetails.image.asset.metadata
                              .dimensions.width
                          }
                          height={
                            slide.bannerImageDetails.image.asset.metadata
                              .dimensions.height
                          }
                        />
                      )}

                    

                      {slide.type === "textOnly" && (
                        <TextOnly
                          text={slide.textOnlyDetails?.text}
                        />
                      )}

                      {slide.type === "infographic" &&
                      slide.infographicDetails && (
                        <Infographic
                          image={
                            slide.infographicDetails.infographicImage.asset.url
                          }
                          description={
                            slide.infographicDetails.description
                          }
                          metaInformation={
                            slide.infographicDetails.meta_information
                          }
                          width={
                            slide.infographicDetails.infographicImage.asset
                              .metadata.dimensions.width
                          }
                          height={
                            slide.infographicDetails.infographicImage.asset
                              .metadata.dimensions.height
                          }
                        />
                      )}
                      {slide.type === "spacer" && <Spacer
                        width={slide.spacerDetails
                        ? slide.spacerDetails.width
                        : "small"
                        }
                        />
                      }
                  </Slide>            
          </Fragment>
          })}
           
          </div>
          })}
        </div>
      </div>
  </div>
};

export default SliderV2;