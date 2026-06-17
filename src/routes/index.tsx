import { createFileRoute } from "@tanstack/react-router";
import heroSalon from "@/assets/hero-salon.jpg";
import serviceHair from "@/assets/service-hair.jpg";
import serviceMakeup from "@/assets/service-makeup.jpg";
import serviceNails from "@/assets/service-nails.jpg";
import bridalImg from "@/assets/bridal.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Salon Urody Iwona Engelman — Fryzjer & Makijaż Katowice" },
      {
        name: "description",
        content:
          "Salon Urody Iwona Engelman w Katowicach — stylizacja włosów, makijaż okolicznościowy i ślubny, manicure. Oceniany 4,7/5 w Google. Zarezerwuj wizytę: 504 268 542.",
      },
      { property: "og:title", content: "Salon Urody Iwona Engelman — Katowice" },
      {
        property: "og:description",
        content:
          "Profesjonalny salon urody w sercu Katowic. Fryzury, makijaż, paznokcie, kompleksowe stylizacje ślubne.",
      },
      { property: "og:image", content: heroSalon },
      { name: "twitter:image", content: heroSalon },
    ],
  }),
  component: Index,
});

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=Salon+Urody+Iwona+Engelman+al.+Walentego+Roździeńskiego+86+Katowice";

const services = [
  {
    title: "Stylizacja Włosów",
    desc: "Strzyżenie, koloryzacja i upięcia okolicznościowe, które podkreślą Twój charakter.",
    img: serviceHair,
    tag: "Fryzjerstwo",
  },
  {
    title: "Wizaż i Makijaż",
    desc: "Poczuj się wyjątkowo w najważniejszych chwilach dzięki naszym profesjonalnym wizażystkom.",
    img: serviceMakeup,
    tag: "Makijaż",
  },
  {
    title: "Pielęgnacja Dłoni",
    desc: "Od klasycznego manicure po zaawansowane zdobienia hybrydowe i żelowe.",
    img: serviceNails,
    tag: "Paznokcie",
  },
];

const reviews = [
  {
    text: "Przygotowanie przed ślubem na najwyższym poziomie 🥰 od paznokci po upięcie i makijaż. Polecam z całego serducha!",
    author: "Katarzyna Bojdoł",
    source: "Google",
  },
  {
    text: "Bardzo polecam! Super wykonanie zarówno makijażu jak i fryzury na ślub. Panie zdecydowanie pomogły poczuć się pewniej.",
    author: "Kinga",
    source: "Google",
  },
];

