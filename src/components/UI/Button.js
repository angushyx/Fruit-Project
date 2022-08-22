import styled from "styled-components";

export const BtnStyle = styled.button`
  all: unset;

  border: 1px solid #000;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "4rem"};
  font-size: ${(props) => props.fontSize || "1.8rem"};
  border-radius: ${(props) => props.radius || "0"};
  background: ${(props) => props.bgc || "#fff"};
  margin-top: ${(props) => props.mt || "auto"};

  text-align: center;
  font-weight: 900;
  text-transform: capitalize;
  transition: all 0.3s;

  &:hover {
    border: 1px solid #fff;
    background: ${(props) => props.hoverBgc || "#222"};
    color: #fff;
    cursor: pointer;
  }
`;

const Button = (props) => {
  return (
    <BtnStyle
      height={props.height}
      width={props.width}
      fontSize={props.fontSize}
      radius={props.radius}
      mt={props.mt}
      bgc={props.bgc}
      hoverBgc={props.hoverBgc}
    >
      {props.children}
    </BtnStyle>
  );
};

export default Button;
