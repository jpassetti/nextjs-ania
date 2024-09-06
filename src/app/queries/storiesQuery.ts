export const STORIES_QUERY = `*[_type == "story"]{
  _id,
  title,
  slug {
    current
  },
  date,
  type,
  excerpt,
  featuredImage {
    asset->{
      url
    }
  },
  photoDetails[] {
    image {
      asset->{
        url
      }
    },
    caption,
    location
  },
  videoDetails {
    videoUrl,
    coverImage {
      asset->{
        url
      }
    }
  },
  audioDetails {
    audioUrl,
    coverImage {
      asset->{
        url
      }
    }
  },
  infographicDetails {
    infographicFile {
      asset->{
        url
      }
    },
    description
  }
}`;
