import { ButtonHTMLAttributes, MouseEvent } from "react";
import { Loader } from "../Loader";

import * as S from "./styles";

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>;

export interface IButtonProps extends ButtonTypes {
  size?: "small" | "regular" | "large";
  color?: "primary" | "secondary" | "black";
  shadow?: boolean;
  fullWidth?: boolean;
  minimal?: boolean;
  icon?: JSX.Element;
  as?: React.ElementType;
  isLoading?: boolean;
}

export const Button = ({ children, isLoading, ...props }: IButtonProps) => {
  const {
    color = "primary",
    size = "regular",
    icon,
    shadow = true,
    fullWidth,
    minimal,
  } = props;
  return (
    <S.Button
      type="button"
      color={color}
      size={size}
      icon={icon}
      shadow={shadow}
      fullWidth={fullWidth}
      minimal={minimal}
      {...props}
      disabled={isLoading}
    >
      {isLoading ? (
        <Loader size="small" color="secondary" />
      ) : (
        <span>{children}</span>
      )}
    </S.Button>
  );
};
