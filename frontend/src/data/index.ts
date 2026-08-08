import type {
  Demand,
  BlindProfile,
  MatchDetail,
  ActivityItem,
  PipelineCard,
  CompanyStats,
  DeepeningQuestion,
  AIInterpretation,
} from '../types';

// ============================================================
// Mock Data for WHO Platform Company Flow
// ============================================================

export const mockCompanyStats: CompanyStats = {
  activedemands: 3,
  totalMatches: 12,
  interviewsScheduled: 2,
  hires: 1,
};

export const mockDemands: Demand[] = [
  {
    id: 'demand-001',
    title: 'Técnico em CLP para diagnóstico de falha em motores',
    area: 'Automação Industrial',
    description:
      'Preciso de um profissional que consiga diagnosticar e resolver um problema de acionamento de motores trifásicos controlados por CLP Siemens S7-1200. Os motores estão falhando intermitentemente e a linha de produção está parando.',
    rawInput:
      'Minha linha está parando porque três motores não estão sendo acionados corretamente pelo mesmo CLP...',
    inputMethod: 'audio',
    skills: ['Programação CLP', 'Siemens S7-1200', 'Diagnóstico de falhas', 'Comandos elétricos', 'Motores trifásicos'],
    urgency: 'alta',
    modality: 'presencial',
    status: 'ativa',
    createdAt: '2026-07-10T14:30:00Z',
    matchCount: 4,
    additionalDetails: {
      modelo_clp: 'Siemens S7-1200',
      tipo_motor: 'Trifásico 5CV',
      inversor: 'Sim, WEG CFW500',
      prazo: '1 semana',
    },
  },
  {
    id: 'demand-002',
    title: 'Soldador TIG para tubulação de aço inox',
    area: 'Soldagem Industrial',
    description:
      'Necessito de um soldador TIG experiente para execução de soldas em tubulação de aço inox 304 em ambiente farmacêutico.',
    rawInput: 'Preciso de soldador TIG para tubulação de inox na área limpa...',
    inputMethod: 'text',
    skills: ['Soldagem TIG', 'Aço Inox 304', 'Normas farmacêuticas', 'Leitura de isométricos'],
    urgency: 'média',
    modality: 'presencial',
    status: 'ativa',
    createdAt: '2026-07-08T09:15:00Z',
    matchCount: 3,
  },
  {
    id: 'demand-003',
    title: 'Eletricista para adequação de painel NR-10',
    area: 'Instalações Elétricas',
    description:
      'Preciso de um eletricista com NR-10 para adequação de painéis elétricos conforme norma vigente.',
    rawInput: 'Os painéis da fábrica precisam ser adequados à NR-10...',
    inputMethod: 'audio',
    skills: ['NR-10', 'Painéis elétricos', 'Leitura de diagramas', 'SEP'],
    urgency: 'baixa',
    modality: 'presencial',
    status: 'processando',
    createdAt: '2026-07-11T10:00:00Z',
    matchCount: 0,
  },
];

export const mockAIInterpretation: AIInterpretation = {
  area: 'Automação Industrial',
  mainProblem: 'Falha no acionamento de motores trifásicos via CLP Siemens S7-1200',
  requiredSkills: [
    'Programação de CLP',
    'Diagnóstico de falhas elétricas',
    'Comandos elétricos',
    'Motores trifásicos',
    'Inversores de frequência',
  ],
  summary:
    'Entendi que você precisa de um profissional capaz de diagnosticar e corrigir falhas intermitentes no acionamento de motores trifásicos controlados por um CLP Siemens S7-1200, que estão causando paradas na linha de produção.',
};

