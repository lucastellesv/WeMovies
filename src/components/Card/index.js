import { useDispatch } from "react-redux";
import { Button } from "../Button";
import { Container, Content } from "./styles";
import { addItem } from "../../store/cart";
export function Card(props) {
  const dispatch = useDispatch();

  function addProductToCart(item) {
    dispatch(addItem(item));
  }
  return (
    <Container>
      <Content>
        <img src={props.product.image}></img>
        <h1>{props.product.title}</h1>
        <p>R$ {props.product.price.toFixed(2).replace(".", ",")}</p>
        <Button
          clicked={() => addProductToCart(props.product)}
          hasIcon={true}
          btnText="Adicionar ao carrinho"
        ></Button>
      </Content>
    </Container>
  );
}
