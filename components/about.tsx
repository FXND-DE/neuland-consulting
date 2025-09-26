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
      <div className="max-w-4xl mx-auto grid md:grid-cols-[1fr_1.5fr] gap-12 items-center">
        {/* Bild */}
        <div className="flex justify-center">
          <Image
            src="/felix-profile.png"
            alt="Felix Neuland"
            width={300}
            height={300}
            className="rounded-full shadow-lg w-60 h-60 object-cover"
          />
        </div>

        {/* Text */}
        <div className="text-gray-800 text-lg leading-relaxed space-y-4 text-left md:text-justify">
          <h2 className="text-3xl font-bold mb-4">Felix Neuland</h2>
        {content.text1}
        {content.text2}
        {content.text3}


        </div>
      </div>
    </section>
  )
}