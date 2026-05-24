import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Mode = "client" | "recruiter";

type Ctx = {
  mode: Mode;
  setMode: (m: Mode) => void;
  toggle: () => void;
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
  const [briefingOpen, setBriefingOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<string | null>(null);

  useEffect(() => {
    const saved = typeof window !== "undefined" && localStorage.getItem("portfolio-mode");
    if (saved === "recruiter" || saved === "client") setModeState(saved);
  }, []);

  const setMode = (m: Mode) => {
    setModeState(m);
    if (typeof window !== "undefined") localStorage.setItem("portfolio-mode", m);
  };

  return (
    <ModeCtx.Provider
      value={{
        mode,
        setMode,
        toggle: () => setMode(mode === "client" ? "recruiter" : "client"),
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
