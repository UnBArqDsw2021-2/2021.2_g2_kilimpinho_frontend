import { Flex as FlexBox } from "reflexbox/styled-components";
import styled, { CSSProperties } from "styled-components";

interface FlexStyles {
  gap?: CSSProperties["gap"];
  cursor?: CSSProperties["cursor"];
}

export const Flex = styled(FlexBox)<FlexStyles>`
  gap: ${({ gap = 0 }) => gap};
  cursor: ${({ cursor = "auto" }) => cursor};
`;
