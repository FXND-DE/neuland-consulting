'use client'

export default function LegalNoticeModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white max-w-2xl p-8 rounded shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-black text-2xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Impressum</h2>
        <p>
          Felix Neuland<br />
          neuland.consulting<br />
          Beethovenstraße 25<br />
          60325 Frankfurt am Main
        </p>
        <p className="mt-4">
          <strong>Kontakt:</strong><br />
          <a href="mailto:felix@neuland.consulting" className="underline">
            felix@neuland.consulting
          </a>
        </p>
        <p className="text-sm text-gray-600 italic mt-6">
          Verantwortlich für den Inhalt gemäß § 55 Abs. 2 RStV: Felix Neuland
        </p>
      </div>
    </div>
  )
}