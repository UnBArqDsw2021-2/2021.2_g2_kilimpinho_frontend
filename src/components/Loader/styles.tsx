import styled, { css } from "styled-components";

export interface ILoadingProps {
  size: "small" | "base" | "large";
  color?: "primary" | "secondary";
}

const scalesMap = {
  small: 0.3,
  base: 1,
  large: 1.5,
};

const borderMap = {
  small: 1,
  base: 3,
  large: 4,
};

export const LoaderContainer = styled.div<ILoadingProps>`
  ${({ theme, size, color }) => css`
    .loader {
      position: relative;
      width: calc(40px * ${scalesMap[size]});
      height: calc(40px * ${scalesMap[size]});
      border-radius: 50%;
      display: inline-block;
      vertical-align: middle;
    }

    .loader-star {
      position: absolute;
      top: calc(50% - 12px);
    }
    /*LOADER-1*/

    .loader-1 .loader-outter {
      position: absolute;
      border: ${borderMap[size]}px solid
        ${color === "primary" ? theme.colors.primaryTint : theme.colors.white};
      border-left-color: transparent;
      border-bottom: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      -webkit-animation: loader-1-outter 1s cubic-bezier(0.42, 0.61, 0.58, 0.41)
        infinite;
      animation: loader-1-outter 1s cubic-bezier(0.42, 0.61, 0.58, 0.41)
        infinite;
    }

    .loader-1 .loader-inner {
      position: absolute;
      border: ${borderMap[size]}px solid
        ${color === "primary" ? theme.colors.primaryTint : theme.colors.white};
      border-radius: 50%;
      width: 20px;
      height: 20px;
      left: calc(50% - 10px);
      top: calc(50% - 10px);
      border-right: 0;
      border-top-color: transparent;
      -webkit-animation: loader-1-inner 1s cubic-bezier(0.42, 0.61, 0.58, 0.41)
        infinite;
      animation: loader-1-inner 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite;
    }

    /* ----------------     KEYFRAMES    ----------------- */

    @-webkit-keyframes loader-1-outter {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }

    @keyframes loader-1-outter {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }

    @-webkit-keyframes loader-1-inner {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(-360deg);
        transform: rotate(-360deg);
      }
    }

    @keyframes loader-1-inner {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(-360deg);
        transform: rotate(-360deg);
      }
    }
  `};
`;
