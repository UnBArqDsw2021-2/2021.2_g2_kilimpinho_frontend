import { Box } from "reflexbox";
import { useTheme } from "styled-components";
import * as S from "./styles";
interface DividerProps {
  height?: number;
  marginTop?: string;
  marginBottom?: string;
  color?: string;
}
export const Landing = ({
  height = 1,
  marginTop,
  marginBottom,
  color,
}: DividerProps) => {
  const theme = useTheme();
  return <S.LandingContainer> dsasda</S.LandingContainer>;
};
