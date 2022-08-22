import styled from "styled-components";

export const CardStyle = styled.div`
  position: relative;
  -webkit-box-shadow: -7px 16px 31px -32px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -7px 16px 31px -32px rgba(0, 0, 0, 0.75);
  box-shadow: -7px 16px 31px -32px rgba(0, 0, 0, 0.75);

  display: grid;
  grid-template-rows:repeat(2,1fr);
  border-radius: 1rem;
  
  /* need to flexable */
  min-width: 23rem;
  max-height: 35rem;

`;


export const Image = styled.img`
  width: 100%;
  height: 22vh;
  border-radius: 1rem 1rem 0 0;
  &:hover {
    cursor: pointer;
  }
`;

export const CardContext = styled.div`
  padding: 1.3rem;
  padding-bottom: 0;
  background: var(--color-grey-light-3);
  border-radius: 0 0 1rem 1rem;
`;

export const Name = styled.p`
  font-size: 2.4rem;
`;

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  gap: 1rem;
`;

export const Price = styled.div`
  font-size: 1.7rem;
  font-weight: 600;
  color: var(--dark-gray);
`;

export const Detail = styled.div`
  padding-bottom: 1rem;
`;

export const HightLightPill = styled.span`
  padding: ${(props) => props.padding || ".1rem 0"};

  text-align: center;
  height: 100%;
  width: 30%;

  color: ${(props) => props.color || ".var(--color-grey-dark-1)"};

  font-size: ${(props) => props.fontSize || ".auto"};

  border-radius: 2rem;
  background: ${(props) => props.bgc || "var(--color-primary-dark)"};
`;

export const RatingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 1.5rem;
`;

export const Rating = styled.strong`
  flex: 1;
`;
export const Discount = styled.s`
  flex: 1;
`;
