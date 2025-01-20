export const STORIES_V2_QUERY = `*[_type == "story_v2"]|order(orderRank){
  _id,
  title,
  slug {
    current
  },
  date,
  order,
  menuLabel, // New field: Menu Label for chapters navigation
  includeTitleSlide, // Boolean to include title slide
  invertBackgroundColor, // Boolean to invert background color
  excerpt, // Excerpt at the story level
  richExcerpt,
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

  // Slides (New structure for slides)
  slides[] {
    _key,
    type,
       
    // Photo slide
    photoDetails {
      title,
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
    
    // Video slide
    videoDetails {
      videoUrl,
      coverImage {
        asset->{
          url,
          metadata {
            dimensions {
              width,
              height,
              aspectRatio
            },
          }
        }
      },
      caption,
      meta_information
    },

    // Audio slide
    audioDetails {
      audioUrl,
      coverImage {
        asset->{
          url,
          metadata {
            dimensions {
              width,
              height,
              aspectRatio
            },
          }
        }
      }
    },

    // Infographic slide
    infographicDetails {
      infographicImage {
        asset->{
          url,
          metadata {
            dimensions {
              width,
              height,
              aspectRatio
            },
          }
        }
      },
      description,
      meta_information
    },

    // Quote slide
    quoteDetails {
      quoteText,
      author,
      cite
    },

    // Spacer slide
    spacerDetails {
      width
    },

    // Banner Image slide (New)
    bannerImageDetails {
      image {
        asset->{
          url,
          metadata {
            dimensions {
              width,
              height,
              aspectRatio
            },
          }
        }
      }
    },

    textOnlyDetails {
      text,
      richText
    },

    titleSlideDetails {
      projectTitle,
      image {
        asset->{
          url,
          metadata {
            dimensions {
              width,
              height,
              aspectRatio
            },
          }
        }
      }
    }
  }
}`;