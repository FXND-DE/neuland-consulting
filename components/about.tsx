'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import aboutContent from '@/lib/aboutContent'

export default function About() {
  const pathname = usePathname()
  const lang = pathname.startsWith('/en') ? 'en' : 'de'
  const content = aboutContent[lang]

  return (
    <section className="bg-white px-6 py-24 border-t border-gray-200">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-left space-y-6">
        {/* Bild */}
        <Image
          src="/felix-profile.png"
          alt="Felix Neuland"
          width={240}
          height={240}
          className="rounded-full shadow-lg w-60 h-60 object-cover"
        />

        {/* Text */}
        <div className="text-gray-800 text-lg leading-relaxed space-y-4">
          <h2 className="text-3xl font-bold text-center">Felix Neuland</h2>
          {content.text1}
          {content.text2}
          {content.text3}
        </div>
      </div>
    </section>
  )
}