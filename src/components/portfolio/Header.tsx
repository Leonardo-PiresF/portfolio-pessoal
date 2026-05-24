import { useEffect, useState } from "react";
import { Briefcase, Download, MessageSquare, Sparkles } from "lucide-react";
import { useMode } from "./ModeContext";
import { PROFILE } from "./data";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#calculadora", label: "Calculadora" },
  { href: "#processo", label: "Processo" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

const recruiterLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#stack", label: "Stack" },
  { href: "#projetos", label: "Projetos" },
  { href: "#processo", label: "Workflow" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const { mode, toggle, openBriefing } = useMode();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = mode === "client" ? navLinks : recruiterLinks;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 hidden transition-all md:block",
        scrolled
          ? "border-b border-border/60 bg-background/85 py-3 backdrop-blur-xl"
          : "py-5",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-yellow text-yellow-foreground">
            <span className="font-display text-xl leading-none">LP</span>
          </div>
          <div className="leading-tight">
            <p className="text-sm font-bold">{PROFILE.name}</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {mode === "client" ? "Desenvolvedor Web" : "Estudante de Ciência da Computação"}
            </p>
          </div>
        </a>

        <nav className="flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground transition hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ModeToggle mode={mode} onToggle={toggle} />
          {mode === "client" ? (
            <button
              onClick={openBriefing}
              className="group inline-flex items-center gap-2 rounded-full bg-yellow px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] text-yellow-foreground transition hover:opacity-90"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              Pedir orçamento
            </button>
          ) : (
            <a
              href={PROFILE.cv}
              download
              className="group inline-flex items-center gap-2 rounded-full bg-yellow px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] text-yellow-foreground transition hover:opacity-90"
            >
              <Download className="h-3.5 w-3.5" />
              Download CV
            </a>
          )}
        </div>
      </div>
    </header>
  );
}

export function ModeToggle({ mode, onToggle }: { mode: "client" | "recruiter"; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="relative flex h-9 items-center rounded-full border border-border bg-surface p-1"
      aria-label="Alternar modo"
    >
      <span
        className="absolute top-1 h-7 rounded-full bg-yellow transition-all"
        style={{
          left: mode === "client" ? "4px" : "calc(50% - 0px)",
          width: "calc(50% - 4px)",
        }}
      />
      <span className={cn(
        "relative z-10 flex items-center gap-1.5 px-3 text-[10px] font-bold uppercase tracking-[0.15em] transition",
        mode === "client" ? "text-yellow-foreground" : "text-muted-foreground",
      )}>
        <Sparkles className="h-3 w-3" /> Cliente
      </span>
      <span className={cn(
        "relative z-10 flex items-center gap-1.5 px-3 text-[10px] font-bold uppercase tracking-[0.15em] transition",
        mode === "recruiter" ? "text-yellow-foreground" : "text-muted-foreground",
      )}>
        <Briefcase className="h-3 w-3" /> Recrutador
      </span>
    </button>
  );
}
