import bagIcon from "../../assets/bag.svg";
import { useNavigate } from "react-router-dom";
import { Container, Content, CartDiv, CartIcon, CartText } from "./styles";
import { useSelector } from "react-redux";
export function Header() {
  const totalItems = useSelector((state) => state.cart.length);
  const navigate = useNavigate();
  const goTo = (path) => {
    navigate(path);
  };
  return (
    <Container>
      <Content>
        <h3 onClick={() => goTo("/")}>WeMovies</h3>

        <CartDiv onClick={() => goTo("/cart")}>
          <CartText>
            <h5>Meu carrinho</h5>
            <span>{totalItems } itens</span>
          </CartText>
          <CartIcon>
            <img src={bagIcon}></img>
          </CartIcon>
        </CartDiv>
      </Content>
    </Container>
  );
}