export const mockDeepeningQuestions: DeepeningQuestion[] = [
  {
    id: 'q1',
    question: 'Qual é o modelo exato do CLP utilizado?',
    options: ['Siemens S7-1200', 'Siemens S7-1500', 'Allen-Bradley', 'Outro'],
  },
  {
    id: 'q2',
    question: 'Os motores são trifásicos ou monofásicos?',
    options: ['Trifásicos', 'Monofásicos', 'Ambos'],
  },
  {
    id: 'q3',
    question: 'Há algum inversor de frequência envolvido no circuito?',
    options: ['Sim', 'Não', 'Não tenho certeza'],
  },
  {
    id: 'q4',
    question: 'Qual é o prazo ideal para resolver esse problema?',
    options: ['Urgente (dias)', '1 semana', '2 semanas', '1 mês'],
  },
  {
    id: 'q5',
    question: 'Precisa de alguém presencial ou o trabalho pode ser remoto?',
    options: ['Presencial', 'Remoto', 'Híbrido'],
  },
];

export const mockBlindProfiles: BlindProfile[] = [
  {
    id: 'profile-001',
    profileNumber: 1,
    matchScore: 94,
    skills: ['Programação CLP', 'Siemens S7-1200', 'TIA Portal', 'Diagnóstico de falhas', 'Motores trifásicos'],
    tools: ['TIA Portal V17', 'Multímetro Fluke', 'Osciloscópio', 'STEP 7'],
    strengths: [
      'Demonstrou profundo conhecimento em diagnóstico de falhas em CLPs Siemens',
      'Comunicação clara e metódica na explicação dos procedimentos',
      'Experiência comprovada com inversores de frequência WEG',
    ],
    limitations: [
      'Disponibilidade apenas a partir da próxima semana',
      'Não mencionou experiência com redes Profinet',
    ],
    evidenceExcerpt:
      '"Neste caso, o primeiro passo seria verificar as saídas digitais do CLP no TIA Portal, monitorando os sinais em tempo real. Se as saídas estão ativando mas o contator não fecha, o problema pode estar no circuito de comando..."',
    matchJustification:
      'Este perfil apresenta alta aderência técnica à demanda. O candidato demonstrou em vídeo conhecimento prático com o modelo exato de CLP mencionado (S7-1200) e experiência com diagnóstico de falhas em motores trifásicos, incluindo trabalho com inversores WEG.',
    scores: {
      aderenciaTecnica: 96,
      seguranca: 88,
      comunicacao: 92,
      precisao: 94,
      velocidade: 85,
      inovacao: 78,
      ferramentas: 95,
      disponibilidade: 70,
    },
    isRevealed: false,
    isSaved: false,
    pipelineStage: 'recomendado',
    talentName: 'Carlos Eduardo Santos',
    talentAvatar: '',
  },
  {
    id: 'profile-002',
    profileNumber: 2,
    matchScore: 87,
    skills: ['Programação CLP', 'Allen-Bradley', 'Siemens', 'Manutenção preventiva', 'Comandos elétricos'],
    tools: ['TIA Portal', 'RSLogix 5000', 'AutoCAD Electrical', 'Megômetro'],
    strengths: [
      'Ampla experiência em manutenção industrial com múltiplas marcas de CLP',
      'Abordagem sistemática para resolução de problemas',
    ],
    limitations: [
      'Maior experiência com Allen-Bradley do que com Siemens',
      'Vídeo demonstrou mais teoria que prática aplicada',
    ],
    evidenceExcerpt:
      '"Para um problema de acionamento intermitente, eu faria uma análise do circuito de potência e comando separadamente, verificando primeiro se o sinal de saída do CLP está chegando na bobina do contator..."',
    matchJustification:
      'Perfil versátil com experiência em múltiplas plataformas de CLP. Embora tenha mais afinidade com Allen-Bradley, demonstrou conhecimento sólido dos princípios aplicáveis ao S7-1200.',
    scores: {
      aderenciaTecnica: 82,
      seguranca: 92,
      comunicacao: 88,
      precisao: 85,
      velocidade: 80,
      inovacao: 84,
      ferramentas: 80,
      disponibilidade: 90,
    },
    isRevealed: false,
    isSaved: false,
    pipelineStage: 'recomendado',
    talentName: 'Ana Beatriz Lima',
    talentAvatar: '',
  },
  {
    id: 'profile-003',
    profileNumber: 3,
    matchScore: 82,
    skills: ['Automação Industrial', 'CLP Siemens', 'Inversores WEG', 'Redes industriais', 'Instrumentação'],
    tools: ['TIA Portal V16', 'WEG Superdrive', 'Fluke 87V', 'Profinet'],
    strengths: [
      'Especialista em inversores de frequência WEG, exatamente o modelo citado',
      'Conhecimento forte em redes industriais Profinet',
      'Disponibilidade imediata',
    ],
    limitations: ['Comunicação poderia ser mais detalhada nas explicações técnicas'],
    evidenceExcerpt:
      '"Já trabalhei com esse exato cenário: CLP S7-1200 com saídas para acionamento via inversor CFW500. O problema mais comum é a parametrização da rampa de aceleração junto com a lógica do CLP..."',
    matchJustification:
      'Destaque para a experiência específica com o inversor WEG CFW500, mencionado pelo contratante. Apesar de menor score geral, a especialização exata pode ser um diferencial decisivo.',
    scores: {
      aderenciaTecnica: 85,
      seguranca: 80,
      comunicacao: 72,
      precisao: 84,
      velocidade: 90,
      inovacao: 88,
      ferramentas: 90,
      disponibilidade: 95,
    },
    isRevealed: false,
    isSaved: true,
    pipelineStage: 'recomendado',
    talentName: 'Roberto Nascimento',
    talentAvatar: '',
  },
  {
    id: 'profile-004',
    profileNumber: 4,
    matchScore: 75,
    skills: ['Eletrotécnica', 'Comandos elétricos', 'CLP básico', 'Manutenção corretiva', 'NR-10'],
    tools: ['Multímetro', 'Alicate amperímetro', 'Megômetro', 'TIA Portal básico'],
    strengths: [
      'Forte conhecimento em circuitos de comando e potência',
      'Certificação NR-10 atualizada',
    ],
    limitations: [
      'Experiência com CLP é mais básica comparada aos outros perfis',
      'Não demonstrou experiência com inversores de frequência',
    ],
    evidenceExcerpt:
      '"Minha abordagem seria primeiro verificar todo o circuito de comando, desde o relé térmico até o contator, usando o multímetro para checar continuidade e o alicate amperímetro para verificar o consumo do motor..."',
    matchJustification:
      'Perfil com base sólida em eletrotécnica e comandos elétricos. Pode complementar a resolução do problema pelo lado do circuito de potência, embora precise de apoio na parte de programação do CLP.',
    scores: {
      aderenciaTecnica: 68,
      seguranca: 95,
      comunicacao: 82,
      precisao: 78,
      velocidade: 75,
      inovacao: 65,
      ferramentas: 72,
      disponibilidade: 88,
    },
    isRevealed: false,
    isSaved: false,
    pipelineStage: 'recomendado',
    talentName: 'Fernanda Oliveira',
    talentAvatar: '',
  },
];

