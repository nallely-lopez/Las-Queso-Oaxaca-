import type { Metadata } from "next";


import { headers } from 'next/headers' // added
import './globals.css';
import ContextProvider from '@/context'
import { ChakraProvider } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "AppKit in Next.js + wagmi",
  description: "AppKit example dApp",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersData = await headers();
  const cookies = headersData.get('cookie');

  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <ContextProvider cookies={cookies}>{children}</ContextProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
