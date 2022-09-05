import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Container, Content } from "./layout";
import emptyCartImage from "../../assets/emptyCart.svg";
import { ProductsCheckoutTable } from "../../components/ProductsCheckoutTable";
import { MessageCard } from "../../components/MessageCard";
import { useSelector } from "react-redux";
import { clearCart } from "../../store/cart";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const totalItems = useSelector((state) => state.cart.length);
  function completePurchase() {
    dispatch(clearCart([]));
    navigate("/finish");
  }
  return (
    <>
      <Container>
        <Content>
          {totalItems === 0 && (
            <MessageCard
              title="Parece que não há nada por aqui :("
              hasDivider={true}
              image={emptyCartImage}
            ></MessageCard>
          )}
          {totalItems > 0 && (
            <ProductsCheckoutTable
              finishClicked={() => completePurchase()}
            ></ProductsCheckoutTable>
          )}
        </Content>
      </Container>
    </>
  );
};

export default Cart;
