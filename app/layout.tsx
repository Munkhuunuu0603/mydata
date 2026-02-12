import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Монгол Ардын Нам',
  description: 'Монгол Ардын Намын албан ёсны вэб сайт - Эрх чөлөө, Шударга ёс, Эв санааны нэгдэл',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="mn">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
