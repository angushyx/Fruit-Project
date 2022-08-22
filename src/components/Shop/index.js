/**
 *  2022.06.18
 * !還要改 filter 的條件
 */

import React, { useState } from "react";
import Card from "../UI/Card";
import { useSelector } from "react-redux";

import {
  MainContainer,
  Main,
  Sidebar,
  UnorderedList,
  Commodity,
  RadioInput,
  InputWrapper,
} from "./ShopList";

const ShopList = () => {
  const commodityReducer = useSelector((state) => state.commodityReducer);
  const commodityList = commodityReducer.commodity;

  const categoryReducer = useSelector((state) => state.categoryReducer);

  const categoryList = categoryReducer.category;

  const [commodity, setCommodity] = useState(commodityList);

  const onChangeHandler = (e) => {
    const target = e.currentTarget.value;
    const filterItems = commodityList.filter((item) => {
      return item.category === target;
    });

    if (target === "all") {
      setCommodity(commodityList);
    } else {
      setCommodity(filterItems);
    }
  };

  const shopList = commodity.map((item) => (
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

  /**
   * 使用 radio 抓到 value 值後比對 commodity 裡面的 data
   * 後 filter 出我們想要的 data
   * @returns
   */
  const CategoryList = () => {
    return (
      <>
        {categoryList.map((item) => (
          <>
            <InputWrapper>
              <RadioInput
                onClick={onChangeHandler}
                type="radio"
                name="category"
                value={item.category}
              />
              <label id={item.id} htmlFor={item.category}>
                {item.category}
              </label>
            </InputWrapper>
          </>
        ))}
      </>
    );
  };

  return (
    <>
      <MainContainer>
        <Main>
          <Sidebar>
            <UnorderedList>
              <InputWrapper>
                <RadioInput
                  onClick={onChangeHandler}
                  name="category"
                  value="all"
                  type="radio"
                />
                <label htmlFor="all" name="category">
                  all
                </label>
              </InputWrapper>
              <CategoryList />
            </UnorderedList>
          </Sidebar>
          <Commodity>{shopList}</Commodity>
        </Main>
      </MainContainer>
    </>
  );
};

export default ShopList;
