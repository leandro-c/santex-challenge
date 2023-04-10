import { GET_PRODUCTS } from '../graphql/queries';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import { ButtonCard } from '../components/ButtonCard';
import { Product } from '../utils/utils';
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px 20px 20px 20px;
`;
const ProductCard = styled.div`
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;
export function ProductList() {
  const result = useQuery(GET_PRODUCTS);
  return (
    <GridContainer>
      {result?.data?.products?.items.map((product: Product) => (
        <ProductCard key={`${product.id}-${product.name}`}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <h4>${product.variants[0].price}</h4>
          <ButtonCard {...product} />
        </ProductCard>
      ))}
    </GridContainer>
  );
}
