import styled, { css } from 'styled-components';

export const SignUpGrid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    column-gap: ${theme.spacings.xlarge};
    row-gap: ${theme.spacings.xsmall};

    @media (max-width: ${theme.screens.small}) {
      column-gap: ${theme.spacings.large};
    }

    @media (max-width: ${theme.screens.xsmall}) {
      column-gap: ${theme.spacings.medium};
    }
  `}
`;
