export default function DatenschutzPage() {
  return (
    <main className="min-h-screen px-6 py-24 bg-white text-gray-900 font-sans max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Datenschutzerklärung</h1>

      <p className="mb-4">
        Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TMG).
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Kontaktaufnahme</h2>
      <p className="mb-4">
        Wenn Sie per E-Mail Kontakt mit uns aufnehmen, werden Ihre angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Ihre Rechte</h2>
      <p className="mb-4">
        Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch zu.
      </p>

      <p className="text-sm text-gray-600 italic mt-8">
        Bei Fragen wenden Sie sich bitte an: <a href="mailto:felix@neuland.consulting" className="underline">felix@neuland.consulting</a>
      </p>
    </main>
  )
}