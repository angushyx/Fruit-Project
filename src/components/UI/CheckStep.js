import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StepContainer = styled.div`
  width: 45rem;
`;
const StepUl = styled.ul`
  list-style: none;
  display: flex;

  width: 100%;
  justify-content: space-between;
`;
const StepList = styled.li`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
`;
const StepBtn = styled.button`
  font-size: 1.2rem;
  position: relative;
`;
const StepDot = styled.button`
  width: ${(props) => props.width || "3rem"};
  height: ${(props) => props.height || "3rem"};
  border-radius: 50%;
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 10;
  transition: border 0.32s;
  border: 1px solid #ccc;

  background-color: ${(props) => props.bgc || "#fff"};

  &::after {
    content: "${(props) => props.after || "✔"}";
    width: 100%;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &:hover {
    border: 2px solid #ccc;
  }
`;
const StepLine = styled.span`
  border-bottom: 2px solid #ccc;
  width: 100%;
  display: block;
  position: absolute;

  right: 50%;
  top: 1.5rem;
  z-index: 0;
`;
const StepText = styled.div`
  font-size: 1.4rem;
`;

const CheckStep = (props) => {
  const navigate = useNavigate();
  const onSubmitHandler = () => {
    navigate("/payment");
  };
  return (
    <>
      <StepContainer>
        <StepUl>
          <StepList>
            <StepBtn>
              <StepDot
                bgc={props.bgc1}
                after={props.after1}
                width={props.width1}
                height={props.height1}
              />
            </StepBtn>{" "}
            <StepText>Shipping</StepText>
          </StepList>
          <StepList>
            <StepBtn>
              <StepDot
                bgc={props.bgc2}
                after={props.after2}
                width={props.width2}
                height={props.height2}
              />
            </StepBtn>

            <StepText>Payment</StepText>
            <StepLine />
          </StepList>
          <StepList>
            <StepBtn>
              <StepDot
                bgc={props.bgc3}
                after={props.after3}
                width={props.width3}
                height={props.height3}
              />{" "}
            </StepBtn>
            <StepText>Review</StepText>
            <StepLine />
          </StepList>
        </StepUl>
      </StepContainer>
    </>
  );
};

export default CheckStep;
