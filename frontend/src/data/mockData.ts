import type { Talent, Video, Invite, Skill, AnalysisResult } from '../types';

// ============================================
// Mock Skills
// ============================================
export const mockSkills: Skill[] = [
  { id: 's1', name: 'Soldagem MIG/MAG', level: 'avançado', category: 'Soldagem', verified: true },
  { id: 's2', name: 'Soldagem TIG', level: 'intermediário', category: 'Soldagem', verified: true },
  { id: 's3', name: 'Leitura de Esquemas Elétricos', level: 'avançado', category: 'Eletrotécnica', verified: true },
  { id: 's4', name: 'Programação CLP', level: 'intermediário', category: 'Automação', verified: false },
  { id: 's5', name: 'Manutenção Preventiva', level: 'avançado', category: 'Manutenção', verified: true },
  { id: 's6', name: 'Torneamento CNC', level: 'especialista', category: 'Usinagem', verified: true },
  { id: 's7', name: 'Montagem de Painéis', level: 'avançado', category: 'Eletrotécnica', verified: false },
  { id: 's8', name: 'Hidráulica Industrial', level: 'intermediário', category: 'Mecânica', verified: false },
];

// ============================================
// Mock Talent
// ============================================
export const mockTalent: Talent = {
  id: 't1',
  name: 'Carlos Mendes',
  email: 'carlos@email.com',
  role: 'talent',
  area: 'Automação Industrial',
  skills: mockSkills.slice(0, 5),
  videos: [],
  bio: 'Técnico em automação industrial com 8 anos de experiência em montagem e manutenção de sistemas automatizados.',
  aiSummary: 'Profissional experiente em automação industrial com competências avançadas em soldagem, leitura de esquemas e manutenção preventiva. Demonstra conhecimento prático sólido em programação CLP e montagem de painéis. Utiliza EPIs corretamente e segue normas NR-12 e NR-10.',
  tools: ['Multímetro digital', 'Alicate amperímetro', 'Chaves isoladas', 'Osciloscópio', 'Estação de solda'],
  safetyPractices: ['Uso correto de EPIs', 'Cumprimento NR-12', 'Bloqueio e etiquetagem (LOTO)', 'Análise preliminar de risco'],
  certifications: ['NR-10 - Segurança em Eletricidade', 'NR-12 - Segurança em Máquinas', 'Técnico em Automação Industrial - SENAI'],
  availability: 'disponível',
  profileCompletion: 85,
  rating: 4.7,
  totalViews: 342,
  invitesReceived: 7,
  avatar: undefined,
  createdAt: '2024-06-15T10:00:00Z',
};

// ============================================
// Mock Videos
// ============================================
export const mockVideos: Video[] = [
  {
    id: 'v1',
    title: 'Montagem de Painel Elétrico Industrial',
    description: 'Demonstração completa de montagem de painel elétrico seguindo normas NR-10.',
    duration: 487,
    area: 'Eletrotécnica',
    skills: [mockSkills[2], mockSkills[6]],
    status: 'published',
    views: 156,
    createdAt: '2024-11-20T14:30:00Z',
    talentId: 't1',
  },
  {
    id: 'v2',
    title: 'Soldagem MIG em Estrutura Metálica',
    description: 'Processo de soldagem MIG/MAG em perfis de aço carbono.',
    duration: 623,
    area: 'Soldagem',
    skills: [mockSkills[0], mockSkills[1]],
    status: 'published',
    views: 89,
    createdAt: '2024-12-05T09:15:00Z',
    talentId: 't1',
  },
  {
    id: 'v3',
    title: 'Programação CLP Siemens S7-1200',
    description: 'Configuração e programação de CLP para controle de esteira transportadora.',
    duration: 812,
    area: 'Automação Industrial',
    skills: [mockSkills[3]],
    status: 'published',
    views: 97,
    createdAt: '2025-01-10T16:00:00Z',
    talentId: 't1',
  },
  {
    id: 'v4',
    title: 'Manutenção de Motor Trifásico',
    description: 'Diagnóstico e reparo de motor elétrico trifásico.',
    duration: 345,
    area: 'Manutenção',
    skills: [mockSkills[4]],
    status: 'processing',
    views: 0,
    createdAt: '2025-02-01T11:20:00Z',
    talentId: 't1',
  },
];

// ============================================
// Mock Invites
// ============================================
export const mockInvites: Invite[] = [
  {
    id: 'i1',
    companyId: 'c1',
    companyName: 'Empresa Confidencial',
    talentId: 't1',
    positionTitle: 'Técnico de Automação Sênior',
    description: 'Buscamos profissional para atuar na manutenção e programação de sistemas automatizados em linha de produção automotiva.',
    status: 'pending',
    createdAt: '2025-02-10T08:00:00Z',
    isConfidential: true,
  },
  {
    id: 'i2',
    companyId: 'c2',
    companyName: 'MetalForge Indústria',
    talentId: 't1',
    positionTitle: 'Soldador Especialista',
    description: 'Vaga para soldador com experiência em MIG/MAG e TIG para projetos de estruturas metálicas de grande porte.',
    status: 'pending',
    createdAt: '2025-02-08T14:30:00Z',
    isConfidential: false,
  },
  {
    id: 'i3',
    companyId: 'c3',
    companyName: 'TechPower Energia',
    talentId: 't1',
    positionTitle: 'Eletricista Industrial',
    description: 'Oportunidade para eletricista industrial com conhecimento em painéis e NR-10.',
    status: 'accepted',
    createdAt: '2025-01-25T10:00:00Z',
    isConfidential: false,
  },
  {
    id: 'i4',
    companyId: 'c4',
    companyName: 'Empresa Confidencial',
    talentId: 't1',
    positionTitle: 'Técnico de Manutenção',
    description: 'Precisamos de técnico para manutenção preventiva e corretiva de equipamentos industriais.',
    status: 'declined',
    createdAt: '2025-01-15T09:00:00Z',
    isConfidential: true,
  },
];

// ============================================
// Mock Analysis Result
// ============================================
export const mockAnalysisResult: AnalysisResult = {
  skills: mockSkills.slice(0, 5),
  tools: ['Multímetro digital', 'Alicate amperímetro', 'Chaves isoladas', 'Estação de solda'],
  safetyPractices: ['Uso correto de EPIs', 'Cumprimento NR-12', 'Bloqueio e etiquetagem (LOTO)'],
  summary: 'O profissional demonstrou competência avançada em soldagem MIG/MAG, realizando cordões uniformes com boa penetração. Mostrou domínio na leitura de esquemas elétricos e aplicou corretamente procedimentos de segurança, incluindo uso de EPIs e bloqueio LOTO. A explicação verbal foi clara e demonstrou conhecimento teórico sólido sobre os processos utilizados.',
  score: 87,
  area: 'Automação Industrial',
};

// ============================================
// Area options
// ============================================
export const areaOptions = [
  'Automação Industrial',
  'Eletrotécnica',
  'Soldagem',
  'Usinagem',
  'Manutenção Industrial',
  'Mecânica Industrial',
  'Hidráulica e Pneumática',
  'Instrumentação',
  'Refrigeração',
  'Caldeiraria',
];
