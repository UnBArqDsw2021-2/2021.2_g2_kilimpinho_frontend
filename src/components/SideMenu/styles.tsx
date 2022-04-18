import styled, { css } from 'styled-components';

export const MenuWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.white};
    width: fit-content;
    height: fit-content;
    border-radius: 8px;
    padding: ${theme.spacings.small};
    padding-bottom: ${theme.spacings.medium};
    padding-top: ${theme.spacings.tiny};
    box-shadow: ${theme.shadows.hard};
    max-width: 220px;
  `}
`;

const activeNavItem = css`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    background: rgba(100, 150, 250, 0.1);
    border-radius: 5px;
    padding: 1px ${theme.spacings.tiny};
    font-weight: ${theme.font.weights.semiBold};
  `}
`;

export const SideMenuItem = styled.a<{
  isActive?: boolean;
}>`
  ${({ isActive, theme }) => css`
    display: inline-flex;
    align-items: center;
    font-size: ${theme.font.sizes.regular};
    width: 100%;
    font-weight: ${theme.font.weights.medium};
    cursor: pointer;
    transition: all 0.2s ease, font-weight 0s;
    overflow-y: clip;

    &:not(:last-child) {
      margin-bottom: ${theme.spacings.xxsmall};
    }

    & svg {
      width: 20px;
      height: 20px;
      margin-right: ${theme.spacings.tiny};
      transition: all 0.1s linear;
    }

    @media (max-width: ${theme.screens.medium}) {
      padding: ${theme.spacings.xsmall};
    }

    position: relative;
    ${isActive && activeNavItem}
  `}
`;
