import styled from "styled-components";

export const Container = styled.div`
  background: var(--white);
  border-radius: 6px;
  width: 230px;
  margin: 0 auto;
  padding: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  img {
    max-width: 150px;
    margin: 0 auto;
    margin-bottom: 15px;
  }
  h1 {
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #333333;
  }
  p {
    margin-top: 6px;
    font-size: 11px;
    line-height: 14px;
    text-align: start;
    font-weight: 700;
    color: #2f2e41;
  }
`;
