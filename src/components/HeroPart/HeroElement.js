import styled from "styled-components";
import { devices } from "../../MediaQuery/MediaQuery";

export const HeroSection = styled.section`
  height: 60vh;

  background-image: linear-gradient(
      333deg,
      rgba(0, 0, 0, 0.2),
      rgba(251, 233, 233, 0.9)
    ),
    url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
  background-size: cover;
  padding-top: 10rem;

  @media ${devices.mobileL} {
    height: 50vh;
    padding: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 70%;
  @media ${devices.mobileL} {
    height: 50%;
  }
`;

export const Title = styled.h1`
  font-size: 2.8rem;
  color: var(--color-grey-dark-1);
  margin-top: 1.5rem;
  font-weight: 500;
  flex: 1;
`;

export const Headline = styled.h2`
  font-weight: 400;
  font-size: 2rem;
  margin: 1.5rem 5rem 2rem 5rem;
  color: var(--color-grey-dark-1);
  flex: 1;
`;

export const Search = styled.form`
  display: none;

  @media ${devices.mobileL} {
    height: 6rem;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
`;

export const Input = styled.input`
  font-size: inherit;
  border-radius: 10rem;
  border: none;
  padding: 0.6rem 3rem;
  width: 90%;
  height: 50%;
  background-color: #eee;
  transition: all 0.2s;
  margin-right: -3.5rem;
  opacity: 0.6;
  &:focus {
    outline: none;
    width: 100%;
    opacity: 1;
  }
  &::-webkit-input-placeholder {
    font-weight: 100;
    color: var(--color-grey-light-1);
  }
`;
export const SearchBtn = styled.button`
  border: none;
  font-size: inherit;

  &:focus {
    outline: none;
  }

  &:active {
    transform: translateY(2px);
  }
`;

export const Hamburger = styled.div`
  display: none;

  @media ${devices.mobileL} {
    display: block;
    font-size: 3rem;
    position: absolute;
    top: 1.4rem;
    left: 1.4rem;
    :hover {
      cursor: pointer;
    }
  }
`;
