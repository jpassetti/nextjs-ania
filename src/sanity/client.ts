import { createClient, type QueryParams } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

// Ensure that environment variables are correctly defined
const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET;
const apiVersion = process.env.SANITY_API_VERSION;
const useCdn = process.env.SANITY_USE_CDN === 'true';

if (!projectId || !dataset || !apiVersion) {
  throw new Error('Sanity client configuration is missing required environment variables.');
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
});

export async function sanityFetch<QueryString extends string>({
  query,
  params = {},
  tags,
}: {
  query: QueryString;
  params?: QueryParams;
  tags?: string[];
}): Promise<any> {
  try {
    const data = await client.fetch(query, params, {
      next: {
        revalidate: process.env.NODE_ENV === 'development' ? 30 : 3600,
        tags,
      },
    });
    console.log('Fetched data:', data); // Debug logging
    return data;
  } catch (error) {
    console.error('Sanity fetch error:', error);
    throw error;
  }
}

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}