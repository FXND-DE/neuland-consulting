import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import About from '@/components/about'
import { translations } from '@/lib/translations'
import { CheckCircle, Lightbulb } from 'lucide-react'

export default function Home({ params }: { params?: { lang?: 'en' | 'de' } }) {
  const lang = params?.lang === 'de' ? 'de' : 'en'
  const t = translations[lang]

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Sprachumschalter oben rechts */}
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
        <h1 className="header-title mb-6">{t.title}</h1>
      </section>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32 bg-gradient-to-b from-white via-[#f5f7f0] to-[#ebfdf5]">
        <h1 className="text-3xl md:text-5xl font-bold leading-snug mb-4 max-w-3xl mx-auto">
          {t.subtitle}
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
          {lang === 'de'
            ? 'Individuelle Beratung für digitale Transformation mit Wirkung.'
            : 'Individual consulting for digital transformation that makes a difference.'}
        </p>
        <a
          href="#kontakt"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#fadf16] text-black font-semibold rounded-2xl shadow hover:scale-105 transition-transform"
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
      <section className="px-6 py-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">{t.offer}</h2>
          <ul className="grid gap-6 md:grid-cols-2">
            {t.offers.map((item: string) => (
              <li key={item} className="flex items-start gap-3 text-lg">
                <CheckCircle className="text-[#00cb64] mt-1" size={24} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Warum Neuland / Why Neuland */}
      <section className="px-6 py-24 bg-[#f0aabc]/10">
        <div className="max-w-3xl mx-auto text-center">
          <Lightbulb className="mx-auto mb-4 text-[#f0aabc]" size={40} />
          <h2 className="text-3xl font-bold mb-6">{t.why}</h2>
          <p className="text-lg mb-6 leading-relaxed">{t.whyText}</p>
          <blockquote className="italic text-gray-600">{t.quote}</blockquote>
        </div>
      </section>

      {/* About */}
      <About />

      {/* Kontakt / Contact */}
      <section id="kontakt" className="px-6 py-24 bg-[#34CAE1]/10">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{t.contact}</h2>
          <p className="mb-6 text-lg leading-relaxed">{t.contactText}</p>
          <a
            href="mailto:felix@neuland.consulting"
            className="inline-block px-6 py-3 bg-[#34CAE1] text-white font-semibold rounded-2xl hover:scale-105 transition-transform"
          >
            {t.contactButton}
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}