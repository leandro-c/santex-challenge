import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { ButtonCard } from './ButtonCard';
import { ADD_ITEM_TO_ORDER } from './../graphql/mutations';
import { ApolloProvider } from '@apollo/client';
import { createMockClient } from '@apollo/client/testing';
const mocks = [
  {
    request: {
      query: ADD_ITEM_TO_ORDER,
      variables: {
        productVariantId: '6',
        quantity: 9,
      },
    },
    result: {
      data: {
        addItemToOrder: {
          __typename: 'Order',
        },
      },
    },
  },
];
const mocksResponse = {
  result: {
    data: {
      addItemToOrder: {
        __typename: 'Order',
      },
    },
  },
};
const variables = {
  productVariantId: '6',
  quantity: 9,
};
describe('Button', () => {
  const mockClient = createMockClient(
    mocksResponse,
    ADD_ITEM_TO_ORDER,
    variables
  );

  it('should call mutation on click', async () => {
    const ButtonCard = () => (
      <ApolloProvider client={mockClient}>
        <ButtonCard />
      </ApolloProvider>
    );
    const { getByRole } = render(<ButtonCard />);

    fireEvent.click(getByRole('button'));
    await waitFor(() => {
      expect(mockClient.mutate).toHaveBeenCalledWith({
        mutation: ADD_ITEM_TO_ORDER,
        variables: { productVariantId: '6', quantity: 9 },
      });
    });
  });
});
