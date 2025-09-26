import './globals.css'
import { ReactNode } from 'react'
import { quicksand } from './fonts' // ✅ Nur importieren – NICHT erneut definieren

export const metadata = {
  title: 'neuland.consulting',
  description: 'Beratung für digitales Neuland',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de" className={quicksand.variable} suppressHydrationWarning>
      <body className="font-sans">{children}</body>
    </html>
  )
}