import { graphql, useStaticQuery } from 'gatsby';

const useAllZineJson = () => {
  const { allZineJson } = useStaticQuery(
    graphql`
      query {
        allZineJson {
          nodes {
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  )

  return allZineJson.nodes;
}

export default useAllZineJson;