import React, { FC, ReactNode } from "react";

interface ButtonProps {
  handleClick?: () => void;
  btnLabel?: ReactNode;
  type?: any;
  className?: any;
}

interface Props {
  props: ButtonProps;
}

const JoinButton: FC<Props> = ({ props }) => {
  const { btnLabel, type = "button", className } = props;

  return (
    <button
      type={type}
      className={`bg-[#130c50] rubik text-[18px] ${className}`}
      onClick={props.handleClick}
    >
      {btnLabel ?? "Join"}
    </button>
  );
};

export default JoinButton;
