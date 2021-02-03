import { graphql, useStaticQuery } from 'gatsby';

const useAllSanityCreator = () => {
  const { allSanityCreator } = useStaticQuery(
    graphql`
      query {
        allSanityCreator {
          nodes {
            ...CreatorFragment
          }
        }
      }
    `
  )

  return allSanityCreator.nodes;
}

export default useAllSanityCreator;