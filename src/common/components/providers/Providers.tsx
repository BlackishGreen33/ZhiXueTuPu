'use client';

import { SessionProvider } from 'next-auth/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import React from 'react';

// import ProgressBar from '@/common/components/elements/ProgressBar';
import Layout from '@/common/components/layouts';
// import { ModalProvider } from '@/common/components/providers/modal-provider';
import StyledComponentsRegistry from '@/common/libs/registry';
import GlobalStyles from '@/common/styles/GlobalStyles';

// import { type ThemeProviderProps } from "next-themes/dist/types";
// import {
//   QueryClient,
//   QueryClientProvider,
//   useQuery,
// } from "@tanstack/react-query";
// const queryClient = new QueryClient();

type Props = {
  children: React.ReactNode;
};

const Providers: React.FC<Props> = React.memo(({ children }) => {
  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      {/* <QueryClientProvider client={queryClient}> */}
      <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
        {/* <ModalProvider /> */}
        <Layout>
          <SessionProvider>{children}</SessionProvider>
        </Layout>
      </NextThemesProvider>
      {/* </QueryClientProvider> */}
    </StyledComponentsRegistry>
  );
});

export default Providers;
