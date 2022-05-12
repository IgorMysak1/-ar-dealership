import React from "react";
import "../style/inputText.scss";

interface InputTextProps {
  placeholder: string;
  value: string;
  maxLength?: number;
  onChangeHandler: (value: string) => void;
  description: string;
  valid: boolean;
}
export const InputText: React.FC<InputTextProps> = ({
  placeholder,
  value,
  maxLength,
  onChangeHandler,
  description,
  valid,
}) => {
  return (
    <div className={valid ? "inputText" : "inputText invalid"}>
      <input
        className="inputText__input"
        type="text"
        maxLength={maxLength}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChangeHandler(e.target.value)}
      />
      <p className="inputText__description">{description}</p>
    </div>
  );
};
