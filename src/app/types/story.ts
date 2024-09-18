// src/types/story.ts

export interface PhotoDetail {
  image: {
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
  caption?: string;
  location?: string;
}

export interface VideoDetails {
  videoUrl: string;
  caption?: string;
  location?: string;
  coverImage?: {
    _type: 'image';
    asset: {
      _type: 'reference';
      _ref: string;
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
  infographicFile: string;
  description?: string;
}

export interface StoryType {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  date: string;
  type: 'photo' | 'video' | 'audio' | 'infographic';
  excerpt?: string;
  featuredImage?: string;
  photoDetails?: PhotoDetail[];
  videoDetails?: VideoDetails;
  audioDetails?: AudioDetails;
  infographicDetails?: InfographicDetails;
}
