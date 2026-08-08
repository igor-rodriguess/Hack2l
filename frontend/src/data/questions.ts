import type { DemandQuestion } from '../types';

export const deepeningQuestions: DemandQuestion[] = [
  {
    id: 'q-001',
    question: 'Qual é o prazo esperado para conclusão do projeto? Existe alguma data crítica ou marco importante que devemos considerar?',
    answer: '',
    required: true,
  },
  {
    id: 'q-002',
    question: 'O profissional precisará trabalhar presencialmente na planta ou há possibilidade de parte do trabalho ser feita remotamente?',
    answer: '',
    required: true,
  },
  {
    id: 'q-003',
    question: 'Existem equipamentos ou ferramentas específicos que o profissional precisa trazer, ou a empresa fornece toda a infraestrutura necessária?',
    answer: '',
    required: true,
  },
  {
    id: 'q-004',
    question: 'Qual é o regime de contratação desejado? (CLT, PJ, contrato por projeto, etc.) E qual a faixa de investimento prevista para esta contratação?',
    answer: '',
    required: false,
  },
  {
    id: 'q-005',
    question: 'Há algum sistema ou tecnologia já instalada na planta que o profissional precisará integrar ou dar continuidade? Se sim, quais são as versões e fabricantes?',
    answer: '',
    required: true,
  },
  {
    id: 'q-006',
    question: 'O profissional trabalhará sozinho ou fará parte de uma equipe? Se em equipe, qual será o papel esperado (líder técnico, executor, consultor)?',
    answer: '',
    required: false,
  },
];

export default deepeningQuestions;