export const mockMatchDetail: MatchDetail = {
  ...mockBlindProfiles[0],
  demandSummary:
    'Técnico em CLP para diagnosticar e resolver falha intermitente no acionamento de motores trifásicos controlados por CLP Siemens S7-1200.',
  aiJustificationParagraph:
    'Após análise detalhada do vídeo-demonstração e cruzamento com os requisitos da demanda, este perfil se destaca como a melhor correspondência. O candidato demonstrou domínio prático do TIA Portal V17, realizando em vídeo um diagnóstico ao vivo de um cenário similar ao descrito — falha de acionamento em motor trifásico via CLP S7-1200. Sua abordagem metódica, iniciando pela verificação das saídas digitais e seguindo até o circuito de comando, evidencia experiência real e não apenas conhecimento teórico. A comunicação clara e a organização do raciocínio são pontos fortes adicionais que facilitariam a interação com a equipe de manutenção da empresa.',
  compatibleSkills: [
    { skill: 'Programação CLP', matched: true },
    { skill: 'Siemens S7-1200', matched: true },
    { skill: 'Diagnóstico de falhas', matched: true },
    { skill: 'Comandos elétricos', matched: true },
    { skill: 'Motores trifásicos', matched: true },
    { skill: 'Inversores de frequência', matched: true },
    { skill: 'Redes Profinet', matched: false },
  ],
  evidenceQuotes: [
    '"Neste caso, o primeiro passo seria verificar as saídas digitais do CLP no TIA Portal, monitorando os sinais em tempo real."',
    '"Se as saídas estão ativando mas o contator não fecha, o problema pode estar no circuito de comando, especificamente na bobina do contator ou no relé térmico."',
    '"Já tive um caso parecido onde o problema era a parametrização do inversor WEG — a rampa de aceleração estava muito curta e o motor entrava em proteção."',
  ],
  transcriptExcerpt:
    'Bom, nesse tipo de situação, a primeira coisa que eu faço é abrir o TIA Portal e ir direto na tabela de monitoramento das saídas. Eu configuro o watch table com as saídas Q0.0 até Q0.7 e monitoro em tempo real enquanto forço o acionamento pelo programa. Se a saída está ativando no software mas o motor não gira, eu parto para o circuito de comando externo...',
  transcriptHighlight:
    'eu configuro o watch table com as saídas Q0.0 até Q0.7 e monitoro em tempo real',
  pointsOfAttention: [
    'Disponibilidade apenas a partir da próxima semana — verificar se o prazo atende',
    'Não mencionou experiência com redes Profinet, que podem ser relevantes para comunicação com outros dispositivos na linha',
  ],
};

