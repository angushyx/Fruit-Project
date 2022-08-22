import { ImageStyle } from "../../Payment/PaymentElement";

import {
  FooterContainer,
  IconListContainer,
  ButtonFooter,
  Wrapper,
  Title,
  Ul,
  List,
  ButtonText,
} from "./Footer";

const Card = () => {
  return (
    <>
      <Wrapper>
        <Title>Our Stores</Title>
        <Ul>
          <List>lqwesdlft</List>
          <List>lqwessdlftep</List>
          <List>lqwesdlftasdepd</List>
          <List>lqwelftepd</List>
        </Ul>
      </Wrapper>
    </>
  );
};

const IconList = () => {
  return (
    <IconListContainer>
      <ImageStyle
        src={require("../../../image/Social Media/facebook-logo-2019.png")}
        alt=""
      />

      <ImageStyle
        src={require("../../../image/Social Media/instagram.png")}
        alt=""
      />

      <ImageStyle
        src={require("../../../image/Social Media/twitter.png")}
        alt=""
      />

      <ImageStyle
        src={require("../../../image/Social Media/tiktok.png")}
        alt=""
      />
    </IconListContainer>
  );
};

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <Card />
        <Card />
        <Card />
      </FooterContainer>
      <ButtonFooter>
        <IconList />
        <ButtonText>© 2021 Tshirt Store. All rights reserved.</ButtonText>
      </ButtonFooter>
    </>
  );
};

export default Footer;
