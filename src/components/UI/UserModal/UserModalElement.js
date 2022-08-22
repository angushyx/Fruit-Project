import styled from "styled-components";
import { devices } from "../../../MediaQuery/MediaQuery";

export const DetailBox = styled.ul`
  height: 33rem;
  width: 25rem;
  background: var(--color-grey-dark-1);
  position: absolute;
  top: 6rem;
  left: -20rem;
  border-radius: 0.3rem;

  &:not(:first-child) {
    font-size: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  & > * {
    height: 17%;
    width: 100%;
    display: flex;
    align-items: center;
    color: #fff;
    &:hover {
      transition: all 0.1s ease-in;
      background: var(--color-grey-dark-2);
    }
  }
  @media ${devices.mobileL} {
    width: 30rem;
    right: 17rem;
    font-size: 1.5rem;

    left: -25rem;
  }
`;

export const UserInfoWrapper = styled.li`
  font-size: 1.2rem;
  width: 100%;
  justify-content: flex-start;

  margin: 1rem auto;
  padding: 4rem;
  gap: 2rem;

  height: 20%;
  font-size: 1.5rem;
  border-bottom: 1px solid var(--color-grey-light-1);
  > div {
    font-size: 2.5rem;
  }
  ::after {
    content: "";
    position: absolute;
    height: 0;
    width: 0;

    top: -2rem;
    right: 2rem;
    border-bottom: 1rem solid var(--color-grey-dark-1);
    border-left: 1rem solid transparent;
    border-top: 1rem solid transparent;
    border-right: 1rem solid transparent;
  }
`;

export const UserName = styled.h3`
  line-height: 2;
  font-size: 1.4rem;
`;

export const SettingWrapper = styled.li`
  padding-left: 3rem;
  gap: 1rem;
`;
export const LanguageWrapper = styled.li`
  padding-left: 3rem;
  gap: 1rem;
`;
export const SubscriptionWrapper = styled.li`
  padding-left: 3rem;
  gap: 1rem;
`;
export const LogoutWrapper = styled.li`
  padding-left: 3rem;
  gap: 1rem;
`;
