import React from "react";
import { useSelector } from "react-redux";
import { Section, Container, Title } from "../UI/Public";
import {
  CategoryUl,
  CategoryList,
  CategoryWrapper,
  CategoryText,
  Headline,
  CategoryImg,
} from "./CategoryElement";
import { ImageStyle } from "../Payment/PaymentElement";

const Category = () => {
  const categoryReducer = useSelector((state) => state.categoryReducer);

  const categoryList = categoryReducer.category;

  return (
    <Section>
      <Headline>
        <Title>選擇類別</Title>
      </Headline>
      <Container widther>
        <CategoryUl>
          {" "}
          {categoryList.map((item) => (
            <CategoryList>
              {" "}
              <CategoryWrapper>
                <CategoryImg
                  width="100%"
                  height="100%"
                  radius="1rem"
                  src={item.image}
                />

                <CategoryText>
                  <div> {item.category}</div>
                </CategoryText>
              </CategoryWrapper>
            </CategoryList>
          ))}
        </CategoryUl>
      </Container>
    </Section>
  );
};

export default Category;
