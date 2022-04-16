import * as S from "./styles";

export const Loader = ({
  size = "base",
  color = "primary",
}: S.ILoadingProps) => (
  <S.LoaderContainer size={size} color={color}>
    <div className="loader loader-1">
      <div className="loader-outter" />
      <div className="loader-inner" />
    </div>
  </S.LoaderContainer>
);
