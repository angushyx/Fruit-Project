import styled from "styled-components";

const BtnContainer = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  position: sticky;
  background-color: var(--color-grey-dark-1);
  bottom: 10%;
  left: 100%;
  border-radius: 50%;
  &::after {
    content: "";
    display: inline-block;
    width: 0;
    height: 0;
    top: 50%;
    left: 50%;
    transform: translate(0%, -30%);
    border-top: 1rem solid transparent;
    border-bottom: 1rem solid var(--color-grey-light-1);
    border-left: 1rem solid transparent;
    border-right: 1rem solid transparent;
  }
  :hover {
    background: var(--color-primary-dark);
    &::after {
      border-bottom: 1rem solid var(--color-grey-dark-2);
    }
  }
`;

const ToTopBtn = () => {
  function toTopHandler() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return <BtnContainer onClick={toTopHandler} />;
};

export default ToTopBtn;
