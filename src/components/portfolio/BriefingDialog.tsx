import { useState } from "react";
import { ArrowRight, ArrowLeft, Check, X, MessageSquare } from "lucide-react";
import { useMode } from "./ModeContext";
import { SERVICES, PROFILE, type ServiceKey } from "./data";
import { cn } from "@/lib/utils";

const steps = ["Serviço", "Negócio", "Site atual", "Prazo", "Detalhes", "Enviar"] as const;

const tipoNegocio = [
  "Profissional autônomo",
  "Pequeno negócio / loja",
  "Empresa estabelecida",
  "Startup / produto digital",
  "Projeto pessoal",
];

const possuiSite = ["Não tenho", "Tenho mas é antigo", "Tenho e quero migrar", "Só preciso atualizar"];

const prazos = ["Sem pressa", "1 mês", "2-3 meses", "É urgente"];

export function BriefingDialog() {
  const { briefingOpen, setBriefingOpen } = useMode();
  const [step, setStep] = useState(0);
  const [service, setService] = useState<ServiceKey | null>(null);
  const [negocio, setNegocio] = useState("");
  const [siteAtual, setSiteAtual] = useState("");
  const [prazo, setPrazo] = useState("");
  const [nome, setNome] = useState("");
  const [detalhe, setDetalhe] = useState("");

  if (!briefingOpen) return null;

  const close = () => {
    setBriefingOpen(false);
    setTimeout(() => {
      setStep(0); setService(null); setNegocio(""); setSiteAtual(""); setPrazo(""); setNome(""); setDetalhe("");
    }, 300);
  };

  const canNext = () => {
    if (step === 0) return !!service;
    if (step === 1) return !!negocio;
    if (step === 2) return !!siteAtual;
    if (step === 3) return !!prazo;
    if (step === 4) return nome.trim().length > 1;
    return true;
  };

  const buildMessage = () => {
    const serviceLabel = SERVICES.find((s) => s.key === service)?.label || "";
    const lines = [
      `Olá, Leonardo! 👋`,
      ``,
      `*Briefing rápido, vindo do site*`,
      ``,
      `🧑 *Nome:* ${nome}`,
      `🎯 *Serviço:* ${serviceLabel}`,
      `🏢 *Tipo de negócio:* ${negocio}`,
      `🌐 *Site atual:* ${siteAtual}`,
      `⏱️ *Prazo:* ${prazo}`,
    ];
    if (detalhe.trim()) {
      lines.push(``, `💬 *Contexto adicional:*`, detalhe.trim());
    }
    lines.push(``, `Pode me passar uma proposta?`);
    return lines.join("\n");
  };

  const send = () => {
    const url = `https://wa.me/${PROFILE.whatsapp}?text=${encodeURIComponent(buildMessage())}`;
    window.open(url, "_blank");
    close();
  };

  return (
    <div
      className="fixed inset-0 z-[150] flex items-end justify-center bg-black/70 backdrop-blur-sm md:items-center"
      onClick={close}
      role="dialog"
      aria-modal
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex w-full max-w-xl flex-col overflow-hidden border-border bg-background md:max-h-[90vh] md:rounded-3xl md:border"
        style={{ animation: "float-up 0.35s ease-out both" }}
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-yellow">Briefing rápido</p>
            <p className="mt-1 text-sm font-semibold">{steps[step]} <span className="text-muted-foreground">· {step + 1} de {steps.length}</span></p>
          </div>
          <button
            onClick={close}
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground transition hover:bg-surface"
            aria-label="Fechar"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="h-1 w-full bg-surface">
          <div
            className="h-full bg-yellow transition-all duration-500"
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          />
        </div>

        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          {step === 0 && (
            <StepWrap title="Qual serviço você procura?" sub="Escolha a opção que mais se aproxima, refinamos depois.">
              <div className="grid gap-2 sm:grid-cols-2">
                {SERVICES.map((s) => (
                  <SelectCard
                    key={s.key}
                    active={service === s.key}
                    onClick={() => { setService(s.key); }}
                    title={s.label}
                    sub={s.desc}
                  />
                ))}
              </div>
            </StepWrap>
          )}

          {step === 1 && (
            <StepWrap title="Que tipo de negócio?" sub="Para entender o seu contexto.">
              <Choices options={tipoNegocio} value={negocio} onChange={setNegocio} />
            </StepWrap>
          )}

          {step === 2 && (
            <StepWrap title="Já possui site atualmente?" sub="Sem julgamentos, só para entender o ponto de partida.">
              <Choices options={possuiSite} value={siteAtual} onChange={setSiteAtual} />
            </StepWrap>
          )}

          {step === 3 && (
            <StepWrap title="Qual o prazo aproximado?" sub="Ajuda a planejar a entrega.">
              <Choices options={prazos} value={prazo} onChange={setPrazo} />
            </StepWrap>
          )}

          {step === 4 && (
            <StepWrap title="Como posso te chamar?" sub="E qualquer detalhe extra que queira me contar agora.">
              <input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Seu nome"
                className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-yellow"
              />
              <textarea
                value={detalhe}
                onChange={(e) => setDetalhe(e.target.value)}
                placeholder="Contexto, referências, objetivos (opcional)"
                rows={4}
                className="mt-3 w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-yellow"
              />
            </StepWrap>
          )}

          {step === 5 && (
            <StepWrap title="Tudo pronto." sub="Vou abrir o WhatsApp com essa mensagem já formatada. Você só revisa e envia.">
              <pre className="max-h-[40vh] overflow-y-auto whitespace-pre-wrap rounded-xl border border-border bg-surface p-4 text-xs leading-relaxed text-foreground/90">
{buildMessage()}
              </pre>
            </StepWrap>
          )}
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-border bg-surface/30 px-6 py-4">
          <button
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground transition disabled:opacity-30"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Voltar
          </button>
          {step < steps.length - 1 ? (
            <button
              onClick={() => canNext() && setStep((s) => s + 1)}
              disabled={!canNext()}
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] transition",
                canNext() ? "bg-yellow text-yellow-foreground hover:opacity-90" : "bg-surface text-muted-foreground",
              )}
            >
              Continuar <ArrowRight className="h-3.5 w-3.5" />
            </button>
          ) : (
            <button
              onClick={send}
              className="inline-flex items-center gap-2 rounded-full bg-yellow px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-yellow-foreground transition hover:opacity-90"
            >
              <MessageSquare className="h-3.5 w-3.5" /> Enviar pelo WhatsApp
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function StepWrap({ title, sub, children }: { title: string; sub?: string; children: React.ReactNode }) {
  return (
    <div className="animate-float-up">
      <h3 className="font-display text-3xl">{title}</h3>
      {sub && <p className="mt-2 text-sm text-muted-foreground">{sub}</p>}
      <div className="mt-6">{children}</div>
    </div>
  );
}

function SelectCard({ active, onClick, title, sub }: { active: boolean; onClick: () => void; title: string; sub: string }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group flex items-start justify-between gap-3 rounded-xl border p-4 text-left transition",
        active ? "border-yellow bg-yellow/10" : "border-border bg-surface hover:border-border/80",
      )}
    >
      <div>
        <p className="text-sm font-bold">{title}</p>
        <p className="mt-1 text-xs text-muted-foreground">{sub}</p>
      </div>
      <div className={cn(
        "grid h-6 w-6 shrink-0 place-items-center rounded-full border transition",
        active ? "border-yellow bg-yellow text-yellow-foreground" : "border-border",
      )}>
        {active && <Check className="h-3.5 w-3.5" />}
      </div>
    </button>
  );
}

function Choices({ options, value, onChange }: { options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="grid gap-2">
      {options.map((o) => (
        <button
          key={o}
          onClick={() => onChange(o)}
          className={cn(
            "flex items-center justify-between rounded-xl border px-4 py-3 text-left text-sm transition",
            value === o ? "border-yellow bg-yellow/10" : "border-border bg-surface hover:border-border/80",
          )}
        >
          <span className="font-semibold">{o}</span>
          {value === o && <Check className="h-4 w-4 text-yellow" />}
        </button>
      ))}
    </div>
  );
}