function Index() {
  return (
    <div className="bg-cream font-sans text-charcoal min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-cream/85 backdrop-blur-md border-b border-gold/15">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-5">
          <a href="#top" className="font-serif text-lg md:text-xl tracking-[0.25em] uppercase">
            Engelman
          </a>
          <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.2em] font-semibold">
            <a href="#services" className="hover:text-gold transition-colors">Usługi</a>
            <a href="#bridal" className="hover:text-gold transition-colors">Śluby</a>
            <a href="#reviews" className="hover:text-gold transition-colors">Opinie</a>
            <a href="#contact" className="hover:text-gold transition-colors">Kontakt</a>
          </div>
          <a
            href="tel:+48504268542"
            className="bg-gold text-cream px-5 py-2.5 text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-charcoal transition-colors"
          >
            Zarezerwuj
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header id="top" className="relative">
        <img
          src={heroSalon}
          alt="Eleganckie wnętrze Salonu Urody Iwona Engelman w Katowicach"
          width={1920}
          height={1080}
          className="w-full h-[88vh] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/40 to-cream/10" />
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-20">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex text-gold text-lg">★★★★★</div>
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold">
                4,7 / 5 · 128 opinii Google
              </span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] max-w-4xl mb-8">
              Twoje piękno w sercu{" "}
              <span className="italic text-gold">Katowic</span>
            </h1>
            <p className="max-w-xl text-base md:text-lg leading-relaxed text-charcoal/75 mb-10">
              Salon Urody Iwona Engelman to miejsce, gdzie profesjonalizm łączy się z pasją.
              Od mistrzowskich cięć po perfekcyjny makijaż ślubny.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+48504268542"
                className="bg-charcoal text-cream px-8 py-4 text-[11px] uppercase tracking-[0.25em] font-bold hover:bg-gold transition-colors"
              >
                Umów wizytę · 504 268 542
              </a>
              <a
                href="#services"
                className="border border-charcoal/30 text-charcoal px-8 py-4 text-[11px] uppercase tracking-[0.25em] font-bold hover:border-gold hover:text-gold transition-colors"
              >
                Zobacz ofertę
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About strip */}
      <section className="border-y border-gold/15 bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid md:grid-cols-3 gap-10 text-center">
          <div>
            <div className="font-serif text-5xl text-gold mb-3">15+</div>
            <div className="text-[11px] uppercase tracking-[0.25em] font-semibold">Lat doświadczenia</div>
          </div>
          <div className="md:border-x border-gold/15">
            <div className="font-serif text-5xl text-gold mb-3">4,7★</div>
            <div className="text-[11px] uppercase tracking-[0.25em] font-semibold">Średnia ocen w Google</div>
          </div>
          <div>
            <div className="font-serif text-5xl text-gold mb-3">∞</div>
            <div className="text-[11px] uppercase tracking-[0.25em] font-semibold">Stylizacji ślubnych</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-6 md:px-10 py-24 md:py-32 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="text-[11px] uppercase tracking-[0.3em] text-gold font-bold mb-4">Nasza Oferta</div>
          <h2 className="font-serif text-4xl md:text-6xl">Zakres usług</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          {services.map((s) => (
            <article key={s.title} className="group">
              <div className="overflow-hidden mb-6">
                <img
                  src={s.img}
                  alt={s.title}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-gold font-bold mb-2">{s.tag}</div>
              <h3 className="font-serif text-2xl md:text-3xl mb-3">{s.title}</h3>
              <p className="text-sm text-charcoal/65 leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Bridal feature */}
      <section id="bridal" className="bg-charcoal text-cream">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-0">
          <div className="relative">
            <img
              src={bridalImg}
              alt="Stylizacja ślubna — upięcie z kwiatami"
              width={1200}
              height={1500}
              loading="lazy"
              className="w-full h-full object-cover aspect-[4/5]"
            />
          </div>
          <div className="p-10 md:p-20 flex flex-col justify-center">
            <div className="text-[11px] uppercase tracking-[0.3em] text-gold font-bold mb-6">Specjalizacja</div>
            <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-tight">
              Stylizacje <span className="italic text-gold">ślubne</span>
            </h2>
            <p className="text-cream/75 text-base md:text-lg leading-relaxed mb-10 max-w-md">
              Kompleksowe przygotowania do Twojego najważniejszego dnia. Od próbnych
              fryzur i makijaży po finalny efekt, który zachwyci wszystkich gości.
            </p>
            <ul className="space-y-4 mb-12">
              {["Próbny makijaż i fryzura", "Manicure i pedicure SPA", "Pakiety dla druhen i mamy Panny Młodej"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-4 text-sm uppercase tracking-[0.15em] font-medium">
                    <span className="size-1.5 bg-gold rounded-full" />
                    {item}
                  </li>
                ),
              )}
            </ul>
            <a
              href="tel:+48504268542"
              className="inline-flex w-fit bg-gold text-charcoal px-8 py-4 text-[11px] uppercase tracking-[0.25em] font-bold hover:bg-cream transition-colors"
            >
              Zapytaj o pakiet ślubny
            </a>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-[11px] uppercase tracking-[0.3em] text-gold font-bold mb-4">Opinie Klientek</div>
          <h2 className="font-serif text-4xl md:text-6xl mb-16">Co mówią o nas</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {reviews.map((r) => (
              <figure key={r.author} className="border-t border-gold/30 pt-10 text-left">
                <div className="flex text-gold mb-6">★★★★★</div>
                <blockquote className="font-serif text-xl md:text-2xl italic leading-relaxed text-charcoal/85 mb-8">
                  „{r.text}"
                </blockquote>
                <figcaption className="text-[11px] uppercase tracking-[0.25em] font-bold">
                  {r.author} <span className="text-charcoal/40">· {r.source}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Contact + Map */}
      <section id="contact" className="flex flex-col md:flex-row border-t border-gold/15">
        <div className="md:w-1/2 p-10 md:p-20 flex flex-col justify-center bg-cream">
          <div className="text-[11px] uppercase tracking-[0.3em] text-gold font-bold mb-4">Kontakt</div>
          <h2 className="font-serif text-4xl md:text-5xl mb-10">Zapraszamy do Katowic</h2>
          <div className="space-y-8 text-base">
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-charcoal/50 font-bold mb-2">Adres</div>
              <p className="text-lg leading-relaxed">
                al. Walentego Roździeńskiego 86
                <br />
                40-203 Katowice
              </p>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-charcoal/50 font-bold mb-2">Telefon</div>
              <a href="tel:+48504268542" className="text-2xl font-serif hover:text-gold transition-colors">
                504 268 542
              </a>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-charcoal/50 font-bold mb-3">
                Godziny otwarcia
              </div>
              <dl className="grid grid-cols-2 max-w-xs gap-y-1.5 text-sm">
                <dt>Pon – Pt</dt>
                <dd className="text-right">10:00 – 19:00</dd>
                <dt>Sobota</dt>
                <dd className="text-right">Na zapisy</dd>
                <dt className="text-charcoal/40">Niedziela</dt>
                <dd className="text-right text-charcoal/40">Zamknięte</dd>
              </dl>
            </div>
            <a
              href={MAP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-block border-b border-gold text-gold py-2 uppercase tracking-[0.25em] text-[11px] font-bold hover:text-charcoal hover:border-charcoal transition-colors"
            >
              Wyznacz trasę w Mapach Google →
            </a>
          </div>
        </div>
        <a
          href={MAP_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Otwórz lokalizację salonu w Mapach Google"
          className="md:w-1/2 block relative overflow-hidden group min-h-[420px]"
        >
          <iframe
            title="Mapa lokalizacji salonu"
            src="https://www.google.com/maps?q=al.+Walentego+Ro%C5%BAdzie%C5%84skiego+86,+40-203+Katowice&output=embed"
            className="w-full h-full absolute inset-0 border-0 grayscale-[40%] group-hover:grayscale-0 transition-all duration-700"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors pointer-events-none" />
          <div className="absolute bottom-6 left-6 bg-cream text-charcoal px-5 py-3 text-[10px] uppercase tracking-[0.25em] font-bold shadow-xl pointer-events-none">
            Kliknij, by wyznaczyć trasę ↗
          </div>
        </a>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-gold/15 bg-cream">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-[0.3em] text-charcoal/50">
          <p>© {new Date().getFullYear()} Salon Urody Iwona Engelman</p>
          <p>al. W. Roździeńskiego 86 · Katowice · 504 268 542</p>
        </div>
      </footer>
    </div>
  );
}
