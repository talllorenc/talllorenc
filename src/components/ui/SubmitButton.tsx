import React from "react";
import Spinner from "./Spinner";

interface ISubmitButtonProps {
  text: string;
  buttonColor?: string;
  textColor?: string;
  gradient?: [string, string];
  icon?: React.ReactNode;
  isDisabled?: boolean;
}

const SubmitButton: React.FC<ISubmitButtonProps> = ({
  text,
  buttonColor = "black",
  textColor = "white",
  gradient,
  icon,
  isDisabled = false,
}) => {
  const backgroundStyle = gradient
    ? `linear-gradient(to bottom, ${gradient[0]}, ${gradient[1]})`
    : buttonColor;

  return (
    <button
      type="submit"
      disabled={isDisabled}
      style={{
        background: backgroundStyle,
        color: textColor,
      }}
      className={`flex items-center justify-center gap-2 w-full py-1 rounded-lg hover:opacity-90 transition-all duration-200 ${
        isDisabled ? "cursor-not-allowed opacity-80" : "cursor-pointer"
      }`}
    >
      {isDisabled ? (
        <Spinner />
      ) : (
        <>
          <span className="font-bold">{text}</span>
          {icon && <div>{icon}</div>}
        </>
      )}
    </button>
  );
};

export default SubmitButton;
