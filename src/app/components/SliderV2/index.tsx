"use client";

import { useState, useEffect, useRef } from "react";
import { InView } from "react-intersection-observer";
import { StoryTypeV2 } from "../../types/story_v2";

// Subcomponents
import Audio from "../SlideV2/Audio";
import BannerImage from "../SlideV2/BannerImage";
import Chapters from "../Chapters";
import ChapterTitle from "../SlideV2/ChapterTitle";
import Infographic from "../SlideV2/Infographic";
import Photo from "../SlideV2/Photo";
import Quote from "../SlideV2/Quote";
import Slide from "../SlideV2";
import Spacer from "../SlideV2/Spacer";
import TextOnly from "../SlideV2/TextOnly";
import TitleSlide from "../SlideV2/TitleSlide";
import Video from "../SlideV2/Video";

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
 const sliderRef = useRef<HTMLDivElement | null>(null); // Reference to the scroll container (div.slider_v2)

 // Map the stories array to extract the menuLabel for the Chapters component
 const chapters = stories.map((story) => story.menuLabel);

 return (
  <div>
   <Chapters
    chapters={chapters}
    activeIndex={activeIndex}
    setActiveIndex={setActiveIndex}
   />
   <div className={styles.slider_v2} ref={sliderRef}>
    <div className={styles.slider_v2_train} ref={sliderTrainRef}>
     {stories.map((story, index) => (
      <InView
       as="div"
       key={index}
       className={`${styles.story} observer_story`}
       id={`story${index}`} // Ensure each story div has a unique ID
       // (inView, entry)
       onChange={(inView) => {
        if (inView) {
         setActiveIndex(index);
        }
       }}
      >
       {story.includeTitleSlide && (
        <Slide type="chapterTitle">
         <ChapterTitle
          title={story.title}
          excerpt={story.excerpt}
          richExcerpt={story.richExcerpt}
          chapterIndex={index}
         />
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
      </InView>
     ))}
    </div>
   </div>
  </div>
 );
};

export default SliderV2;
