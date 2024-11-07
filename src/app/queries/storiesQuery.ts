export const STORIES_QUERY = `*[_type == "story"]|order(orderRank){
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
      url,
      metadata {
        dimensions {
          width,
          height,
          aspectRatio
        },
        location {
          lat,
          lon,
          alt
        }
      }
    }
  },
  photoDetails[] {
    image {
      asset->{
        url,
        metadata {
          dimensions {
            width,
            height,
            aspectRatio
          },
          location {
            lat,
            lon,
            alt
          }
        }
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
    },
    caption,
    location
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
