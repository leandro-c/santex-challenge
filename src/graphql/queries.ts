import { gql } from 'graphql-tag';
const GET_PRODUCTS = gql`
  query products($options: ProductListOptions) {
    products(options: $options) {
      items {
        id
        name
        slug
        description
        variants {
          price
          product {
            name
            description
          }
        }
        assets {
          name
          type
          source
          preview
        }
      }
    }
  }
`;
export { GET_PRODUCTS };
