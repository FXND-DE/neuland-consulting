'use client'
import { use } from 'react'
import { parseHighlight } from '@/lib/parseHighlight'
import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import About from '@/components/about'
import { translations } from '@/lib/translations'
import { CheckCircle, Lightbulb } from 'lucide-react'

export default function Home({ params }: { params: Promise<{ lang?: string }> }) {
  // ✅ unwrap Promise from Next.js params
  const { lang } = use(params)
  const currentLang = lang === 'de' || lang === 'en' ? lang : 'en'
  const t = translations[currentLang]

  if (!t) {
    throw new Error(`Missing translations for lang "${currentLang}"`)
  }

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <Header lang={lang} />

      {/* Logo + Header Section */}
      <section
        className="w-full flex flex-col items-center justify-center text-center px-6 py-32 bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/NC_Back.png')" }}
      >
        <div className="relative w-60 sm:w-80 md:w-[500px] lg:w-[600px] xl:w-[700px] aspect-[3/1] mb-6">
          <Image
            src="/logo.png"
            alt="neuland.consulting Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <h1 className="header-title mb-6">{parseHighlight(t.title)}</h1>
      </section>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32 bg-gradient-to-b from-white via-[#f5f7f0] to-[#ebfdf5]">
        <h1 className="text-3xl md:text-5xl font-bold leading-snug mb-4 max-w-3xl mx-auto">
          {parseHighlight(t.subtitle)}
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
          {lang === 'de'
            ? 'Individuelle Beratung für digitale Transformation mit Wirkung.'
            : 'Individual consulting for digital transformation that makes a difference.'}
        </p>
        <a
          href="#kontakt"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#00FD70] text-black font-semibold rounded-2xl shadow hover:scale-105 transition-transform"
        >
          {t.cta}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </section>

   {/* Leistungen / Offerings */}
<section className="px-6 py-18 text-center bg-white">
  <h2 className="text-2xl md:text-3xl font-bold mb-4">
    {parseHighlight(t.offer)}
  </h2>

  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
    {lang === 'de'
      ? parseHighlight('<hl>Strategische Beratung</hl> an der Schnittstelle von <hl>Technologie</hl>, <hl>Kommunikation</hl> und <hl>Business</hl>')
      : parseHighlight('<hl>Strategic consulting</hl> at the intersection of <hl>technology</hl>, <hl>communication</hl>, and <hl>business</hl>')}
  </p>

  <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 text-left max-w-4xl mx-auto">
    {t.offers.map(([highlight, rest], i) => (
      <li key={i} className="flex items-start gap-4">
        <CheckCircle className="text-[#00cb64] mt-1 flex-shrink-0" size={32} />
        <span className="text-lg leading-relaxed">{parseHighlight(`${highlight} ${rest}`)}</span>
      </li>
    ))}
  </ul>
</section>

      {/* Warum Neuland / Why Neuland */}
      <section className="px-6 py-18 bg-[#33b5ff]/10">
        <div className="max-w-3xl mx-auto text-center">
          <Lightbulb className="mx-auto mb-4 text-[#33B5ff]" size={40} />
          <h2 className="text-3xl font-bold mb-4">{parseHighlight(t.why)}</h2>
          <p className="text-lg mb-12 leading-relaxed">{parseHighlight(t.whyText)}</p>
          <blockquote className="italic text-gray-600">{parseHighlight(t.quote)}</blockquote>
          <img
            src="/30-Years_Desktop.png"
            alt="30+ Jahre digitale Transformation"
            className="mx-auto max-w-full h-auto"
          />
        </div>
      </section>

      {/* Bild-Text */}
      <section className="relative px-20 py-18 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 items-center max-w-none mx-auto">
          <div className="text-center lg:text-middle space-y-3">
            <p className="font-bold text-2xl md:text-3xl leading-snug">
              {parseHighlight(t.portrait.left)}
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="felix-profile.png"
              alt="Felix Neuland"
              className="w-[300px] mb-4 h-auto"
            />
          </div>
          <div className="text-center lg:text-middle space-y-3">
            <p className="font-bold text-xl md:text-3xl leading-snug">
              {parseHighlight(t.portrait.right)}
            </p>
          </div>
        </div>
       <div className="mt-12 mb-0 text-center text-3xl font-bold">
          {parseHighlight(t.portrait.bottom)}
        </div>
      </section>
      {/* About */}
      <About />
      {/* Kontakt / Contact */}
      <section id="kontakt" className="px-6 py-24 bg-[#66FFAA]/10">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{parseHighlight(t.contact)}</h2>
          <p className="mb-6 text-lg leading-relaxed">{parseHighlight(t.contactText)}</p>
          <a
            href="mailto:felix@neuland.consulting"
            className="inline-block px-6 py-3 bg-[#00FD70] text-black font-semibold rounded-2xl hover:scale-105 transition-transform"
          >
            {parseHighlight(t.contactButton)}
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}