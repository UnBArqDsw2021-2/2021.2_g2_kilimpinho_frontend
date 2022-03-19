import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import NextNprogress from 'nextjs-progressbar';
import { toast, ToastContainer } from 'react-toastify';
import type { NProgressOptions } from 'nprogress';
import { ThemeProvider } from 'styled-components';
import { SWRConfig, SWRConfiguration } from 'swr';
import type { NextPageWithLayout } from '@/types/next-page';

import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyles } from 'styles/globals';
import { theme } from 'styles/theme';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const swrConfig: SWRConfiguration = {
  revalidateOnFocus: process.env.NODE_ENV !== 'development',
  shouldRetryOnError: false,
};

const nextNprogressOptions = {
  showSpinner: false,
};

toast.configure({
  autoClose: 4000,
  position: 'top-right',
});

toast.configure({
  position: 'bottom-center',
  autoClose: false,
  closeButton: false,
  enableMultiContainer: true,
  containerId: 'fetch-error',
});

function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => <>{page}</>);

  return (
    <>
      <Head>
        <title>Ki-limpinho</title>
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <SWRConfig value={swrConfig}>
          <SessionProvider session={session}>
            <NextNprogress
              color="linear-gradient(
                  to right,
                  #00c3ff,
                  #b169f3
                )"
              startPosition={0.4}
              stopDelayMs={200}
              height={4}
              options={nextNprogressOptions}
              showOnShallow={false}
            />
            {getLayout(<Component {...pageProps} />)}
            <ToastContainer
              position="top-right"
              autoClose={8000}
              hideProgressBar={false}
              newestOnTop={false}
              draggable={false}
              pauseOnVisibilityChange
              closeOnClick
              pauseOnHover
            />
          </SessionProvider>
        </SWRConfig>
      </ThemeProvider>
    </>
  );
}

export default App;
