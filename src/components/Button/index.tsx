import { ButtonHTMLAttributes, MouseEvent } from 'react';

import * as S from './styles';

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>;

export interface IButtonProps extends ButtonTypes {
  size?: 'small' | 'regular' | 'large';
  color?: 'primary' | 'secondary' | 'black';
  shadow?: boolean;
  fullWidth?: boolean;
  minimal?: boolean;
  icon?: JSX.Element;
  as?: React.ElementType;
  isLoading: boolean;
}

export const Button = ({ children, ...props }: IButtonProps) => {
  const {
    color = 'primary',
    size = 'regular',
    icon,
    shadow = true,
    fullWidth,
    minimal,
    isLoading,
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
    >
      {isLoading ? <div>loading</div> : <span>{children}</span>}
    </S.Button>
  );
};
