import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { translations } from '@/lib/translations'

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
        <div className="w-[500px]">
          <Image
            src="/logo.png"
            alt="neuland.consulting Logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto mb-6"
            priority
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          {t.title}
        </h1>
      </section>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32 bg-gradient-to-b from-white to-[#f5f7f0]">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
          {t.subtitle}
        </h1>
        <a
          href="#kontakt"
          className="px-6 py-3 bg-[#fadf16] text-black font-semibold rounded-2xl shadow hover:scale-105 transition-transform"
        >
          {t.cta}
        </a>
      </section>

      {/* Leistungen / Offerings */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">{t.offer}</h2>
          <ul className="grid gap-6 md:grid-cols-2 list-disc list-inside">
            {t.offers.map((item: string) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Warum Neuland / Why Neuland */}
      <section className="px-6 py-24 bg-[#f0aabc]/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{t.why}</h2>
          <p className="text-lg mb-6">{t.whyText}</p>
          <blockquote className="italic text-gray-600">{t.quote}</blockquote>
        </div>
      </section>

      {/* Arbeitsweise / Approach */}
      <section className="px-6 py-24 bg-[#00cb64]/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">{t.approach}</h2>
          <div className="grid gap-6 md:grid-cols-3 text-center">
            {t.steps.map((step: string, i: number) => (
              <div key={step}>
                <h3 className="font-bold mb-2">{step}</h3>
                <p>{t.stepTexts[i]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt / Contact */}
      <section id="kontakt" className="px-6 py-24 bg-[#34CAE1]/10">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{t.contact}</h2>
          <p className="mb-6">{t.contactText}</p>
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