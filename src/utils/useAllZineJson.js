import { graphql, useStaticQuery } from 'gatsby';

const useAllZineJson = () => {
  const { allZineJson } = useStaticQuery(
    graphql`
      query {
        allZineJson {
          nodes {
            ...ZineFragment
          }
        }
      }
    `
  )

  return allZineJson.nodes;
}

export default useAllZineJson;