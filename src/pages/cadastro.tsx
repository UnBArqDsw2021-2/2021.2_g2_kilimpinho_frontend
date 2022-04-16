import { ReactElement, useCallback, useState } from 'react';
import { GetStaticProps } from 'next';
import { AuthLayout } from 'layouts/Auth';
import { NextPageWithLayout } from '@/types/next-page';
import { SignUpForm } from '@/components/SignupForm';
import { Box, Flex } from 'reflexbox';
import { useTheme } from 'styled-components';
import { Divider } from '@/components/Divider';


const Auth: NextPageWithLayout = () => {
  const theme = useTheme();

  return (
    <AuthLayout
      header={
        <>
          {
            <Flex flexDirection="column" style={{ gap: '0.8rem' }}>
              <h2>Cadastre-se</h2>
              <p>É fácil, rápido, e o melhor, grátis</p>
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
      <SignUpForm />
    </AuthLayout>
  );
};

Auth.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default Auth;
