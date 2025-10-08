'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { parseHighlight } from '@/lib/parseHighlight'
import { translations } from '@/lib/translations'
import { useParams } from 'next/navigation'

export default function About() {
  const [isOpen, setIsOpen] = useState(false)

  const { lang } = useParams()
  const locale = lang === 'de' || lang === 'en' ? lang : 'en'
  const t = translations[locale]

  return (
    <section className="px-6 py-0 max-w-3xl mx-auto text-center">

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-4 py-3 bg-[#00FD70] text-black font-semibold rounded-2xl hover:scale-105 transition-transform mb-14"
      >
        {isOpen ? t.about.collapseButton : t.about.expandButton}
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {isOpen && (
        <div className="text-left space-y-6">
          {/* Text 1 */}
          <div className="space-y-4">
            {t.about.text1.split('\n').map((line, i) => (
              <p key={`t1-${i}`}>{parseHighlight(line.trim())}</p>
            ))}
          </div>

          {/* Text 2 — Milestones */}
          <div className="space-y-4">
            {t.about.text2.includes('<b>') ? (
              <>
                <h3 className="text-xl font-bold mt-6">
                  {parseHighlight(t.about.text2.match(/<b>(.*?)<\/b>/)?.[1] || '')}
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  {t.about.text2
                    .replace(/<b>.*?<\/b>/, '')
                    .split('•')
                    .map((item, i) => item.trim() && (
                      <li key={`t2-${i}`}>{parseHighlight(item.trim())}</li>
                    ))}
                </ul>
              </>
            ) : (
              <p>{parseHighlight(t.about.text2)}</p>
            )}
          </div>

          {/* Text 3 */}
          <div className="space-y-4">
            {t.about.text3.split('\n').map((line, i) => (
              <p key={`t3-${i}`}>{parseHighlight(line.trim())}</p>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}