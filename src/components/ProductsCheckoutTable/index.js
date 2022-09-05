import React from "react";
import _ from "lodash";
import { Container, Content, Input, Footer } from "./styles";
import { Button } from "../Button";
import minusIcon from "../../assets/minus.svg";
import plusIcon from "../../assets/plus.svg";
import trashCanIcon from "../../assets/trashCan.svg";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, addItem, removeIndex } from "../../store/cart";
export function ProductsCheckoutTable(props) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const cartDistincted = _.uniqBy(cart, "id");
  let total = 0;
  cart.forEach((x) => {
    total += x.price;
  });
  function addItemCart(item) {
    dispatch(addItem(item));
  }

  function removeItemCart(id) {
    dispatch(removeItem(id));
  }
  function removeOne(index) {
    dispatch(removeIndex(index));
  }

  return (
    <Container>
      <Content>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Produto</th>
              <th>Quantidade</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartDistincted.map((product, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img
                      style={{ maxWidth: "90px" }}
                      alt="productImage"
                      src={product.image}
                    ></img>
                  </td>
                  <td>
                    {product.title} <br></br> R${" "}
                    {product.price.toFixed(2).replace(".", ",")}
                  </td>
                  <td>
                    <img
                      alt="minusIcon"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        removeOne(cart.findIndex((x) => x.id === product.id))
                      }
                      src={minusIcon}
                    ></img>
                    <Input
                      type="number"
                      min="0"
                      id="productQuantity"
                      value={cart.filter((x) => x.id === product.id).length}
                      readOnly
                    ></Input>{" "}
                    <img
                      alt="plusIcon"
                      style={{ cursor: "pointer" }}
                      onClick={() => addItemCart(product)}
                      src={plusIcon}
                    ></img>
                  </td>
                  <td>
                    {(
                      cart.filter((x) => x.id === product.id).length *
                      product.price
                    )
                      .toFixed(2)
                      .replace(".", ",")}
                  </td>
                  <td>
                    <img
                      alt="trashCanIcon"
                      style={{ cursor: "pointer" }}
                      onClick={() => removeItemCart(product.id)}
                      src={trashCanIcon}
                    ></img>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <hr></hr>
        <Footer>
          <Button
            hasIcon={false}
            btnText="Finalizar pedido"
            clicked={props.finishClicked}
          ></Button>
          <div>
            <span>TOTAL</span>
            <h4>R$ {total.toFixed(2).replace(".", ",")}</h4>
          </div>
        </Footer>
      </Content>
    </Container>
  );
}