export const mockPipelineCards: PipelineCard[] = [
  {
    id: 'profile-001',
    profileNumber: 1,
    matchScore: 94,
    demandTitle: 'Técnico em CLP para diagnóstico de falha em motores',
    stage: 'em_analise',
    skills: ['CLP Siemens', 'Diagnóstico'],
    isRevealed: false,
  },
  {
    id: 'profile-002',
    profileNumber: 2,
    matchScore: 87,
    demandTitle: 'Técnico em CLP para diagnóstico de falha em motores',
    stage: 'recomendado',
    skills: ['CLP', 'Manutenção'],
    isRevealed: false,
  },
  {
    id: 'profile-003',
    profileNumber: 3,
    matchScore: 82,
    demandTitle: 'Técnico em CLP para diagnóstico de falha em motores',
    stage: 'convidado',
    skills: ['Inversores WEG', 'Automação'],
    isRevealed: true,
    talentName: 'Roberto Nascimento',
  },
  {
    id: 'profile-004',
    profileNumber: 4,
    matchScore: 75,
    demandTitle: 'Técnico em CLP para diagnóstico de falha em motores',
    stage: 'descartado',
    skills: ['Eletrotécnica', 'NR-10'],
    isRevealed: false,
  },
  {
    id: 'profile-005',
    profileNumber: 1,
    matchScore: 91,
    demandTitle: 'Soldador TIG para tubulação de aço inox',
    stage: 'entrevista',
    skills: ['TIG', 'Inox'],
    isRevealed: true,
    talentName: 'Marcos Vieira',
  },
];

export const mockActivityFeed: ActivityItem[] = [
  {
    id: 'act-001',
    type: 'match',
    title: '4 novos talentos encontrados',
    description: 'Para a demanda "Técnico em CLP para diagnóstico de falha em motores"',
    timestamp: '2026-07-10T15:45:00Z',
  },
  {
    id: 'act-002',
    type: 'reveal',
    title: 'Identidade revelada',
    description: 'Perfil 03 - Roberto Nascimento — demanda CLP',
    timestamp: '2026-07-10T16:30:00Z',
  },
  {
    id: 'act-003',
    type: 'interview',
    title: 'Entrevista agendada',
    description: 'Marcos Vieira — Soldador TIG — 15/07 às 14h',
    timestamp: '2026-07-09T10:00:00Z',
  },
  {
    id: 'act-004',
    type: 'demand',
    title: 'Nova demanda criada',
    description: 'Eletricista para adequação de painel NR-10',
    timestamp: '2026-07-11T10:00:00Z',
  },
  {
    id: 'act-005',
    type: 'hire',
    title: 'Contratação realizada',
    description: 'Pedro Almeida — Técnico em inversores — Concluído com sucesso',
    timestamp: '2026-07-05T09:00:00Z',
  },
];
