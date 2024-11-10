import { useState } from "react";

interface Props {
  maxChar?: number;
  children: string;
}

function ExpandableText({ maxChar = 100, children }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  if (children.length <= maxChar) return <p>{children}</p>;
  const text = isExpanded ? children : children.substring(0, maxChar);
  return (
    <div>
      <p>
        {text} ...
        <button onClick={handleClick}>{isExpanded ? "Less" : "More"}</button>
      </p>
    </div>
  );
}
export default ExpandableText;
