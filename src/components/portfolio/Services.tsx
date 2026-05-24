import { Globe, Layout, Sparkles, ShoppingBag, Cpu, Palette, ArrowRight, Star } from "lucide-react";
import { useMode } from "./ModeContext";

const items = [
  {
    icon: Layout,
    title: "Landing Page",
    desc: "Página focada em converter visitantes em clientes. Design persuasivo, carregamento rápido, CTA estratégico.",
    bullets: ["Mobile-first", "Integração WhatsApp", "SEO básico"],
    badge: "Mais solicitado",
  },
  {
    icon: Globe,
    title: "Site Institucional",
    desc: "Presença digital profissional completa. Sobre, serviços, contato — construído para gerar credibilidade.",
    bullets: ["Multi-seção", "Formulário de contato", "Identidade visual aplicada"],
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    desc: "Loja virtual com catálogo, checkout integrado e painel de gestão. Vender on-line de forma profissional.",
    bullets: ["Catálogo dinâmico", "Pagamento integrado", "Painel admin"],
  },
  {
    icon: Cpu,
    title: "Web App",
    desc: "Sistemas sob medida com lógica, autenticação e dados. Para quando o seu negócio precisa de mais que um site.",
    bullets: ["Auth e dashboard", "Integração com APIs", "Banco de dados"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Protótipos e interfaces em Figma. Pesquisa, fluxo e visual antes da linha de código.",
    bullets: ["Wireframe e protótipo", "Design system", "Handoff para dev"],
  },
];

export function Services() {
  const { openBriefing, mode } = useMode();
  if (mode === "recruiter") return null;

  return (
    <section id="servicos" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="O que eu faço"
          title="SERVIÇOS QUE ENTREGAM"
          sub="Você não paga por horas, investe em resultado. Cada projeto começa com um objetivo claro e termina com uma entrega real."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-yellow/60 hover:shadow-card"
            >
              {s.badge && (
                <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-yellow/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-yellow">
                  <Star className="h-2.5 w-2.5 fill-yellow" /> {s.badge}
                </span>
              )}
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-yellow/10 text-yellow transition group-hover:bg-yellow group-hover:text-yellow-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <ul className="mt-5 space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="h-1 w-1 rounded-full bg-yellow" /> {b}
                  </li>
                ))}
              </ul>
              <button
                onClick={openBriefing}
                className="mt-6 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-foreground transition hover:text-yellow"
              >
                Solicitar orçamento <ArrowRight className="h-3 w-3 transition group-hover:translate-x-0.5" />
              </button>
            </div>
          ))}

          <button
            onClick={openBriefing}
            className="flex flex-col items-start justify-between rounded-2xl border border-dashed border-border bg-surface/40 p-7 text-left transition hover:border-yellow hover:bg-surface"
          >
            <div>
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-surface text-yellow">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="font-display text-2xl">AINDA NÃO SEI</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Sem problema. Te ajudo a entender qual formato faz sentido para o objetivo do seu negócio.
              </p>
            </div>
            <span className="mt-6 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-yellow">
              Vamos conversar <ArrowRight className="h-3 w-3" />
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
      <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-yellow">
        <span className="h-px w-6 bg-yellow" />
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-[clamp(2.25rem,6vw,4.5rem)] leading-[0.95] text-balance">
        {title}
      </h2>
      {sub && <p className="mt-5 text-base text-muted-foreground md:text-lg">{sub}</p>}
    </div>
  );
}
