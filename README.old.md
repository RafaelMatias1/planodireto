# Projeto: Plano Direto 🚀

## 🎯 O Objetivo

Criar um SaaS (Software as a Service) que gera planos de dieta e treino personalizados de forma instantânea, sem a necessidade de login ou registro. O foco é na experiência do usuário: rapidez, simplicidade e resultados acionáveis em menos de 60 segundos.

---

## 🗺️ Roadmap do Projeto (Passo a Passo)

Este roadmap está dividido em fases para guiar o desenvolvimento desde a concepção até o lançamento e evolução contínua.

### Fase 1: Fundamento e Validação (Semanas 1-2)

O objetivo desta fase é validar a ideia e construir a base de conhecimento do sistema.

* [ ] **1.1. Definição do MVP (Produto Mínimo Viável):**
    * [ ] Funcionalidade principal: Geração de dieta baseada nos inputs (idade, gênero, peso, altura, objetivo, nível de atividade).
    * [ ] Inputs do formulário: Definir os campos essenciais.
    * [ ] Output: Apresentar o plano de dieta na tela com calorias e macros totais. O plano de treino pode ser adicionado na Fase 4.

* [ ] **1.2. Criação do Banco de Dados v1.0:**
    * [ ] Criar uma planilha (Google Sheets, Excel) ou um arquivo JSON.
    * [ ] **Tabela de Alimentos:** Listar pelo menos 50 alimentos populares (frango, arroz, batata doce, brócolis, ovos, etc.) com suas informações por 100g (Calorias, Proteínas, Carboidratos, Gorduras).
    * [ ] **Tabela de Exercícios:** Listar 20-30 exercícios básicos de musculação, separados por grupo muscular (Peito, Costas, Perna, etc.).

* [ ] **1.3. Validação com Usuários:**
    * [ ] Criar um formulário online (Google Forms) simulando o fluxo do site.
    * [ ] Enviar para 20-30 pessoas (amigos, família, grupos).
    * [ ] Perguntar no final: "Você pagaria R$ 15 por um plano detalhado como este?" para validar o modelo de negócio.

### Fase 2: Desenvolvimento do MVP (Semanas 3-6)

Com a base definida, é hora de construir o produto.

* [ ] **2.1. Backend (A Lógica do Sistema):**
    * [ ] Criar a função de cálculo de TMB e GET.
    * [ ] Criar a lógica de ajuste de calorias e macros conforme o objetivo.
    * [ ] Desenvolver o algoritmo que monta o cardápio, selecionando alimentos do banco de dados para atingir as metas nutricionais.

* [ ] **2.2. Frontend (A Interface do Usuário):**
    * [ ] Desenvolver a página principal com o formulário de inputs de forma clara e intuitiva.
    * [ ] Criar a página de resultados, que exibirá o plano gerado de forma organizada (dividido por refeições).
    * [ ] Garantir que o design seja limpo e responsivo (funcione bem em celulares e computadores).

* [ ] **2.3. Integração e Testes:**
    * [ ] Conectar o formulário do Frontend com a lógica do Backend.
    * [ ] Realizar testes extensivos: inserir diferentes perfis de usuários e verificar se os planos gerados são coerentes e matematicamente corretos.

### Fase 3: Lançamento e Monetização (Semana 7)

Hora de colocar o projeto no ar e implementar a forma de ganhar dinheiro.

* [ ] **3.1. Escolha e Implementação do Modelo de Negócio:**
    * [ ] Decidir entre "Pagamento Único" ou "Freemium".
    * [ ] Integrar um gateway de pagamento (Mercado Pago, Stripe, etc.) para o modelo de pagamento único.

* [ ] **3.2. Deploy (Publicação do Site):**
    * [ ] Registrar um domínio (ex: `www.planodireto.com.br`).
    * [ ] Hospedar o site em uma plataforma (Vercel, Netlify, Heroku, etc.).

* [ ] **3.3. Aspectos Legais:**
    * [ ] Adicionar o **AVISO LEGAL** (Disclaimer) em local visível, informando que o plano não substitui a orientação profissional.
    * [ ] Criar uma página simples de "Termos de Uso" e "Política de Privacidade".

### Fase 4: Pós-Lançamento e Evolução (Contínuo)

O trabalho não termina no lançamento.

* [ ] **4.1. Coleta de Feedback:**
    * [ ] Adicionar um campo de feedback simples no site.
    * [ ] Analisar os dados dos usuários (quais os objetivos mais comuns?) para guiar melhorias.

* [ ] **4.2. Marketing Inicial:**
    * [ ] Divulgar em redes sociais (Instagram, TikTok) com posts sobre dicas de fitness, usando a ferramenta como isca.
    * [ ] Otimizações básicas de SEO para ser encontrado no Google.

* [ ] **4.3. Próximas Funcionalidades (Roadmap V2):**
    * [ ] Adicionar o módulo de geração de treinos.
    * [ ] Permitir download do plano em PDF.
    * [ ] Incluir receitas e modo de preparo dos alimentos.
    * [ ] Adicionar links de afiliados para suplementos ou equipamentos.

---

## 🛠️ Stack de Tecnologia Sugerido

* **Frontend:** React (React.ts) - Moderno e rápido.
* **Backend:** Node.js (Express) ou Python (FastAPI) - Excelentes para APIs.
* **Banco de Dados:** Começar com um arquivo **JSON** simples. Evoluir para **MySql** se necessário.
* **Deploy:** Vercel (para Frontend) e Render.com (para Backend) - Oferecem planos gratuitos generosos.

---

## ⚠️ Pontos Críticos de Atenção

1.  **Responsabilidade Legal:** O AVISO LEGAL não é opcional. A saúde do usuário é prioridade.
2.  **Qualidade do Banco de Dados:** A qualidade dos planos gerados depende 100% da qualidade dos dados de alimentos e exercícios. Verifique as fontes.
3.  **Experiência do Usuário (UX):** O maior diferencial é a simplicidade. Mantenha o fluxo o mais rápido e fácil possível.