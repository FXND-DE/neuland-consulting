'use client'

import { Linkedin } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import LegalModal from './LegalModal'
import { legalTexts } from '@/lib/legalTexts'

export default function Footer() {
  const pathname = usePathname()
  const lang = pathname.startsWith('/en') ? 'en' : 'de'
  const [modal, setModal] = useState<'legal' | 'privacy' | null>(null)

  const show = (type: 'legal' | 'privacy') => () => setModal(type)
  const close = () => setModal(null)

  return (
    <>
      <footer className="bg-gradient-to-br from-[#0099ff] to-[#00FD70] text-white py-12 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <p className="font-bold text-white mb-1">neuland.consulting</p>
            <p>Beethovenstraße 25<br />60325 Frankfurt am Main</p>
            <p className="mt-1">
              <a
                href="mailto:felix@neuland.consulting"
                className="underline hover:text-black transition"
              >
                felix@neuland.consulting
              </a>
            </p>
            <a
              href="https://www.linkedin.com/in/felixneuland"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 mt-2 text-white hover:text-black transition"
            >
              <Linkedin size={16} strokeWidth={1.5} />
              LinkedIn
            </a>
          </div>

          <div className="flex flex-col md:items-end md:text-right gap-1">
            <button onClick={show('legal')} className="underline hover:text-black transition text-left">
              {lang === 'de' ? 'Impressum' : 'Legal Notice'}
            </button>
            <button onClick={show('privacy')} className="underline hover:text-black transition text-left">
              {lang === 'de' ? 'Datenschutz' : 'Privacy Policy'}
            </button>
          </div>
        </div>
      </footer>

      {modal && (
        <LegalModal onClose={close}>
          <div className="text-gray-900 text-base leading-relaxed space-y-4">
            {modal === 'legal' ? legalTexts[lang].impressum : legalTexts[lang].datenschutz}
          </div>
        </LegalModal>
      )}
    </>
  )
}