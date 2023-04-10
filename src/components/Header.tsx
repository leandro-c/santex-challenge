import { useProducts } from '../context/ProductContext';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  margin: 10px 10px 10px 10px;
`;
const SytyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #e41515;
`;
const StyledDivItems = styled.div`
  padding-right: 30px;
  display: flex;
  align-items: center;
  font-size: x-large;
  color: white;
`;
const StyledImg = styled.img`
  padding-left: 30px;
  width: 164px;
  height: 30px;
`;
export function Header() {
  const { count } = useProducts();
  return (
    <SytyledContainer>
      <StyledHeader>
        <StyledImg
          src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
          alt="logo"
        />
      </StyledHeader>
      <StyledDivItems>{`Items:${count}`}</StyledDivItems>
    </SytyledContainer>
  );
}
