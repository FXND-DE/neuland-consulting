export default function ImpressumPage() {
  return (
    <main className="min-h-screen px-6 py-24 bg-white text-gray-900 font-sans max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Impressum</h1>
      <p className="mb-4">Angaben gemäß § 5 TMG:</p>
      <p className="mb-4">
        Felix Neuland<br />
        neuland.consulting<br />
        Beethovenstraße 25<br />
        60325 Frankfurt am Main<br />
        Deutschland
      </p>
      <p className="mb-4">
        <strong>Kontakt:</strong><br />
        E-Mail: <a href="mailto:felix@neuland.consulting" className="underline">felix@neuland.consulting</a>
      </p>
      <p className="text-sm text-gray-600 italic mt-8">
        Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: Felix Neuland
      </p>
    </main>
  )
}