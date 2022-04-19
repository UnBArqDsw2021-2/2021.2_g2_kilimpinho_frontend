import { Card } from "@/components/Card";
import { SideMenu } from "@/components/SideMenu";
import { MenuItem } from "@/components/SideMenu/MenuItem";
import { SideMenuItem } from "@/components/SideMenu/styles";
import { Box, Flex } from "reflexbox";
import { useTheme } from "styled-components";
import { AiOutlineHome } from "react-icons/ai";
import { BsBoxArrowInRight } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { BiCar, BiPhone } from "react-icons/bi";
import { MdOutlineDashboard } from "react-icons/md";
import * as S from "./styles";

export type UserTemplateProps = {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
};

export const UserLayout = ({ children, header }: UserTemplateProps) => {
  const theme = useTheme();

  return (
    <S.UserLayoutContainer>
      <Flex style={{ gap: theme.spacings.medium }}>
        <SideMenu>
          <MenuItem pathname="/lavagem" icon={<BiCar />}>
            Lavagem
          </MenuItem>
          <MenuItem pathname="/faq" icon={<BiPhone />}>
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
    </S.UserLayoutContainer>
  );
};
