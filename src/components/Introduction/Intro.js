import styled from "styled-components";
import { devices } from "../../MediaQuery/MediaQuery";

export const Background = styled.div`
  height: 55rem;

  @media ${devices.tablet} {
    height: 40rem;
  }
`;

export const IntroWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr, 20rem;
  gap: 2rem;
  justify-items: center;
  align-items: flex-end;

  margin: 0 auto;
  @media ${devices.tablet} {
    grid-template-columns: repeat(12, 1fr);
    padding-top: 2rem;
  }
`;
export const ImageWrapper = styled.div`
  grid-column: 2/6;
  width: 70%;
  padding: 2rem 0;

  @media ${devices.mobileL} {
    width: 40%;
  }
  @media ${devices.tablet} {
    width: 40rem;
    padding: 0;
  }
`;
export const TextWrapper = styled.div`
  grid-column: 7/-1;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 80%;
  text-align: center;
  max-width: 40rem;
  @media ${devices.mobileL} {
    font-size: 1.5rem;
  }
  @media ${devices.tablet} {
    height: 65%;
    text-align: start;
  }
`;
export const TextStyle = styled.p`
  margin-bottom: 2rem;
  @media ${devices.tablet} {
    margin-bottom: 0;
  }
`;
