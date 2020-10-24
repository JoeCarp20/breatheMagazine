import { graphql, useStaticQuery } from 'gatsby';

const useAllSanityCreator = () => {
  const { allSanityCreator } = useStaticQuery(
    graphql`
      query {
        allSanityCreator {
          nodes {
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
        }
      }
    `
  )

  return allSanityCreator.nodes;
}

export default useAllSanityCreator;