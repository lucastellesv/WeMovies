import React from "react";
import { Container } from "./styles";
import AddToCartIcon from "../../assets/addToCart.svg";

export function Button(props) {
  return (
    <Container>
      <button onClick={props.clicked} type="button">
        {props.hasIcon && (
          <div>
            <img src={AddToCartIcon} alt="cartIcon"></img>
            <span>1</span>
          </div>
        )}
        <span>{props.btnText}</span>
      </button>
    </Container>
  );
}
