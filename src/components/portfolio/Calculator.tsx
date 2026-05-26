import { useMemo, useState } from "react";
import { Calculator as Calc, Check, MessageSquare } from "lucide-react";
import { useMode } from "./ModeContext";
import { SectionHeader } from "./Services";
import { cn } from "@/lib/utils";

type ProjType = "landing" | "site" | "ecommerce" | "webapp";

const projTypes: { value: ProjType; label: string; base: number }[] = [
  { value: "landing", label: "Landing Page", base: 600 },
  { value: "site", label: "Site Institucional", base: 900 },
  { value: "ecommerce", label: "E-commerce", base: 3000 },
  { value: "webapp", label: "Web App", base: 4000 },
];

const prazos = [
  { value: "flex", label: "Flexível", mult: 1 },
  { value: "normal", label: "Normal (3-4 sem)", mult: 1.1 },
  { value: "urgente", label: "Urgente (≤ 2 sem)", mult: 1.35 },
];

export function Calculator() {
  const { openBriefing, mode, theme } = useMode();
  
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

  const bgImage = theme === "light" ? "/backgroundL.webp" : "/background.webp";

  return (
    <section 
      id="calculadora" 
      className="relative min-h-screen overflow-hidden scroll-mt-24 py-24 md:py-32 flex flex-col justify-center"
    >
      {/* Camada do Background isolada */}
      <div
        className="absolute inset-0 bg-cover bg-[center_top] bg-no-repeat transition-all duration-500"
        style={{ backgroundImage: `url(${bgImage})` }}
        aria-hidden="true"
      />

      {/* Overlay sutil para garantir legibilidade do texto */}
      <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]" aria-hidden="true" />

      {/* Conteúdo da Seção */}
      <div className="relative z-10 w-full mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Estimativa instantânea"
          title="QUANTO CUSTA O SEU PROJETO?"
          sub="Brinque com os parâmetros abaixo e veja uma faixa estimada em tempo real. Valor final é definido na proposta."
        />

        <div
          className="mt-14 grid overflow-hidden rounded-[2rem] border border-border/30 bg-background/70 backdrop-blur-2xl shadow-2xl lg:grid-cols-[1.2fr_1fr]"
        >
          {/* Controls */}
          <div className="space-y-8 p-6 md:p-10">
            <Field label="Tipo de projeto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projTypes.map((p) => (
                  <button
                    key={p.value}
                    onClick={() => setType(p.value)}
                    className={cn(
                      "rounded-xl border border-transparent px-4 py-3.5 text-left text-sm font-bold transition-all duration-300",
                      type === p.value
                        ? "border-yellow-400 bg-yellow-400/10 text-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.1)]"
                        : "bg-foreground/5 text-foreground/80 hover:border-yellow-400/30 hover:bg-foreground/10",
                    )}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </Field>

            <Field label="Número de páginas" value={`${pages} ${pages === 1 ? "página" : "páginas"}`}>
              <div className="pt-2">
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
              </div>
              {type === "landing" && (
                <p className="mt-2 text-[11px] text-muted-foreground">Landing page é tipicamente uma página única.</p>
              )}
            </Field>

            <div className="grid gap-4 sm:grid-cols-2">
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
                      "rounded-xl border border-transparent px-2 py-3 text-center text-xs font-bold transition-all duration-300",
                      prazo === p.value
                        ? "border-yellow-400 bg-yellow-400/10 text-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.1)]"
                        : "bg-foreground/5 text-foreground/80 hover:border-yellow-400/30 hover:bg-foreground/10",
                    )}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </Field>
          </div>

          {/* Result */}
          <div className="relative flex flex-col justify-between gap-6 border-t border-border/30 bg-foreground/5 p-6 lg:border-l lg:border-t-0 md:p-10">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-yellow-400">
              <Calc className="h-3.5 w-3.5" /> Estimativa em tempo real
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Faixa estimada</p>
              <div className="mt-3 font-display text-[clamp(1.8rem,5vw,3.2rem)] leading-none text-yellow-400">
                <span key={low} className="inline-block animate-float-up">{fmt(low)}</span>
                <span className="mx-3 text-muted-foreground/50">—</span>
                <span key={high} className="inline-block animate-float-up">{fmt(high)}</span>
              </div>
              <p className="mt-4 max-w-sm text-sm text-muted-foreground">
                Valor estimado com base nas suas escolhas. Briefing pode ajustar para mais ou menos.
              </p>
            </div>

            <ul className="space-y-3 text-sm">
              {["Proposta escrita em até 48h", "40% início / 60% entrega", "30 dias de suporte inclusos"].map((b) => (
                <li key={b} className="flex items-center gap-3 text-foreground/90 font-medium">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-yellow-400/20 text-yellow-500 text-[10px] font-bold">
                    <Check className="h-3 w-3" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <button
              onClick={openBriefing}
              className="group mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-black transition-all duration-300 hover:scale-[1.02] hover:bg-yellow-300 hover:shadow-[0_0_20px_rgba(250,204,21,0.3)] active:scale-[0.98]"
            >
              <MessageSquare className="h-4 w-4" />
              Quero esse orçamento
            </button>
          </div>
        </div>
      </div>

      <style>{`
        /* Ajuste do slider para combinar com a nova estética glass e ficar visível */
        .range-yellow { 
          -webkit-appearance: none; 
          height: 6px; 
          background: rgba(150, 150, 150, 0.3); 
          border-radius: 4px; 
          outline: none; 
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .range-yellow::-webkit-slider-thumb { 
          -webkit-appearance: none; 
          height: 20px; 
          width: 20px; 
          border-radius: 50%; 
          background: #f8f929; 
          cursor: pointer; 
          box-shadow: 0 0 10px rgba(248, 249, 41, 0.4);
          transition: transform 0.2s;
        }
        .range-yellow::-webkit-slider-thumb:hover {
          transform: scale(1.15);
        }
        .range-yellow::-moz-range-thumb { 
          height: 20px; 
          width: 20px; 
          border-radius: 50%; 
          background: #f8f929; 
          border: none;
          cursor: pointer; 
          box-shadow: 0 0 10px rgba(248, 249, 41, 0.4);
        }
        .range-yellow:disabled::-webkit-slider-thumb { 
          background: hsl(var(--muted-foreground)); 
          box-shadow: none; 
          cursor: not-allowed; 
        }
      `}</style>
    </section>
  );
}

function Field({ label, value, children }: { label: string; value?: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-4 flex items-baseline justify-between">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
        {value && <span className="font-display text-lg text-yellow-400">{value}</span>}
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
      className={cn(
        "flex items-center justify-between rounded-xl border border-transparent px-4 py-3.5 text-left transition-all duration-300",
        value 
          ? "border-yellow-400/30 bg-yellow-400/10 text-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.05)]" 
          : "bg-foreground/5 text-foreground/80 hover:border-yellow-400/30 hover:bg-foreground/10"
      )}
    >
      <span className="text-sm font-bold">{label}</span>
      <span className={cn("relative h-6 w-11 rounded-full transition-colors duration-300", value ? "bg-yellow-400" : "bg-foreground/20")}>
        <span className={cn("absolute top-1 h-4 w-4 rounded-full bg-black transition-all duration-300", value ? "left-[22px]" : "left-1")} />
      </span>
    </button>
  );
}