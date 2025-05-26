'use client';

// import { type ThemeProviderProps } from "next-themes/dist/types";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import * as React from 'react';

// import ProgressBar from '@/common/components/elements/ProgressBar';
import Layout from '@/common/components/layouts';
// import { ModalProvider } from '@/common/components/providers/modal-provider';
import StyledComponentsRegistry from '@/common/libs/registry';
import GlobalStyles from '@/common/styles/GlobalStyles';

const queryClient = new QueryClient();

type Props = {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  session: any;
};

const Providers: React.FC<Props> = ({ children, session }) => (
  <StyledComponentsRegistry>
    <GlobalStyles />
    <QueryClientProvider client={queryClient}>
      <NextThemesProvider attribute="class" defaultTheme="light">
        {/* <ModalProvider /> */}
        <SessionProvider session={session}>
          <Layout>{children}</Layout>
        </SessionProvider>
      </NextThemesProvider>
    </QueryClientProvider>
  </StyledComponentsRegistry>
);

export default Providers;
