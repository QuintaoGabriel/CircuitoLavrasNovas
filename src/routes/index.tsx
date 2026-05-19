import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Star } from "@/components/Star";
import logoCream from "@/assets/logo-cream.jpg";
import logoOutro from "@/assets/logo-outro.jpg";
import logoHero from "@/assets/logo-hero.png";
import heroVillage from "@/assets/hero-village.jpg";
import heroBg from "@/assets/hero-bg.png";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import culture from "@/assets/culture.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const SYMPLA_URL = "https://www.sympla.com.br/";
const EVENT_DATE = new Date("2026-09-12T19:00:00-03:00");

type Restaurant = {
  name: string;
  category: string;
  rating: number;
  reviews: number;
  address: string;
  instagram: string;
  instagramUrl: string;
  description: string;
  image: string;
};

const RESTAURANTS: Restaurant[] = [
  {
    name: "Restaurante Casa Velha",
    category: "MINEIRA\n",
    rating: 4.7,
    reviews: 612,
    address: "R. Nossa Sra. dos Prazeres, 88 - Lavras Novas, Ouro Preto - MG",
    instagram: "@casavelhalavras",
    instagramUrl: "https://instagram.com/casavelhalavras",
    description:
      "Comida mineira tradicional servida em fogão a lenha, no coração do arraial. Famosa pelo tutu, pernil e doces caseiros.",
    image: dish1,
  },
  {
    name: "Empório Lavras",
    category: "Bistrô",
    rating: 4.8,
    reviews: 489,
    address: "R. Alto do Campo, 120 - Lavras Novas, Ouro Preto - MG",
    instagram: "@emporiolavras",
    instagramUrl: "https://instagram.com/emporiolavras",
    description:
      "Bistrô aconchegante com tábuas de queijos da Canastra, vinhos selecionados e pratos autorais.",
    image: dish2,
  },
  {
    name: "Café da Vila",
    category: "Cafés",
    rating: 4.9,
    reviews: 740,
    address: "Largo da Matriz, 25 - Lavras Novas, Ouro Preto - MG",
    instagram: "@cafedavilalavras",
    instagramUrl: "https://instagram.com/cafedavilalavras",
    description:
      "Cafés especiais de terroir mineiro, broa de fubá quentinha, bolos caseiros e pão de queijo de roça.",
    image: dish3,
  },
  {
    name: "Pousada e Restaurante Recanto",
    category: "MINEIRA\n",
    rating: 4.6,
    reviews: 358,
    address: "R. das Flores, 45 - Lavras Novas, Ouro Preto - MG",
    instagram: "@recantolavras",
    instagramUrl: "https://instagram.com/recantolavras",
    description:
      "Vista panorâmica da serra com cardápio mineiro contemporâneo. Costelinha, feijão tropeiro e cachaças artesanais.",
    image: dish1,
  },
  {
    name: "Trattoria della Pietra",
    category: "Italiana",
    rating: 4.7,
    reviews: 421,
    address: "R. Direita, 78 - Lavras Novas, Ouro Preto - MG",
    instagram: "@trattoriadellapietra",
    instagramUrl: "https://instagram.com/trattoriadellapietra",
    description:
      "Massas frescas artesanais e pizzas em forno a lenha, com ingredientes locais da serra.",
    image: dish2,
  },
  {
    name: "Doceria Flor de Sal",
    category: "Doces",
    rating: 4.9,
    reviews: 295,
    address: "R. Alto do Campo, 206 - Lavras Novas, Ouro Preto - MG",
    instagram: "@flordesallavras",
    instagramUrl: "https://instagram.com/flordesallavras",
    description:
      "Doces finos mineiros, brigadeiros gourmet, geleias artesanais e chocolates de origem.",
    image: dish3,
  },
];

