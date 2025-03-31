import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import RadioButton from './components/RadioButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DML WebDev - Desenvolvimento Web e Linux',
  description: 'Soluções profissionais em desenvolvimento web e administração Linux',
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
        <RadioButton />
      </body>
    </html>
  )
} 