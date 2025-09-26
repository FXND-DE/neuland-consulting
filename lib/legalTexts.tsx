import { ReactNode } from 'react'

export const legalTexts: Record<'de' | 'en', { impressum: ReactNode; datenschutz: ReactNode }> = {
  de: {
    impressum: (
      <>
        <p>Felix Neuland<br />
        neuland.consulting<br />
        Beethovenstraße 25<br />
        60325 Frankfurt am Main</p>

        <p>
          <strong>Kontakt:</strong><br />
          <a href="mailto:felix@neuland.consulting">felix@neuland.consulting</a>
        </p>

        <p className="text-sm text-gray-600 italic">
          Verantwortlich im Sinne des § 55 Abs. 2 RStV: Felix Neuland
        </p>
      </>
    ),
    datenschutz: (
      <>
        <p>
          Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Personenbezogene Daten werden vertraulich und
          entsprechend der gesetzlichen Datenschutzvorschriften behandelt.
        </p>
        <p>
          Bei Fragen zum Datenschutz wenden Sie sich bitte an:{' '}
          <a href="mailto:felix@neuland.consulting">felix@neuland.consulting</a>
        </p>
        <p>Weitere Inhalte folgen in Kürze…</p>
      </>
    ),
  },
  en: {
    impressum: (
      <>
        <p>Felix Neuland<br />
        neuland.consulting<br />
        Beethovenstraße 25<br />
        60325 Frankfurt am Main<br />
        Germany</p>

        <p>
          <strong>Contact:</strong><br />
          <a href="mailto:felix@neuland.consulting">felix@neuland.consulting</a>
        </p>

        <p className="text-sm text-gray-600 italic">
          Responsible for content according to § 55 paragraph 2 RStV: Felix Neuland
        </p>
      </>
    ),
    datenschutz: (
      <>
        <p>
          We take the protection of your personal data very seriously. Personal data is treated confidentially and in
          accordance with legal data protection regulations.
        </p>
        <p>
          For any questions regarding data protection, please contact:{' '}
          <a href="mailto:felix@neuland.consulting">felix@neuland.consulting</a>
        </p>
        <p>More details will follow soon…</p>
      </>
    ),
  },
}