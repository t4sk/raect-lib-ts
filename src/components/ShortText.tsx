import React from "react";

interface Props {
  width?: number;
  text: string;
}

export const ShortText: React.FC<Props> = ({ width = 100, text }) => {
  return (
    <div
      style={{
        width: width,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      }}
    >
      {text}
    </div>
  );
};

export default ShortText;
