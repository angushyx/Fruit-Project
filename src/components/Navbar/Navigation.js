import styled from "styled-components";
import { Link } from "react-router-dom";
import { devices } from "../../MediaQuery/MediaQuery";

export const Header = styled.header`
  position: sticky;
  height: ${(props) => props.height || "5rem"};
  background-color: var(--color-grey-light-1);
  bottom: 0;
  z-index: 99;
  @media ${devices.mobileL} {
    display: ${(props) => props.display || "none"};
  }
`;

export const Wrapper = styled.nav`
  /* flexBox */
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;

  width: 90%;
  max-width: ${(props) => props.maxWidth || "34rem;"};
  height: 100%;
  margin: 0 auto;
`;

export const LeftNav = styled.div`
  gap: 2rem;
  font-size: 2rem;
  transition: 1s all;
  cursor: pointer;
  @media ${devices.mobileL} {
    font-size: 2rem;
  }
  @media ${devices.laptop} {
    font-size: 2rem;
  }
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

export const LinkStyle = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  align-self: center;
  width: 4rem;
  :active,
  :hover {
    border-top: 0.3rem solid #222;
  }
`;

export const LogoWrapper = styled.div``;

export const Logo = styled.div`
  width: 5rem;
  height: 5rem;
  @media ${devices.mobileL} {
    width: 4rem;
    height: 4rem;
  }
`;

export const UserNav = styled.nav`
  height: inherit;
  display: flex;
  align-items: center;
`;

export const UserImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;
  width: 5rem;
  height: 4rem;
  border-radius: 50%;
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;

  @media ${devices.mobileL} {
    height: 100%;
    justify-content: space-between;
    & > *:hover {
      display: flex;
      align-items: center;
      height: inherit;
      background-color: #eee;
    }
  }
`;
export const Li = styled.li`
  position: relative;
  cursor: pointer;

  @media ${devices.mobileL} {
    display: block;
    font-size: 2.4rem;
    padding: 0 1.5rem;
  }
`;
export const Li2 = styled.li`
  display: block;
  font-size: 3rem;
  @media ${devices.mobileL} {
    display: none;
  }
`;

export const Image = styled.img`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  border-radius: ${(props) => props.radius || "50%"};
`;

export const UserIcon = styled.div`
  display: block;

  @media ${devices.mobileL} {
    /* display: none; */
  }
`;

export const Notification = styled.span`
  position: absolute;
  top: -0.5rem;
  right: ${(props) => props.right || "0"};

  height: 1.4rem;
  width: 1.4rem;
  z-index: 99;

  font-size: 1.2rem;
  background-color: var(--color-primary-dark);

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
`;

export const Search = styled.form`
  display: none;

  @media ${devices.mobileL} {
    flex: 0 0 40%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Input = styled.input`
  font-size: inherit;
  border-radius: 10rem;
  border: none;
  padding: 0.6rem 3rem;
  width: 90%;
  background-color: #eee;
  transition: all 0.2s;
  margin-right: -3.5rem;

  &:focus {
    outline: none;
    width: 100%;
  }
  &::-webkit-input-placeholder {
    font-weight: 100;
    color: #999;
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

export const CartIcon = styled.div`
  display: none;
  position: relative;
  @media ${devices.mobileL} {
    display: block;
    position: relative;
  }
`;

export const Hamburger = styled.div`
  font-size: 3rem;
  @media ${devices.mobileL} {
    display: none;
  }
`;
