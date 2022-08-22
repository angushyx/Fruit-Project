import styled from "styled-components";
import { devices } from "../../../MediaQuery/MediaQuery";
import { IconStyle } from "../../Navbar/Navigation";

/* Header */
export const CartContainer = styled.div`
  max-width: 55rem;
  height: 100%;
  text-align: center;
  @media ${devices.mobileL} {
    width: 80vw;
  }
  @media ${devices.tablet} {
    width: 70vw;
    min-width: 45rem;
  }
  @media ${devices.tablet} {
    max-width: 50vw;
  }
`;

export const Container = styled.div`
  height: 50%;
  width: 100%;
  @media ${devices.tablet} {
    width: 90%;
    margin: 0 auto;
  }
`;

export const CartListWrapper = styled.div`
  position: relative;
  overflow: scroll;
  text-align: center;
  width: 100vw;
  min-height: ${(props) => props.minH || "auto"};
  margin-bottom: ${(props) => props.mt || "auto"};

  @media ${devices.mobileL} {
    width: 80vw;
  }
  @media ${devices.tablet} {
    width: 70vw;
    min-width: 45rem;
  }
  @media ${devices.tablet} {
    max-width: 50vw;
  }
`;

export const Headline = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;

  font-size: 1.5rem;
  margin: 2rem auto;
  color: #222;
  @media ${devices.mobileL} {
    font-size: 1.7rem;
  }
  @media ${devices.tablet} {
    font-size: 2.3rem;
  }
`;

export const TrashIcon = styled(IconStyle)`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(60%, -70%);

  @media ${devices.mobileL} {
    transform: translate(50%, -30%);
  }
  @media ${devices.tablet} {
    right: -1rem;
  }
`;
export const ProductWrapper = styled.div`
  display: flex;
  padding-top: 2.5rem;
  border-top: 1px #ccc solid;
  gap: 1rem;
  width: 100%;
  margin-top: 1.2rem;
  @media ${devices.mobileL} {
    padding-top: 1.4rem;
    margin-top: 1.4rem;
  }
  @media ${devices.tablet} {
    padding-top: 1.7rem;
  }
  @media ${devices.tablet} {
    padding-top: 2rem;
  }
`;

export const ImageWrapper = styled.div`
  height: 8rem;
  width: 8rem;
`;
export const ProductDetail = styled.div`
  width: 90%;
  margin: 0 auto;
`;
export const FlexWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 1.5rem;
  justify-content: flex-start;
  align-items: flex-end;
`;
export const AmountWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  gap: 3rem;
  font-size: 1rem;
  @media ${devices.mobileL} {
    flex-direction: row;
  }
`;
export const TextWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1rem;
  font-size: 0.7rem;
  width: 50%;
  @media ${devices.mobileL} {
    font-size: 0.7rem;
  }
  @media ${devices.tablet} {
    font-size: 0.8rem;
  }
`;

export const PriceText = styled.div`
  font-size: 1.5rem;
`;
