'use client'

export default function PrivacyModal({ lang, onClose }: { lang: 'de' | 'en'; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center px-4">
      <div className="bg-white max-w-2xl w-full p-6 rounded-lg relative shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black text-xl font-bold"
          aria-label="Close"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-4">
          {lang === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'}
        </h2>

        <div className="space-y-4 text-gray-800 text-sm leading-relaxed">
          {lang === 'de' ? (
            <>
              <p>
                Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese Website verarbeitet personenbezogene Daten
                ausschließlich im Rahmen der geltenden gesetzlichen Datenschutzvorschriften.
              </p>
              <p>
                Beim Besuch dieser Website werden keine personenbezogenen Daten gespeichert, außer Sie treten aktiv mit uns
                in Kontakt (z. B. per E-Mail).
              </p>
              <p>
                Verantwortlich im Sinne der DSGVO ist:<br />
                Felix Neuland<br />
                Beethovenstraße 25<br />
                60325 Frankfurt am Main<br />
                <a href="mailto:felix@neuland.consulting" className="underline text-blue-600">
                  felix@neuland.consulting
                </a>
              </p>
              <p>
                Weitere Informationen folgen in Kürze.
              </p>
            </>
          ) : (
            <>
              <p>
                We take your privacy seriously. This website processes personal data only in accordance with applicable data protection laws.
              </p>
              <p>
                No personal data is stored when visiting this website, unless you actively contact us (e.g. by email).
              </p>
              <p>
                Responsible according to GDPR:<br />
                Felix Neuland<br />
                Beethovenstraße 25<br />
                60325 Frankfurt am Main<br />
                <a href="mailto:felix@neuland.consulting" className="underline text-blue-600">
                  felix@neuland.consulting
                </a>
              </p>
              <p>
                More detailed information will be provided soon.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}