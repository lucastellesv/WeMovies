import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 20px;
  text-align: center;
  button {
    width: 180px !important;
    margin-top: 40px !important;
    margin: 0 auto;
  }
`;

export const Content = styled.div`
  th {
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    align-items: center;
    color: var(--grey);
    text-transform: uppercase;
  }
  tr {
    margin-bottom: 10px;
    width: 100%;
    display: table;
    table-layout: fixed;
    border-collapse: separate;
    border-spacing: 5px 0px;
    text-align: center;
  }
  td {
    display: table-cell;
    text-align: center;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: var(--background);
  }
`;

export const Input = styled.input`
  text-align: "start";
  border-radius: "4px";
  height: 27px;
  width: 47px;
  background: var(--white);
  border: 1px solid var(--light-grey);
  margin-left: 6px;
  margin-right: 2px;
  color: var(--background);
`;

export const Footer = styled.div`
  display: flex;
  align-content: end;
  justify-content: space-between;
  button {
    span {
      color: var(--white) !important;
    }
  }
  div {
    display: flex;
    align-items: end;
    h4 {
      margin-bottom: 0;
    }
    span {
      font-size: 14px;
      margin-right: 8px;
      color: var(--grey);
    }
  }
`;
