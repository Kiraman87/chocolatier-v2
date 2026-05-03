import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { AntdThemeProvider } from '@/components/ui/antd-theme'
import StyledComponentsRegistry from '@/components/ui/antd-registry'
import './globals.css'

export const metadata: Metadata = {
  title: 'Maître Chocolatier — Artisan Chocolatier Français',
  description: 'Chocolats artisanaux de prestige, créés avec passion et savoir-faire depuis 1924.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <StyledComponentsRegistry>
          <AntdThemeProvider>
            {children}
          </AntdThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}