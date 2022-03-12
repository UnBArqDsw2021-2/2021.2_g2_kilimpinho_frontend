import { Card } from '@/components/Card';
import { SideMenu } from '@/components/SideMenu';
import { MenuItem } from '@/components/SideMenu/MenuItem';
import { SideMenuItem } from '@/components/SideMenu/styles';
import { Box } from 'reflexbox';
import { useTheme } from 'styled-components';
import { AiOutlineHome } from 'react-icons/ai';
import { BsBoxArrowInRight } from 'react-icons/bs';
import { MdOutlineDashboard } from 'react-icons/md';
import * as S from './styles';

export type AuthTemplateProps = {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
};

export const AuthLayout = ({ children, header, footer }: AuthTemplateProps) => {
  const theme = useTheme();

  return (
    <S.AuthContainer>
      <SideMenu>
        <MenuItem pathname="/" icon={<AiOutlineHome />}>
          Home
        </MenuItem>
        <MenuItem pathname="/sobre" icon={<MdOutlineDashboard />}>
          Sobre
        </MenuItem>
        <MenuItem pathname="/auth" icon={<BsBoxArrowInRight />}>
          Cadastro
        </MenuItem>
      </SideMenu>
      <Card
        boxShadow="hard"
        minWidth={['300px', '340px']}
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
    </S.AuthContainer>
  );
};
