import { SideMenu } from "@/components/SideMenu";
import { MenuItem } from "@/components/SideMenu/MenuItem";
import { Flex } from "@/UI/Flex/index";
import { useTheme } from "styled-components";

import { useRouter } from "next/router";

export const ServicosAtivosLayout = () => {
  const theme = useTheme();

  const router = useRouter();
  return (
      <Flex flexDirection="column" gap={theme.spacings.medium}>
        <p>Desculpe, mas está funcionalidade ainda não está pronta.</p>
      </Flex>
  );
};
