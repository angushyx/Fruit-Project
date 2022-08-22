import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const BackdropStyle = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 90;
`;

const ModalStyle = styled.div`
  width: 80%;
  height: 60rem;
  margin: 0 auto;
  background-color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  z-index: 99;
  -webkit-box-shadow: -1px 3px 5px 0px rgba(255, 255, 255, 1);
  -moz-box-shadow: -1px 3px 5px 0px rgba(255, 255, 255, 1);
  box-shadow: -1px 3px 5px 0px rgba(255, 255, 255, 1);

  @media screen and (min-width: 600px) {
    width: 45rem;
  }
`;

const ModalOverLay = (props) => {
  return <ModalStyle>{props.children}</ModalStyle>;
};

const ele = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {
        (ReactDOM.createPortal(
          <BackdropStyle>
            <ModalOverLay>{props.children}</ModalOverLay>
          </BackdropStyle>
        ),
        ele)
      }
    </>
  );
};

export default Modal;
