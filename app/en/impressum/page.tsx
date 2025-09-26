export default function LegalNoticePage() {
  return (
    <main className="min-h-screen px-6 py-24 bg-white text-gray-900 font-sans max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Legal Notice</h1>
      <p className="mb-4">According to § 5 German TMG:</p>
      <p className="mb-4">
        Felix Neuland<br />
        neuland.consulting<br />
        Beethovenstraße 25<br />
        60325 Frankfurt am Main<br />
        Germany
      </p>
      <p className="mb-4">
        <strong>Contact:</strong><br />
        Email: <a href="mailto:felix@neuland.consulting" className="underline">felix@neuland.consulting</a>
      </p>
      <p className="text-sm text-gray-600 italic mt-8">
        Responsible for content according to § 55 paragraph 2 RStV: Felix Neuland
      </p>
    </main>
  )
}