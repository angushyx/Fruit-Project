import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputField = styled.div`
  padding-top: 3rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const InputStyle = styled.input`
  all: unset;
  border: none;
  border-bottom: 2px solid #d1d1d4;
  background: none;
  padding: 10px;
  padding-left: 24px;
  font-weight: 700;
  font-size: 1.5rem;
  width: ${(props) => props.width || "90%"};
  transition: 0.2s;
`;

const Input = (props) => {
  return (
    <InputField>
      <FontAwesomeIcon icon={props.icon} />
      <label htmlFor={props.label}></label>
      <InputStyle onChange={props.onChange} {...props.input} />
    </InputField>
  );
};

export default Input;
