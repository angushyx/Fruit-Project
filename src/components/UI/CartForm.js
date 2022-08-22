import styled from "styled-components";
import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, decreaseCartItem } from "../../slices/cart-slice";
import { devices } from "../../MediaQuery/MediaQuery";

/****** CartInput and Button  ******/
const AmountWrapper = styled.form`
  display: flex;
  color: #666;
  align-items: center;
`;

const CartBtn = styled.button`
  display: flex;
  width: 2rem;
  height: 2rem;
  font-size: 1rem;

  align-items: center;
  border: 1px solid #000;
  justify-content: center;
  transition: 0.3s all;

  &:hover,
  &:active {
    background-color: #aaa;
    color: #fff;
  }

  @media ${devices.mobileL} {
    width: 2.3rem;
    height: 2.3rem;
    font-size: 1.2rem;
  }
  @media ${devices.tablet} {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.5rem;
  }
  @media ${devices.laptop} {
    width: 2.7rem;
    height: 2.7rem;
    font-size: 1.7rem;
  }
`;
const Input = styled.input`
  border: 1px solid #aaa;
  width: 2rem;
  height: 2rem;

  text-align: center;

  @media ${devices.mobileL} {
    width: 2.3rem;
    height: 2.3rem;
  }
  @media ${devices.tablet} {
    width: 2.5rem;
    height: 2.5rem;
  }
  @media ${devices.laptop} {
    width: 2.7rem;
    height: 2.7rem;
  }
`;

const CartForm = React.forwardRef((props, ref) => {
  const amountInputRef = useRef();
  const itemIdRef = useRef(props.id);

  const dispatch = useDispatch();

  const commodityList = useSelector(
    (state) => state.commodityReducer.commodity
  );
  const cartReducer = useSelector((state) => state.cartReducer);
  const cartList = useSelector((state) => state.cartReducer.items);

  const itemId = itemIdRef.current;

  const newItem = commodityList.find((item) => {
    return item.id === itemId;
  });

  const newCartItem = cartList.find((item) => {
    return item.id === itemId;
  });

  const AddToCartHandler = (e) => {
    e.preventDefault();
    const enterAmount = amountInputRef.current.value;
    //變成數字的功能
    let enterAmountNum = parseInt(enterAmount, 10);
    const enterItemPrice = newItem.price;

    dispatch(addToCart({ newItem, enterAmountNum, enterItemPrice }));
  };
  const decreaseItemHandler = (e) => {
    e.preventDefault();
    const enterAmount = amountInputRef.current.value;
    //變成數字的功能
    let enterAmountNum = parseInt(enterAmount, 10);
    const enterItemPrice = newCartItem.price;

    // console.log(cartReducer);
    dispatch(decreaseCartItem({ newItem, enterAmountNum, enterItemPrice }));
  };

  return (
    <AmountWrapper>
      <CartBtn onClick={decreaseItemHandler}>-</CartBtn>
      <Input
        ref={amountInputRef}
        label="Amount"
        min="1"
        max="999" 
        type="text"
        defaultValue="1"
        id="amount"
        value={props.itemAmount}
      />
      <CartBtn onClick={AddToCartHandler}>+</CartBtn>
    </AmountWrapper>
  );
});

export default CartForm;
