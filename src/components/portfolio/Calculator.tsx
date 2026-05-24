import { useMemo, useState } from "react";
import { Calculator as Calc, Check, MessageSquare } from "lucide-react";
import { useMode } from "./ModeContext";
import { SectionHeader } from "./Services";
import { cn } from "@/lib/utils";

type ProjType = "landing" | "site" | "ecommerce" | "webapp";

const projTypes: { value: ProjType; label: string; base: number }[] = [
  { value: "landing", label: "Landing Page", base: 700 },
  { value: "site", label: "Site Institucional", base: 1400 },
  { value: "ecommerce", label: "E-commerce", base: 3500 },
  { value: "webapp", label: "Web App", base: 5000 },
];

const prazos = [
  { value: "flex", label: "Flexível", mult: 1 },
  { value: "normal", label: "Normal (3-4 sem)", mult: 1.1 },
  { value: "urgente", label: "Urgente (≤ 2 sem)", mult: 1.35 },
];

export function Calculator() {
  const { openBriefing, mode } = useMode();
  if (mode === "recruiter") return null;

  const [type, setType] = useState<ProjType>("landing");
  const [pages, setPages] = useState(3);
  const [hasLogo, setHasLogo] = useState(true);
  const [seo, setSeo] = useState(true);
  const [prazo, setPrazo] = useState("normal");

  const [low, high] = useMemo(() => {
    const base = projTypes.find((p) => p.value === type)!.base;
    const pageMult = type === "landing" ? 1 : 1 + (pages - 1) * 0.18;
    const logoMult = hasLogo ? 1 : 1.12;
    const seoMult = seo ? 1.15 : 1;
    const prazoMult = prazos.find((p) => p.value === prazo)!.mult;
    const total = base * pageMult * logoMult * seoMult * prazoMult;
    return [Math.round((total * 0.88) / 50) * 50, Math.round((total * 1.18) / 50) * 50];
  }, [type, pages, hasLogo, seo, prazo]);

  const fmt = (n: number) =>
    n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

  return (
    <section id="calculadora" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Estimativa instantânea"
          title="QUANTO CUSTA O SEU PROJETO?"
          sub="Brinque com os parâmetros abaixo e veja uma faixa estimada em tempo real. Valor final é definido na proposta, com base no briefing completo."
        />

        <div className="mt-14 grid gap-6 overflow-hidden rounded-3xl border border-border bg-card lg:grid-cols-[1.2fr_1fr]">
          {/* Controls */}
          <div className="space-y-8 p-6 md:p-10">
            <Field label="Tipo de projeto">
              <div className="grid grid-cols-2 gap-2">
                {projTypes.map((p) => (
                  <button
                    key={p.value}
                    onClick={() => setType(p.value)}
                    className={cn(
                      "rounded-xl border px-4 py-3 text-left text-sm font-semibold transition",
                      type === p.value
                        ? "border-yellow bg-yellow/10 text-foreground"
                        : "border-border bg-surface hover:border-border/80",
                    )}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </Field>

            <Field label="Número de páginas" value={`${pages} ${pages === 1 ? "página" : "páginas"}`}>
              <input
                type="range"
                min={1}
                max={10}
                step={1}
                value={pages}
                onChange={(e) => setPages(+e.target.value)}
                className="range-yellow w-full"
                disabled={type === "landing"}
              />
              {type === "landing" && (
                <p className="mt-2 text-[11px] text-muted-foreground">Landing page é tipicamente uma página única.</p>
              )}
            </Field>

            <div className="grid gap-4 md:grid-cols-2">
              <Toggle label="Já possui logo?" value={hasLogo} onChange={setHasLogo} />
              <Toggle label="Precisa de SEO?" value={seo} onChange={setSeo} />
            </div>

            <Field label="Prazo desejado">
              <div className="grid grid-cols-3 gap-2">
                {prazos.map((p) => (
                  <button
                    key={p.value}
                    onClick={() => setPrazo(p.value)}
                    className={cn(
                      "rounded-xl border px-3 py-3 text-xs font-semibold transition",
                      prazo === p.value
                        ? "border-yellow bg-yellow/10"
                        : "border-border bg-surface hover:border-border/80",
                    )}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </Field>
          </div>

          {/* Result */}
          <div className="relative flex flex-col justify-between gap-6 bg-gradient-to-br from-surface to-background p-6 md:p-10">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-yellow">
              <Calc className="h-3.5 w-3.5" /> Estimativa em tempo real
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Faixa estimada</p>
              <div className="mt-3 font-display text-[clamp(2.5rem,7vw,4.5rem)] leading-none text-yellow">
                <span key={low} className="inline-block animate-float-up">{fmt(low)}</span>
                <span className="mx-3 text-muted-foreground">—</span>
                <span key={high} className="inline-block animate-float-up">{fmt(high)}</span>
              </div>
              <p className="mt-4 max-w-sm text-sm text-muted-foreground">
                Valor estimado com base nas suas escolhas. Briefing completo pode ajustar a proposta para mais ou para menos.
              </p>
            </div>

            <ul className="space-y-2 text-sm">
              {["Proposta escrita em até 48h", "40% início / 60% entrega", "30 dias de suporte inclusos"].map((b) => (
                <li key={b} className="flex items-center gap-2 text-foreground/90">
                  <Check className="h-4 w-4 text-yellow" /> {b}
                </li>
              ))}
            </ul>

            <button
              onClick={openBriefing}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-yellow px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-yellow-foreground transition hover:opacity-90"
            >
              <MessageSquare className="h-4 w-4" />
              Quero esse orçamento
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .range-yellow { -webkit-appearance: none; height: 6px; background: var(--surface-2); border-radius: 4px; outline: none; }
        .range-yellow::-webkit-slider-thumb { -webkit-appearance: none; height: 22px; width: 22px; border-radius: 50%; background: var(--yellow); border: 3px solid var(--background); cursor: pointer; box-shadow: 0 0 0 1px var(--yellow); }
        .range-yellow::-moz-range-thumb { height: 22px; width: 22px; border-radius: 50%; background: var(--yellow); border: 3px solid var(--background); cursor: pointer; }
        .range-yellow:disabled::-webkit-slider-thumb { background: var(--muted-foreground); box-shadow: none; cursor: not-allowed; }
      `}</style>
    </section>
  );
}

function Field({ label, value, children }: { label: string; value?: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-3 flex items-baseline justify-between">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
        {value && <span className="font-display text-lg text-yellow">{value}</span>}
      </div>
      {children}
    </div>
  );
}

function Toggle({ label, value, onChange }: { label: string; value: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!value)}
      className="flex items-center justify-between rounded-xl border border-border bg-surface px-4 py-3 text-left transition hover:border-border/80"
    >
      <span className="text-sm font-semibold">{label}</span>
      <span className={cn(
        "relative h-6 w-11 rounded-full transition",
        value ? "bg-yellow" : "bg-surface-2",
      )}>
        <span
          className={cn(
            "absolute top-0.5 h-5 w-5 rounded-full bg-background transition-all",
            value ? "left-[22px]" : "left-0.5",
          )}
        />
      </span>
    </button>
  );
}
