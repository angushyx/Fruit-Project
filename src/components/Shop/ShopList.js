import styled from "styled-components";
import { devices } from "../../MediaQuery/MediaQuery";

export const MainContainer = styled.div`
  max-width: 90%;
  margin: 0 auto;
  margin-top: 4rem;
`;

export const Main = styled.main`
  display: grid;
  grid-template-columns: 25% 1fr;
  gap: 1rem;
  height: 80vh;
  width: 100%;
  @media ${devices.mobileL} {
    grid-template-columns: 18% 1fr;
    gap: 1%;
  }
  @media ${devices.laptop} {
    grid-template-columns: 10% 1fr;
    gap: 1%;
  }
`;

export const Sidebar = styled.aside`
  grid-column: 1/2;
  overflow-y: scroll;
  height: 50rem;
`;

export const UnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 1rem;
  font-size: large;
`;

export const CategoryList = styled.li`
  font-size: 1.5rem;
  line-height: 1.5;
  margin: 1rem;
  letter-spacing: 0.009rem;

  width: 8rem;

  &:hover {
    cursor: pointer;
    border-bottom: 1px solid #333;
  }
  @media ${devices.mobileL} {
    height: 50%;
    font-size: 1.8rem;
    line-height: 1.7;
  }
`;

export const Commodity = styled.div`
  display: grid;
  gap: 5rem;
  grid-template-columns: 1fr;
  grid-column: 2/3;
  overflow-y: scroll;
  max-width: 100%;

  @media ${devices.mobileL} {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  @media ${devices.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${devices.laptopL} {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 1.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  :hover,
  :active {
    transform: translateY(-3px);
    background: var(--color-primary-light);
  }
`;

export const RadioInput = styled.input`
  all: unset;
  position: absolute;
  width: 100%;
  cursor: pointer;
  height: 100%;
  :active {
    transform: translateY(-3px);
    background: var(--color-primary-light);
  }
`;
