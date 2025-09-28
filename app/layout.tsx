import './globals.css'
import { ReactNode } from 'react'
import { quicksand } from '../fonts' // ✅ Nur importieren – NICHT erneut definieren

export const metadata = {
  title: 'neuland.consulting',
  description: 'Beratung für digitales Neuland',
  metadataBase: new URL('https://neuland.consulting'),
  viewport: 'width=device-width, initial-scale=1', 
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <head>
        {/* 👇 Das ist das Entscheidende */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}