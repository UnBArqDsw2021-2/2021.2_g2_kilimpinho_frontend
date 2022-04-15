import styled, { css } from "styled-components";

import type { CheckboxProps } from ".";

export const Checkbox = styled.input`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    min-width: 18px;
    width: 100%;
    max-width: 18px;
    height: 18px;
    margin: 0;
    border: 1px solid ${theme.colors.darkGray400};
    transition: background border ${theme.transition.fast};
    position: relative;
    outline: none;

    &:before {
      content: "";
      width: 6px;
      height: 9px;
      border: 2px solid ${theme.colors.white};
      border-top: 0;
      border-left: 0;
      transform: rotate(45deg);
      position: absolute;
      top: 1px;
      opacity: 0;
      transition: ${theme.transition.fast};
    }

    &:focus {
      box-shadow: 0 0 5px ${theme.colors.secondaryTint};
    }

    &:checked {
      border-color: ${theme.colors.secondaryTint};
      background: ${theme.colors.secondary};

      &:before {
        opacity: 1;
      }
    }
  `}
`;

export const Label = styled.label<Pick<CheckboxProps, "labelColor">>`
  ${({ theme, labelColor }) => css`
    color: ${theme.colors[labelColor]};
    font-size: ${theme.font.sizes.small};
    margin-left: ${theme.spacings.xxsmall};
    cursor: default;
  `}
`;
