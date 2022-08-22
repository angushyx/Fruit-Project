import styled from "styled-components";

export const Container = styled.div`
  width: ${(props) => props.width || "50%"};
  max-width: ${(props) => props.maxWidth || "45rem"};
  margin: 0 auto;
  margin-top: 2rem;
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};

  @media screen and (max-width: 800px) {
    width: 60%;
  }

  @media screen and (max-width: 664px) {
    width: 70%;
  }
  @media screen and (max-width: 500px) {
    width: 85%;
  }
  @media screen and (max-width: 450px) {
    width: 95%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Headline = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin: 2rem 0;

  margin-bottom: ${(props) => props.mb || "2rem"};

  color: #333;
  @media screen and (max-width: 848px) {
    font-size: 3.2rem;
  }
  @media screen and (max-width: 773px) {
    font-size: 2.8rem;
  }
  @media screen and (max-width: 678px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 630px) {
    font-size: 2.2rem;
  }
`;
export const LabelHeadline = styled.label`
  font-weight: 600;
  font-size: 1.5rem;

  margin-bottom: 0.3rem;
  ::after {
    content: "*";
    color: red;
    margin-left: 3px;
  }
`;
export const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "1.5rem",
}))`
  margin-bottom: 0.3rem;
  width: ${(props) => props.width || "100%"};
  border: 1px solid #999;
  border-radius: 5px;
  font-size: ${(props) => props.size};
  padding: 0.7rem 1rem;
  padding-left: ${(props) => props.paddingL || "1rem"};

  &:hover,
  &:focus {
    border-color: #333;
  }
`;
export const PasswordInput = styled(Input).attrs({
  type: "password",
})``;
export const EmailInput = styled(Input).attrs({
  type: "email",
  name: "email",
})``;

export const ErrorMessage = styled.p`
  color: red;
  margin-bottom: ${(props) => props.mb || "0"};
`;

export const InputWrapper = styled.div`
  padding-bottom: 0.8rem;
`;
