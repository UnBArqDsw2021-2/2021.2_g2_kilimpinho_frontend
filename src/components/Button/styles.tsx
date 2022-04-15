import styled, { css, DefaultTheme } from "styled-components";

import type { IButtonProps } from ".";

export type IButtonStyleProps = IButtonProps;

const buttonStylesModifiers = (theme: DefaultTheme) => ({
  size: {
    small: css`
      padding: 6px 20px;
      font-size: 0.9rem;
    `,
    regular: css`
      height: 55px;
    `,
    large: css`
      padding: 15px 45px;
      font-size: ${theme.font.sizes.medium};
    `,
  },
  color: {
    primary: css`
      background-color: ${theme.colors.primary};
      &:hover {
        background-color: ${theme.colors.primaryTint};
      }
    `,
    secondary: css`
      background-color: ${theme.colors.secondaryTint};
      &:hover {
        background-color: ${theme.colors.secondary};
      }
    `,
    black: css`
      background-color: ${theme.colors.black};
    `,
  },
  shadow: css`
    box-shadow: ${theme.shadows.medium};
  `,
  fullWidth: css`
    width: 100%;
  `,
});

export const Button = styled.button<IButtonStyleProps>`
  ${({ theme, size, color = "primary", shadow, fullWidth }) => css`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 30px;

    font-size: ${theme.font.sizes.regular};
    font-weight: ${theme.font.weights.semiBold};
    text-align: center;
    text-transform: uppercase;

    span {
      color: ${theme.colors.white};
    }

    border: none;
    outline: none;
    border-radius: 10px;

    cursor: pointer;
    user-select: none;
    overflow: hidden;

    transition: all 0.2s;
    transition: background 0.5s;

    &:disabled {
      background: ${theme.colors.darkGray400};
      border: 0;
      color: ${theme.colors.darkGray400};
      box-shadow: none;
      pointer-events: none;
    }

    ${size && buttonStylesModifiers(theme).color[color]};
    ${size && buttonStylesModifiers(theme).size[size]};
    ${fullWidth && buttonStylesModifiers(theme).fullWidth};
    ${shadow && buttonStylesModifiers(theme).shadow};
  `}
`;
