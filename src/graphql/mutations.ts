import { gql } from 'graphql-tag';
const ADD_ITEM_TO_ORDER = gql`
  mutation addItemToOrderMutation($productVariantId: ID!, $quantity: Int!) {
    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
      __typename
    }
  }
`;
export { ADD_ITEM_TO_ORDER };
