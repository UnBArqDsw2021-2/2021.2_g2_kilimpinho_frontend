import { ReactElement } from 'react';
import { AuthLayout } from 'layouts/Auth';
import { NextPageWithLayout } from '@/types/next-page';
import { Flex } from 'reflexbox';
import { useTheme } from 'styled-components';
import { Divider } from '@/components/Divider';
import { SigninForm } from '@/components/SigninForm';

const Auth: NextPageWithLayout = () => {
  const theme = useTheme();

  return (
    <AuthLayout
      header={
        <>
          {
            <Flex flexDirection="column" style={{ gap: '0.8rem' }}>
              <h2>Olá outra vez!</h2>
              <p>Bem vindo, sentimos a sua falta</p>
            </Flex>
          }
          <Divider
            color={theme.colors.lightGray}
            marginTop="1rem"
            height={1}
          ></Divider>
        </>
      }
    >
      <SigninForm />
    </AuthLayout>
  );
};

Auth.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default Auth;
