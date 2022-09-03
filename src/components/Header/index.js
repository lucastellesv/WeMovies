import bagIcon from "../../assets/bag.svg";
import { useNavigate } from "react-router-dom";
import { Container, Content, CartDiv, CartIcon, CartText } from "./styles";

export function Header() {
  const navigate = useNavigate();

  const goToCart = () => {
    navigate('/cart')
  };
  return (
    <Container>
      <Content>
        <h3>WeMovies</h3>

        <CartDiv onClick={goToCart}>
          <CartText>
            <h5>Meu carrinho</h5>
            <span>0 itens</span>
          </CartText>
          <CartIcon>
            <img src={bagIcon}></img>
          </CartIcon>
        </CartDiv>
      </Content>
    </Container>
  );
}
