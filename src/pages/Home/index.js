import React, { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import api from "../../services/api";

const Home = () => {
  const [products, setProductsList] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get("/products");
      setProductsList(data);
    })();
  }, []);

  return (
    <>
      <Container>
        <Row>
          {products.map((product, index) => {
            return (
              <Col key={index} xl={4} lg={4} md={6} sm={12}>
                <Card key={product.id} product={product}></Card>;
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Home;
