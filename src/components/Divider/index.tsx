import { Box } from 'reflexbox';
import { useTheme } from 'styled-components';

interface DividerProps {
  height?: number;
  marginTop?: string;
  marginBottom?: string;
  color?: string;
}
export const Divider = ({
  height = 1,
  marginTop,
  marginBottom,
  color,
}: DividerProps) => {
  const theme = useTheme();
  return (
    <Box
      height={`${height}px`}
      marginTop={marginTop}
      marginBottom={marginBottom}
      backgroundColor={color || theme.colors.lightGray}
    ></Box>
  );
};
