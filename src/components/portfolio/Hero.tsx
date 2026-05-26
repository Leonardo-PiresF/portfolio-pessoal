import { useState, useEffect } from "react";
import { Sparkles, Zap, Github, Linkedin, MapPin, ArrowDown } from "lucide-react";
import { useMode } from "./ModeContext";
import { PROFILE } from "./data";

export function Hero() {
  const { mode, openBriefing } = useMode();

  const [isLight, setIsLight] = useState(false);
  useEffect(() => {
    const root = document.documentElement;
    const check = () => setIsLight(root.classList.contains("light"));
    check();
    const observer = new MutationObserver(check);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const videoSrc = isLight ? "/0527.mp4" : "/0526.mp4";
  const videoStyle = isLight
    ? { opacity: 0.9 }
    : { mixBlendMode: "screen", opacity: 1 };

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden"
    >
      {/* ── Vídeo suminagashi ────────────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          key={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
          style={videoStyle}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      {/* ── Grain ────────────────────────────────────────────────── */}
      <div className="grain absolute inset-0 pointer-events-none" />

      {/* ── Conteúdo ─────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pb-28 pt-32 w-full">

        {/* Avatar */}
        <div className="mb-8 animate-float-up" style={{ animationDelay: "0.1s" }}>
          <div className="relative h-36 w-36 md:h-40 md:w-40">
            <img
              src="/avatar.png"
              alt={PROFILE.name}
              className="h-full w-full object-cover object-top"
              style={{ clipPath: "circle(50%)" }}
            />
            <div className="absolute inset-0 rounded-full border-2 border-yellow animate-pulse-ring pointer-events-none" />
          </div>
        </div>

        {/* Linha do nome */}
        <div
          className="flex w-full max-w-5xl items-center gap-4 animate-float-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="flex flex-1 items-center gap-4">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:block text-muted-foreground transition hover:text-yellow"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:block text-muted-foreground transition hover:text-yellow"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <div className="h-px flex-1 bg-border" />
          </div>

          <h1 className="font-display text-[clamp(2.2rem,7vw,5.5rem)] leading-none text-yellow whitespace-nowrap">
            {PROFILE.name}
          </h1>

          <div className="flex flex-1 items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <span className="hidden sm:flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-yellow" />
              Maceió - AL
            </span>
          </div>
        </div>

        {/* Role — tag amarela */}
        <div
          className="mt-4 inline-flex items-center bg-yellow px-3 py-1 animate-float-up"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-yellow-foreground">
            Desenvolvedor Web
          </span>
        </div>

        {/* Descrição — só aparece no modo recrutador */}
        {mode === "recruiter" && (
          <p
            className="mt-5 max-w-lg text-sm text-muted-foreground md:text-base animate-float-up"
            style={{ animationDelay: "0.35s" }}
          >
            Construo interfaces performáticas, acessíveis e bem arquitetadas, do design ao deploy.
          </p>
        )}

        {/* CTAs */}
        <div
          className="mt-10 flex flex-wrap justify-center gap-3 animate-float-up"
          style={{ animationDelay: "0.4s" }}
        >
          {mode === "client" ? (
            <>
              <button
                onClick={openBriefing}
                className="group inline-flex items-center gap-2 rounded-full bg-yellow px-6 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-yellow-foreground transition hover:shadow-glow"
              >
                <Sparkles className="h-4 w-4" /> Iniciar briefing
              </button>
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-foreground transition hover:border-yellow hover:text-yellow"
              >
                Ver projetos <ArrowDown className="h-4 w-4 -rotate-[30deg]" />
              </a>
            </>
          ) : (
            <>
              <a
                href={PROFILE.cv}
                download
                className="group inline-flex items-center gap-2 rounded-full bg-yellow px-6 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-yellow-foreground transition hover:shadow-glow"
              >
                <Zap className="h-4 w-4" /> Download CV
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
      </div>

      {/* ── Marquee ────────────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-y border-border bg-surface/40 py-4">
        {/*
          Sem a classe .marquee — tudo inline pra evitar conflito de CSS.
          Cada cópia repete os itens 2× (8 itens) → cobre qualquer resolução.
          gap: 0 entre as 2 cópias + paddingRight igual ao gap interno → seam perfeito.
          translateX(-50%) = exatamente 1 cópia → loop sem salto garantido.
        */}
        <div
          style={{
            display: "flex",
            width: "max-content",
            gap: 0,
            animation: "marquee 35s linear infinite",
            willChange: "transform",
          }}
        >
          {[0, 1].map(k => (
            <div
              key={k}
              style={{
                display: "flex",
                alignItems: "center",
                flexShrink: 0,
                gap: "3.5rem",
                paddingRight: "3.5rem",
              }}
            >
              {[...Array(2)].flatMap((_, rep) =>
                ["Landing Page", "Site Institucional", "Interface Web", "UI/UX"].flatMap((t, i) => [
                  <span
                    key={`t-${k}-${rep}-${i}`}
                    className="font-display text-2xl text-muted-foreground/80 whitespace-nowrap"
                  >
                    {t}
                  </span>,
                  <span
                    key={`s-${k}-${rep}-${i}`}
                    className="text-yellow"
                    style={{ flexShrink: 0 }}
                  >
                    ✦
                  </span>,
                ])
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}