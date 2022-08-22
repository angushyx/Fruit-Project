import React from "react";
import { Link } from "react-router-dom";

import { Section, Title } from "../UI/Public";
import { BtnStyle } from "../UI/Button";

import {
  IntroWrapper,
  ImageWrapper,
  TextStyle,
  TextWrapper,
  Background,
} from "./Intro";

const Intro = () => {
  return (
    <Section higher bgc>
      <Background>
        <IntroWrapper>
          <ImageWrapper>
            <img
              style={{ borderRadius: "50%" }}
              src={require("../../image/Infosvg/undraw_Eating_together_re_ux62.png")}
            />
          </ImageWrapper>
          <TextWrapper>
            <Title>GOOD FOOD FOR YOU</Title>
            <TextStyle>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus similique earum blanditiis temporibus, voluptatem quia!
              Pi?
            </TextStyle>
            <BtnStyle hoverBgc="#fff">
              <Link to="/meals">GO TO SHOP</Link>
            </BtnStyle>
          </TextWrapper>
        </IntroWrapper>
      </Background>
    </Section>
  );
};

export default Intro;
