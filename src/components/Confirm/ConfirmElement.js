import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

/***************************************/
/*************Shipping address**********/
/***************************************/
export const ShippingWrapper = styled.div`
  @media screen and (max-width: 800px) {
    margin-bottom: 3rem;
  }
`;
export const TextTitle = styled.h2`
  margin-bottom: 1.5rem;
  font-size: 2rem;
`;
export const AddressWrapper = styled.div`
  margin-bottom: 3rem;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
  }
`;
export const InfoText = styled.span`
  display: ${(props) => props.display || "block"};
  font-size: ${(props) => props.fontSize || "1.5rem"};
  color: ${(props) => props.color || "black"};
  margin-bottom: ${(props) => props.mb || "1rem"};
  margin-top: ${(props) => props.mt || "0"};

  text-align: ${(props) => props.textAlign || "star"};
`;

/***************************************/
/*************Credit Card info**********/
/***************************************/
export const CreditInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
/***************************************/
/*************Email Address info**********/
/***************************************/
export const EmailAddressWrapper = styled.div`
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
  }
`;
export const EmailAddress = styled.div`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333;
`;
/***************************************/
/*************Payment method**********/
/***************************************/
export const PaymentWrapper = styled.div`
  flex: 1;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 3rem;
    border-bottom: 1px solid #ccc;
  }
`;

/***************************************/
/*************CartWrapper***************/
/***************************************/
export const CartWrapper = styled.div`
  width: 45%;
  max-width: 40rem;

  padding: 2rem;

  -webkit-box-shadow: -4px 9px 23px -11px rgba(0, 0, 0, 0.55);
  -moz-box-shadow: -4px 9px 23px -11px rgba(0, 0, 0, 0.55);
  box-shadow: -4px 9px 23px -11px rgba(0, 0, 0, 0.55);
  border: 1px solid #ccc;
  border-radius: ${(props) => props.radius || "1rem"};
  @media screen and (max-width: 800px) {
    width: 100%;
    max-width: 150rem;
    border: none;
    box-shadow: none;
  }
`;

export const CheckboxWrapper = styled.div`
  position: relative;

  height: 2rem;
  width: 100%;
  display: flex;
  gap: 5px;
`;

export const Checkbox = styled.input.attrs({
  type: "checkbox",
  name: "",
})`
  all: unset;

  width: 2rem;
  height: 2rem;
  display: inline-block;
  background-color: #fff;
  cursor: pointer;
  border: 1px solid #999;
  border-radius: 3px;
  transition: all 0.3s;
  ::after {
  }
  &:checked {
    background-color: #000;
    ::after {
      content: "✔";
      color: #fff;
      font-size: 2rem;
      width: 2rem;
      height: 2rem;
      position: absolute;
      top: 50%;

      left: 50%;

      margin: auto;
      transform: translate(-40%, -60%);
    }
  }
`;

export const SubscriptionLabel = styled.label`
  flex: 1;
  font-size: 1.3rem;
  transform: translateY(-25%);
`;

export const TableWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 4rem;
`;

export const CartTbody = styled.tbody`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const CartTable = styled.table`
  width: 100%;
`;

export const CartTableHeader = styled.th`
  text-align: start;
  font-size: 1.5rem;
  padding-bottom: 0.8rem;
  padding-top: 1rem;
`;
export const CartTableTr = styled.tr`
  border: 1px #ccc solid;
`;
export const CartTableTd = styled.td`
  padding-left: 0;
  text-align: end;
  font-size: 1.5rem;
  padding-bottom: 0.8rem;
  padding-top: 1rem;
`;

/***************************************/
/***************************************/
/***************************************/

export const ChangeBTN = styled.button`
  all: unset;
  font-size: 1.7rem;

  background-color: #fff;
  padding: 0.5rem;
  color: #222;
  border-radius: 1.4rem;
  transition: all 0.5s;
  cursor: pointer;

  &:hover {
    background-color: #bbb;
    color: #222;
  }
`;
