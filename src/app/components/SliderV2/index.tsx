"use client";

// React
import { useState, useEffect, useRef } from "react";

// Types
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
 const [activeStoryId, setActiveStoryId] = useState<string | null>(null);
 const sliderTrainRef = useRef<HTMLDivElement | null>(null);
 const sliderRef = useRef<HTMLDivElement | null>(null); // Reference to the scroll container (div.slider_v2)

 // Map the stories array to extract the menuLabel for the Chapters component
 const chapters = stories.map((story) => story.menuLabel);

 // Set the observer to update activeIndex when the story is in view
 useEffect(() => {
  const observer = new IntersectionObserver(
   (entries) => {
    // Initialize variables to track the story with the most visibility
    let maxVisibility = 0;
    let activeStoryId: string | null = null;

    entries.forEach((entry) => {
     // Check if the entry is intersecting and calculate the intersection ratio
     if (entry.isIntersecting) {
      const visibility = entry.intersectionRatio;

      // Check if this story has more visibility than the previous one
      if (visibility > maxVisibility) {
       maxVisibility = visibility;
       activeStoryId = entry.target.id; // Update the active story ID
      }
     }
    });

    // Set the active index only if there was a change
    if (activeStoryId) {
     const storyId = (activeStoryId as string).replace("story", ""); // Remove the 'story' prefix
     setActiveIndex(Number(storyId)); // Update activeIndex
    }
   },
   {
    root: sliderRef.current, // The scroll container
    threshold: 0.5, // Trigger when 50% of the item is in view
   }
  );

  // Observe all story elements
  const storyElements =
   sliderTrainRef.current?.querySelectorAll(".observer_story");
  storyElements?.forEach((element) => observer.observe(element));

  // Cleanup observer on component unmount
  return () => {
   storyElements?.forEach((element) => observer.unobserve(element));
  };
 }, []);

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
      <div
       key={index}
       className={`${styles.story} observer_story`}
       id={`story${index}`}
      >
       {story.includeTitleSlide && (
        <Slide
         type="chapterTitle"
         invertBackgroundColor={story.invertBackgroundColor}
        >
         <ChapterTitle
          title={story.title}
          excerpt={story.excerpt}
          richExcerpt={story.richExcerpt}
          chapterIndex={index}
         />
        </Slide>
       )}

       {story.slides?.map((slide, slideIndex) => {
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
