import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from 'react-toastify';

import "./globals.css";
import { getServerSession } from 'next-auth';
import SessionProvider from '@/DB/SessionProvider'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harmonic Horizon",
  description: "Made By Kartikeya Pandey",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)


{
const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className}>
      <SessionProvider session={session}>
          {children}
          <ToastContainer />
        </SessionProvider>
        
        </body>
    </html>
  );
}
