import React from "react";
import Card from "../UI/Card";
import styled from "styled-components";
import queryString from "query-string";
import { useSelector } from "react-redux";

const Container = styled.div`
  width: 60%;
  margin: 4rem auto;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8rem;
  flex-wrap: wrap;
`;

/**
 * 搜尋使用者輸入的關鍵字，並回傳符合物件
 * 目前是使用 queryString 套件取得
 * @returns 搜尋的 items
 */
const SearchItem = () => {
  const parsed = queryString.parse(window.location.search);
  const keyword = parsed.keyword;

  const commodityReducer = useSelector((state) => state.commodityReducer);
  const commodityList = commodityReducer.commodity;

  const Meals = commodityList.filter((item) => {
    return item.name.toLowerCase().includes(keyword.toLowerCase().trim());
  });

  const shopList = Meals.map((item) => (
    <Card
      key={item.id}
      id={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      description={item.Description}
      image={item.image}
      category={item.category}
    />
  ));

  return (
    <>
      <Container>
        <Wrapper>{shopList}</Wrapper>
      </Container>
    </>
  );
};

export default SearchItem;
