import { graphql, useStaticQuery } from 'gatsby';

const useAllStripePrice = () => {
  const { allStripePrice } = useStaticQuery(
    graphql`
			query allStripePrice {
        allStripePrice {
          nodes {
            internal {
              content
            }
          }
        }
      }
    `
  )

  return allStripePrice.nodes.map(asp => JSON.parse(asp.internal.content));
}

export default useAllStripePrice;