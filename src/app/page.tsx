// src/app/v2/page.tsx
import { sanityFetch } from '@/sanity/client';
import SliderV2 from '@/app/components/SliderV2';
import { StoryTypeV2 } from '@/app/types/story_v2';
import { STORIES_V2_QUERY } from '@/app/queries/stories_v2_query';

export default async function IndexPage() {
  let stories: StoryTypeV2[] = [];

  try {
    // Fetch stories using the updated query
    stories = await sanityFetch<StoryTypeV2[]>({ query: STORIES_V2_QUERY });

    
  } catch (error) {
    console.error('Error fetching stories:', error);
  }

  return (
    <main>
      {/* Pass the chapters array as a prop to the Chapters component */}
      <SliderV2 stories={stories} />
    
    </main>
  );
}
