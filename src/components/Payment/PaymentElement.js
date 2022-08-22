import styled from "styled-components";
import { Input } from "../ShippingForm/ShippingFormElement";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ExpirationDate = styled.div`
  display: flex;
  margin-bottom: 0.8rem;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;

  font-size: 2rem;
  padding: 10px;
  left: ${(props) => (props.left ? "100%" : "0")};

  transform: translate(${(props) => (props.left ? "-100%" : "0")}, -30%);
`;

export const Subtitle = styled.p`
  color: #888;
  margin-bottom: 2rem;
  font-size: 1.3rem;
`;

export const CreditCardWrapper = styled.div`
  max-width: 70rem;
  padding: 2rem 0;
  border-top: 1px #ccc solid;
  border-bottom: 1px #ccc solid;
`;

export const RadioInput = styled(Input).attrs({
  type: "radio",
})`
  all: unset;

  //Position
  position: absolute;
  height: 2rem;
  width: 2rem;

  border: 1px solid var(--color-grey-dark-2);
  border-radius: 50%;
  background: #fff;
  transition: background-color 0.3s;
  &::before {
    content: "";
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: var(--color-grey-light-1);

    position: absolute;
    transform: translate(50%, 50%);
  }
  &:checked {
    background: ${(props) => props.checkedbgc || "var(--color-grey-dark-1)"};
  }
`;

export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RadioLabel = styled.span`
  font-weight: 600;
  font-size: 2rem;
  margin-left: 3.4rem;
  color: #444;
`;

export const PaypalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  border-bottom: 1px solid #ccc;
`;

export const PaypalText = styled.p`
  padding: 1.5rem 0;
  font-size: 1.4rem;
  font-weight: 500;
  color: #222;
`;

export const ExpirationWrapper = styled.div`
  margin-top: 0.8rem;
`;

export const ExpirationAndCVC = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

export const ImageStyle = styled.img`
  height: ${(props) => props.height || "3rem"};
  width: ${(props) => props.width || "3rem"};
  cursor: pointer;
  display: ${(props) => props.display || "block"};
  border-radius: ${(props) => props.radius || "auto"};
`;
