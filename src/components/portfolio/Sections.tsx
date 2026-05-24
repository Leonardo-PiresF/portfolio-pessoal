import { FAQS, PROFILE } from "./data";
import { SectionHeader } from "./Services";
import { useMode } from "./ModeContext";
import { MessageSquare, Mail, Download, Github } from "lucide-react";

export function FAQ() {
  const { mode } = useMode();
  if (mode === "recruiter") return null;
  return (
    <section id="faq" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeader eyebrow="Dúvidas frequentes" title="PERGUNTAS & RESPOSTAS" align="center" />
        <div className="mt-14 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
          {FAQS.map((f, i) => (
            <details key={f.q} className="group" {...(i === 0 ? { open: true } : {})}>
              <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 transition hover:bg-surface/40">
                <span className="font-display text-xl">{f.q}</span>
                <span className="grid h-8 w-8 place-items-center rounded-full border border-border text-yellow transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const { mode, openBriefing } = useMode();
  return (
    <section id="contato" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl border border-border bg-card p-10 md:p-16">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-yellow">
            {mode === "client" ? "Vamos construir o seu site" : "Vamos conversar sobre oportunidades"}
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] text-balance">
            {mode === "client" ? "PRONTO PARA TER SEU SITE NO AR?" : "ABERTO A ESTÁGIO OU CLT."}
          </h2>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground">
            {mode === "client"
              ? "Me conta sobre o seu projeto. Respondo em até 48h com uma proposta clara, objetiva e sem compromisso."
              : "Tem uma vaga, projeto ou colaboração em mente? Me chama por e-mail ou LinkedIn. Respondo rápido."}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {mode === "client" ? (
              <>
                <button
                  onClick={openBriefing}
                  className="inline-flex items-center gap-2 rounded-full bg-yellow px-6 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-yellow-foreground transition hover:opacity-90"
                >
                  <MessageSquare className="h-4 w-4" /> Iniciar briefing
                </button>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3.5 text-xs font-bold uppercase tracking-[0.15em] transition hover:border-yellow"
                >
                  <Mail className="h-4 w-4" /> Enviar e-mail
                </a>
              </>
            ) : (
              <>
                <a
                  href={PROFILE.cv}
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-yellow px-6 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-yellow-foreground transition hover:opacity-90"
                >
                  <Download className="h-4 w-4" /> Download CV
                </a>
                <a
                  href={PROFILE.github}
                  target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3.5 text-xs font-bold uppercase tracking-[0.15em] transition hover:border-yellow"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3.5 text-xs font-bold uppercase tracking-[0.15em] transition hover:border-yellow"
                >
                  <Mail className="h-4 w-4" /> E-mail
                </a>
              </>
            )}
          </div>

          <p className="mt-8 text-xs text-muted-foreground">
            {PROFILE.email} · {PROFILE.city}
          </p>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>
          <span className="font-display text-base text-foreground">Leonardo Pires</span> · Desenvolvedor Web · © {new Date().getFullYear()}
        </p>
        <div className="flex flex-wrap gap-5">
          <a href="#servicos" className="hover:text-yellow">Serviços</a>
          <a href="#calculadora" className="hover:text-yellow">Calculadora</a>
          <a href="#projetos" className="hover:text-yellow">Projetos</a>
          <a href="#faq" className="hover:text-yellow">FAQ</a>
          <a href="#contato" className="hover:text-yellow">Contato</a>
        </div>
      </div>
    </footer>
  );
}
