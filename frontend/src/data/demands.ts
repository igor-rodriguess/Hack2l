import type { Demand } from '../types';

export const demands: Demand[] = [
  {
    id: 'demand-001',
    title: 'Técnico em Automação para Programação de CLP e Inversores',
    description: 'Precisamos de um profissional experiente em automação industrial para programar CLPs Siemens e configurar inversores de frequência em nossa nova linha de montagem automotiva. O projeto envolve a integração de 8 estações de trabalho com comunicação Profinet e supervisório SCADA.',
    transcription: 'Olha, a gente tá montando uma linha nova de montagem na planta de Betim, e precisa de alguém que manje muito de CLP, principalmente Siemens, S7-1200 ou 1500. Vai ter que programar a lógica de controle das estações de trabalho, são umas 8 estações, e configurar os inversores de frequência pras esteiras e motores. A comunicação vai ser toda em Profinet, então precisa conhecer bem isso. Também precisa ter experiência com supervisório, a gente usa WinCC. O cara tem que ter NR-10 porque vai trabalhar com painel energizado em alguns momentos. Prazo é de 3 meses pra ter tudo rodando. Se tiver experiência com indústria automotiva, melhor ainda.',
    area: 'Automação Industrial',
    requiredSkills: [
      'Programação de CLP Siemens (S7-1200/1500)',
      'Inversores de Frequência',
      'Redes Industriais Profinet',
      'IHM e SCADA (WinCC)',
      'NR-10',
    ],
    status: 'active',
    createdAt: '2026-07-05T08:00:00Z',
    matches: [],
  },
  {
    id: 'demand-002',
    title: 'Engenheiro Eletricista para Projeto de Subestação Industrial',
    description: 'Buscamos um engenheiro eletricista com experiência em projetos de subestações de média tensão para nossa nova planta industrial. O escopo inclui dimensionamento da subestação 13.8kV, quadro geral de baixa tensão, projeto de malha de aterramento e estudo de seletividade.',
    transcription: 'Estamos expandindo a planta e precisamos de um profissional para projetar a subestação da nova ala. É uma subestação de 13.8kV com dois transformadores de 1500kVA. Precisa fazer o projeto completo: malha de aterramento, SPDA, quadro geral de baixa tensão, estudo de curto-circuito e seletividade. O profissional precisa ter CREA ativo e experiência com EPLAN ou AutoCAD Electrical para entregar a documentação técnica. Também precisa de NR-10 SEP porque vai precisar acompanhar a energização. Se tiver experiência com termografia pra fazer a primeira inspeção depois da energização, seria ótimo.',
    area: 'Eletrotécnica',
    requiredSkills: [
      'Projeto de Subestações MT/BT',
      'Dimensionamento de Quadros Elétricos',
      'Estudo de Seletividade e Curto-Circuito',
      'EPLAN ou AutoCAD Electrical',
      'NR-10 SEP',
      'Termografia (diferencial)',
    ],
    status: 'active',
    createdAt: '2026-07-08T10:30:00Z',
    matches: [],
  },
  {
    id: 'demand-003',
    title: 'Técnico de Manutenção Preditiva para Planta Siderúrgica',
    description: 'Necessitamos de um técnico especialista em manutenção preditiva para implantação e execução de rotas de análise de vibração e termografia em nossa planta siderúrgica. O profissional será responsável por monitorar mais de 200 equipamentos rotativos críticos.',
    transcription: 'A gente precisa de um especialista em preditiva pra nossa planta. Temos mais de 200 equipamentos rotativos críticos, incluindo ventiladores, bombas, compressores e motores de grande porte, alguns de 500cv, 1000cv. Precisa ser alguém certificado em análise de vibração, pelo menos nível 2, que saiba usar coletor SKF ou similar. Também precisa ter conhecimento de alinhamento a laser e termografia. O contrato seria de 6 meses inicialmente, com possibilidade de extensão. A planta funciona 24/7, então precisa ter disponibilidade pra turnos. Segurança é prioridade: NR-10, NR-33 e NR-35 são obrigatórios.',
    area: 'Manutenção Industrial',
    requiredSkills: [
      'Análise de Vibração (Nível 2)',
      'Termografia',
      'Alinhamento a Laser',
      'Manutenção de Equipamentos Rotativos',
      'NR-10, NR-33, NR-35',
    ],
    status: 'active',
    createdAt: '2026-07-10T14:00:00Z',
    matches: [],
  },
];

export default demands;
