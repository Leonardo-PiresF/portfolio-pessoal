import { Globe, Layout, Sparkles, ShoppingBag, Cpu, Palette, ArrowRight, Star } from "lucide-react";
import { useMode } from "./ModeContext";

const items = [
  {
    icon: Layout,
    title: "Landing Page",
    desc: "Página focada em converter visitantes em clientes. Design persuasivo, rápido e CTA estratégico.",
    bullets: ["Mobile-first", "Integração WhatsApp", "SEO básico"],
    badge: "Mais solicitado",
    color: "bg-yellow text-yellow-foreground",
  },
  {
    icon: Globe,
    title: "Site Institucional",
    desc: "Presença digital profissional completa. Sobre, serviços, contato, para gerar credibilidade.",
    bullets: ["Multi-seção", "Formulário de contato", "Identidade visual aplicada"],
    color: "bg-foreground text-background",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    desc: "Loja virtual com catálogo, checkout integrado e painel de gestão. Vender on-line profissionalmente.",
    bullets: ["Catálogo dinâmico", "Pagamento integrado", "Painel admin"],
    color: "bg-yellow text-yellow-foreground",
  },
  {
    icon: Cpu,
    title: "Web App",
    desc: "Sistemas sob medida com lógica, autenticação e dados. Para quando precisar de mais que um site.",
    bullets: ["Auth e dashboard", "Integração com APIs", "Banco de dados"],
    color: "bg-foreground text-background",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Protótipos e interfaces em Figma. Pesquisa, fluxo e visual antes da linha de código.",
    bullets: ["Wireframe e protótipo", "Design system", "Handoff para dev"],
    color: "bg-yellow text-yellow-foreground",
  },
];

