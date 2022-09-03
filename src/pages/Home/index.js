import React, { useEffect } from "react";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { Container, Content } from "./layout";
import api from "../../services/api";
const Home = () => {
  useEffect(() => {
    api.get("products").then((response) => {
      console.log(response);
    }).catch((err) => {
      alert(err)
    });
  });
  return (
    <>
      <Header></Header>
      <Container>
        <Content>
          <Card />
        </Content>
      </Container>
    </>
  );
};

export default Home;