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

export type Project = {
  slug: string;
  title: string;
  client: string;
  tag: string;
  cover: string;
  url?: string;
  problem: string;
  goal: string;
  delivered: string[];
  stack: string[];
  results: string[];
  challenges: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "kamila-pontes",
    title: "Landing Page",
    client: "Kamila Pontes — Psicóloga",
    tag: "Saúde / Conversão",
    cover: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80&auto=format&fit=crop",
    url: "https://psikamilapontes.com/",
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
    slug: "anjos-advogados",
    title: "Site Institucional",
    client: "Anjos Advogados Associados",
    tag: "Jurídico / Autoridade",
    cover: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1200&q=80&auto=format&fit=crop",
    url: "https://leonardo-piresf.github.io/Site-Anjos_Advogados_Associados/",
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
    slug: "julia-figueiredo",
    title: "Portfólio",
    client: "Júlia Figueiredo",
    tag: "Criativo / Portfólio",
    cover: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1200&q=80&auto=format&fit=crop",
    url: "https://portfolio-julia-figueiredo.vercel.app/",
    problem: "Profissional criativa precisava de um portfólio que apresentasse vídeos e pacotes de serviço com sofisticação.",
    goal: "Criar uma vitrine editorial que destaque o trabalho audiovisual e facilite a contratação.",
    delivered: [
      "Portfólio com vídeos embedados",
      "Pacotes de serviço estruturados",
      "Visual editorial sofisticado",
      "Contato direto integrado",
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "Vercel"],
    results: [
      "Site usado como apresentação para clientes premium",
      "Aumento de credibilidade na negociação",
    ],
    challenges: "Conciliar peso visual editorial com performance e tempos de carregamento de vídeo.",
  },
  {
    slug: "kidelicia",
    title: "Protótipo",
    client: "KiDelicia (conceitual)",
    tag: "E-commerce / Estudo",
    cover: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1200&q=80&auto=format&fit=crop",
    url: "https://leonardo-piresf.github.io/Site-KiDelicia/",
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
    slug: "mandala",
    title: "Landing Page",
    client: "Agência Mandala",
    tag: "Marketing / Remake",
    cover: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&q=80&auto=format&fit=crop",
    url: "https://www.agenciamandala.online/",
    problem: "Agência com site visualmente datado, perdendo oportunidades na primeira impressão.",
    goal: "Remake visual completo mantendo o conteúdo estratégico do site anterior.",
    delivered: [
      "Identidade visual modernizada",
      "Estrutura de conteúdo preservada",
      "Performance otimizada",
    ],
    stack: ["HTML5", "CSS3", "JavaScript"],
    results: ["Percepção de marca renovada"],
    challenges: "Equilibrar o legado de conteúdo com uma direção visual nova.",
  },
  {
    slug: "advanced-fighting",
    title: "Landing Page",
    client: "C.T Advanced Fighting",
    tag: "Esporte / Apresentação",
    cover: "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=1200&q=80&auto=format&fit=crop",
    url: "https://site-advanced-fighting.vercel.app/",
    problem: "Centro de treinamento sem material digital profissional para apresentação a alunos e parceiros.",
    goal: "Posicionar o negócio com presença digital moderna e energética.",
    delivered: [
      "Landing page de apresentação",
      "Seções de modalidades e estrutura",
      "Contato direto integrado",
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "Vercel"],
    results: ["Material profissional para divulgação"],
    challenges: "Transmitir energia esportiva sem comprometer legibilidade.",
  },
];

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
