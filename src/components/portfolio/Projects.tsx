import { useState } from "react";
import { ArrowUpRight, ArrowRight, ExternalLink, X } from "lucide-react";
import { PROJECTS, type Project } from "./data";
import { useMode } from "./ModeContext";
import { SectionHeader } from "./Services";

export function Projects() {
  const { openProject, activeProject, closeProject } = useMode();
  const project = PROJECTS.find((p) => p.slug === activeProject) || null;

  return (
    <section id="projetos" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader eyebrow="Projetos recentes" title="RESULTADOS QUE FALAM" />
          <a
            href="#contato"
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground transition hover:text-yellow"
          >
            Quer ver mais? Fala comigo <ArrowRight className="h-3 w-3" />
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <button
              key={p.slug}
              onClick={() => openProject(p.slug)}
              className="group relative block overflow-hidden rounded-2xl border border-border bg-card text-left transition hover:-translate-y-1 hover:border-yellow/60 hover:shadow-card"
              style={{ animation: `float-up 0.6s ease-out ${i * 0.05}s both` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                <img
                  src={p.cover}
                  alt={p.client}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent opacity-80" />
                <span className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] backdrop-blur">
                  {p.tag}
                </span>
              </div>
              <div className="flex items-start justify-between gap-4 p-6">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{p.title}</p>
                  <h3 className="mt-1 font-display text-3xl leading-tight">{p.client}</h3>
                </div>
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-surface text-foreground transition group-hover:bg-yellow group-hover:text-yellow-foreground">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <ProjectModal project={project} onClose={closeProject} />
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[120] flex items-stretch justify-center bg-black/80 px-0 backdrop-blur-sm md:items-center md:px-6 md:py-10"
      onClick={onClose}
      role="dialog"
      aria-modal
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex w-full max-w-4xl flex-col overflow-hidden bg-background md:max-h-[90vh] md:rounded-3xl md:border md:border-border"
        style={{ animation: "float-up 0.4s ease-out both" }}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur transition hover:bg-yellow hover:text-yellow-foreground"
          aria-label="Fechar"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="overflow-y-auto">
          <div className="relative aspect-[16/9] overflow-hidden bg-surface">
            <img src={project.cover} alt={project.client} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <span className="rounded-full bg-yellow/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-yellow">
                {project.tag}
              </span>
              <h2 className="mt-3 font-display text-4xl md:text-6xl">{project.client}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{project.title}</p>
            </div>
          </div>

          <div className="space-y-10 p-6 md:p-10">
            <Block label="Problema do cliente">{project.problem}</Block>
            <Block label="Objetivo do projeto">{project.goal}</Block>

            <div>
              <Label>O que foi desenvolvido</Label>
              <ul className="mt-4 grid gap-3 md:grid-cols-2">
                {project.delivered.map((d) => (
                  <li key={d} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-sm">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow" /> {d}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Label>Tecnologias utilizadas</Label>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <span key={t} className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <Label>Resultados alcançados</Label>
              <ul className="mt-4 space-y-2">
                {project.results.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-sm text-foreground/90">
                    <span className="mt-1.5 h-1 w-3 shrink-0 bg-yellow" /> {r}
                  </li>
                ))}
              </ul>
            </div>

            <Block label="Desafios & soluções">{project.challenges}</Block>

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-yellow px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-yellow-foreground transition hover:opacity-90"
              >
                Ver projeto ao vivo <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-yellow">{children}</p>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <Label>{label}</Label>
      <p className="mt-3 text-base leading-relaxed text-foreground/90">{children}</p>
    </div>
  );
}
