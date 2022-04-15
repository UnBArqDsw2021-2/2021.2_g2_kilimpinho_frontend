import { ReactElement, useCallback, useState } from 'react';
import { GetStaticProps } from 'next';
import { AuthLayout } from 'layouts/Auth';
import { NextPageWithLayout } from '@/types/next-page';
import { Avaliation } from '@/components/Avaliation';
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
              <h2>Faça uma avaliação</h2>
              <p>Deixe sua opinião, nos ajude a melhorar!</p>
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
      <Avaliation />
    </AuthLayout>
  );
};

Auth.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default Auth;
