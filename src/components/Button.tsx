import React from "react";
import "../style/button.scss";

interface ButtonProps {
  text: string;
  margin?: string;
  handler: () => void;
}
export const Button: React.FC<ButtonProps> = ({
  text,
  margin = "0 0 0 0",
  handler,
}) => {
  return (
    <button onClick={handler} style={{ margin: margin }} className="button">
      {text}
    </button>
  );
};
