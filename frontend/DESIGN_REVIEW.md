# WHO — Design Review de Produto

## Princípios do refinamento

O produto foi revisado a partir de quatro critérios: evidência antes de opinião, próximo passo sempre visível, densidade compatível com a tarefa e identidade protegida como parte central da experiência. O Design System oficial permanece intacto: verde-floresta como cor dominante, vermelho apenas em ações críticas, superfícies quentes, Sora para hierarquia, Instrument Sans para leitura e JetBrains Mono para dados.

## Landing page

**Problema anterior:** a proposta era clara, mas a composição poderia ser confundida com uma landing page SaaS convencional. O diferencial — comparar evidências sem vieses — aparecia tarde.

**Refinamento:** o mock de produto passa a ser parte da explicação, com demanda analisada, matches cegos e scores. O hero usa uma única tese forte e dois caminhos de entrada com verbos orientados a intenção.

**Justificativa:** jurados entendem produto, mecanismo e valor em poucos segundos. A superfície visual já introduz o WHO Board, em vez de depender de promessas abstratas.

## Dashboard do talento

**Problema anterior:** métricas isoladas poderiam sugerir um painel administrativo. Faltava uma sequência narrativa entre progresso, ação e consequência.

**Refinamento:** a primeira superfície mostra estado do perfil, próxima ação e benefício. Métricas são secundárias; perfil validado e atividade recente explicam o que aconteceu após a demonstração.

**Justificativa:** o talento entende “onde estou → o que faço agora → o que isso gera”, com CTA de gravação prioritário e áreas clicáveis adequadas ao celular.

## Gravação e processamento

**Problema anterior:** controles funcionais, mas com risco de parecer um player genérico. Processamento poderia ser percebido como espera passiva.

**Refinamento:** palco de captura com estado persistente, cronômetro monoespaçado, instrução contextual e controles que mudam conforme a gravação. O processamento revela etapas concretas da análise e diferencia concluído, atual e pendente.

**Justificativa:** reduz ansiedade, previne erros e torna o trabalho da IA compreensível sem expor complexidade técnica.

## Perfil do talento

**Problema anterior:** um perfil técnico pode facilmente cair no formato de currículo digital.

**Refinamento:** evidências em vídeo são o conteúdo principal; disponibilidade, ferramentas e segurança apoiam a decisão. Competências são apresentadas como sinais validados, não palavras-chave autodeclaradas.

**Justificativa:** preserva a proposta da WHO e comunica capacidade por demonstração.

## Dashboard da empresa

**Problema anterior:** estatísticas poderiam competir com o principal trabalho a ser feito.

**Refinamento:** a pergunta “qual problema precisa ser resolvido?” ocupa o primeiro plano. Buscas, matches e convites aparecem como continuidade do trabalho, não como módulos administrativos.

**Justificativa:** a tela começa pela dor operacional e sempre apresenta uma ação seguinte.

## Descrição da dor

**Problema anterior:** risco de transformar uma conversa em formulário de vaga.

**Refinamento:** entrada por voz e texto compartilha o mesmo fluxo; a transcrição é editável e a interpretação da IA aparece separada da fala original. Perguntas são progressivas e contextuais.

**Justificativa:** diminui carga cognitiva, aceita linguagem informal e dá controle ao usuário antes de gerar matches.

## WHO Board

**Problema anterior:** cards em grade poderiam ser lidos como uma lista de candidatos, diminuindo a percepção de inteligência e decisão assistida.

**Refinamento:** a demanda permanece ancorada no topo, filtros funcionam como critérios de decisão e cada perfil apresenta score, competências, evidência citável e justificativa. Seleção é persistente e a comparação surge como ação contextual. Identidade e fotografia permanecem bloqueadas até uma decisão consciente.

**Justificativa:** o Board não ordena pessoas; ele organiza evidências relacionadas ao problema. Scores usam tipografia de dados, enquanto texto explica o “porquê” para evitar falsa precisão.

## Comparação

**Problema anterior:** tabelas comparativas tradicionais costumam gerar excesso de linhas e hierarquia plana.

**Refinamento:** cabeçalho de perfil fixo visualmente, quatro indicadores prioritários, barras comparáveis e uma evidência narrativa por coluna. A comparação é limitada a três perfis.

**Justificativa:** mantém comparação legível e impede que dezenas de atributos produzam uma decisão artificialmente matemática.

## Detalhe do match

**Problema anterior:** a informação poderia se fragmentar entre score, vídeo e competências.

**Refinamento:** recomendação, evidência e transcrição formam uma cadeia causal. Indicadores e ponto de atenção ficam em painel lateral. Revelar identidade é uma ação explícita e registrada; convite acontece em modal com contexto.

**Justificativa:** o recrutador consegue auditar a recomendação antes de agir e percebe limites da análise.

## Pipeline

**Problema anterior:** um Kanban genérico reduziria a personalidade do produto.

**Refinamento:** cards carregam aderência e cargo, estados vazios explicam a ação e a identidade só aparece após revelação. A linguagem visual continua conectada ao Board.

**Justificativa:** preserva continuidade entre descoberta, conversa e contratação.

## Acessibilidade e interação

- Foco visível com contraste alto em links, botões e campos.
- Alvos principais com pelo menos 40–46 px.
- Estados não dependem apenas de cor: usam texto, ícone e forma.
- `prefers-reduced-motion` remove transições e animações.
- Hover discreto aumenta borda, elevação ou deslocamento de no máximo 2 px.
- Layout da empresa prioriza desktop; navegação do talento migra para barra inferior no mobile.
- Conteúdo essencial permanece utilizável em 320 px e tabelas densas usam rolagem horizontal controlada.

## Suposições

- Captura de câmera, áudio, autenticação e IA continuam simuladas.
- Scores representam dados fictícios para demonstração, nunca uma decisão automatizada final.
- A revelação de identidade seria auditável no backend definitivo.
- A versão final deve incluir testes com usuários de Institutos Federais e profissionais de RH/operação antes de produção.