/* ------------------------------- Loader -------------------------------- */
function Loader({ done }: { done: boolean }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--navy-deep)]"
      style={{
        opacity: done ? 0 : 1,
        visibility: done ? "hidden" : "visible",
        transition: "opacity 0.8s ease, visibility 0.8s",
      }}
    >
      <div className="flex flex-col items-center gap-6">
        <Star className="text-cream star-pulse" size={68} />
        <div className="font-display text-cream/80 tracking-[0.4em] text-xs uppercase">
          Circuito Lavras Novas
        </div>
      </div>
    </div>
  );
}

/* ---------------------------- Reveal on scroll ------------------------- */
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("in"), delay);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
}

/* ------------------------------ Divider ------------------------------- */
function StarDivider() {
  return (
    <div className="flex items-center justify-center gap-6 py-16">
      <div className="divider-line flex-1 max-w-[220px]" />
      <Star className="text-copper" size={18} />
      <div className="divider-line flex-1 max-w-[220px]" />
    </div>
  );
}

/* -------------------------------- Header ------------------------------ */
function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[var(--navy-deep)] border-b border-cream/10">
      <div className="mx-auto max-w-7xl px-6 h-14 flex items-center justify-center">
        <p className="font-display italic text-cream tracking-[0.2em] text-xs sm:text-sm uppercase text-center">
          O ponto de encontro da cultura e do paladar
        </p>
      </div>
    </header>
  );
}

