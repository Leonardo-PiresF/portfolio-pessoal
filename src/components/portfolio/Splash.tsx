import { useEffect, useState } from "react";

export function Splash() {
  const [gone, setGone] = useState(false);
  const [hide, setHide] = useState(false);
  useEffect(() => {
    const t1 = setTimeout(() => setHide(true), 1100);
    const t2 = setTimeout(() => setGone(true), 1700);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);
  if (gone) return null;
  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-background transition-opacity duration-500"
      style={{ opacity: hide ? 0 : 1, pointerEvents: hide ? "none" : "auto" }}
      aria-hidden
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          {/* Logo no lugar do LP. */}
          <img
            src="/logo-1.png"
            alt="Leonardo Pires"
            className="h-16 sm:h-20 w-auto"
          />
          <div className="absolute -inset-4 -z-10 rounded-full bg-yellow/20 blur-2xl" />
        </div>
        <div className="h-[2px] w-40 overflow-hidden rounded-full bg-surface">
          <div
            className="h-full bg-yellow"
            style={{ animation: "splash-bar 1.1s cubic-bezier(.4,0,.2,1) forwards" }}
          />
        </div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Leonardo Pires · Dev
        </p>
      </div>
      <style>{`@keyframes splash-bar { from { width: 0% } to { width: 100% } }`}</style>
    </div>
  );
}