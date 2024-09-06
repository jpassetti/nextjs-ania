export interface PhotoDetail {
  image: string;
  caption?: string;
  location?: string;
}

export interface VideoDetails {
  videoUrl: string;
  coverImage?: string;
}

export interface AudioDetails {
  audioUrl: string;
  coverImage?: string;
}

export interface InfographicDetails {
  infographicFile: string;
  description?: string;
}

export interface Story {
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
