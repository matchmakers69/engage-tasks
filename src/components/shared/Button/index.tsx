import { MouseEvent } from "react";
import { BaseProps } from "types";
import classes from "./Button.module.css";

type IButtonProps = {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  type: "button" | "submit";
} & BaseProps;

const Button = ({ onClick, children, type }: IButtonProps) => {
  return (
    <button className={classes.button} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
