import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isIt = locale === "it";
  return {
    title: isIt ? "Privacy Policy – Hello Verona" : "Privacy Policy – Hello Verona",
    description: isIt
      ? "Informativa sulla privacy di Hello Verona. Come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali."
      : "Hello Verona privacy policy. How we collect, use and protect your personal data.",
    alternates: {
      canonical: `https://helloverona.net/${locale}/privacy-policy`,
      languages: { it: "https://helloverona.net/it/privacy-policy", en: "https://helloverona.net/en/privacy-policy" },
    },
  };
}

export default function PrivacyPolicyPage({ params: { locale } }: { params: { locale: string } }) {
  const isIt = locale === "it";

  return (
    <>
      <section className="relative overflow-hidden py-16 bg-gradient-warm">
        <div className="container-narrow relative z-10">
          <div className="mb-6">
            <Breadcrumb locale={locale} items={[{ label: isIt ? "Privacy Policy" : "Privacy Policy" }]} />
          </div>
          <h1 className="heading-section">{isIt ? "Privacy Policy" : "Privacy Policy"}</h1>
          <p className="body-text mt-3">
            {isIt ? "Ultimo aggiornamento: gennaio 2026" : "Last updated: January 2026"}
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-narrow prose-brand">
          {isIt ? (
            <>
              <h2>1. Titolare del Trattamento</h2>
              <p>
                Il Titolare del trattamento dei dati personali è:<br />
                <strong>Hello Verona</strong><br />
                Via Campagnol di Tombetta 65<br />
                37134 Verona (VR), Italia<br />
                Email: <a href="mailto:booking@helloverona.net">booking@helloverona.net</a><br />
                Telefono: +39 393 627 8663
              </p>

              <h2>2. Dati Raccolti</h2>
              <p>Raccogliamo le seguenti categorie di dati personali:</p>
              <ul>
                <li><strong>Dati di contatto</strong>: nome, cognome, indirizzo email, numero di telefono</li>
                <li><strong>Dati di prenotazione</strong>: date di check-in/check-out, numero di ospiti, richieste speciali</li>
                <li><strong>Dati di navigazione</strong>: indirizzo IP, tipo di browser, pagine visitate (tramite cookie)</li>
              </ul>

              <h2>3. Finalità del Trattamento</h2>
              <p>I dati personali sono trattati per le seguenti finalità:</p>
              <ul>
                <li>Gestione delle richieste di prenotazione e comunicazioni (base giuridica: esecuzione di un contratto)</li>
                <li>Adempimento di obblighi legali, incluso il Registro Alloggiati (base giuridica: obbligo legale)</li>
                <li>Analisi statistica del traffico del sito web in forma anonima (base giuridica: legittimo interesse)</li>
                <li>Invio di comunicazioni promozionali previo consenso espresso (base giuridica: consenso)</li>
              </ul>

              <h2>4. Conservazione dei Dati</h2>
              <p>
                I dati relativi alle prenotazioni sono conservati per 10 anni in adempimento degli obblighi fiscali e contabili.
                I dati di contatto per comunicazioni commerciali sono conservati fino alla revoca del consenso.
                I log di navigazione sono conservati per massimo 12 mesi.
              </p>

              <h2>5. Terze Parti</h2>
              <p>I dati possono essere condivisi con:</p>
              <ul>
                <li><strong>Smoobu GmbH</strong> (gestione prenotazioni) – <a href="https://www.smoobu.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy Smoobu</a></li>
                <li><strong>Google LLC</strong> (Google Analytics, statistiche di navigazione) – <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy Google</a></li>
                <li><strong>Autorità di Pubblica Sicurezza</strong> (obbligo di legge per il Registro Alloggiati)</li>
              </ul>
              <p>I dati non vengono venduti a terzi né ceduti per finalità di marketing esterno.</p>

              <h2>6. Diritti dell'Interessato (GDPR Artt. 15–22)</h2>
              <p>Hai il diritto di:</p>
              <ul>
                <li><strong>Accesso</strong>: ottenere conferma e copia dei dati trattati</li>
                <li><strong>Rettifica</strong>: correggere dati inesatti o incompleti</li>
                <li><strong>Cancellazione</strong>: richiedere la cancellazione ("diritto all'oblio")</li>
                <li><strong>Limitazione</strong>: limitare il trattamento in certi casi</li>
                <li><strong>Portabilità</strong>: ricevere i dati in formato strutturato</li>
                <li><strong>Opposizione</strong>: opporsi al trattamento per marketing diretto</li>
                <li><strong>Revoca del consenso</strong>: ritirare il consenso in qualsiasi momento</li>
              </ul>
              <p>
                Per esercitare i tuoi diritti, scrivi a: <a href="mailto:booking@helloverona.net">booking@helloverona.net</a><br />
                Hai anche il diritto di proporre reclamo al Garante per la Protezione dei Dati Personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">www.garanteprivacy.it</a>).
              </p>

              <h2>7. Trasferimenti Internazionali</h2>
              <p>
                Alcuni provider di servizi (es. Google) potrebbero trasferire dati al di fuori dello Spazio Economico Europeo.
                Tali trasferimenti avvengono nel rispetto delle garanzie previste dal GDPR (decisioni di adeguatezza, clausole contrattuali standard).
              </p>

              <h2>8. Cookie</h2>
              <p>
                Per informazioni sui cookie utilizzati, consulta la nostra <a href={`/${locale}/cookie-policy`}>Cookie Policy</a>.
              </p>

              <h2>9. Modifiche</h2>
              <p>
                Questa informativa può essere aggiornata. La versione più recente è sempre disponibile su questa pagina.
                Ti comunicheremo eventuali modifiche significative via email.
              </p>
            </>
          ) : (
            <>
              <h2>1. Data Controller</h2>
              <p>
                The data controller for personal data is:<br />
                <strong>Hello Verona</strong><br />
                Via Campagnol di Tombetta 65<br />
                37134 Verona (VR), Italy<br />
                Email: <a href="mailto:booking@helloverona.net">booking@helloverona.net</a><br />
                Phone: +39 393 627 8663
              </p>

              <h2>2. Data Collected</h2>
              <p>We collect the following categories of personal data:</p>
              <ul>
                <li><strong>Contact data</strong>: first name, last name, email address, phone number</li>
                <li><strong>Booking data</strong>: check-in/check-out dates, number of guests, special requests</li>
                <li><strong>Navigation data</strong>: IP address, browser type, pages visited (via cookies)</li>
              </ul>

              <h2>3. Purposes of Processing</h2>
              <p>Personal data is processed for the following purposes:</p>
              <ul>
                <li>Managing booking requests and communications (legal basis: contract performance)</li>
                <li>Fulfilling legal obligations, including the Guest Register (legal basis: legal obligation)</li>
                <li>Anonymous statistical analysis of website traffic (legal basis: legitimate interest)</li>
                <li>Sending promotional communications with prior explicit consent (legal basis: consent)</li>
              </ul>

              <h2>4. Data Retention</h2>
              <p>
                Booking data is retained for 10 years to fulfill tax and accounting obligations.
                Contact data for commercial communications is retained until consent is withdrawn.
                Navigation logs are retained for a maximum of 12 months.
              </p>

              <h2>5. Third Parties</h2>
              <p>Data may be shared with:</p>
              <ul>
                <li><strong>Smoobu GmbH</strong> (booking management) – <a href="https://www.smoobu.com/privacy-policy" target="_blank" rel="noopener noreferrer">Smoobu Privacy Policy</a></li>
                <li><strong>Google LLC</strong> (Google Analytics, navigation statistics) – <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
                <li><strong>Public Security Authorities</strong> (legal obligation for the Guest Register)</li>
              </ul>
              <p>Data is not sold to third parties or shared for external marketing purposes.</p>

              <h2>6. Your Rights (GDPR Arts. 15–22)</h2>
              <p>You have the right to:</p>
              <ul>
                <li><strong>Access</strong>: obtain confirmation and a copy of data being processed</li>
                <li><strong>Rectification</strong>: correct inaccurate or incomplete data</li>
                <li><strong>Erasure</strong>: request deletion ("right to be forgotten")</li>
                <li><strong>Restriction</strong>: limit processing in certain cases</li>
                <li><strong>Portability</strong>: receive data in a structured format</li>
                <li><strong>Objection</strong>: object to processing for direct marketing</li>
                <li><strong>Withdrawal of consent</strong>: withdraw consent at any time</li>
              </ul>
              <p>
                To exercise your rights, write to: <a href="mailto:booking@helloverona.net">booking@helloverona.net</a><br />
                You also have the right to lodge a complaint with the Italian Data Protection Authority (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">www.garanteprivacy.it</a>).
              </p>

              <h2>7. International Transfers</h2>
              <p>
                Some service providers (e.g. Google) may transfer data outside the European Economic Area.
                Such transfers occur in compliance with GDPR safeguards (adequacy decisions, standard contractual clauses).
              </p>

              <h2>8. Cookies</h2>
              <p>
                For information about cookies used, see our <a href={`/${locale}/cookie-policy`}>Cookie Policy</a>.
              </p>

              <h2>9. Changes</h2>
              <p>
                This policy may be updated. The most recent version is always available on this page.
                We will notify you of any significant changes by email.
              </p>
            </>
          )}
        </div>
      </section>
    </>
  );
}