/* -------------------------------- Hero -------------------------------- */
function Hero() {
  return (
    <section id="top" className="relative w-full overflow-hidden bg-[var(--navy-deep)]">
      <div
        className="relative w-full min-h-[520px] flex justify-center bg-[var(--navy-deep)]"
        style={{ height: "calc(100svh - 56px)" }}
      >
        <img
          src={heroBg}
          alt="Circuito Gastronômico & Cultural Lavras Novas"
          className="block h-full w-full object-contain object-top"
          width={1376}
          height={768}
        />
        <a
          href={SYMPLA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-1/2 -translate-x-1/2 bottom-4 md:bottom-6 inline-flex items-center justify-center px-8 py-3 bg-transparent text-cream font-display text-sm tracking-[0.2em] uppercase border border-cream/80 transition-all duration-300 hover:bg-cream/10 hover:scale-105"
        >
          Garanta seu ingresso
        </a>
      </div>
    </section>
  );
}

/* ----------------------------- Carousel ------------------------------ */
function AutoCarousel() {
  const images = [
    { src: heroVillage, alt: "Ruas de pedra de Lavras Novas" },
    { src: dish1, alt: "Prato artesanal" },
    { src: culture, alt: "Roda de viola" },
    { src: dish2, alt: "Massa fresca" },
    { src: dish3, alt: "Café especial" },
  ];
  const loop = [...images, ...images];

  const scrollerRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ active: false, startX: 0, startScroll: 0 });

  const onPointerDown = (e: React.PointerEvent) => {
    const el = scrollerRef.current;
    if (!el) return;
    dragState.current = { active: true, startX: e.clientX, startScroll: el.scrollLeft };
    el.setPointerCapture(e.pointerId);
    el.style.cursor = "grabbing";
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragState.current.active) return;
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollLeft = dragState.current.startScroll - (e.clientX - dragState.current.startX);
  };
  const onPointerUp = (e: React.PointerEvent) => {
    dragState.current.active = false;
    const el = scrollerRef.current;
    if (!el) return;
    try { el.releasePointerCapture(e.pointerId); } catch {}
    el.style.cursor = "grab";
  };

  return (
    <section aria-label="Galeria" className="relative py-16 overflow-hidden bg-[var(--navy-deep)]">
      <div
        ref={scrollerRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className="overflow-x-auto overflow-y-hidden no-scrollbar cursor-grab select-none"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex gap-6 ticker-track w-max">
          {loop.map((img, i) => (
            <div key={i} className="relative w-[420px] h-[280px] md:w-[520px] md:h-[340px] shrink-0 overflow-hidden pointer-events-none">
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover"
                loading="lazy"
                draggable={false}
              />
              <div className="absolute inset-0 ring-1 ring-cream/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Countdown ------------------------------ */
function Countdown() {
  const [mounted, setMounted] = useState(false);
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    setMounted(true);
    const tick = () => {
      const diff = Math.max(0, EVENT_DATE.getTime() - Date.now());
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setT({ d, h, m, s });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { n: t.d, l: "Dias" },
    { n: t.h, l: "Horas" },
    { n: t.m, l: "Minutos" },
    { n: t.s, l: "Segundos" },
  ];

  return (
    <section className="relative py-24 px-6">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <span className="font-display italic text-copper tracking-[0.3em] text-xs uppercase">
            · Contagem regressiva ·
          </span>
          <h2 className="font-display text-cream mt-6 text-3xl md:text-5xl">
            Faltam para o circuito
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14 grid grid-cols-4 gap-3 md:gap-8">
            {items.map((it) => (
              <div
                key={it.l}
                className="card-suspended py-8 md:py-10 px-2 md:px-6"
              >
                <div
                  className="font-display text-cream text-4xl md:text-7xl leading-none tabular-nums"
                  suppressHydrationWarning
                >
                  {mounted ? String(it.n).padStart(2, "0") : "--"}
                </div>
                <div className="text-copper/90 tracking-[0.25em] text-[10px] md:text-xs uppercase mt-3 md:mt-4">
                  {it.l}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------- Circuito ----------------------------- */
function Circuito() {
  return (
    <section id="circuito" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center">
            <span className="font-display italic text-copper tracking-[0.3em] text-xs uppercase">
              · O Circuito ·
            </span>
            <h2 className="font-display text-cream mt-6 text-4xl md:text-6xl leading-tight">
              Onde a serra encontra
              <br />
              <em className="text-copper">a mesa & a viola.</em>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-16 items-center mt-20">
          <Reveal>
            <div className="relative">
              <img
                src={culture}
                alt="Roda de viola em pátio iluminado"
                width={1280}
                height={1024}
                loading="lazy"
                className="w-full aspect-[5/6] object-cover"
              />
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l border-t border-copper" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r border-b border-copper" />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="space-y-6 text-cream/85 font-display text-lg leading-relaxed">
              <p>
                Por três dias, as ruas de pedra do antigo Araial se transformam em uma só
                grande mesa. Vinte casas, seis chefs convidados e dezenas de músicos
                celebram a tradição mineira em pratos exclusivos e encontros ao redor do
                fogo.
              </p>
              <p className="italic text-cream/70">
                Um convite para caminhar devagar, comer com tempo e ouvir as histórias que
                a serra guarda há três séculos.
              </p>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-cream/15">
                {[
                  { n: "20", l: "Restaurantes" },
                  { n: "12", l: "Atrações" },
                  { n: "03", l: "Dias" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="font-display text-copper text-4xl md:text-5xl">{s.n}</div>
                    <div className="text-cream/60 tracking-[0.2em] text-[10px] uppercase mt-2">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Restaurantes --------------------------- */
function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5 text-copper">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 20 20"
          fill={i < Math.round(rating) ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.2"
        >
          <polygon points="10,1.5 12.6,7.6 19.2,8.2 14.2,12.6 15.8,19 10,15.5 4.2,19 5.8,12.6 0.8,8.2 7.4,7.6" />
        </svg>
      ))}
    </div>
  );
}

function Restaurantes() {
  const CATEGORIES = ["Todos", "MINEIRA\n", "Bistrô", "Italiana", "Cafés", "Doces"] as const;
  type Cat = (typeof CATEGORIES)[number];
  const [active, setActive] = useState<Cat>("Todos");
  const [selected, setSelected] = useState<Restaurant | null>(null);

  const filtered = active === "Todos" ? RESTAURANTS : RESTAURANTS.filter((r) => r.category === active);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <section id="restaurantes" className="relative py-32 px-6 bg-[var(--navy-deep)]">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center">
            <span className="font-display italic text-copper tracking-[0.3em] text-xs uppercase">
              · Restaurantes ·
            </span>
            <h2 className="font-display text-cream mt-6 text-4xl md:text-6xl">
              As Casas de Lavras Novas
            </h2>
            <p className="font-display italic text-cream/65 mt-6 max-w-xl mx-auto">
              Conheça os restaurantes do circuito, com avaliações reais do Google e
              informações de contato.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-14">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 py-2.5 text-xs tracking-[0.25em] uppercase font-display transition-all duration-300 border ${
                  active === cat
                    ? "bg-cream text-navy border-cream"
                    : "border-cream/25 text-cream/70 hover:border-copper hover:text-copper"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {filtered.map((r, i) => (
            <Reveal key={r.name} delay={i * 80}>
              <button
                onClick={() => setSelected(r)}
                className="card-suspended group block text-left w-full overflow-hidden"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={r.image}
                    alt={r.name}
                    width={1024}
                    height={1280}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center justify-between text-[10px] tracking-[0.3em] uppercase text-copper">
                    <span>{r.category}</span>
                    <Star className="text-copper" size={10} />
                  </div>
                  <h3 className="font-display text-cream text-2xl mt-3 leading-snug">
                    {r.name}
                  </h3>
                  <div className="mt-3 flex items-center gap-2">
                    <Stars rating={r.rating} />
                    <span className="text-cream/75 text-sm font-display">{r.rating.toFixed(1)}</span>
                    <span className="text-cream/45 text-xs">({r.reviews})</span>
                  </div>
                  <div className="mt-6 pt-5 border-t border-cream/15 flex items-center justify-between">
                    <span className="text-cream/55 text-xs tracking-[0.2em] uppercase">
                      Ver detalhes
                    </span>
                    <span className="text-copper text-lg">→</span>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && <RestaurantModal restaurant={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}

/* --------------------------- Restaurant Modal ------------------------- */
const NAVY = "#1D2A4F";
const CREAM_BG = "#FDF3DF";

function SerifStars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" style={{ color: NAVY }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-base leading-none">
          {i < count ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}

function RestaurantModal({
  restaurant,
  onClose,
}: {
  restaurant: Restaurant;
  onClose: () => void;
}) {
  const chefName = "André";
  const reviews = [
    { name: "Name Amaiis", stars: 5, text: "Experiência incrível, ambiente acolhedor e sabores autênticos da serra mineira." },
    { name: "Paulo Cortina", stars: 5, text: "Deniama profesocra, por de não comalrsi de alho. Voltaria sem pensar duas vezes." },
    { name: "Carto Bancoira", stars: 5, text: "Voisa tem centra um antado producto, com aisen dises praços, artis-deus entriados e as'ivivad de ressserios." },
    { name: "Name Rantan", stars: 4, text: "Pratos bem servidos e atendimento atencioso. Recomendo o prato do chef." },
  ];

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-6xl max-h-[92vh] overflow-y-auto rounded-2xl shadow-2xl"
        style={{ backgroundColor: CREAM_BG, color: NAVY }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 p-2 transition-opacity hover:opacity-60"
          style={{ color: NAVY }}
          aria-label="Fechar"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <line x1="5" y1="5" x2="19" y2="19" />
            <line x1="19" y1="5" x2="5" y2="19" />
          </svg>
        </button>

        <div className="px-6 md:px-12 pt-10 md:pt-12 pb-10">
          {/* Header — restaurant name */}
          <h2 className="font-display text-center text-3xl md:text-5xl tracking-wide uppercase" style={{ color: NAVY }}>
            {restaurant.name}
          </h2>

          {/* Section tabs */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-6 md:gap-10 pb-3 border-b" style={{ borderColor: `${NAVY}40` }}>
            <h3 className="font-display text-base md:text-lg tracking-wider uppercase" style={{ color: NAVY }}>
              Prato com nome do Chefe
            </h3>
            <h3 className="font-display text-base md:text-lg tracking-wider uppercase" style={{ color: NAVY }}>
              Avaliações
            </h3>
            <h3 className="font-display text-base md:text-lg tracking-wider uppercase" style={{ color: NAVY }}>
              COntato e Localização
            </h3>
          </div>

          {/* Three columns */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-8 md:gap-10">
            {/* Column 1 — Chef plate */}
            <div className="rounded-2xl p-5 md:p-6" style={{ border: `2px solid ${NAVY}` }}>
              <div className="overflow-hidden rounded-lg">
                <img
                  src={restaurant.image}
                  alt={`Prato assinatura — ${restaurant.name}`}
                  className="w-full h-56 md:h-64 object-cover"
                />
              </div>
              <h4 className="font-display text-xl md:text-2xl mt-5" style={{ color: NAVY }}>
                Plate 1: “Chef’s Legacy”
              </h4>
              <p className="font-sans text-sm mt-3 leading-relaxed" style={{ color: NAVY }}>
                Uma reinterpretação autoral do Chef {chefName}, com carnes nobres e
                temperos da Mantiqueira, servida com arroz soltinho e couve crisp.
              </p>
              <p className="font-display text-2xl md:text-3xl mt-5" style={{ color: NAVY }}>
                R$.50
              </p>
            </div>

            {/* Column 2 — Avaliações */}
            <div>
              <h4 className="font-display text-lg md:text-xl uppercase tracking-wide" style={{ color: NAVY }}>
                Avaliações do Google
              </h4>
              <ul className="mt-5 space-y-5">
                {reviews.map((rv) => (
                  <li key={rv.name}>
                    <p className="font-sans font-semibold text-sm" style={{ color: NAVY }}>
                      {rv.name}
                    </p>
                    <p className="font-sans text-xs mt-1 leading-relaxed" style={{ color: `${NAVY}CC` }}>
                      {rv.text}
                    </p>
                    <div className="mt-1.5">
                      <SerifStars count={rv.stars} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — Contacts */}
            <div>
              <h4 className="font-display text-lg md:text-xl uppercase tracking-wide" style={{ color: NAVY }}>
                Contacts
              </h4>
              <ul className="mt-5 space-y-5 font-sans text-sm" style={{ color: NAVY }}>
                <li className="flex gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={NAVY} strokeWidth="1.7" className="mt-0.5 shrink-0">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <div>
                    <p className="font-semibold">Telefone</p>
                    <p style={{ color: `${NAVY}CC` }}>(22) 3932-9033</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={NAVY} strokeWidth="1.7" className="mt-0.5 shrink-0">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill={NAVY} />
                  </svg>
                  <div>
                    <p className="font-semibold uppercase tracking-wide">Instagram</p>
                    <a
                      href={restaurant.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                      style={{ color: `${NAVY}CC` }}
                    >
                      {restaurant.instagram}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={NAVY} strokeWidth="1.7" className="mt-0.5 shrink-0">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <p className="font-semibold uppercase tracking-wide">Address</p>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                      style={{ color: `${NAVY}CC` }}
                    >
                      {restaurant.address}
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------- Mapa -------------------------------- */
function Mapa() {
  return (
    <section id="mapa" className="relative py-32 px-6 bg-[var(--navy-deep)]">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center">
            <span className="font-display italic text-copper tracking-[0.3em] text-xs uppercase">
              · Como chegar ·
            </span>
            <h2 className="font-display text-cream mt-6 text-4xl md:text-6xl">
              Lavras Novas, <em className="text-copper">MG</em>
            </h2>
            <p className="font-display italic text-cream/65 mt-6 max-w-xl mx-auto">
              R. Alto do Campo, 206 — Lavras Novas, Ouro Preto · MG, 35400-000
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l border-t border-copper z-10 pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r border-b border-copper z-10 pointer-events-none" />
            <iframe
              title="Mapa de Lavras Novas"
              src="https://www.google.com/maps?q=R.%20Alto%20do%20Campo%2C%20206%20-%20Lavras%20Novas%2C%20Ouro%20Preto%20-%20MG%2C%2035400-000&output=embed"
              width="100%"
              height="480"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full border-0 grayscale-[0.2] contrast-[1.05]"
            />
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://www.google.com/maps/search/?api=1&query=R.+Alto+do+Campo,+206+-+Lavras+Novas,+Ouro+Preto+-+MG,+35400-000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-cream/40 px-8 py-4 text-cream hover:bg-cream hover:text-navy transition-all duration-500 tracking-[0.25em] text-xs uppercase"
            >
              Abrir no Google Maps
              <span>→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ LogoOutro ----------------------------- */
function LogoOutro() {
  return (
    <section className="bg-cream flex items-center justify-center min-h-[100svh] px-6">
      <img
        src={logoOutro}
        alt="Circuito Gastronômico & Cultural Lavras Novas"
        width={1200}
        height={900}
        loading="lazy"
        className="w-full max-w-[680px] h-auto"
      />
    </section>
  );
}

/* -------------------------------- Footer ------------------------------ */
function Footer() {
  return (
    <footer className="bg-[var(--navy-deep)] pt-12 pb-8 px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <div className="text-copper text-[11px] tracking-[0.3em] uppercase">Circuito</div>
            <ul className="mt-5 space-y-2 font-display text-[15px] text-cream/85">
              <li><a href="#circuito" className="hover:text-copper">O Festival</a></li>
              <li><a href="#restaurantes" className="hover:text-copper">Restaurantes</a></li>
              <li><a href="#mapa" className="hover:text-copper">Estrada Real</a></li>
              <li><a href="#mapa" className="hover:text-copper">Como chegar</a></li>
            </ul>
          </div>
          <div>
            <div className="text-copper text-[11px] tracking-[0.3em] uppercase">Parceiros</div>
            <ul className="mt-5 space-y-2 font-display text-[15px] text-cream/85">
              <li>Prefeitura de Ouro Preto</li>
              <li>Sebrae Minas</li>
              <li>Estrada Real</li>
              <li>Associação Lavras Novas</li>
            </ul>
          </div>
          <div>
            <div className="text-copper text-[11px] tracking-[0.3em] uppercase">Redes</div>
            <ul className="mt-5 space-y-2 font-display text-[15px] text-cream/85">
              <li><a href="#" className="hover:text-copper">Instagram</a></li>
              <li><a href="#" className="hover:text-copper">Facebook</a></li>
              <li><a href="#" className="hover:text-copper">YouTube</a></li>
              <li><a href="#" className="hover:text-copper">Spotify</a></li>
            </ul>
          </div>
          <div>
            <div className="text-copper text-[11px] tracking-[0.3em] uppercase">Ingressos</div>
            <p className="mt-5 font-display italic text-[15px] text-cream/70 leading-relaxed">
              Garanta seu ingresso gratuito pelo Sympla.
            </p>
            <a
              href={SYMPLA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 border-b border-copper text-copper text-xs tracking-[0.25em] uppercase pb-1 hover:text-cream hover:border-cream"
            >
              Retirar ingresso →
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-cream/15 flex flex-col md:flex-row items-center justify-between gap-3 text-cream/55 text-[11px] tracking-[0.25em] uppercase">
          <div className="flex items-center gap-3">
            <Star size={10} className="text-copper" />
            <span>Circuito Gastronômico &amp; Cultural Lavras Novas</span>
          </div>
          <div>© 2026 — Todos os direitos reservados</div>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------- Page -------------------------------- */
function Index() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Loader done={loaded} />
      <Header />
      <main className="bg-background text-foreground overflow-x-hidden pt-14">
        <Hero />
        <AutoCarousel />
        <StarDivider />
        <Circuito />
        <StarDivider />
        <Countdown />
        <StarDivider />
        <Restaurantes />
        <StarDivider />
        <Mapa />
        <LogoOutro />
        <Footer />
      </main>
    </>
  );
}
