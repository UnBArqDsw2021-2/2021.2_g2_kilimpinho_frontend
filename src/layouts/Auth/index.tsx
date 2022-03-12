import { Card } from '@/components/Card';
import { Box } from 'reflexbox';
import { useTheme } from 'styled-components';

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
      <Card
        boxShadow="hard"
        minWidth={['300px', '390px']}
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

      {footer}
    </S.AuthContainer>
  );
};
