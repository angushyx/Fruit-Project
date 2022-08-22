import styled from "styled-components";
import { BtnStyle } from "../UI/Button";
import { ImageStyle } from "../Payment/PaymentElement";
import { devices } from "../../MediaQuery/MediaQuery";
import { HightLightPill } from "../UI/Card/Card";

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin-bottom: 10rem;
  @media ${devices.tablet} {
    margin-top: 5rem;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const HeroWrapper = styled.div`
  flex: 0.4;
  display: flex;
  gap: 2rem;
  flex-direction: column;

  max-height: 40rem;
  @media ${devices.tablet} {
    min-width: 35rem;
  }
`;

export const InfoWrapper = styled.div`
  flex: 0.4;
  display: flex;
  flex-direction: column;
`;

export const ContextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  flex-direction: column;
`;
export const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5rem;
`;

export const MainImg = styled.img`
  max-height: 20rem;
  object-fit: cover;
`;

export const BtnGroup = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
`;

export const DetailBtn = styled(BtnStyle)`
  align-self: flex-end;
  justify-self: center;

  width: 50%;
`;

export const ButtonWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 1.5rem 0;
  font-size: 0.5rem;
  @media ${devices.mobileL} {
    margin: 0 auto;
    width: 90%;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
`;
export const FoodName = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  /* background-color: #f2f; */
  letter-spacing: 0.2rem;
  @media ${devices.mobileL} {
    font-size: 3.5rem;
  }
`;
export const RatingWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin: 1rem auto 0 0;
  background-color: #fff;
  font-size: 1.5rem;
`;
export const StarWrapper = styled.span``;
export const RatingText = styled.span``;

export const SubInfo = styled.div`
  margin: 0.3rem auto 1rem;
  font-size: 1.3rem;
  letter-spacing: 0.2rem;
`;
export const AllInfo = styled.div``;

export const CartField = styled.div`
  height: 100%;
  width: 100%;

  -webkit-box-shadow: 0px 3px 14px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 3px 14px -3px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 3px 14px -3px rgba(0, 0, 0, 0.75);
`;

export const CartHeadline = styled.h2`
  font-size: 2rem;
  text-align: center;
  letter-spacing: 2;
  line-height: 2;
`;
export const ContextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

export const PriceStyle = styled.div`
  color: red;
  font-size: 3rem;
  line-height: 2;
  text-align: center;
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin: 2rem 0;
`;

export const Headline = styled.h2`
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--color-grey-light-4);
  @media ${devices.mobileL} {
  }
`;

export const SplitLine = styled.div`
  font-size: 2rem;
  color: #888;
  text-align: center;

  ::after,
  ::before {
    content: "";
    position: absolute;
    right: 0;
    transform: translateY(1.1rem);
    height: 0rem;
    width: 45%;
    border-bottom: 1px solid #aaa;
  }
  ::before {
    left: 0;
  }
`;

export const ImageStyleFree = styled(ImageStyle)`
  position: absolute;
  transform: translate(40%, 20%);
  top: 20%;
`;

export const CategoryPill = styled(HightLightPill)`
  font-size: 1.2rem;
  height: 2rem;
`;

//  &::after {
//     content: "⨉";
//     position: absolute;
//     height: 3rem;
//     width: 3rem;
//     top: -5rem;
//     right: 0;
//     font-size: 3rem;

//     display: flex;
//     align-items: center;
//     justify-content: center;
//     transition: 0.1s ease-in-out;

//     color: #fff;

//     border-radius: 50%;
//   }
//   :hover::after {
//     height: 3.5rem;
//     width: 3.5rem;
//     background-color: #ccc;
//     cursor: pointer;
//   }

export const ImageGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SubImage = styled(ImageStyle)`
  display: inline-block;
  width: 7rem;
  height: 7rem;
`;
