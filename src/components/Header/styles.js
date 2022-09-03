import styled from "styled-components";

export const Container = styled.header`
  background: var(--background);
`;

export const Content = styled.div`
  padding: 5px;
  display: flex;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 80%;
  h3 {
    color: var(--white);
    font-weight: 600;
  }
  h5 {
    color: var(--white);
    font-weight: 600;
  }
  span {
    color: var(--grey);
    font-size: 12px;
  }
`;

export const CartDiv = styled.div`
  display: flex;
  cursor: pointer;
  text-align: end;
`;

export const CartIcon = styled.div`
  display: flex;
  margin-left: 10px;
  img {
    max-width: 30px;
  }
`;

export const CartText = styled.div`
  display: flex;
  flex-direction: column;
`;
