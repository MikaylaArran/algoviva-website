import type { Metadata } from 'next'
import { Cormorant_Garamond } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: { default: 'AlgoViva — Ethical AI for Africa', template: '%s | AlgoViva' },
  description: 'AlgoViva helps organisations in financial services, health, government, and civil society build AI systems that are trustworthy, accountable, and fit for the African context.',
  openGraph: {
    title: 'AlgoViva — Ethical AI for Africa',
    description: 'For the life of people and planet.',
    url: 'https://www.algoviva.com',
    siteName: 'AlgoViva',
    locale: 'en_ZA',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cormorant.variable}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}