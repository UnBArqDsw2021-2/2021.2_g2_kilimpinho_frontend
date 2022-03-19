import { Box } from 'reflexbox/styled-components';
import styled, { css, CSSProperties, DefaultTheme } from 'styled-components';

export interface CardStyleProps {
  backgroundColor?: keyof DefaultTheme['colors'];
  background?: CSSProperties['background'];
  boxShadow?: keyof DefaultTheme['shadows'];
  gap?: CSSProperties['gap'];
}

export const Card = styled(Box)<CardStyleProps>`
  ${({
    theme,
    backgroundColor = 'lightGray400',
    boxShadow = 'soft',
    background,
    gap = 0,
  }) => css`
    border-radius: ${theme.border.radius};
    height: fit-content;
    background-color: ${theme.colors[
      backgroundColor as keyof DefaultTheme['colors']
    ]};
    background: ${background};
    box-shadow: ${theme.shadows[boxShadow]};
    gap: ${gap};
  `}
`;
