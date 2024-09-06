// pages/index.tsx
import { sanityFetch } from '@/sanity/client';
import Slider from '@/app/components/Slider';
import { Story } from '@/app/types/story'; // Adjust the path as needed
import { STORIES_QUERY } from '@/app/queries/storiesQuery';

export default async function IndexPage() {
  let stories: Story[] = [];

  try {
    stories = await sanityFetch<Story[]>({ query: STORIES_QUERY });
    // Ensure images are processed on the server
    stories = stories.map(story => ({
      ...story,
      photoDetails: story.photoDetails.map(detail => ({
        ...detail,
        imageUrl: detail.image ? urlFor(detail.image).url() : ''
      }))
    }));

    console.log('Fetched Stories:', stories); // Debug logging
  } catch (error) {
    console.error('Error fetching stories:', error);
  }

  return (
    <main className="flex flex-col min-h-screen p-0 gap-0">
  <div className="w-full h-screen overflow-hidden">
    <Slider stories={stories} />
  </div>
</main>
  );
}
