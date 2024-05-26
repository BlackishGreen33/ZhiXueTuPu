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
  session: any;
};

const Providers: React.FC<Props> = React.memo(({ children, session }) => {
  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      {/* <QueryClientProvider client={queryClient}> */}
      <NextThemesProvider attribute="class" defaultTheme="light">
        {/* <ModalProvider /> */}
        <SessionProvider session={session}>
          <Layout>{children}</Layout>
        </SessionProvider>
      </NextThemesProvider>
      {/* </QueryClientProvider> */}
    </StyledComponentsRegistry>
  );
});

export default Providers;
