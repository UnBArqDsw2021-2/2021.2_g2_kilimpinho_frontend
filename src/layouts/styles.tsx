import styled, { css } from "styled-components";

export const LayoutContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.huge};
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: ${theme.spacings.large};
    background-color: ${theme.colors.lightGray};
    background-image: url("imgs/wave.svg");
    background-repeat: no-repeat;
    @media (max-width: ${theme.screens.xsmall}) {
      padding: ${theme.spacings.xsmall};
    }

    > div {
      transition: all 1s ease-in-out;
    }
  `}
`;

export const TopContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-bottom: ${theme.spacings.big};
    h1 {
      color: ${theme.colors.secondary};
      font-size: ${theme.font.sizes.xxxlarge};
      max-width: 14ch;
    }
    p {
      max-width: 36ch;
    }
  `}
`;

export const BottomContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;

    h3 {
      color: ${theme.colors.secondary};
      font-size: ${theme.font.sizes.xlarge};
    }
    p {
      max-width: 36ch;
    }
  `}
`;
