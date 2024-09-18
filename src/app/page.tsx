// src/app/page.tsx
import { sanityFetch } from '@/sanity/client';
import Slider from '@/app/components/Slider';
import { Story } from '@/app/types/story';
import { STORIES_QUERY } from '@/app/queries/storiesQuery';

export default async function IndexPage() {
  let stories: Story[] = [];

  try {
    stories = await sanityFetch<Story[]>({ query: STORIES_QUERY });
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
