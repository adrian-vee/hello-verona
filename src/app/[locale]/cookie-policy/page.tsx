import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isIt = locale === "it";
  return {
    title: isIt ? "Cookie Policy – Hello Verona" : "Cookie Policy – Hello Verona",
    description: isIt
      ? "Cookie Policy di Hello Verona. Informazioni sui cookie tecnici e analitici utilizzati sul sito."
      : "Hello Verona Cookie Policy. Information about technical and analytical cookies used on the site.",
    alternates: {
      canonical: `https://helloverona.net/${locale}/cookie-policy`,
      languages: { it: "https://helloverona.net/it/cookie-policy", en: "https://helloverona.net/en/cookie-policy" },
    },
  };
}

export default function CookiePolicyPage({ params: { locale } }: { params: { locale: string } }) {
  const isIt = locale === "it";

  return (
    <>
      <section className="relative overflow-hidden py-16 bg-gradient-warm">
        <div className="container-narrow relative z-10">
          <div className="mb-6">
            <Breadcrumb locale={locale} items={[{ label: "Cookie Policy" }]} />
          </div>
          <h1 className="heading-section">Cookie Policy</h1>
          <p className="body-text mt-3">
            {isIt ? "Ultimo aggiornamento: gennaio 2026" : "Last updated: January 2026"}
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-narrow prose-brand">
          {isIt ? (
            <>
              <h2>1. Cosa sono i Cookie?</h2>
              <p>
                I cookie sono piccoli file di testo che i siti web memorizzano sul tuo dispositivo quando li visiti.
                Vengono utilizzati per far funzionare il sito, migliorare l'esperienza utente e raccogliere informazioni statistiche.
              </p>

              <h2>2. Cookie Utilizzati da Questo Sito</h2>

              <h3>Cookie Tecnici (sempre attivi)</h3>
              <p>Necessari per il funzionamento del sito. Non possono essere disattivati.</p>
              <table>
                <thead>
                  <tr><th>Nome</th><th>Finalità</th><th>Durata</th></tr>
                </thead>
                <tbody>
                  <tr><td>cookie_consent</td><td>Memorizza le preferenze cookie dell'utente</td><td>12 mesi</td></tr>
                  <tr><td>NEXT_LOCALE</td><td>Memorizza la lingua preferita dell'utente</td><td>sessione</td></tr>
                </tbody>
              </table>

              <h3>Cookie Analitici (con consenso)</h3>
              <p>
                Utilizziamo <strong>Google Analytics 4</strong> per analizzare il traffico del sito in forma anonima.
                Questi cookie vengono attivati solo dopo il consenso esplicito dell'utente.
              </p>
              <table>
                <thead>
                  <tr><th>Nome</th><th>Provider</th><th>Finalità</th><th>Durata</th></tr>
                </thead>
                <tbody>
                  <tr><td>_ga</td><td>Google Analytics</td><td>Distingue gli utenti unici</td><td>2 anni</td></tr>
                  <tr><td>_ga_*</td><td>Google Analytics</td><td>Mantiene lo stato della sessione</td><td>2 anni</td></tr>
                  <tr><td>_gid</td><td>Google Analytics</td><td>Distingue gli utenti (24h)</td><td>24 ore</td></tr>
                </tbody>
              </table>

              <h3>Cookie di Terze Parti (con consenso)</h3>
              <p>
                Il widget di prenotazione Smoobu potrebbe impostare cookie propri.
                Per maggiori informazioni, consulta la <a href="https://www.smoobu.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy di Smoobu</a>.
              </p>

              <h2>3. Come Gestire i Cookie</h2>
              <p>
                Puoi gestire le tue preferenze tramite il banner cookie presente sul sito.
                Puoi anche configurare il tuo browser per bloccare o eliminare i cookie:
              </p>
              <ul>
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
              </ul>
              <p>
                <strong>Attenzione</strong>: disattivare i cookie tecnici potrebbe compromettere il funzionamento del sito.
              </p>

              <h2>4. Trasferimenti Internazionali</h2>
              <p>
                I cookie di Google Analytics possono comportare trasferimenti di dati verso gli Stati Uniti.
                Google LLC partecipa al Data Privacy Framework UE-USA.
              </p>

              <h2>5. Contatti</h2>
              <p>
                Per domande sui cookie: <a href="mailto:booking@helloverona.net">booking@helloverona.net</a>
              </p>
            </>
          ) : (
            <>
              <h2>1. What are Cookies?</h2>
              <p>
                Cookies are small text files that websites store on your device when you visit them.
                They are used to make the site work, improve user experience, and collect statistical information.
              </p>

              <h2>2. Cookies Used by This Site</h2>

              <h3>Technical Cookies (always active)</h3>
              <p>Necessary for the site to function. Cannot be disabled.</p>
              <table>
                <thead>
                  <tr><th>Name</th><th>Purpose</th><th>Duration</th></tr>
                </thead>
                <tbody>
                  <tr><td>cookie_consent</td><td>Stores user cookie preferences</td><td>12 months</td></tr>
                  <tr><td>NEXT_LOCALE</td><td>Stores the user's preferred language</td><td>session</td></tr>
                </tbody>
              </table>

              <h3>Analytics Cookies (with consent)</h3>
              <p>
                We use <strong>Google Analytics 4</strong> to analyze site traffic anonymously.
                These cookies are only activated after the user's explicit consent.
              </p>
              <table>
                <thead>
                  <tr><th>Name</th><th>Provider</th><th>Purpose</th><th>Duration</th></tr>
                </thead>
                <tbody>
                  <tr><td>_ga</td><td>Google Analytics</td><td>Distinguishes unique users</td><td>2 years</td></tr>
                  <tr><td>_ga_*</td><td>Google Analytics</td><td>Maintains session state</td><td>2 years</td></tr>
                  <tr><td>_gid</td><td>Google Analytics</td><td>Distinguishes users (24h)</td><td>24 hours</td></tr>
                </tbody>
              </table>

              <h3>Third-Party Cookies (with consent)</h3>
              <p>
                The Smoobu booking widget may set its own cookies.
                For more information, see <a href="https://www.smoobu.com/privacy-policy" target="_blank" rel="noopener noreferrer">Smoobu's Privacy Policy</a>.
              </p>

              <h2>3. Managing Cookies</h2>
              <p>
                You can manage your preferences through the cookie banner on the site.
                You can also configure your browser to block or delete cookies:
              </p>
              <ul>
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/en-us/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
              </ul>
              <p>
                <strong>Note</strong>: disabling technical cookies may impair site functionality.
              </p>

              <h2>4. International Transfers</h2>
              <p>
                Google Analytics cookies may involve data transfers to the United States.
                Google LLC participates in the EU-US Data Privacy Framework.
              </p>

              <h2>5. Contact</h2>
              <p>
                For cookie questions: <a href="mailto:booking@helloverona.net">booking@helloverona.net</a>
              </p>
            </>
          )}
        </div>
      </section>
    </>
  );
}
