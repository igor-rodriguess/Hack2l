# WHO Platform — Protótipo frontend

Protótipo navegável da WHO, plataforma que conecta dores operacionais a talentos técnicos por meio de evidências em vídeo. A interface segue o Design System oficial: verde-floresta, vermelho de ação, branco quente, títulos Sora, corpo Instrument Sans e dados em JetBrains Mono.

## Executar

Na raiz do workspace:

```bash
npm run dev
```

Ou diretamente no projeto:

```bash
cd who-platform
npm install
npm run dev
```

Abra `http://localhost:5173`. Para validar a versão de produção:

```bash
npm run build
npm run preview
```

No login, use `demo@who.com.br` e `12345678` (a autenticação é simulada).

## Fluxos demonstráveis

### Público

- Landing page, escolha de perfil, login e cadastro simplificado.

### Talento

- Dashboard mobile-first;
- gravação, pausa, finalização e regravação de vídeo simuladas;
- processamento da IA em etapas;
- análise com competências e indicadores;
- perfil técnico gerado e oportunidades recebidas.

### Empresa

- Dashboard e nova busca;
- entrada da demanda por áudio simulado ou texto;
- transcrição editável, interpretação e perguntas de aprofundamento;
- busca e geração de matches;
- WHO Board com perfis cegos, filtros e seleção de até três talentos;
- comparação lado a lado;
- detalhe do match, evidência em vídeo, revelação de identidade e convite;
- pipeline de acompanhamento.

## Rotas principais

- `/talento` — dashboard do talento
- `/talento/gravar` — demonstração em vídeo
- `/talento/perfil` — perfil técnico
- `/empresa` — dashboard da empresa
- `/empresa/nova-busca` — conversa orientada para a demanda
- `/empresa/board` — WHO Board
- `/empresa/comparar` — comparação de talentos
- `/empresa/match/01` — detalhe do match
- `/empresa/pipeline` — pipeline

## Stack

React 19, TypeScript, Vite, React Router, Zustand (estrutura preparada para estado compartilhado), Lucide React e CSS responsivo com tokens semânticos.

Todos os dados e processamentos são simulados no frontend. Não há backend, autenticação real ou captura real de câmera/microfone.
