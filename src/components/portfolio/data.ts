// ─── Types ────────────────────────────────────────────────────────────────────

export type ProjectType = "site" | "system";

// "clientes" aparece na aba de clientes, "recrutadores" na de recrutadores
export type ProjectAudience = "clientes" | "recrutadores";

export type SiteProject = {
  type: "site";
  slug: string;
  title: string;
  client: string;
  tag: string;
  cover: string;
  url?: string;
  audience: ProjectAudience[];
  problem: string;
  goal: string;
  delivered: string[];
  stack: string[];
  results: string[];
  challenges: string;
};

export type SystemProject = {
  type: "system";
  slug: string;
  title: string;
  subtitle: string; // ex: "CMS de Landing Pages"
  tag: string;
  audience: ProjectAudience[];
  teamProject?: boolean;
  inDevelopment?: boolean;
  repo?: string;
  // sem cover, sem url — CTA vai para WhatsApp
  description: string;   // parágrafo curto para o card
  delivered: string[];
  stack: string[];
};

export type Project = SiteProject | SystemProject;

// ─── Profile ──────────────────────────────────────────────────────────────────

export const PROFILE = {
  name: "Leonardo Pires",
  role: "Desenvolvedor Web",
  city: "Maceió, AL",
  email: "leonardopires.dev@gmail.com",
  whatsapp: "5575988472549",
  github: "https://github.com/Leonardo-PiresF",
  linkedin: "https://www.linkedin.com/in/leonardo-pires-dev/",
  cv: "/cv-leonardo-pires.pdf",
};

// Helper: gera link do WhatsApp com mensagem pré-preenchida
export function getWhatsappLink(projectTitle: string) {
  const msg = encodeURIComponent(
    `Olá Leonardo! Estou interessado em saber mais sobre o ${projectTitle}.`
  );
  return `https://wa.me/${PROFILE.whatsapp}?text=${msg}`;
}

// ─── Services ─────────────────────────────────────────────────────────────────

export type ServiceKey =
  | "landing"
  | "site"
  | "ecommerce"
  | "webapp"
  | "uiux"
  | "naosei";

