import { ReactElement, useCallback, useState } from 'react';
import { GetStaticProps } from 'next';
import { AuthLayout } from 'layouts/Auth';
import { NextPageWithLayout } from '@/types/next-page';
import { SignUpForm } from '@/components/SignupForm';
import { Box, Flex } from 'reflexbox';
import { useTheme } from 'styled-components';
import { Divider } from '@/components/Divider';

type AuthState = 'signin' | 'signup';

interface AuthFooterProps {
  text: string;
  link: string;
  changeAuthState: () => void;
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

const Auth: NextPageWithLayout = () => {
  const [authState, setAuthState] = useState<AuthState>('signup');

  const changeAuthState = useCallback(
    (state: AuthState) => () => setAuthState(state),
    []
  );

  const theme = useTheme();

  return (
    <AuthLayout
      header={
        <>
          {
            {
              signin: <div>Not implemented</div>,
              signup: (
                <Flex flexDirection="column" style={{ gap: '0.8rem' }}>
                  <h2>Cadastre-se</h2>
                  <p>É fácil, rápido, e o melhor, grátis</p>
                </Flex>
              ),
            }[authState]
          }
          <Divider
            color={theme.colors.lightGray}
            marginTop="1rem"
            height={1}
          ></Divider>
        </>
      }
    >
      {
        {
          signin: <div></div>,
          signup: <SignUpForm />,
        }[authState]
      }
    </AuthLayout>
  );
};

Auth.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default Auth;
