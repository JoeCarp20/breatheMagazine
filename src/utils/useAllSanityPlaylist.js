import { graphql, useStaticQuery } from 'gatsby';

const useAllSanityPlaylist = () => {
  const { allSanityPlaylist } = useStaticQuery(
    graphql`
      query {
        allSanityPlaylist {
          nodes {
            name
            image {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
            _rawDescription
            spotify_id
            creator {
              name
              slug {
                current
              }
            }
          }
        }
      }
    `
  )

  return allSanityPlaylist.nodes;
}

export default useAllSanityPlaylist;