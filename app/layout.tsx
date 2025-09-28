import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'neuland.consulting',
  icons: {
    icon: "/favicon.ico"
    },
  description: 'Beratung für digitales Neuland',
  metadataBase: new URL('https://neuland.consulting'),
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no', // optional restriktiv
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <head>
        {/* 📱 Dieser Tag ist entscheidend für korrekte Mobile-Darstellung */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}