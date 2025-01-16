// src/types/story_v2.ts

export interface PhotoDetails {
  image: {
    asset: {
      url: string; // Direct URL of the image
      metadata: {
        dimensions: {
          width: number;
          height: number;
          aspectRatio: number;
        };
        location?: { // Optional: Location metadata for the image if available
          lat: number;
          lon: number;
          alt: number;
        };
      };
    };
  };
  caption?: string;
  location?: string;
}

export interface VideoDetails {
  videoUrl: string;
  caption?: string;
  location?: string;
  meta_information?: string;
  coverImage?: {
    asset: {
      url: string; // Direct URL of the image
      metadata: {
        dimensions: {
          width: number;
          height: number;
          aspectRatio: number;
        };
      };
    };
  };
}

export interface AudioDetails {
  audioUrl: string;
  coverImage?: {
    _type: 'image';
    asset: {
      _type: 'reference';
      _ref: string;
    };
  };
}

export interface InfographicDetails {
  infographicImage: {
    asset: {
      url: string;
      metadata: {
        dimensions: {
          width: number;
          height: number;
          aspectRatio: number;
        };
      };
    };
  };
  description?: string;
  meta_information?: string;
  
}

export interface QuoteDetails {
  quoteText: string;
  author: string;
  cite?: string;
}

export interface SpacerDetails {
  width: 'small' | 'medium' | 'large' | 'xlarge';
}

export interface BannerImageDetails {
  image: {
    asset: {
      url: string;
      metadata: {
        dimensions: {
          width: number;
          height: number;
          aspectRatio: number;
        };
      };
    };
  };
}
export interface TextOnlyDetails {
  text: string;
}
export interface TitleSlideDetails {
  projectTitle: string;
  image: {
    asset: {
      url: string;
      metadata: {
        dimensions: {
          width: number;
          height: number;
          aspectRatio: number;
        };
      };
    };
  };
}

export interface Slide {
  type: 'photo' | 'video' | 'audio' | 'infographic' | 'quote' | 'spacer' | 'bannerImage' | 'titleSlide' | 'textOnly';
  excerpt?: string;
  featuredImage?: {
    asset: {
      url: string;
    };
  };
  // Specific fields for different slide types
  photoDetails?: PhotoDetails;
  videoDetails?: VideoDetails;
  audioDetails?: AudioDetails;
  infographicDetails?: InfographicDetails;
  quoteDetails?: QuoteDetails;
  spacerDetails?: SpacerDetails;
  bannerImageDetails?: BannerImageDetails;
  titleSlideDetails?: TitleSlideDetails;
}

export interface StoryTypeV2 {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  date: string;
  order: number;
  menuLabel: string; // The label for this story in the chapters navigation menu
  includeTitleSlide: boolean; // Whether the story includes a title slide
  excerpt?: string;
  featuredImage?: {
    asset: {
      url: string;
    };
  };
  slides: Slide[]; // Array of slides
}