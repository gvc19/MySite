import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gagan V C - Full Stack Developer',
  description: 'Full Stack Developer specializing in React, Next.js, .NET Core, and modern web technologies. Building scalable applications with clean architecture.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', '.NET Core', 'TypeScript', 'Web Development'],
  authors: [{ name: 'Gagan V C' }],
  openGraph: {
    title: 'Gagan V C - Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, .NET Core, and modern web technologies.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gagan V C - Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, .NET Core, and modern web technologies.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}