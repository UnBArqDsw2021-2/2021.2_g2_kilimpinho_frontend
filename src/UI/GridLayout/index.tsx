import { useState, useEffect, createRef } from 'react';

import { Grid } from './styles';

export interface GridLayoutProps {
  columnsAmount: number;
  children: (width: number) => JSX.Element | JSX.Element[];
  rowHeight?: number;
  gap?: string;
}
const GridLayout = ({
  children,
  columnsAmount,
  rowHeight,
  gap,
}: GridLayoutProps): JSX.Element => {
  const gridRef = createRef<HTMLDivElement>();
  const [elementWidth, setElementWidth] = useState<number>(0);

  useEffect(() => {
    const { current } = gridRef;
    let gridWidth = current!.getBoundingClientRect().width;
    setElementWidth(Math.round(gridWidth / columnsAmount));
  }, [columnsAmount, rowHeight, gridRef]);

  return (
    <Grid
      columnsAmount={columnsAmount}
      rowHeight={rowHeight}
      gap={gap}
      ref={gridRef}
    >
      {children(elementWidth)}
    </Grid>
  );
};

export default GridLayout;
