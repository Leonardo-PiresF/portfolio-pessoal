import { useEffect, useState } from "react";
import { Briefcase, Sparkles, Sun, Moon } from "lucide-react";
import { useMode } from "./ModeContext";
import { cn } from "@/lib/utils";

const logo1Src = "/logo-1.png"; 
const logo2Src = "/logo-2.png"; 

/* ── Nav links ── */
const clientLinks = [
  { href: "#servicos",    label: "Serviços"    },
  { href: "#calculadora", label: "Calculadora" },
  { href: "#processo",    label: "Processo"    },
  { href: "#projetos",    label: "Projetos"    },
  { href: "#contato",     label: "Contato"     },
];
const recruiterLinks = [
  { href: "#sobre",    label: "Sobre"    },
  { href: "#stack",    label: "Stack"    },
  { href: "#projetos", label: "Projetos" },
  { href: "#processo", label: "Workflow" },
  { href: "#contato",  label: "Contato"  },
];

/* ── Logo Responsiva ── */
function Logo() {
  return (
    <a href="#top" className="group flex items-center justify-center select-none shrink-0 border border-transparent hover:border-yellow-400/20 rounded-xl p-1 transition-colors duration-300">
      <div className="flex items-center gap-1 md:gap-1.5">
        <img
          src={logo1Src}
          alt="Logo Parte 1"
          className="h-9 md:h-12 w-auto block opacity-90 group-hover:opacity-100 transition-opacity"
        />
        <div className="flex flex-col leading-none">
          <span className="font-display text-sm md:text-base text-foreground tracking-wide">Leonardo Pires</span>
          <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Desenvolvedor Web</span>
        </div>
      </div>
    </a>
  );
}

/* ── Nav link ── */
function NavLink({ href, label }) {
  return (
    <a
      href={href}
      className={cn(
        "group relative text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors duration-200",
        "text-foreground/80 hover:text-foreground",
      )}
    >
      {label}
      <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-yellow-400 rounded-full transition-all duration-300 group-hover:w-full" />
    </a>
  );
}

/* ── Mode Toggle Responsivo ── */
export function ModeToggle({ mode, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label="Alternar modo"
      className="relative flex h-[36px] md:h-[40px] items-center rounded-full border border-border/[0.08] bg-foreground/[0.08] p-[3px] md:p-[4px] transition-all duration-200 hover:bg-foreground/[0.1]"
    >
      <span
        className="absolute top-[3px] md:top-[4px] h-[calc(100%-6px)] md:h-[calc(100%-8px)] rounded-full bg-yellow-400 transition-all duration-300 ease-[cubic-bezier(.34,1.56,.64,1)] shadow-[0_1px_4px_rgba(255,200,0,0.3)]"
        style={{
          left:  mode === "client" ? "3px" : "calc(50% + 1px)",
          width: "calc(50% - 4px)",
        }}
        aria-hidden="true"
      />
      {(["client", "recruiter"] as const).map((m) => {
        const active = mode === m;
        return (
          <span
            key={m}
            className={cn(
              "relative z-10 flex items-center justify-center gap-1 md:gap-1.5 px-[10px] md:px-[14px] text-[9px] md:text-[10px] font-bold uppercase tracking-[0.14em] transition-colors duration-200 whitespace-nowrap",
              active ? "text-black" : "text-foreground/75",
            )}
          >
            {m === "client"
              ? <><Sparkles className="h-2.5 w-2.5" />Cliente</>
              : <><Briefcase className="h-2.5 w-2.5" />Recrutador</>
            }
          </span>
        );
      })}
    </button>
  );
}

/* ── Theme Toggle Responsivo ── */
function ThemeToggle({ theme, onToggle }: { theme: string; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      aria-label="Alternar tema"
      className={cn(
        "grid h-[36px] w-[36px] md:h-[40px] md:w-[40px] place-items-center rounded-xl transition-all duration-200 shrink-0",
        "border border-border/[0.1] bg-foreground/[0.06]",
        "hover:bg-yellow-400/10 hover:border-yellow-400/40 text-foreground/85 hover:text-foreground",
      )}
    >
      {theme === "dark"
        ? <Sun  className="h-3.5 w-3.5 md:h-4 md:w-4 text-yellow-300" />
        : <Moon className="h-3.5 w-3.5 md:h-4 md:w-4 text-foreground/90" />
      }
    </button>
  );
}

/* ── Header Unificado ── */
export function Header() {
  const { mode, toggle, theme, toggleTheme } = useMode();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = mode === "client" ? clientLinks : recruiterLinks;

  return (
    <header
      className={cn(
        "hidden md:block fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/[0.15] bg-background/90 backdrop-blur-3xl shadow-[0_4px_32px_-4px_rgba(0,0,0,0.3)] py-3 md:py-3"
          : "py-4 md:py-5 bg-transparent",
      )}
    >
      {/* Linha dourada de acento no topo - visível nos dois modos */}
      {scrolled && (
        <div
          className="absolute inset-x-0 top-0 h-[1.5px]"
          style={{
            background: theme === "dark"
              ? "linear-gradient(90deg,transparent 0%,rgba(255,200,0,.6) 30%,rgba(255,220,0,1) 50%,rgba(255,200,0,.6) 70%,transparent 100%)"
              : "linear-gradient(90deg,transparent 0%,rgba(200,140,0,.5) 30%,rgba(255,180,0,.9) 50%,rgba(200,140,0,.5) 70%,transparent 100%)",
          }}
          aria-hidden="true"
        />
      )}

      {/* Ajuste de padding para mobile (px-4) e desktop (px-8) */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 md:gap-6 md:px-8">
        
        <Logo />

        {/* Escondido no mobile, aparece no md */}
        <nav className="hidden md:flex items-center gap-[28px]">
          {links.map((l) => <NavLink key={l.href} {...l} />)}
        </nav>

        {/* Botões visíveis em ambas as telas */}
        <div className="flex items-center gap-2 md:gap-[10px]">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <ModeToggle mode={mode} onToggle={toggle} />
        </div>

      </div>
    </header>
  );
}