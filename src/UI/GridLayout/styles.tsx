import styled, { css } from 'styled-components';

type GridProps = {
  columnsAmount: number;
  rowHeight?: number;
  gap?: string;
};

export const Grid = styled.div<GridProps>`
  ${({ columnsAmount, rowHeight, gap }) => css`
    display: grid;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;

    grid-template-columns: ${`repeat(${columnsAmount}, 1fr)`};
    grid-auto-rows: ${rowHeight ? `${rowHeight}px` : 'auto'};
    gap: ${gap};
  `}
`;
