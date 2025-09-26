// app/page.tsx
import { redirect } from 'next/navigation'

export default function RootPage() {
  const defaultLang = 'en'
  redirect(`/${defaultLang}`)
}