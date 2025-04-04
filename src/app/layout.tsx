import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Nav from '@/components/nav'
import { ViewTransitions } from 'next-view-transitions'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Denis Lessard',
  description: 'Développeur web à Montréal',
  openGraph: {
    title: 'Denis Lessard',
    description: 'Développeur web à Montréal',
    type: 'website',
    locale: 'fr_CA',
    siteName: 'Fractionnaire'
  },
  robots: 'follow, index',
  twitter: {
    card: 'summary',
    title: 'Denis Lessard',
    description: 'Développeur web à Montréal',
    creator: '@DenLessard',
  },
  verification: {
    google: '',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
      <html lang="fr">
        <body className={montserrat.className}>
          <ThemeProvider attribute="class" disableTransitionOnChange>
            <Nav />
            <div className="text-text dark:text-darkText mx-auto w-[750px] max-w-full px-5 pb-10 pt-28">
              {children}
              <Analytics />
              <SpeedInsights />
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  )
}
