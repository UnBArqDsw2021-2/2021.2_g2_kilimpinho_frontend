import { ReactElement, useCallback, useState } from 'react';
import { GetStaticProps } from 'next';
import { BaseLayout } from 'layouts/Base';
import { NextPageWithLayout } from '@/types/next-page';
import { ProfileForm } from '@/components/ProfileForm';
import { Box, Flex } from 'reflexbox';
import { useTheme } from 'styled-components';
import { Divider } from '@/components/Divider';

const Auth: NextPageWithLayout = () => {
  const theme = useTheme();

  return (
    <BaseLayout
      header={
        <>
          {
            <Flex flexDirection="column" style={{ gap: '0.8rem' }}>
              <h2>Alterar dados</h2>
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
      <ProfileForm />
    </BaseLayout>
  );
};

Auth.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default Auth;
