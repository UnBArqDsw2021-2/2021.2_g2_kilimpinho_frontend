import styled, { css } from 'styled-components';

export const LayouyContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: ${theme.spacings.large};
    background-color: ${theme.colors.lightGray};
    background-image: url('imgs/wave.svg');
    background-repeat: no-repeat;
    @media (max-width: ${theme.screens.xsmall}) {
      padding: ${theme.spacings.xsmall};
    }

    > div {
      transition: all 1s ease-in-out;
    }
  `}
`;
