import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Seu Nome - Portfolio',
  description: 'Portfolio profissional e showcase de projetos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-dark-primary text-dark-text min-h-screen`}>
        {children}
      </body>
    </html>
  )
} 