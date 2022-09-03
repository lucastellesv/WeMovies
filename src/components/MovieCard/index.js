import { Button } from "../Button";
import { Container, Content } from "./styles";

export function MovieCard(props) {
  return (
    <Container>
      <Content>
        <img src={props.product.image}></img>
        <h1>{props.product.title}</h1>
        <p>R$ {props.product.price.toFixed(2).replace(".", ",")}</p>
        <Button hasIcon={true} btnText="Adicionar ao carrinho"></Button>
      </Content>
    </Container>
  );
}
