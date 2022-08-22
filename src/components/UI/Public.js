import styled from "styled-components";
import { devices } from "../../MediaQuery/MediaQuery";

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.2rem;

  @media ${devices.mobileL} {
    font-size: 1.7rem;
  }
  @media ${devices.tablet} {
    font-size: 2rem;
  }
  @media ${devices.laptop} {
    font-size: 2.4rem;
  }
  @media ${devices.laptopL} {
    font-size: 3rem;
  } ;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${(props) => (props.higher ? "50rem" : "43rem")};
  background: ${(props) => (props.bgc ? "var(--color-primary-light)" : "#fff")};

  @media ${devices.mobileL} {
    height: ${(props) => (props.higher ? "50rem" : "40rem")};
  }

  @media ${devices.tablet} {
    height: ${(props) => (props.higher ? "45rem" : "35rem")};
    margin-bottom: 4rem;
  }

  @media ${devices.laptop} {
    height: ${(props) => (props.higher ? "40rem" : "22rem")};
    margin-bottom: 6%;
  }
`;

export const Container = styled.div`
  width: ${(props) => (props.widther ? "90%" : "75%")};
  margin: 0 auto;
`;

export const IconStyle = styled.div`
  position: ${(props) => props.position || "relative"};
  top: ${(props) => props.top || "auto"};
  right: ${(props) => props.right || "auto"};
  color: ${(props) => props.color || "var(--color-grey-dark-2)"};
  font-size: ${(props) => props.fontSize || "auto"};
  height: ${(props) => props.height || "3.7rem"};
  width: ${(props) => props.width || "3.7rem"};

  border-radius: ${(props) => props.radius || "0"};

  background: ${(props) => props.bgc || "none"};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover {
    background: ${(props) => props.hBgc || "none"};
    ::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      height: 3.7rem;
      width: 3.7rem;
      background: ${(props) => props.hoverBgc || "var(--color-primary)"};
      z-index: -1;
    }
  }
`;
