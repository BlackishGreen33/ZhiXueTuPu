import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/common/styles/globals.scss';

import Providers from '@/common/components/providers/Providers';
import { getAuthSession } from '@/common/utils/nextauth';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '智学图谱',
  description: '学习分析系统',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = getAuthSession();

  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
}
