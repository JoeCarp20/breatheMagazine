import { graphql } from 'gatsby';

export const CreatorFragment = graphql`
  fragment CreatorFragment on SanityCreator {
    id
    name
    profile_image {
      asset {
        fluid {
          ...GatsbySanityImageFluid
        }
      }
    }
    _rawBio
    gallery {
      asset {
        fluid {
          ...GatsbySanityImageFluid
        }
      }
    }
    _rawQuestionForCreator
    slug {
      current
    }
    external_links {
      link_url
      link_text
      name
    }
  }
`;