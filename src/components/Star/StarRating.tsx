import { useState } from "react";

import Star from "./Star";
// import { FaStar } from "react-icons/fa";

interface Props {
  count: number;
}

// function Stars() {
//   return [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />];
// }
function StarRating({ count }: Props) {
  const [rate, setRate] = useState(0);
  // const stars = Array.from({ length: count }, (_, index) => (
  //   <Star key={index} onSelect={() => console.log("click")} />
  // ));
  const stars = (length: number) => [...Array(length)];

  return (
    <>
      {stars(count).map((_, index) => (
        <Star
          key={index}
          selectd={index < rate}
          color="red"
          onSelect={() => setRate(index + 1)}
        />
      ))}
      <span>
        {rate} of {count}
      </span>
    </>
  );
}

export default StarRating;
