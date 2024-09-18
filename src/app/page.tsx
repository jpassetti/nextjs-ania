// src/app/page.tsx
import { sanityFetch } from '@/sanity/client';
import Slider from '@/app/components/Slider';
import { StoryType } from '@/app/types/story';
import { STORIES_QUERY } from '@/app/queries/storiesQuery';

export default async function IndexPage() {
  let stories: StoryType[] = [];

  try {
    stories = await sanityFetch<StoryType[]>({ query: STORIES_QUERY });
    //console.log('Fetched Stories:', stories); // Debug logging
  } catch (error) {
    //console.error('Error fetching stories:', error);
  }

  return (
    <main>
      <Slider stories={stories} />
    </main>
  );
}
