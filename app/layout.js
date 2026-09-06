import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import LenisProvider from '@/components/LenisProvider'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500'],
})

export const metadata = {
  title: {
    default: 'Angelo Andrei Antipuesto — Development Communicator',
    template: '%s — Angelo Andrei Antipuesto',
  },
  description:
    'Angelo Andrei Antipuesto is a Development Communicator from the University of the Philippines Los Baños, working across storytelling, media production, advocacy, and community engagement.',
  icons: {
    icon: [
      { url: '/tab-icon.png', type: 'image/png' },
    ],
    shortcut: '/tab-icon.png',
    apple: '/tab-icon.png',
  },
  openGraph: {
    title: 'Angelo Andrei Antipuesto — Development Communicator',
    description:
      'Portfolio of Angelo Andrei Antipuesto — storytelling, advocacy, and community communication from UPLB.',
    locale: 'en_PH',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <LenisProvider>
          <Nav />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  )
}
