import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../../slices/cart-slice";

/**
 * 把 db 的資料傳進來這裡，代替 redux 的資料。
 */
import { IconStyle } from "../Public";
import {
  CardStyle,
  Image,
  Detail,
  Name,
  PriceWrapper,
  Price,
  CardContext,
  HightLightPill,
  RatingWrapper,
  Rating,
  Discount,
} from "./Card";

const Card = (props) => {
  const { id, image, name, price, category } = props;

  const dispatch = useDispatch();

  const commodityList = useSelector(
    (state) => state.commodityReducer.commodity
  );

  const newItem = commodityList.find((item) => {
    return item.id === id;
  });

  const AddToCartHandler = (e) => {
    e.preventDefault();

    //變成數字的功能
    let enterAmountNum = 1;
    const enterItemPrice = newItem.price;
    dispatch(addToCart({ newItem, enterAmountNum, enterItemPrice }));
  };

  return (
    <>
    
      <CardStyle key={id}>
        {" "}
        <IconStyle
          top=".5rem"
          right=".5rem"
          fontSize="2rem"
          color="var(--color-grey-dark-2)"
          position="absolute"
          onClick={AddToCartHandler}
          bgc="#fff"
          hBgc="var(--color-primary-light)"
          radius="50%"
        >
          {" "}
          <FontAwesomeIcon icon="fas fa-shopping-cart" />
        </IconStyle>
        <Link to={"/meals/" + id}>
          <Image src={image} />
        </Link>
        <CardContext>
          <Name>{name}</Name>
          <PriceWrapper>
            <Price>$ {price}</Price>
            <Discount>$ 200.0</Discount>
            <HightLightPill>10% off</HightLightPill>
          </PriceWrapper>{" "}
          <Detail>
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
              rem, necessit
            </div>
          </Detail>
          <RatingWrapper>
            <IconStyle color="var(--color-primary)">
              <FontAwesomeIcon icon="fa-solid fa-star" />
            </IconStyle>
            <Rating>
              {" "}
              5.0 <span>(52)</span>
            </Rating>{" "}
            <HightLightPill color="#364fc7" bgc="#96f2d7" fontSize="1.2rem">
              {category}
            </HightLightPill>{" "}
          </RatingWrapper>{" "}
        </CardContext>{" "}
      </CardStyle>
    </>
  );
};

export default Card;
