import { useEffect, useState } from "react";
import { Home, Layers, Calculator, FolderKanban, MessageCircle, Briefcase, Sparkles, Download, Sun, Moon } from "lucide-react";
import { useMode } from "./ModeContext";
import { PROFILE } from "./data";
import { cn } from "@/lib/utils";

const clientItems = [
  { id: "top", label: "Início", icon: Home },
  { id: "servicos", label: "Serviços", icon: Layers },
  { id: "calculadora", label: "Estimar", icon: Calculator, highlight: true },
  { id: "projetos", label: "Projetos", icon: FolderKanban },
  { id: "contato", label: "Contato", icon: MessageCircle },
];

const recruiterItems = [
  { id: "top", label: "Início", icon: Home },
  { id: "sobre", label: "Sobre", icon: Sparkles },
  { id: "stack", label: "Stack", icon: Layers, highlight: true },
  { id: "projetos", label: "Projetos", icon: FolderKanban },
  { id: "contato", label: "Contato", icon: MessageCircle },
];

export function MobileNav() {
  const { mode, toggle, openBriefing, theme, toggleTheme } = useMode();
  const [active, setActive] = useState("top");

  const items = mode === "client" ? clientItems : recruiterItems;

  useEffect(() => {
    const onScroll = () => {
      let current = "top";
      for (const it of items) {
        const el = document.getElementById(it.id);
        if (el && el.getBoundingClientRect().top <= 120) current = it.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  return (
    <>
      {/* Mobile top compact bar */}
      <div className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-border/60 bg-background/85 px-4 py-3 backdrop-blur-xl md:hidden">
        <a href="#top" className="flex items-center">
          <img
            src="/logo-1.png"
            alt="Leonardo Pires"
            className="h-9 w-auto"
          />
        </a>
        <div className="flex items-center gap-2">
          {/* Toggle tema */}
          <button
            onClick={toggleTheme}
            aria-label="Alternar tema"
            className="grid h-8 w-8 place-items-center rounded-xl border border-border/60 bg-foreground/[0.06] text-foreground/80"
          >
            {theme === "dark"
              ? <Sun className="h-3.5 w-3.5 text-yellow-300" />
              : <Moon className="h-3.5 w-3.5" />
            }
          </button>
          {/* Toggle modo */}
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em]"
          >
            {mode === "client" ? (
              <><Sparkles className="h-3 w-3 text-yellow" /> Cliente</>
            ) : (
              <><Briefcase className="h-3 w-3 text-yellow" /> Recrutador</>
            )}
          </button>
        </div>
      </div>

      {/* Bottom nav */}
      <nav
        className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-xl md:hidden"
      >
        <ul className="mx-auto flex max-w-md items-end justify-around">
          {items.map((it) => {
            const Icon = it.icon;
            const isActive = active === it.id;
            return (
              <li key={it.id} className="flex-1">
                <a
                  href={`#${it.id}`}
                  className={cn(
                    "group relative flex flex-col items-center gap-1 rounded-xl px-2 py-1.5 transition",
                    isActive && "text-yellow",
                  )}
                >
                  {it.highlight && (
                    <span className="absolute -top-4 grid h-12 w-12 place-items-center rounded-full bg-yellow text-yellow-foreground shadow-[0_8px_24px_-6px_rgba(231,252,0,0.6)]">
                      <Icon className="h-5 w-5" />
                    </span>
                  )}
                  {!it.highlight && (
                    <Icon className={cn("h-5 w-5 transition", isActive ? "text-yellow" : "text-muted-foreground")} />
                  )}
                  <span className={cn(
                    "text-[10px] font-semibold",
                    it.highlight && "mt-7",
                    isActive ? "text-foreground" : "text-muted-foreground",
                  )}>
                    {it.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Floating CTA above bottom nav (mobile) */}
      <div className="fixed bottom-[5.5rem] right-4 z-40 md:hidden">
        {mode === "client" ? (
          <button
            onClick={openBriefing}
            className="flex h-12 items-center gap-2 rounded-full bg-yellow px-5 text-xs font-bold uppercase tracking-[0.15em] text-yellow-foreground shadow-glow"
          >
            <MessageCircle className="h-4 w-4" /> Orçamento
          </button>
        ) : (
          <a
            href={PROFILE.cv}
            download
            className="flex h-12 items-center gap-2 rounded-full bg-yellow px-5 text-xs font-bold uppercase tracking-[0.15em] text-yellow-foreground shadow-glow"
          >
            <Download className="h-4 w-4" /> CV
          </a>
        )}
      </div>
    </>
  );
}