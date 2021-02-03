import { graphql } from 'gatsby';

export const PlaylistFragment = graphql`
  fragment PlaylistFragment on SanityPlaylist {
    name
    spotify_id
    _rawDescription
    image {
      asset {
        fluid {
          ...GatsbySanityImageFluid
        }
      }
    }
    creator {
      name
      slug {
        current
      }
    }
  }
`;