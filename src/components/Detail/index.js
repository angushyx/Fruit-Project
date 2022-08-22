import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../slices/cart-slice";
import { useParams, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "../UI/Public";
import { ContextWrapper, DetailBtn, BtnGroup, SubImage } from "./DetailElement";
import {
  MainWrapper,
  HeroWrapper,
  InfoWrapper,
  MainImg,
  DescriptionWrapper,
  RatingWrapper,
  RatingText,
  FoodName,
  StarWrapper,
  TitleWrapper,
  AllInfo,
  CategoryPill,
  ImageGroup,
} from "./DetailElement";

const Detail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const params = useParams();

  const commodityReducer = useSelector((state) => state.commodityReducer);
  const commodityList = commodityReducer.commodity;
  const detailProduct = commodityList.find((item) => {
    return item.id === params.itemId;
  });

  const checkoutHandler = () => {
    navigate("/review/checkout");
  };

  /**
   * 點擊按鈕加入購物車的事件
   * @param {事件} e
   */
  const AddToCartHandler = (e) => {
    e.preventDefault();
    const newItem = detailProduct;

    //變成數字的功能。
    let enterAmountNum = 1;
    const enterItemPrice = newItem.price;
    dispatch(addToCart({ newItem, enterAmountNum, enterItemPrice }));
  };

  return (
    <>
      <Container>
        <MainWrapper>
          <HeroWrapper>
            <div>
              <MainImg src={detailProduct.image} />
            </div>
            <ImageGroup>
              <SubImage src={detailProduct.image} />
              <SubImage src={detailProduct.image} />
              <SubImage src={detailProduct.image} />
              <SubImage src={detailProduct.image} />
            </ImageGroup>
          </HeroWrapper>
          <InfoWrapper>
            <ContextWrapper>
              <DescriptionWrapper>
                <TitleWrapper>
                  <FoodName>{detailProduct.name}</FoodName>{" "}
                  <CategoryPill>{detailProduct.category}</CategoryPill>
                </TitleWrapper>
                <RatingWrapper>
                  {" "}
                  <RatingText>4.0(235)</RatingText>
                  <StarWrapper>
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                  </StarWrapper>
                </RatingWrapper>
                <h1>$ {detailProduct.price}</h1>{" "}
                <AllInfo>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  expedita voluptas modi? Sapiente accusamus, aperiam veniam,
                  dolor facere, esse perspiciatis eveniet praesentium commodi
                  adipisci fugit tempora recusandae en
                </AllInfo>
              </DescriptionWrapper>{" "}
              <BtnGroup>
                <DetailBtn fontSize="1.2rem" onClick={AddToCartHandler}>
                  加入購物車
                </DetailBtn>
                <DetailBtn fontSize="1.2rem" onClick={checkoutHandler}>
                  直接購買
                </DetailBtn>
              </BtnGroup>
            </ContextWrapper>
          </InfoWrapper>
        </MainWrapper>
      </Container>
    </>
  );
};

export default Detail;
