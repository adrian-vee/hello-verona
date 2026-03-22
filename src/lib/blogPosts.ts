export interface BlogPost {
  slug: string;
  title_it: string;
  title_en: string;
  excerpt_it: string;
  excerpt_en: string;
  content_it: string;
  content_en: string;
  date: string;
  category_it: string;
  category_en: string;
  readTime: number;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "migliori-ristoranti-vicino-fiera-verona",
    title_it: "I 10 Migliori Ristoranti Vicino alla Fiera di Verona",
    title_en: "The 10 Best Restaurants Near Verona Trade Fair",
    excerpt_it: "Partecipate a Vinitaly, Motor Bike Expo o Fieracavalli? Ecco dove mangiare bene vicino alla Fiera di Verona: dai ristoranti tipici alle osterie, tutti a pochi minuti dall'ingresso fieristico.",
    excerpt_en: "Attending Vinitaly, Motor Bike Expo or Fieracavalli? Here's where to eat well near Verona Trade Fair: from typical restaurants to osterias, all just minutes from the fair entrance.",
    date: "2026-03-15",
    category_it: "Gastronomia",
    category_en: "Food & Drink",
    readTime: 5,
    image: "/images/blog/ristoranti-verona.jpg",
    content_it: `
# I 10 Migliori Ristoranti Vicino alla Fiera di Verona

Siete in città per un evento alla **Fiera di Verona (Veronafiere)** e cercate dove mangiare? Che si tratti di Vinitaly, Motor Bike Expo, Fieracavalli o Sun Festival, dopo una giornata di lavoro o di visite fieristiche, meritate un ottimo pasto veronese.

**Hello Verona** si trova a soli **1 km dalla Fiera**, quindi siamo i migliori per consigliarvi dove andare!

## 1. Osteria al Duca – Centro Storico
La classica osteria veronese nel cuore del centro storico. Il **risotto all'Amarone** è imperdibile. Ambiente rustico e accogliente, prezzi onesti.

## 2. Trattoria al Pompiere – Via Dietro Sant'Anastasia
Storica trattoria attiva dal 1910. Famosa per le **tagliatelle al ragù di cavallo** e il carrello dei bolliti. Prenota in anticipo!

## 3. Ristorante Arche – Vicino all'Arena
Vicino all'Arena, uno dei ristoranti più antichi di Verona (dal 1879). Cucina di pesce e carne di altissima qualità.

## 4. Pizzeria Scaligero – Borgo Roma
A 10 minuti dalla Fiera, ottime pizze napoletane. Ideale per una cena informale dopo la giornata fieristica.

## 5. Brasserie Les Marolles
Cucina belga e italiana, ottima selezione di birre artigianali. Ambiente moderno e gioviale.

## 6. Trattoria Tripoli – Zona Fiera
A pochi passi dall'ingresso fieristico, cucina casalinga veronese. Ottimi i **bigoli in salsa** e la **pastissada de caval**.

## 7. Ristorante La Pigna – Centro
Nel centro storico, cucina gourmet con ingredienti locali. Perfetto per una cena d'affari.

## 8. Il Botegon (Cantina Zuccheri)
Storica enoteca con cucina nel centro storico. Perfetto per degustare vini veronesi con cicchetti e piatti tipici.

## 9. Osteria del Bugiardo
Nel Palazzo della Ragione in Piazza dei Signori. Cucina tipica veronese, ottima carta dei vini locali.

## 10. Ristorante Maffei – Piazza delle Erbe
Uno dei ristoranti più scenografici di Verona, in Piazza delle Erbe. Cucina creativa con ingredienti stagionali.

---

## Dove Alloggiare Vicino alla Fiera di Verona?

Per la prossima edizione della fiera, considera **Hello Verona**: il nostro appartamento è a soli 1 km dalla Fiera di Verona, con parcheggio incluso, cucina attrezzata e tutto il comfort di casa.

[Contattaci su WhatsApp](https://wa.me/393936278663) al +39 393 627 8663 oppure prenota direttamente dal nostro sito.
    `,
    content_en: `
# The 10 Best Restaurants Near Verona Trade Fair

Are you in town for an event at **Verona Trade Fair (Veronafiere)** and looking for where to eat? Whether it's Vinitaly, Motor Bike Expo, Fieracavalli or Sun Festival, after a day of work or trade fair visits, you deserve an excellent Veronese meal.

**Hello Verona** is located just **1 km from the Trade Fair**, so we're the best people to advise you on where to go!

## 1. Osteria al Duca – Historic Center
The classic Veronese osteria in the heart of the historic center. The **Amarone risotto** is unmissable. Rustic and welcoming atmosphere, fair prices.

## 2. Trattoria al Pompiere – Via Dietro Sant'Anastasia
Historic trattoria active since 1910. Famous for **tagliatelle with horse meat ragù** and the boiled meat trolley. Book in advance!

## 3. Ristorante Arche – Near the Arena
Near the Arena, one of Verona's oldest restaurants (since 1879). High-quality fish and meat cuisine.

## 4. Pizzeria Scaligero – Borgo Roma
10 minutes from the Trade Fair, excellent Neapolitan pizzas. Ideal for an informal dinner after a day at the fair.

## 5. Brasserie Les Marolles
Belgian and Italian cuisine, excellent craft beer selection. Modern and jovial atmosphere.

## 6. Trattoria Tripoli – Trade Fair Area
A few steps from the fair entrance, home-style Veronese cuisine. Excellent **bigoli in salsa** and **pastissada de caval**.

## 7. Ristorante La Pigna – Center
In the historic center, gourmet cuisine with local ingredients. Perfect for a business dinner.

## 8. Il Botegon (Cantina Zuccheri)
Historic wine bar with kitchen in the historic center. Perfect for tasting Veronese wines with cicchetti and typical dishes.

## 9. Osteria del Bugiardo
In Palazzo della Ragione in Piazza dei Signori. Typical Veronese cuisine, excellent local wine list.

## 10. Ristorante Maffei – Piazza delle Erbe
One of Verona's most scenic restaurants, in Piazza delle Erbe. Creative cuisine with seasonal ingredients.

---

## Where to Stay Near Verona Trade Fair?

For the next trade fair edition, consider **Hello Verona**: our apartment is just 1 km from Verona Trade Fair, with free parking, equipped kitchen and all home comforts.

[Contact us on WhatsApp](https://wa.me/393936278663) at +39 393 627 8663 or book directly on our website.
    `,
  },
  {
    slug: "come-arrivare-verona-aeroporto",
    title_it: "Come Arrivare a Verona dall'Aeroporto: Guida Completa 2026",
    title_en: "How to Get to Verona from the Airport: Complete Guide 2026",
    excerpt_it: "Appena atterrato a Verona Villafranca (VRN) e non sai come raggiungere il centro o il tuo alloggio? Ecco tutte le opzioni: taxi, bus, auto a noleggio, con prezzi e tempi aggiornati.",
    excerpt_en: "Just landed at Verona Villafranca (VRN) and don't know how to reach the center or your accommodation? Here are all the options: taxi, bus, car rental, with updated prices and times.",
    date: "2026-02-20",
    category_it: "Trasporti",
    category_en: "Transport",
    readTime: 6,
    image: "/images/blog/aeroporto-verona.png",
    content_it: `
# Come Arrivare a Verona dall'Aeroporto: Guida Completa

L'**Aeroporto Valerio Catullo di Verona Villafranca (VRN)** si trova a circa 12 km dal centro città. In questa guida trovi tutte le opzioni per raggiungere Verona dall'aeroporto, con prezzi indicativi e tempi di percorrenza.

## Opzione 1: Taxi dall'Aeroporto

Il modo più comodo per chi ha bagagli pesanti o arriva tardi di notte.

- **Tempo**: circa 20-25 minuti
- **Costo**: €25-35 per una corsa verso il centro
- **Fino a Hello Verona**: circa €20-25 (siamo a soli 12 km)
- **Come prenotare**: trovi i taxi all'uscita arrivi, oppure prenota tramite l'app iCabbi

### Consiglio
Chiedi sempre la tariffa fissa (taxi a tariffa fissa dall'aeroporto) prima di partire.

## Opzione 2: Autobus Linea 199

Il modo più economico per raggiungere il centro.

- **Linea**: 199 (Aeroporto → Stazione Porta Nuova)
- **Tempo**: circa 25-30 minuti
- **Costo**: ~€6 (biglietto)
- **Frequenza**: ogni 20-30 minuti
- **Da dove parte**: fermata davanti all'uscita arrivi

### Dalla Stazione a Hello Verona
Dalla stazione Porta Nuova, puoi prendere un taxi (~10 min, €8-10) o l'autobus AMT.

## Opzione 3: Auto a Noleggio

Ideale per chi vuole visitare il Lago di Garda o la Valpolicella.

- Tutti i principali noleggiatori sono in aeroporto (Hertz, Avis, Budget, Europcar)
- **Hello Verona** ha il parcheggio disponibile
- L'autostrada A4 è a pochi km

## Opzione 4: Transfer Privato

Per gruppi o arrivi notturni, il transfer privato è la soluzione ideale.

- Prenota in anticipo online
- Costo: €30-50 per un transfer privato verso Hello Verona
- Contattaci e ti mettiamo in contatto con i nostri partner

---

## Informazioni Aeroporto Verona VRN

- **Indirizzo**: Via del Progresso 9, Caselle di Sommacampagna
- **Terminal**: 1 terminal con tutte le compagnie
- **Navetta interna**: non necessaria
- **Negozi e food**: all'interno del terminal

---

## Dove Alloggiare Vicino all'Aeroporto di Verona?

**Hello Verona** è a soli 12 km dall'aeroporto e si raggiunge in meno di 20 minuti in taxi. Con il parcheggio disponibile e il giardino privato, è la scelta ideale per esplorare Verona.

[Contattaci su WhatsApp](https://wa.me/393936278663) per qualsiasi informazione sul soggiorno.
    `,
    content_en: `
# How to Get to Verona from the Airport: Complete Guide

**Verona Villafranca Valerio Catullo Airport (VRN)** is located about 12 km from the city center. In this guide you'll find all the options to reach Verona from the airport, with indicative prices and travel times.

## Option 1: Taxi from the Airport

The most convenient way for those with heavy luggage or arriving late at night.

- **Time**: about 20-25 minutes
- **Cost**: €25-35 for a ride to the center
- **To Hello Verona**: about €20-25 (we're only 12 km away)
- **How to book**: find taxis at the arrivals exit, or book via the iCabbi app

### Tip
Always ask for the fixed rate (fixed-rate taxi from the airport) before departing.

## Option 2: Bus Line 199

The most economical way to reach the center.

- **Line**: 199 (Airport → Porta Nuova Station)
- **Time**: about 25-30 minutes
- **Cost**: ~€6 (ticket)
- **Frequency**: every 20-30 minutes
- **Where it departs**: stop in front of the arrivals exit

### From the Station to Hello Verona
From Porta Nuova station, you can take a taxi (~10 min, €8-10) or the AMT bus.

## Option 3: Car Rental

Ideal for those who want to visit Lake Garda or Valpolicella.

- All major rental companies are at the airport (Hertz, Avis, Budget, Europcar)
- **Hello Verona** has parking available
- The A4 motorway is just a few km away

## Option 4: Private Transfer

For groups or late arrivals, private transfer is the ideal solution.

- Book in advance online
- Cost: €30-50 for a private transfer to Hello Verona
- Contact us and we'll put you in touch with our partners

---

## Verona VRN Airport Information

- **Address**: Via del Progresso 9, Caselle di Sommacampagna
- **Terminal**: 1 terminal with all airlines
- **Internal shuttle**: not necessary
- **Shops and food**: inside the terminal

---

## Where to Stay Near Verona Airport?

**Hello Verona** is just 12 km from the airport and is reachable in less than 20 minutes by taxi. With parking available and a private garden, it's the ideal choice for exploring Verona.

[Contact us on WhatsApp](https://wa.me/393936278663) for any information about your stay.
    `,
  },
  {
    slug: "weekend-romantico-verona",
    title_it: "Weekend Romantico a Verona: Itinerario di 2 Giorni Perfetto",
    title_en: "Romantic Weekend in Verona: Perfect 2-Day Itinerary",
    excerpt_it: "Verona, la città di Romeo e Giulietta, è la meta perfetta per un weekend romantico. Ecco il nostro itinerario di 2 giorni con le tappe imperdibili, i migliori ristoranti e i momenti più suggestivi.",
    excerpt_en: "Verona, the city of Romeo and Juliet, is the perfect destination for a romantic weekend. Here is our 2-day itinerary with unmissable stops, best restaurants and most evocative moments.",
    date: "2026-01-10",
    category_it: "Itinerari",
    category_en: "Itineraries",
    readTime: 7,
    image: "/images/blog/verona-romantica.jpg",
    content_it: `
# Weekend Romantico a Verona: Itinerario di 2 Giorni

Verona è sinonimo di romanticismo. La città di **Romeo e Giulietta** incanta con i suoi vicoli in pietra rosa, l'Arena romana, i ponti sull'Adige e i vini dell'Amarone. Ecco come organizzare il weekend perfetto.

## Giorno 1: Il Cuore Romantico di Verona

### Mattina
**9:00** – Colazione in un caffè in Piazza Bra, con vista sull'Arena.
**10:00** – Visita all'**Arena di Verona**: l'anfiteatro romano del I sec. d.C., uno dei meglio conservati al mondo. Se c'è la stagione lirica (giugno-agosto), prenotate uno spettacolo serale!
**11:30** – Passeggiata per **Via Mazzini**, la via dello shopping elegante di Verona.

### Pomeriggio
**13:00** – Pranzo in una trattoria tipica: provate i **bigoli in salsa** o il **risotto all'Amarone**.
**15:00** – **Casa di Giulietta** in Via Cappello: il leggendario balcone, il cortile con la statua di Giulietta, il muro dei messaggi d'amore.
**16:30** – **Piazza delle Erbe**, il cuore medievale di Verona con la Fontana di Madonna Verona e i palazzi dipinti.

### Sera
**19:00** – Aperitivo in **Osteria Sottoriva** sotto le arcate storiche.
**20:30** – Cena romantica al **Ristorante Maffei** in Piazza delle Erbe.
**22:00** – Passeggiata notturna in centro: Verona di notte è magica!

## Giorno 2: Arte, Vino e Panorami

### Mattina
**9:30** – **Castelvecchio e Ponte Scaligero**: il castello medievale sul fiume Adige e il suo museo d'arte.
**11:00** – Salita sulla **Torre dei Lamberti** per la vista panoramica su tutta Verona.

### Pomeriggio
**13:00** – Pranzo con degustazione di **vini Valpolicella** in un'enoteca locale.
**15:00** – **Giardino Giusti**: uno dei più bei giardini rinascimentali d'Italia, perfetto per una passeggiata romantica.
**16:30** – Gita a Castel San Pietro per il tramonto: la vista sulla città è indimenticabile!

### Sera
**19:30** – Aperitivo con vista sul centro.
**21:00** – Se è la stagione giusta, **opera all'Arena di Verona**: l'esperienza più romantica possibile!

---

## Dove Dormire per un Weekend Romantico a Verona

**Hello Verona** è l'alloggio ideale per una coppia in cerca di romanticismo. Con 2 camere matrimoniali e giardino privato, è a soli 3 km da tutti i punti dell'itinerario.

[Contattaci su WhatsApp](https://wa.me/393936278663) per informazioni e disponibilità.
    `,
    content_en: `
# Romantic Weekend in Verona: Perfect 2-Day Itinerary

Verona is synonymous with romance. The city of **Romeo and Juliet** enchants with its pink stone alleys, the Roman Arena, the bridges over the Adige and the Amarone wines. Here's how to organize the perfect weekend.

## Day 1: The Romantic Heart of Verona

### Morning
**9:00** – Breakfast at a café in Piazza Bra, with a view of the Arena.
**10:00** – Visit to the **Verona Arena**: the 1st century AD Roman amphitheater, one of the best preserved in the world. If it's the opera season (June-August), book an evening show!
**11:30** – Walk along **Via Mazzini**, Verona's elegant shopping street.

### Afternoon
**13:00** – Lunch at a typical trattoria: try **bigoli in salsa** or **Amarone risotto**.
**15:00** – **Juliet's House** in Via Cappello: the legendary balcony, the courtyard with Juliet's statue, the wall of love messages.
**16:30** – **Piazza delle Erbe**, the medieval heart of Verona with the Madonna Verona Fountain and painted palaces.

### Evening
**19:00** – Aperitivo at **Osteria Sottoriva** under the historic arches.
**20:30** – Romantic dinner at **Ristorante Maffei** in Piazza delle Erbe.
**22:00** – Evening walk in the center: Verona by night is magical!

## Day 2: Art, Wine and Panoramas

### Morning
**9:30** – **Castelvecchio and Ponte Scaligero**: the medieval castle on the Adige river and its art museum.
**11:00** – Climb **Torre dei Lamberti** for a panoramic view of all of Verona.

### Afternoon
**13:00** – Lunch with **Valpolicella wine** tasting at a local wine bar.
**15:00** – **Giardino Giusti**: one of Italy's most beautiful Renaissance gardens, perfect for a romantic walk.
**16:30** – Trip to Castel San Pietro for sunset: the view of the city is unforgettable!

### Evening
**19:30** – Aperitivo with views of the center.
**21:00** – If it's the right season, **opera at the Arena di Verona**: the most romantic experience possible!

---

## Where to Stay for a Romantic Weekend in Verona

**Hello Verona** is the ideal accommodation for a couple looking for romance. With 2 double bedrooms and a private garden, it's just 3 km from all the points of the itinerary.

[Contact us on WhatsApp](https://wa.me/393936278663) for information and availability.
    `,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
