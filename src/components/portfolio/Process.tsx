import { useEffect, useRef, useState } from "react";
import { ChevronDown, MessageSquare, FileCheck2, Code2, Rocket } from "lucide-react";
import { SectionHeader } from "./Services";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: MessageSquare,
    title: "Contato & Briefing",
    short: "Você me conta o que precisa.",
    full: "Em uma conversa direta no WhatsApp, alinhamos objetivo, público, prazo e referências. Sem formulário complicado, você fala, eu escuto e proponho o caminho mais curto até o resultado.",
    duration: "1-2 dias",
    color: "bg-yellow text-yellow-foreground",
  },
  {
    icon: FileCheck2,
    title: "Proposta & Aprovação",
    short: "Escopo claro, sem surpresas.",
    full: "Envio escopo, prazo e valor por escrito. Você sabe exatamente o que entra, o que não entra e como será o pagamento. Aprovado, damos início, sem cobranças surpresa.",
    duration: "1-3 dias",
    color: "bg-foreground text-background",
  },
  {
    icon: Code2,
    title: "Desenvolvimento",
    short: "Codifico com atenção a cada detalhe.",
    full: "Construo o projeto em ciclos curtos com previews para você acompanhar. Pode pedir ajustes durante o processo, sem custo, dentro do escopo combinado. Código organizado e responsivo.",
    duration: "1-4 semanas",
    color: "bg-yellow text-yellow-foreground",
  },
  {
    icon: Rocket,
    title: "Entrega & Suporte",
    short: "No ar, funcionando e seu.",
    full: "Projeto entregue, publicado e funcionando. Inclui orientação para edições básicas e 30 dias de suporte pós-entrega sem custo adicional.",
    duration: "Suporte 30 dias",
    color: "bg-foreground text-background",
  },
];

export function Process() {
  const [open, setOpen] = useState<number>(0);
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = r.height - vh * 0.4;
      const seen = Math.min(Math.max(vh * 0.6 - r.top, 0), total);
      setProgress(total > 0 ? seen / total : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="processo" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Como funciona"
          title="DO BRIEFING À ENTREGA"
          sub="Um processo claro, sem surpresas. Você acompanha cada etapa e sabe exatamente o que está acontecendo."
        />

        <div ref={ref} className="relative mt-16 grid gap-8 md:grid-cols-[80px_1fr]">
          {/* Vertical progress line */}
          <div className="relative hidden md:block">
            <div className="sticky top-32 h-[480px] w-full">
              <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-[var(--c-border)]" />
              <div
                className="absolute left-1/2 top-0 w-0.5 -translate-x-1/2 bg-yellow transition-[height] duration-300"
                style={{ height: `${progress * 100}%` }}
              />
              {steps.map((s, i) => (
                <div
                  key={i}
                  className={cn(
                    "absolute left-1/2 -translate-x-1/2 grid h-10 w-10 place-items-center rounded-full border-2 border-[var(--c-border)] font-display text-sm font-bold transition-all",
                    progress * steps.length > i ? s.color : "bg-card text-muted-foreground",
                  )}
                  style={{
                    top: `${(i / (steps.length - 1)) * 100}%`,
                    transform: "translate(-50%, -50%)",
                    boxShadow: progress * steps.length > i ? "var(--c-shadow-accent)" : "var(--c-shadow-sm)",
                  }}
                >
                  0{i + 1}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {steps.map((s, i) => {
              const Icon = s.icon;
              const isOpen = open === i;
              return (
                <button
                  key={s.title}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className={cn(
                    "group block w-full overflow-hidden rounded-2xl border-2 bg-card text-left transition-all",
                    isOpen ? "border-yellow" : "border-[var(--c-border)] hover:border-yellow/60",
                  )}
                  style={{ boxShadow: isOpen ? "var(--c-shadow-accent)" : "var(--c-shadow)" }}
                >
                  <div className="flex items-start gap-4 p-6">
                    <div
                      className={cn(
                        "grid h-12 w-12 shrink-0 place-items-center rounded-xl border-2 border-[var(--c-border)] transition",
                        isOpen ? s.color : "bg-surface text-yellow",
                      )}
                      style={{ boxShadow: "var(--c-shadow-sm)" }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="font-display text-2xl">
                          <span className="mr-3 text-yellow">0{i + 1}</span>
                          {s.title}
                        </h3>
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 shrink-0 text-muted-foreground transition",
                            isOpen && "rotate-180 text-yellow",
                          )}
                        />
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">{s.short}</p>
                      <div
                        className="grid transition-[grid-template-rows] duration-500"
                        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                      >
                        <div className="overflow-hidden">
                          <p className="mt-4 text-sm leading-relaxed text-foreground/80">{s.full}</p>
                          <div
                            className="mt-4 inline-flex items-center gap-2 rounded-full border-2 border-[var(--c-border)] bg-yellow/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-yellow"
                            style={{ boxShadow: "var(--c-shadow-sm)" }}
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-yellow" /> Duração média: {s.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}