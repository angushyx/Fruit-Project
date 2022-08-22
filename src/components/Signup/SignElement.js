import styled from "styled-components";
import {
  RadioInput,
  RadioWrapper,
  RadioLabel,
} from "../Payment/PaymentElement";

export const Wrapper = styled.div`
  width: 40rem;
  height: 100vh;
  margin: 0 auto;
`;

export const Headline = styled.h1``;
export const SignupCard = styled.div`
  width: 100%;

  margin: auto 0;
  transform: translateY(${(props) => props.translateY || "15%"});

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 2px 4px 15px -8px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 2px 4px 15px -8px rgba(0, 0, 0, 0.38);
  box-shadow: 2px 4px 15px -8px rgba(0, 0, 0, 0.38);
`;
export const From = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ChangeModeBtn = styled.button`
  all: unset;
  margin-top: 1rem;
  border: 1px solid #fff;
  width: 18rem;
  height: 4rem;
  background-color: #e777ee;
  color: #000;
  text-align: center;
  font-size: 1rem;
  text-transform: uppercase;
  transition: all 0.3s;
  &:hover {
    border: 1px solid #fff;
    background-color: #aaa;
    color: #fff;
    cursor: pointer;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: 80%;
  justify-content: space-evenly;
`;
