import { useState } from "react";
import { FaStar } from "react-icons/fa";

interface StarProps {
  selected: boolean;
  onSelect: () => void;
  color?: string;
  size?: number;
}

const Star = ({ selected, onSelect, color = "grey", size = 24 }: StarProps) => {
  return (
    <FaStar color={selected ? color : "grey"} size={size} onClick={onSelect} />
  );
};

interface StarRatingProps {
  count: number;
}

const StarRating = ({ count }: StarRatingProps) => {
  const createStars = (length: number) => [...Array(length)];
  const [rate, setRate] = useState(0);
  return (
    <div>
      {createStars(count).map((_, index) => (
        <Star
          key={index}
          selected={index < rate}
          color="yellow"
          onSelect={() => setRate(index + 1)}
        />
      ))}
      <span>{rate}</span>
    </div>
  );
};

export default StarRating;
