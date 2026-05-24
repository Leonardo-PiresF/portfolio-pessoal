import { Github, Linkedin, Mail, Award, Code2 } from "lucide-react";
import { SectionHeader } from "./Services";
import { useMode } from "./ModeContext";
import { STACK_GROUPS, PROFILE } from "./data";

export function Stack() {
  const { mode } = useMode();
  if (mode !== "recruiter") return null;

  return (
    <>
      <section id="sobre" className="relative scroll-mt-24 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeader
              eyebrow="Sobre"
              title="ESTUDANTE DE CIÊNCIA DA COMPUTAÇÃO + DEV FREELANCER"
            />
            <div className="mt-8 space-y-4 text-base leading-relaxed text-foreground/90">
              <p>
                Sou Leonardo, baseado em Maceió (AL). Estudo Ciência da Computação e atuo como desenvolvedor web freelancer há alguns anos, entregando sites, landing pages e interfaces para clientes em diferentes segmentos.
              </p>
              <p>
                Aprendi programação na prática: começando com projetos reais, errando, refatorando e estudando o que precisava para entregar bem. Hoje busco oportunidades de estágio ou CLT em times que valorizem código limpo, comunicação clara e produto.
              </p>
              <p>
                Gosto de problemas que envolvem front-end, UI bem feita, performance e produto. Tenho facilidade para conversar com cliente, traduzir requisito em interface e levar um projeto do briefing ao deploy.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-xs font-bold uppercase tracking-[0.15em] transition hover:border-yellow hover:text-yellow">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-xs font-bold uppercase tracking-[0.15em] transition hover:border-yellow hover:text-yellow">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-xs font-bold uppercase tracking-[0.15em] transition hover:border-yellow hover:text-yellow">
                <Mail className="h-4 w-4" /> E-mail
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <Stat icon={Code2} number="6+" label="Projetos entregues em produção" />
            <Stat icon={Award} number="3 anos" label="Construindo interfaces" />
            <Stat icon={Award} number="100%" label="Entregas no prazo combinado" />
            <div className="rounded-2xl border border-yellow/40 bg-yellow/5 p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-yellow">Buscando</p>
              <p className="mt-2 font-display text-2xl">Estágio · CLT · Júnior front-end</p>
              <p className="mt-2 text-sm text-muted-foreground">Remoto, híbrido ou Maceió/AL. Aberto a relocação.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="stack" className="relative scroll-mt-24 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Stack & ferramentas" title="O QUE EU USO NO DIA A DIA" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {STACK_GROUPS.map((g) => (
              <div key={g.label} className="rounded-2xl border border-border bg-card p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-yellow">{g.label}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <li key={it} className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ icon: Icon, number, label }: { icon: typeof Code2; number: string; label: string }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-yellow/10 text-yellow">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="font-display text-2xl leading-none">{number}</p>
        <p className="mt-1 text-xs text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}
