import styled from "styled-components";
import { Container } from "../UI/Public";
import { devices } from "../../MediaQuery/MediaQuery";

export const UserWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 2rem;
`;

export const CommentContainer = styled(Container)`
  height: 80%;
  overflow-y: scroll;

  @media ${devices.tablet} {
    height: 100%;
  }
`;

export const TextStyle = styled.p`
  text-align: center;
`;

export const FeedbackWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;

  @media ${devices.tablet} {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(10, 1fr);
    row-gap: 1rem;
    height: 100%;
  }
`;

export const Card = styled.div`
  background-color: var(--color-primary);
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  height: 15rem;
  @media ${devices.tablet} {
    height: 100%;
  }
`;

export const Card1 = styled(Card)`
  grid-column: 1 / span 4;
  grid-row: 1 / span 3;
`;
export const Card2 = styled(Card)`
  grid-column: 5 / span 4;
  grid-row: 1 / span 4;
`;
export const Card3 = styled(Card)`
  grid-column: 9 / span 4;
  grid-row: 1 / span 3;
`;
export const Card4 = styled(Card)`
  grid-column: 1 / span 4;
  grid-row: 4 / span 3;
`;
export const Card5 = styled(Card)`
  grid-column: 5 / span 4;
  grid-row: 5 / span 3;
`;
export const Card6 = styled(Card)`
  grid-column: 9 / span 4;
  grid-row: 4 / span 5;
`;
export const Card7 = styled(Card)`
  grid-column: 1 / span 4;
  grid-row: 7 / span 4;
`;
export const Card8 = styled(Card)`
  grid-column: 5 / span 4;
  grid-row: 8 / span 2;
`;
export const Card9 = styled(Card)`
  grid-column: 9 / span 4;
  grid-row: 9 / span 2;
`;
