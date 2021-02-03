import { graphql } from 'gatsby';

export const CreatorFragment = graphql`
  fragment ZineFragment on ZineJson {
    image {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;