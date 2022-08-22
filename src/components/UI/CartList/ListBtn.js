import React from "react";
import styled from "styled-components";
import { BtnStyle } from "../Button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CartListBtn = styled(BtnStyle)`
  align-self: center;
  padding: 1rem;
  margin-bottom: 2rem;
`;

const ListBtn = () => {
  const cartList = useSelector((state) => state.cartReducer.items);
  const navigate = useNavigate();

  const checkoutHandler = () => {
    if (cartList.length !== 0) {
      navigate("/review/checkout");
    } else {
      navigate("/meals");
    }
  };

  return (
    <CartListBtn height="3rem" width="85%" onClick={checkoutHandler}>
      {cartList.length !== 0 ? "Checkout" : " Go to Shopping!"}
    </CartListBtn>
  );
};

export default ListBtn;
