import '../styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { StoreProvider } from '@/middlewares/redux/providers';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ChatHDP',
  description: 'Desarrollado por TerminalKiller Project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  )
}
