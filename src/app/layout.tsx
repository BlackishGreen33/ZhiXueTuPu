import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/common/styles/globals.scss';

import Providers from '@/common/components/providers/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '智慧图谱',
  description: '学习分析系统',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
