// import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

type Props = {
  selectd: boolean;
  onSelect: () => void;
  color?: string;
  size?: number;
};
const Star = ({ selectd, onSelect, color = "grey", size = 24 }: Props) => {
  // const [status, setStatus] = useState(false);
  // const toggle = () => {
  //   setStatus(!status);
  //   onSelect();
  // };
  // if (status)
  //   return (
  //     <AiFillStar
  //       color={selectd ? color : "gery"}
  //       size={size}
  //       onClick={toggle}
  //     />
  //   );
  return (
    <>
      {selectd ? (
        <AiFillStar color={color} size={size} onClick={onSelect} />
      ) : (
        <AiOutlineStar color={color} size={size} onClick={onSelect} />
      )}{" "}
    </>
  );
};

export default Star;
