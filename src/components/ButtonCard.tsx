import { ADD_ITEM_TO_ORDER } from '../graphql/mutations';
import { useMutation } from '@apollo/client';
import styled from 'styled-components';
import { useProducts } from '../context/ProductContext';
import { Product, ProductParam } from '../utils/utils';
const StyledButton = styled.button`
  background-color: #ff0000da;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;
interface ButtonCardProps {
  id: string;
  name: string;
  slug: string;
  description: string;
  variants: [
    {
      __typename: string;
      price: number;
      product: {
        __typename: string;
        name: string;
        description: string;
      };
    }
  ];
  assets: [
    {
      __typename: string;
      name: string;
      type: string;
      source: string;
      preview: string;
    }
  ];
}
export function ButtonCard(productParam: any): JSX.Element {
  const [addItemToOrderMutation, { data, loading, error }] =
    useMutation(ADD_ITEM_TO_ORDER);
  if (loading) alert('Submitting...');
  if (error) alert(`Submission error! ${error.message}`);

  const { addProduct } = useProducts();
  const onClickHandler = () => {
    addProduct(productParam);
    addItemToOrderMutation({
      variables: { productVariantId: productParam.id, quantity: 1 },
    });
  };
  return (
    <StyledButton data-testid="button-card" onClick={() => onClickHandler()}>
      Buy Product
    </StyledButton>
  );
}
