"use client";

import { useState, useEffect, useRef, Fragment } from "react";
import { StoryTypeV2 } from "../../types/story_v2";

// Subcomponents
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
import ChapterTitle from "../SlideV2/ChapterTitle";
import Chapters from "../Chapters";

// Styles
import styles from "./sliderv2.module.scss";

// Slide Type to Component Mapping
const slideTypeComponents: { [key: string]: React.ComponentType<any> } = {
 chapterTitle: ChapterTitle,
 titleSlide: TitleSlide,
 photo: Photo,
 video: Video,
 audio: Audio,
 quote: Quote,
 bannerImage: BannerImage,
 textOnly: TextOnly,
 infographic: Infographic,
 spacer: Spacer,
};

interface SliderV2Props {
 stories: StoryTypeV2[];
}

const SliderV2: React.FC<SliderV2Props> = ({ stories }) => {
 const [activeIndex, setActiveIndex] = useState(0);
 const sliderTrainRef = useRef<HTMLDivElement | null>(null);

 // Map the stories array to extract the menuLabel for the Chapters component
 const chapters = stories.map((story) => story.menuLabel);

 // Set the observer to update activeIndex when the story is in view
 useEffect(() => {
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

 return (
  <div>
   <Chapters
    chapters={chapters}
    activeIndex={activeIndex}
    setActiveIndex={setActiveIndex}
   />
   <div className={styles.slider_v2}>
    <div className={styles.slider_v2_train} ref={sliderTrainRef}>
     {stories.map((story, index) => (
      <div
       key={index}
       className={`${styles.story} observer_story`}
       id={`story${index}`}
      >
       {story.includeTitleSlide && (
        <Slide type="chapterTitle">
         <ChapterTitle title={story.title} excerpt={story.excerpt} />
        </Slide>
       )}

       {story.slides?.map((slide, slideIndex) => {
        // Get the component for this slide type
        const SlideComponent = slideTypeComponents[slide.type];
        if (!SlideComponent) return null; // Skip if no matching component found

        return (
         <Slide type={slide.type} key={slideIndex}>
          <SlideComponent {...slide} />
         </Slide>
        );
       })}
      </div>
     ))}
    </div>
   </div>
  </div>
 );
};

export default SliderV2;