export const SERVICES: { key: ServiceKey; label: string; desc: string }[] = [
  { key: "landing", label: "Landing Page", desc: "Página focada em conversão" },
  { key: "site", label: "Website Institucional", desc: "Presença digital completa" },
  { key: "ecommerce", label: "E-commerce", desc: "Loja virtual e checkout" },
  { key: "webapp", label: "Web App", desc: "Sistema sob medida" },
  { key: "uiux", label: "UI/UX Design", desc: "Interfaces e protótipos" },
  { key: "naosei", label: "Ainda não sei", desc: "Vamos descobrir juntos" },
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export const PROJECTS: Project[] = [

  // ── Sites (clientes + recrutadores) ────────────────────────────────────────

  {
    type: "site",
    slug: "kamila-pontes",
    title: "Landing Page",
    client: "Kamila Pontes | Psicóloga",
    tag: "Saúde",
    cover: "Capa Kamila.png",
    url: "https://psikamilapontes.com/",
    audience: ["clientes", "recrutadores"],
    problem: "Pacientes em potencial não encontravam um canal claro de agendamento e a profissional precisava qualificar contatos pelo WhatsApp.",
    goal: "Aumentar agendamentos via WhatsApp com uma página que transmita confiança, acolhimento e clareza sobre os serviços.",
    delivered: [
      "Landing page com tema claro/escuro dinâmico",
      "CTA estratégico de WhatsApp em pontos de decisão",
      "Seções de bio, especialidades e abordagem",
      "Performance e SEO básico configurados",
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    results: [
      "Aumento no volume de mensagens qualificadas",
      "Tempo de carregamento abaixo de 2s",
      "100% responsivo, testado em iOS e Android",
    ],
    challenges: "Equilibrar acolhimento visual com profissionalismo, sem cair em estética genérica do nicho.",
  },
  {
    type: "site",
    slug: "anjos-advogados",
    title: "Site Institucional",
    client: "Anjos Advogados Associados",
    tag: "Jurídico",
    cover: "Capa anjos advogados associados.png",
    url: "https://leonardo-piresf.github.io/Site-Anjos_Advogados_Associados/",
    audience: ["clientes", "recrutadores"],
    problem: "Escritório sem presença digital, perdendo credibilidade em buscas e indicações on-line.",
    goal: "Construir uma identidade digital sóbria e profissional que reforce autoridade e gere contatos qualificados.",
    delivered: [
      "Site institucional multi-seção",
      "Áreas de atuação detalhadas",
      "Formulário de contato direto",
      "Identidade visual aplicada com consistência",
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "AOS animations"],
    results: [
      "Presença digital profissional ativa",
      "Contatos consultivos recebidos via site",
      "Melhora na percepção de autoridade",
    ],
    challenges: "Traduzir formalidade do segmento jurídico em uma experiência moderna sem perder seriedade.",
  },
  {
    type: "site",
    slug: "belo-monte-sorveteria",
    title: "Site Institucional",
    client: "Belo Monte Sorveteria",
    tag: "Alimentício",
    cover: "/Capa-Belo-Monte.png",
    url: "https://site-belo-monte.vercel.app/",
    audience: ["clientes", "recrutadores"],
    problem: "Sorveteria com 7 unidades em Maceió não tinha presença digital para apresentar cardápio, localizar lojas e reforçar a marca artesanal.",
    goal: "Criar um site institucional que centralize cardápio, localização das lojas e a história da marca com visual leve e apetitoso.",
    delivered: [
      "Cardápio filtrável por categoria",
      "Página de lojas com mapas embedados",
      "Página sobre com valores e história da marca",
      "Design system com paleta e tipografia próprias",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Vercel"],
    results: [
      "Presença digital profissional para as 7 unidades",
      "Cardápio acessível sem depender de redes sociais",
    ],
    challenges: "Traduzir a identidade artesanal e acolhedora da marca em um sistema visual coeso, mantendo leveza e performance.",
  },
  {
    type: "site",
    slug: "kidelicia",
    title: "Protótipo",
    client: "KiDelicia",
    tag: "Estudo / Conceitual",
    cover: "capa-kidelicia.png",
    url: "https://leonardo-piresf.github.io/Site-KiDelicia/",
    audience: ["clientes", "recrutadores"],
    problem: "Redesign conceitual para repensar a apresentação de produtos e o funil de conversão.",
    goal: "Demonstrar capacidade de redesenhar uma marca real com foco em produto e conversão.",
    delivered: [
      "Redesign completo da home",
      "Vitrine de produtos repaginada",
      "Hierarquia visual mais clara",
    ],
    stack: ["HTML5", "CSS3", "JavaScript"],
    results: ["Case de estudo usado em portfólio"],
    challenges: "Manter identidade da marca enquanto se moderniza a experiência.",
  },
  {
    type: "site",
    slug: "mandala",
    title: "Landing Page",
    client: "Agência Mandala",
    tag: "Marketing / Remake",
    cover: "Capa-mandala.png",
    url: "https://www.agenciamandala.online/",
    audience: ["clientes", "recrutadores"],
    problem: "A agência precisava de uma presença digital mais alinhada ao nível atual da marca e dos serviços oferecidos.",
    goal: "Criar uma nova experiência visual mais moderna, estratégica e alinhada ao posicionamento da empresa.",
    delivered: [
      "Identidade visual modernizada",
      "Estrutura de conteúdo preservada",
      "Performance otimizada",
    ],
    stack: ["HTML5", "CSS3", "JavaScript"],
    results: ["Percepção de marca renovada"],
    challenges: "Modernizar a experiência sem perder elementos importantes da comunicação já existente.",
  },
  {
    type: "site",
    slug: "arturito",
    title: "Site Institucional",
    client: "Arturito Restaurante",
    tag: "Gastronomia / Conceito",
    cover: "Capa-Arturito.png",
    url: "https://site-arturito.lpferreira2003.workers.dev/",
    audience: ["clientes", "recrutadores"],
    problem: "A presença digital precisava refletir com mais precisão a atmosfera autoral, sensorial e sofisticada que tornou o Arturito uma referência gastronômica.",
    goal: "Desenvolver uma experiência digital imersiva capaz de transmitir o cuidado artesanal da marca, valorizando atmosfera, narrativa e identidade visual além da funcionalidade tradicional de um restaurante.",
    delivered: [
      "Direção visual editorial inspirada em revistas gastronômicas contemporâneas",
      "Arquitetura de múltiplas páginas com navegação fluída e conteúdo dedicado",
      "Animações sutis de entrada para reforçar ritmo e sofisticação",
      "Elementos gráficos e ilustrações integrados à identidade visual",
      "Estrutura dinâmica de menu e navegação por categorias",
      "Experiência responsiva otimizada para desktop e mobile",
    ],
    stack: ["React 19", "TanStack Router", "TypeScript", "Tailwind CSS v4", "Vite", "Cloudflare Pages"],
    results: [
      "Experiência digital alinhada ao posicionamento premium da marca",
      "Navegação construída para transmitir atmosfera antes mesmo da reserva",
      "Maior valorização visual do conceito gastronômico e editorial",
    ],
    challenges: "Traduzir sensações físicas como textura, iluminação e intimismo em uma experiência digital elegante e contemporânea, evitando clichês visuais comuns do segmento gastronômico.",
  },
  {
    type: "site",
    slug: "redacao-com-deniel",
    title: "Landing Page",
    client: "Curso Redação com Deniel",
    tag: "Educação / Protótipo",
    cover: "Capa-Deniel.png",
    url: "https://leonardo-piresf.github.io/Site-Redacao-com-Deniel/",
    audience: ["clientes", "recrutadores"],
    problem: "O professor precisava de uma página de captação que transmitisse credibilidade e urgência para estudantes do ENEM, sem parecer mais um curso genérico da internet.",
    goal: "Criar uma landing page com identidade visual própria, baseada na estética de caderno escolar, que tornasse o produto imediatamente reconhecível e gerasse conversão.",
    delivered: [
      "Identidade visual temática com textura de caderno (linhas e margem via CSS puro)",
      "Tipografia mista: display moderno (Lexend) + manuscrito (Caveat) para humanizar o conteúdo",
      "Seções completas: hero, métricas, método, prévia de aula e depoimentos",
      "Depoimentos estilizados como bilhetes/post-its com rotação e interação hover",
      "Foto do professor enquadrada como fotografia impressa com efeito físico",
    ],
    stack: ["HTML5", "CSS3", "Tailwind CSS", "Google Fonts"],
    results: [
      "Conceito visual diferenciado dentro do nicho de educação",
      "Protótipo pronto para implementação e testes de conversão",
    ],
    challenges: "Criar uma identidade consistente, a estética de caderno, que funcionasse como elemento de design e não como enfeite, mantendo a hierarquia visual e a clareza da proposta de valor.",
  },
  {
    type: "site",
    slug: "advanced-fighting",
    title: "Landing Page",
    client: "C.T Advanced Fighting",
    tag: "Concept / Esporte",
    cover: "capa-Advanced.png",
    url: "https://site-advanced-fighting.vercel.app/",
    audience: ["clientes", "recrutadores"],
    problem: "O centro de treinamento buscava uma presença digital mais forte para apresentar sua estrutura, modalidades e identidade esportiva.",
    goal: "Criar uma landing page moderna e energética, transmitindo profissionalismo e intensidade visual.",
    delivered: [
      "Landing page de apresentação",
      "Seções de modalidades e estrutura",
      "Contato direto integrado",
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "Vercel"],
    results: ["Proposta visual desenvolvida para fortalecer a presença digital da marca"],
    challenges: "Transmitir energia esportiva sem comprometer legibilidade e navegação.",
  },

  // ── Sistemas Web (clientes: 3 cards) ────────────────────────────────────────

  {
    type: "system",
    slug: "landingpro",
    title: "LandingPro",
    subtitle: "CMS de Landing Pages",
    tag: "PHP / MVC / Back-end",
    audience: ["clientes", "recrutadores"],
    teamProject: true,
    repo: "https://github.com/ephremmatheus/cms-php",
    description:
      "Sistema CMS para criação e gerenciamento de landing pages com painel administrativo, CRUDs completos e arquitetura MVC em PHP.",
    delivered: [
      "CRUDs para módulos de características, depoimentos e contatos",
      "Arquitetura MVC com separação em controllers, models e templates",
      "Integração com banco de dados relacional para conteúdo dinâmico",
      "Interface administrativa para gerenciamento de informações",
      "Renderização dinâmica de páginas e manipulação de formulários em PHP",
    ],
    stack: ["PHP", "HTML5", "CSS3", "MySQL", "MVC"],
  },
  {
    type: "system",
    slug: "fincontrol",
    title: "Fincontrol", // TODO: ajustar após análise do .zip
    subtitle: "TODO — aguardando .zip",
    tag: "TODO",
    audience: ["clientes", "recrutadores"],
    description: "TODO — preencher após análise do projeto.",
    delivered: [],
    stack: [],
  },
  {
    type: "system",
    slug: "ordens-de-servico",
    title: "Sistema de Ordens de Serviço",
    subtitle: "Gestão de OS para pequenos negócios",
    tag: "Flask / Python / Em desenvolvimento",
    audience: ["clientes", "recrutadores"],
    inDevelopment: true,
    description:
      "Sistema web para abertura, acompanhamento e encerramento de ordens de serviço, desenvolvido com Flask e banco de dados relacional.",
    delivered: [
      "Criação e gerenciamento de ordens de serviço",
      "Controle de status e histórico de atendimentos",
      "Estrutura MVC com Flask e integração com banco de dados",
    ],
    stack: ["Python", "Flask", "SQLite", "HTML5", "CSS3"],
  },

  // ── Sistemas Web (apenas recrutadores) ─────────────────────────────────────

  {
    type: "system",
    slug: "gestao-financeira-flask",
    title: "Sistema de Gestão Financeira",
    subtitle: "Controle de receitas e despesas",
    tag: "Python / Flask / Back-end",
    audience: ["recrutadores"],
    description:
      "CRUD completo para controle de receitas e despesas com rotas, regras de negócio e persistência via banco de dados relacional, organizado em padrão MVC.",
    delivered: [
      "CRUD completo de receitas e despesas",
      "Estruturação de rotas e regras de negócio com Flask",
      "Integração com banco de dados relacional",
      "Organização do projeto seguindo padrão MVC",
    ],
    stack: ["Python", "Flask", "SQLite", "MVC"],
  },
  {
    type: "system",
    slug: "gerenciamento-livros",
    title: "Sistema de Gerenciamento de Livros",
    subtitle: "CRUD com Django ORM",
    tag: "Python / Django / Back-end",
    audience: ["recrutadores"],
    description:
      "Aplicação Django para cadastro e gerenciamento de livros com ORM, modelos, views e rotas estruturados com foco em legibilidade e manutenibilidade.",
    delivered: [
      "CRUD para cadastro e gerenciamento de livros",
      "Uso do ORM do Django para manipulação de dados",
      "Criação de modelos, views e rotas",
      "Foco em organização, legibilidade e manutenção do código",
    ],
    stack: ["Python", "Django", "SQLite"],
  },
  {
    type: "system",
    slug: "api-github",
    title: "Projeto API GitHub",
    subtitle: "Consumo e tratamento de API REST",
    tag: "Python / API REST",
    audience: ["recrutadores"],
    description:
      "Conexão com a API pública do GitHub via HTTP, extração e tratamento de dados JSON e classificação de repositórios por estrelas.",
    delivered: [
      "Conexão com a API pública do GitHub via requests",
      "Tratamento e manipulação de JSON para extrair dados relevantes",
      "Lógica para classificar repositórios por número de estrelas",
      "Entendimento de métodos HTTP e fluxo cliente-servidor",
    ],
    stack: ["Python", "requests", "JSON", "REST API"],
  },
  {
    type: "system",
    slug: "coinctrl",
    title: "COINctrl",
    subtitle: "Sistema de Controle Financeiro",
    tag: "Back-end / Trabalho em Equipe",
    audience: ["recrutadores"],
    teamProject: true,
    repo: "https://github.com/luccaborelladev/COINctrl",
    description:
      "Sistema back-end colaborativo para controle financeiro, com foco em versionamento com Git, leitura de código existente e resolução de problemas reais em equipe.",
    delivered: [
      "Implementação e manutenção de regras de negócio em equipe",
      "Uso de Git e GitHub para versionamento e integração de código",
      "Leitura e extensão de código existente",
      "Resolução de problemas reais em contexto colaborativo",
    ],
    stack: ["Git", "GitHub", "Back-end"],
  },
];

// ─── Helpers de filtragem ──────────────────────────────────────────────────────

export const getSiteProjects = (audience: ProjectAudience) =>
  PROJECTS.filter(
    (p): p is SiteProject => p.type === "site" && p.audience.includes(audience)
  );

export const getSystemProjects = (audience: ProjectAudience) =>
  PROJECTS.filter(
    (p): p is SystemProject => p.type === "system" && p.audience.includes(audience)
  );

// ─── Stack & FAQs (inalterados) ────────────────────────────────────────────────

export const STACK_GROUPS = [
  {
    label: "Front-end",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "TanStack Router", "Tailwind CSS"],
  },
  {
    label: "Back-end & Dados",
    items: ["Node.js", "Supabase", "PostgreSQL", "REST APIs"],
  },
  {
    label: "Ferramentas & Workflow",
    items: ["Git", "GitHub", "Vite", "Figma", "Vercel", "VS Code"],
  },
  {
    label: "Em estudo",
    items: ["Next.js", "Prisma", "Testes automatizados"],
  },
];

export const FAQS = [
  {
    q: "Quanto custa um site?",
    a: "O valor depende do tipo de projeto e das funcionalidades. Landing pages a partir de R$ 600 e sites institucionais completos a partir de R$ 1.200. Use a calculadora acima para ter uma estimativa em tempo real.",
  },
  {
    q: "Em quanto tempo fica pronto?",
    a: "Uma landing page leva em média 5–10 dias úteis após aprovação do briefing. Sites institucionais entre 2 e 4 semanas. O prazo exato fica definido na proposta.",
  },
  {
    q: "Preciso ter domínio e hospedagem?",
    a: "Sim, para publicar o site você precisa de domínio e hospedagem. Posso orientar sobre as melhores opções e, se quiser, cuido da publicação sem custo adicional.",
  },
  {
    q: "Consigo editar o site depois?",
    a: "Sim. Entrego o código organizado para edições simples (textos, imagens, cores). Para alterações maiores, faço via contrato de manutenção avulso.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Normalmente 40% na aprovação da proposta e 60% na entrega. Aceito Pix. Para projetos maiores, posso parcelar em até 3x sem juros.",
  },
];