import { ReactNode } from "react";

type LiquidButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  download?: boolean;
  icon?: ReactNode;
};

export function LiquidButton({
  children,
  onClick,
  href,
  download,
  icon,
}: LiquidButtonProps) {
  const content = (
    <>
      {/* Borda suminagashi */}
      <div className="absolute inset-0 rounded-full overflow-hidden p-[1.5px]">

        {/* máscara da borda */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "1.5px",
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-cover scale-125"
          >
            <source src="/0526.mp4" type="video/mp4" />
          </video>
        </div>

        {/* glow suave */}
        <div className="absolute inset-0 rounded-full bg-yellow/10 blur-md" />
      </div>

      {/* conteúdo */}
      <span className="relative z-10 inline-flex items-center gap-2">
        {icon}
        {children}
      </span>
    </>
  );

  const classes =
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-black/80 backdrop-blur-xl px-6 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-yellow transition duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(231,252,0,0.18)]";

  if (href) {
    return (
      <a
        href={href}
        download={download}
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={classes}
    >
      {content}
    </button>
  );
}