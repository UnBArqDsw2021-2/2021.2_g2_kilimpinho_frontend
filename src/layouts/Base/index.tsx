import { Card } from "@/components/Card";
import { SideMenu } from "@/components/SideMenu";
import { MenuItem } from "@/components/SideMenu/MenuItem";
import { Box, Flex } from "reflexbox";
import { useTheme } from "styled-components";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { BiCar } from "react-icons/bi";
import * as S from "../styles";
import { MdOutlineDashboard } from "react-icons/md";

export type AuthTemplateProps = {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
};

export const BaseLayout = ({ children, header }: AuthTemplateProps) => {
  const theme = useTheme();

  return (
    <S.LayoutContainer>
      <Flex style={{ gap: theme.spacings.medium }}>
        <SideMenu>
          <MenuItem pathname="/dashboard" icon={<MdOutlineDashboard />}>
            Dashboard
          </MenuItem>
          <MenuItem pathname="/faq" icon={<BsTelephone />}>
            FAQ
          </MenuItem>
          <MenuItem pathname="/configuracoes" icon={<AiOutlineSetting />}>
            Configurações
          </MenuItem>
        </SideMenu>
        <Card
          boxShadow="hard"
          minWidth={["300px", "340px"]}
          backgroundColor="white"
          padding={[
            theme.spacings.medium,
            theme.spacings.xlarge,
            theme.spacings.xxlarge,
          ]}
        >
          <Box marginBottom={theme.spacings.large}>{header}</Box>
          {children}
        </Card>
      </Flex>
    </S.LayoutContainer>
  );
};
