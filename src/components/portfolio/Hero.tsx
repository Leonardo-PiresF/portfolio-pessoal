import { ArrowDown, Sparkles, Zap, Github, Linkedin, MapPin } from "lucide-react";
import { useMode } from "./ModeContext";
import { PROFILE } from "./data";

export function Hero() {
  const { mode, openBriefing } = useMode();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 md:pt-32"
      style={{ background: "var(--gradient-radial)" }}
    >
      <div className="grain absolute inset-0" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 md:pb-16">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow" />
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
            {mode === "client" ? "Disponível para novos projetos" : "Aberto a oportunidades · Estágio / CLT"}
          </span>
        </div>

        <h1 className="mt-6 font-display text-[clamp(3rem,11vw,9rem)] leading-[0.9] text-balance">
          {mode === "client" ? (
            <>
              SITES QUE<br />
              <span className="text-yellow">CONVERTEM</span>.<br />
              SEM ENROLAÇÃO.
            </>
          ) : (
            <>
              CÓDIGO LIMPO.<br />
              <span className="text-yellow">PRODUTO</span> REAL.<br />
              ENTREGA NO PRAZO.
            </>
          )}
        </h1>

        <p className="mt-8 max-w-xl text-base text-muted-foreground md:text-lg">
          {mode === "client"
            ? "Landing pages, sites institucionais e interfaces personalizadas que transformam visitantes em clientes. De Maceió para o Brasil."
            : "Sou Leonardo, estudante de Ciência da Computação focado em desenvolvimento front-end. Construo interfaces performáticas, acessíveis e bem arquitetadas — do design ao deploy."}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {mode === "client" ? (
            <>
              <button
                onClick={openBriefing}
                className="group inline-flex items-center gap-2 rounded-full bg-yellow px-6 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-yellow-foreground transition hover:shadow-glow"
              >
                <Sparkles className="h-4 w-4" />
                Iniciar briefing
              </button>
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-foreground transition hover:border-yellow hover:text-yellow"
              >
                Ver projetos
                <ArrowDown className="h-4 w-4 rotate-[-30deg]" />
              </a>
            </>
          ) : (
            <>
              <a
                href={PROFILE.cv}
                download
                className="group inline-flex items-center gap-2 rounded-full bg-yellow px-6 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-yellow-foreground transition hover:shadow-glow"
              >
                <Zap className="h-4 w-4" />
                Download CV
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.15em] transition hover:border-yellow hover:text-yellow"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.15em] transition hover:border-yellow hover:text-yellow"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </>
          )}
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <span className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-yellow" /> {PROFILE.city}</span>
          <span>· Entrega no prazo</span>
          <span>· 100% responsivo</span>
          <span>· Código bem arquitetado</span>
        </div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-y border-border bg-surface/40 py-4 md:bottom-0">
        <div className="marquee">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex items-center gap-12 pr-12">
              {[
                "Landing Page",
                "Site Institucional",
                "Interface Web",
                "Conversão",
                "React",
                "TypeScript",
                "UI/UX",
                "Performance",
              ].map((t, i) => (
                <span key={`${k}-${i}`} className="font-display text-2xl text-muted-foreground/80">
                  {t} <span className="ml-12 text-yellow">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
