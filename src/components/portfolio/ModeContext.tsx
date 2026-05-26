import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Mode = "client" | "recruiter";
export type Theme = "dark" | "light";

type Ctx = {
  mode: Mode;
  setMode: (m: Mode) => void;
  toggle: () => void;
  theme: Theme;
  toggleTheme: () => void;
  openBriefing: () => void;
  briefingOpen: boolean;
  setBriefingOpen: (v: boolean) => void;
  openProject: (slug: string) => void;
  activeProject: string | null;
  closeProject: () => void;
};

const ModeCtx = createContext<Ctx | null>(null);

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<Mode>("client");
  const [theme, setThemeState] = useState<Theme>("dark");
  const [briefingOpen, setBriefingOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<string | null>(null);

  useEffect(() => {
    const savedMode = typeof window !== "undefined" && localStorage.getItem("portfolio-mode");
    if (savedMode === "recruiter" || savedMode === "client") setModeState(savedMode);

    const savedTheme = typeof window !== "undefined" && localStorage.getItem("portfolio-theme");
    const t: Theme = savedTheme === "light" ? "light" : "dark";
    setThemeState(t);
    applyTheme(t);
  }, []);

  function applyTheme(t: Theme) {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(t);
  }

  const setMode = (m: Mode) => {
    setModeState(m);
    if (typeof window !== "undefined") localStorage.setItem("portfolio-mode", m);
  };

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setThemeState(next);
    applyTheme(next);
    if (typeof window !== "undefined") localStorage.setItem("portfolio-theme", next);
  };

  return (
    <ModeCtx.Provider
      value={{
        mode,
        setMode,
        toggle: () => setMode(mode === "client" ? "recruiter" : "client"),
        theme,
        toggleTheme,
        openBriefing: () => setBriefingOpen(true),
        briefingOpen,
        setBriefingOpen,
        openProject: (slug) => setActiveProject(slug),
        activeProject,
        closeProject: () => setActiveProject(null),
      }}
    >
      {children}
    </ModeCtx.Provider>
  );
}

export function useMode() {
  const ctx = useContext(ModeCtx);
  if (!ctx) throw new Error("useMode must be used within ModeProvider");
  return ctx;
}