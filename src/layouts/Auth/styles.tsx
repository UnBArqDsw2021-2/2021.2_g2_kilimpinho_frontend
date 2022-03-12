import styled, { css } from 'styled-components';

export const AuthContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.medium};
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
