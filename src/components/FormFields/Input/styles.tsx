import styled, { css, DefaultTheme } from "styled-components";

export interface InputStyles {
  color?: "white" | "black";
  error?: boolean;
  iconWidth?: number;
}

export const InputContainer = styled.div<{ marginBottom?: number }>`
  ${({ theme, marginBottom = 18 }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: ${marginBottom > 18
      ? `calc(${marginBottom}px + ${theme.spacings.medium})`
      : theme.spacings.medium};
  `}

  textarea {
    min-height: 150px;
  }
`;

export const InputGroup = styled.div`
  position: relative;
  padding: 12px 0 0;
  overflow: hidden;
`;

export const Label = styled.label<InputStyles>`
  ${({ theme, color }) => css`
    display: block;
    transition: top ease 0.2s, font-size 0.2s;
    font-size: ${theme.font.sizes.xsmall};
    margin-bottom: ${theme.spacings.tiny};
    color: ${theme.colors.darkGray400};
    text-transform: capitalize;
    pointer-events: none;
  `}
`;

export const Icon = styled.div<{
  isClickable: boolean;
  color?: keyof DefaultTheme["colors"];
}>`
  ${({ theme, isClickable, color = "primary" }) => css`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 10px;
    right: 8px;
    color: ${theme.colors[color]};

    ${isClickable &&
    css`
      svg:not(.error-icon) {
        pointer-events: all;
        cursor: pointer;
      }
    `}
  `}
`;

export const Input = styled.input<InputStyles>`
  ${({ theme, color = "black", error, iconWidth }) => css`
    font-family: inherit;
    width: 100%;
    border: 0;
    border: 1px solid ${error ? theme.colors.red : theme.colors.darkGray400};
    border-radius: 10px;
    outline: 0;
    color: ${theme.colors[color]};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.tiny};
    padding-right: ${iconWidth ? `calc(${iconWidth}px + 10px)` : "0"};
    background: transparent;
    transition: all 0.15s ease-out, border-color 0.25s;
    resize: none;

    &::placeholder {
      color: transparent;
    }

    &:placeholder-shown ~ ${Label} {
      font-size: ${theme.font.sizes.regular};
      cursor: text;
      top: 22px;
    }

    &:-webkit-autofill,
    textarea:-webkit-autofill,
    select:-webkit-autofill {
      ${color === "white"
        ? css`
            -webkit-box-shadow: 0 0 0 1000px ${theme.colors.darkGray} inset !important;
            -webkit-text-fill-color: white !important;
          `
        : null}
    }

    &:focus,
    &:not(:placeholder-shown) {
    }

    &:not(:placeholder-shown) {
      border-color: ${error ? theme.colors.red : theme.colors.primary};
    }

    &:focus {
      background-color: #d2e0fc;
      border-color: ${error ? theme.colors.red : theme.colors.primary};
      box-shadow: inset 0px -2px 0px ${error ? theme.colors.red : theme.colors.primary};
    }

    &:required,
    &:invalid {
      box-shadow: none;
    }

    &:disabled {
      pointer-events: none;
      background: ${theme.colors.lightGray};
      ${color === "white" &&
      css`
        background: ${theme.colors.darkGray100};
        border: 1px solid ${theme.colors.darkGray200};
      `}

      &:not(:placeholder-shown) {
        padding-left: 10px;
      }

      ~ ${Icon} {
        color: ${theme.colors.lightGray};
        right: 2px;
        pointer-events: none;
        svg:not(.error-icon) {
          pointer-events: none;
        }
      }
    }
  `}
`;
