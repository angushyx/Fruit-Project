import styled from "styled-components";

export const FooterContainer = styled.footer`
  min-height: 30vh;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 4rem;
  border-top: 1px #ccc solid;
`;

export const IconListContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ButtonFooter = styled.div`
  background-color: #fff;
  text-align: center;
  border-top: 1px #ccc solid;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  justify-content: space-around;
  height: 7rem;
`;

export const Wrapper = styled.div`
  width: 9rem;
  height: 14rem;
  background-color: fff;
  flex: 1;
  text-align: center;
`;

export const Title = styled.h2`
  @media screen and (min-width: 586px) {
    font-size: 1.6rem;
  }
  @media screen and (min-width: 786px) {
    font-size: 2rem;
  }
`;

export const Ul = styled.ul`
  height: 14rem;
  transition: 1s all;
  @media screen and (min-width: 586px) {
    font-size: 1.4rem;
  }
  @media screen and (min-width: 786px) {
    font-size: 1.7rem;
  }
`;
export const List = styled.li`
  width: 100%;
  flex-wrap: wrap;
  margin: 1rem 0;
`;

export const ButtonText = styled.span`
  font-size: 1rem;

  @media screen and (min-width: 586px) {
    font-size: 1.6rem;
  }
  @media screen and (min-width: 786px) {
    font-size: 2rem;
  }
`;
