import styled, { css } from 'styled-components'

export const ErrorMessage = styled.span`
  ${({ theme }) => css`
    position: absolute;
    top: calc(100% + 4px);
    right: 0;
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.small};
    text-align: right;
    cursor: default;
  `}
`
