import { HalfMalf } from "react-spinner-animated";
import "react-spinner-animated/dist/index.css";

const LoadingSpinner = () => {
  return (
    <HalfMalf
      text={"Loading"}
      bgColor={"#fff"}
      width={"100px"}
      height={"100px"}
    />
  );
};

export default LoadingSpinner;
