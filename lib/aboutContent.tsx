'use client'

import { ReactNode } from 'react'

const aboutContent: Record<'de' | 'en', { text1: ReactNode; text2: ReactNode; text3: ReactNode }> = {
  en: {
    text1: (
      <>
        <p>
          <strong>Neuland</strong> -- the German word for (&quot;new territory&quot;) -- is quite fitting for my work and my real surname.
        </p>
        <p>
          For 30 years, I&apos;ve mapped out what&apos;s coming next in digital tech, always driven by passion. 
          I love to see it flying and to turn it into something that helps organizations with their goals 
          and adds value to the organization and society.
        </p>
      </>
    ),
    text2: (
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Milestones</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Web 1.0:</strong> First corporate sites and extranets for Deutsche Bank, Mercedes-Benz, Lufthansa, Hugo Boss, and Escada with PixelFactory
          </li>
          <li>
            <strong>Web 2.0 / Social:</strong> Global content and community programs for Mercedes-Benz, adidas, BASF, Lufthansa — starting years before it was referred to as (&quot;Social Media&quot;) with NeulandHerzer
          </li>
          <li>
            <strong>Web 4.0:</strong> AI-enriched 3D collaboration at ROOM3D and deep tech with the TMRW Foundation
          </li>
        </ul>
      </div>
    ),
    text3: (
      <div className="mt-4">
        <p>
          What&apos;s remained constant is the <strong>balance</strong>: bold enough to be early, grounded enough to fit budgets, compliance, politics, and legacy tech.
          Most of my client relationships have lasted a decade or more because the work keeps working.
        </p>
        <p className="mt-2">
          Having successfully guided organizations through the initial two revolutions, the next groundbreaking revolution is underway:
          <strong> AI (Augmented Intelligence)</strong>! Its vision captivated me as a teenager and has fueled my passion for the digital world,
          positioning it to define the next decade of competitive advantage.
        </p>
        <p className="mt-2">
          That&apos;s why I&apos;m passionate about empowering organizations to thrive in this digital revolution!
        </p>
      </div>
    ),
  },
  de: {
    text1: (
      <>
        <p>
          Mein Nachname <strong>Neuland</strong> beschreibt sehr gut was ich all die Jahre mache.
        </p>
        <p>
          Seit 30 Jahren erkunde ich, was in der digitalen Technologie als Nächstes kommt -- immer getrieben von Leidenschaft. 
          Ich liebe es, Innovationen zum Fliegen zu bringen und daraus Lösungen zu entwickeln, die Organisationen bei ihren Zielen unterstützen 
          und sowohl dem Unternehmen als auch der Gesellschaft Mehrwert bieten.
        </p>
      </>
    ),
    text2: (
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Meilensteine</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Web 1.0:</strong> Erste Unternehmenswebsites und Extranets für Deutsche Bank, Mercedes-Benz, Lufthansa, Hugo Boss und Escada mit PixelFactory
          </li>
          <li>
            <strong>Web 2.0 / Social:</strong> Globale Content- und Community-Programme für Mercedes-Benz, adidas, BASF, Lufthansa — Jahre bevor man es (&quot;Social Media&quot;) nannte, mit NeulandHerzer
          </li>
          <li>
            <strong>Web 4.0:</strong> KI-gestützte 3D-Zusammenarbeit bei ROOM3D und Deep-Tech mit der TMRW Foundation
          </li>
        </ul>
      </div>
    ),
    text3: (
      <div className="mt-4">
        <p>
          Konstant geblieben ist das <strong>Gleichgewicht</strong>: mutig genug, früh dabei zu sein, bodenständig genug, um Budgets, Compliance, Politik und Legacy-Tech zu erfüllen.
          Viele meiner Kundenbeziehungen dauern seit über einem Jahrzehnt an - weil die Arbeit nachhaltig wirkt.
        </p>
        <p className="mt-2">
          Nachdem ich Organisationen erfolgreich durch die ersten beiden Revolutionen begleitet habe, läuft jetzt die nächste bahnbrechende Revolution:
          <strong> KI (Augmented Intelligence)</strong>! Diese Vision hat mich schon als Teenager fasziniert und treibt bis heute meine Leidenschaft für die digitale Welt an,
          die in den nächsten zehn Jahren den Wettbewerbsvorteil definieren wird.
        </p>
        <p className="mt-2">
          Deshalb liegt mir so viel daran, Organisationen in dieser digitalen Revolution zu stärken!
        </p>
      </div>
    ),
  },
}

export default aboutContent