export function Services() {
  const { openBriefing, mode } = useMode();
  if (mode === "recruiter") return null;

  return (
    <section
      id="servicos"
      className="relative scroll-mt-24 overflow-hidden py-24 md:py-32"
    >
      {/* ── Veia diagonal sutil de suminagashi ──────────────────── */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1200 900"
        preserveAspectRatio="none"
        style={{ mixBlendMode: "screen", opacity: 0.5 }}
      >
        <defs>
          <linearGradient id="sumi-stroke" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--yellow)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--yellow)" stopOpacity="0.22" />
            <stop offset="100%" stopColor="var(--yellow)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M -80 880 C 280 720, 520 640, 760 420 S 1180 120, 1320 -20"
          fill="none"
          stroke="url(#sumi-stroke)"
          strokeWidth="1.5"
          style={{ filter: "blur(0.4px)" }}
        />
        <path
          d="M -80 920 C 240 800, 600 700, 820 500 S 1180 200, 1320 60"
          fill="none"
          stroke="url(#sumi-stroke)"
          strokeWidth="1"
          strokeOpacity="0.6"
        />
      </svg>

      {/* ── Grain sutil ──────────────────────────────────────────── */}
      <div className="grain absolute inset-0 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* ── Header editorial ─────────────────────────────────── */}
        <div className="max-w-3xl">
          <span
            className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--c-border)] bg-yellow px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-yellow-foreground"
            style={{ boxShadow: "var(--c-shadow-sm)" }}
          >
            ✦ O que eu faço
          </span>

          

          <h2 className="mt-4 font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.9] text-balance">
            <span className="block text-foreground">SOLUÇÕES</span>
            <span className="block text-yellow">DIGITAIS</span>
          </h2>

          <div className="mt-7 flex items-start gap-4">
            <div className="mt-3 h-px w-12 shrink-0 bg-yellow/60" />
            <p className="max-w-xl text-base text-muted-foreground md:text-lg">
              Você não paga por horas, investe em resultado. Cada projeto começa
              com um objetivo claro e termina com uma entrega real.
            </p>
          </div>
        </div>

        {/* ── Grid de cards ────────────────────────────────────── */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((s, idx) => {
            const num = String(idx + 1).padStart(2, "0");
            return (
              <div
                key={s.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border-2 border-[var(--c-border)] bg-card p-7 transition-all"
                style={{ boxShadow: "var(--c-shadow)" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translate(-3px,-3px)";
                  el.style.boxShadow =
                    "7px 7px 0px var(--c-border), 0 0 50px -22px var(--yellow)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "";
                  el.style.boxShadow = "var(--c-shadow)";
                }}
              >
                {/* Número fantasma editorial */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-1 -top-3 font-display text-[5rem] leading-none text-foreground/[0.05] select-none"
                >
                  {num}
                </span>

                {/* Linha amarela animada na base */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-yellow transition-transform duration-500 ease-out group-hover:scale-x-100"
                />

                {s.badge && (
                  <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full border-2 border-[var(--c-border)] bg-yellow px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-yellow-foreground">
                    <Star className="h-2.5 w-2.5 fill-current" /> {s.badge}
                  </span>
                )}

                {/* Icon com anel no hover */}
                <div
                  className={`relative mb-5 grid h-12 w-12 place-items-center rounded-xl border-2 border-[var(--c-border)] ${s.color} transition-all duration-300 group-hover:scale-110 group-hover:ring-2 group-hover:ring-yellow/40 group-hover:ring-offset-4 group-hover:ring-offset-card`}
                  style={{ boxShadow: "var(--c-shadow-sm)" }}
                >
                  <s.icon className="h-5 w-5" />
                </div>

                <h3 className="font-display text-2xl">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>

                <ul className="mt-5 space-y-2">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2.5 text-xs text-muted-foreground"
                    >
                      <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-yellow/20 text-yellow font-bold text-[10px]">
                        ✓
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={openBriefing}
                  className="group/cta relative mt-6 inline-flex w-fit items-center gap-1.5 pb-1 text-[11px] font-bold uppercase tracking-[0.15em] text-foreground transition hover:text-yellow"
                >
                  <span className="relative">
                    Solicitar orçamento
                    <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-yellow transition-transform duration-300 group-hover/cta:scale-x-100" />
                  </span>
                  <ArrowRight className="h-3 w-3 transition group-hover/cta:translate-x-1" />
                </button>
              </div>
            );
          })}

          {/* Wildcard card */}
          <button
            onClick={openBriefing}
            className="group relative flex flex-col items-start justify-between overflow-hidden rounded-2xl border-2 border-dashed border-[var(--c-border)] bg-surface/40 p-7 text-left transition-all hover:border-yellow hover:bg-surface"
            style={{
              backgroundImage:
                "radial-gradient(circle at 80% 20%, color-mix(in oklab, var(--yellow) 6%, transparent), transparent 55%)",
            }}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-1 -top-3 font-display text-[5rem] leading-none text-foreground/[0.05] select-none"
            >
              ✦
            </span>

            <div className="relative">
              <div
                className="mb-5 grid h-12 w-12 place-items-center rounded-xl border-2 border-[var(--c-border)] bg-surface text-yellow transition-transform duration-300 group-hover:rotate-12"
                style={{ boxShadow: "var(--c-shadow-sm)" }}
              >
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="font-display text-2xl">AINDA NÃO SEI</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Sem problema. Te ajudo a entender qual formato faz sentido para
                o objetivo do seu negócio.
              </p>
            </div>
            <span className="relative mt-6 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-yellow">
              <span className="relative">
                Vamos conversar
                <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-yellow transition-transform duration-300 group-hover:scale-x-100" />
              </span>
              <ArrowRight className="h-3 w-3 transition group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  sub,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : "max-w-2xl"}>
      <span
        className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--c-border)] bg-yellow px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-yellow-foreground"
        style={{ boxShadow: "var(--c-shadow-sm)" }}
      >
        ✦ {eyebrow}
      </span>
      <h2 className="mt-5 font-display text-[clamp(2.25rem,6vw,4.5rem)] leading-[0.95] text-balance">
        {title}
      </h2>
      {sub && (
        <p className="mt-5 text-base text-muted-foreground md:text-lg">{sub}</p>
      )}
    </div>
  );
}
