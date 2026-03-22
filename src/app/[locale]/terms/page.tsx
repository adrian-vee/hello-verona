import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isIt = locale === "it";
  return {
    title: isIt ? "Termini di Servizio – Hello Verona" : "Terms of Service – Hello Verona",
    description: isIt
      ? "Termini e condizioni di Hello Verona. Regole di prenotazione, pagamento, cancellazione e responsabilità."
      : "Hello Verona terms and conditions. Booking, payment, cancellation and liability rules.",
    alternates: {
      canonical: `https://helloverona.net/${locale}/terms`,
      languages: { it: "https://helloverona.net/it/terms", en: "https://helloverona.net/en/terms" },
    },
  };
}

export default function TermsPage({ params: { locale } }: { params: { locale: string } }) {
  const isIt = locale === "it";

  return (
    <>
      <section className="relative overflow-hidden py-16 bg-gradient-warm">
        <div className="container-narrow relative z-10">
          <div className="mb-6">
            <Breadcrumb locale={locale} items={[{ label: isIt ? "Termini di Servizio" : "Terms of Service" }]} />
          </div>
          <h1 className="heading-section">{isIt ? "Termini di Servizio" : "Terms of Service"}</h1>
          <p className="body-text mt-3">
            {isIt ? "Ultimo aggiornamento: gennaio 2026" : "Last updated: January 2026"}
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-narrow prose-brand">
          {isIt ? (
            <>
              <h2>1. Gestore della Struttura</h2>
              <p>
                <strong>Hello Verona</strong><br />
                Via Campagnol di Tombetta 65, 37134 Verona (VR), Italia<br />
                Email: <a href="mailto:booking@helloverona.net">booking@helloverona.net</a><br />
                Telefono: +39 393 627 8663<br />
                CIN: IT023091C2AQLUZ3EW
              </p>

              <h2>2. Oggetto</h2>
              <p>
                I presenti termini regolano l'utilizzo del sito web helloverona.net e la prenotazione dell'appartamento turistico
                sito in Via Campagnol di Tombetta 65, 37134 Verona.
              </p>

              <h2>3. Prenotazione e Conferma</h2>
              <p>
                La prenotazione si considera confermata solo dopo ricezione della conferma scritta da parte di Hello Verona
                (via email o WhatsApp) e, ove richiesto, del pagamento dell'acconto.
                Le tariffe sono indicate in euro (€) e comprensive di tutte le tasse applicabili.
              </p>

              <h2>4. Check-in e Check-out</h2>
              <ul>
                <li><strong>Check-in</strong>: dalle 15:00 alle 21:00 (orari diversi su accordo)</li>
                <li><strong>Check-out</strong>: entro le 11:00</li>
                <li>Check-in tardivi (dopo le 21:00): possibile con istruzioni di accesso autonomo preventivamente concordate</li>
              </ul>

              <h2>5. Politica di Cancellazione</h2>
              <p>
                Le condizioni di cancellazione vengono comunicate al momento della prenotazione e variano in base alla stagione
                e alla tariffa scelta. In generale:
              </p>
              <ul>
                <li>Cancellazione gratuita se effettuata entro i termini indicati in fase di prenotazione</li>
                <li>Cancellazione tardiva: trattenuta dell'acconto o della prima notte</li>
                <li>No-show: addebito dell'intero importo del soggiorno</li>
              </ul>

              <h2>6. Obblighi dell'Ospite</h2>
              <ul>
                <li>Rispettare il regolamento della struttura comunicato al check-in</li>
                <li>Mantenere l'appartamento in buono stato</li>
                <li>Non fumare all'interno dell'appartamento</li>
                <li>Rispettare il silenzio nelle ore notturne (22:00–8:00)</li>
                <li>Comunicare il numero esatto di ospiti al momento della prenotazione</li>
                <li>Fornire documenti di identità validi per il Registro Alloggiati (obbligo di legge)</li>
              </ul>

              <h2>7. Responsabilità</h2>
              <p>
                Hello Verona non è responsabile per danni, perdite o furti di oggetti personali degli ospiti durante il soggiorno.
                Gli ospiti sono responsabili di eventuali danni causati all'appartamento o agli arredi durante il loro soggiorno.
              </p>

              <h2>8. Animali Domestici</h2>
              <p>
                Gli animali di piccola taglia sono ammessi previo accordo esplicito al momento della prenotazione.
                È richiesto un supplemento di pulizia.
              </p>

              <h2>9. Privacy</h2>
              <p>
                Il trattamento dei dati personali degli ospiti è disciplinato dalla nostra{" "}
                <a href={`/${locale}/privacy-policy`}>Privacy Policy</a>.
              </p>

              <h2>10. Legge Applicabile</h2>
              <p>
                I presenti termini sono regolati dalla legge italiana. Per qualsiasi controversia è competente il Foro di Verona.
              </p>

              <h2>11. Contatti</h2>
              <p>
                Per qualsiasi domanda: <a href="mailto:booking@helloverona.net">booking@helloverona.net</a> o WhatsApp +39 393 627 8663.
              </p>
            </>
          ) : (
            <>
              <h2>1. Property Manager</h2>
              <p>
                <strong>Hello Verona</strong><br />
                Via Campagnol di Tombetta 65, 37134 Verona (VR), Italy<br />
                Email: <a href="mailto:booking@helloverona.net">booking@helloverona.net</a><br />
                Phone: +39 393 627 8663<br />
                CIN: IT023091C2AQLUZ3EW
              </p>

              <h2>2. Subject Matter</h2>
              <p>
                These terms govern the use of the website helloverona.net and the booking of the tourist apartment
                located at Via Campagnol di Tombetta 65, 37134 Verona.
              </p>

              <h2>3. Booking and Confirmation</h2>
              <p>
                A booking is considered confirmed only after receipt of written confirmation from Hello Verona
                (via email or WhatsApp) and, where required, payment of a deposit.
                Rates are shown in euros (€) and include all applicable taxes.
              </p>

              <h2>4. Check-in and Check-out</h2>
              <ul>
                <li><strong>Check-in</strong>: from 3:00 PM to 9:00 PM (other times by arrangement)</li>
                <li><strong>Check-out</strong>: by 11:00 AM</li>
                <li>Late check-in (after 9:00 PM): possible with self-access instructions agreed in advance</li>
              </ul>

              <h2>5. Cancellation Policy</h2>
              <p>
                Cancellation conditions are communicated at the time of booking and vary by season and selected rate. Generally:
              </p>
              <ul>
                <li>Free cancellation if made within the terms stated at booking</li>
                <li>Late cancellation: forfeiture of deposit or first night</li>
                <li>No-show: full stay amount charged</li>
              </ul>

              <h2>6. Guest Obligations</h2>
              <ul>
                <li>Follow the house rules communicated at check-in</li>
                <li>Keep the apartment in good condition</li>
                <li>No smoking inside the apartment</li>
                <li>Respect quiet hours (10:00 PM–8:00 AM)</li>
                <li>Communicate the exact number of guests at booking</li>
                <li>Provide valid identity documents for the Guest Register (legal obligation)</li>
              </ul>

              <h2>7. Liability</h2>
              <p>
                Hello Verona is not liable for damage, loss or theft of guests' personal belongings during their stay.
                Guests are responsible for any damage caused to the apartment or furnishings during their stay.
              </p>

              <h2>8. Pets</h2>
              <p>
                Small pets are accepted subject to explicit agreement at the time of booking.
                A cleaning supplement is required.
              </p>

              <h2>9. Privacy</h2>
              <p>
                The processing of guests' personal data is governed by our{" "}
                <a href={`/${locale}/privacy-policy`}>Privacy Policy</a>.
              </p>

              <h2>10. Governing Law</h2>
              <p>
                These terms are governed by Italian law. Any dispute shall be subject to the jurisdiction of the Court of Verona.
              </p>

              <h2>11. Contact</h2>
              <p>
                For any questions: <a href="mailto:booking@helloverona.net">booking@helloverona.net</a> or WhatsApp +39 393 627 8663.
              </p>
            </>
          )}
        </div>
      </section>
    </>
  );
}
