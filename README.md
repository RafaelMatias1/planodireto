# 🚀 Plano Direto - Nutrição e Treino Instantâneo

Um SaaS que gera planos de dieta personalizados de forma instantânea, sem necessidade de login ou registro.

## 📋 Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

## 🚀 Como executar o projeto

### 1. Clone ou baixe o projeto
```bash
# Se usando git
git clone [seu-repositorio]
cd plano-direto

# Ou extraia os arquivos se baixou como ZIP
```

### 2. Instale as dependências
```bash
npm install
# ou
yarn install
```

### 3. Execute o projeto
```bash
npm start
# ou  
yarn start
```

O projeto será executado em `http://localhost:3000`

## 📁 Estrutura do Projeto

```
plano-direto/
├── public/                 # Arquivos públicos
├── src/
│   ├── components/         # Componentes React
│   │   ├── Form/          # Componentes do formulário
│   │   ├── Results/       # Componentes dos resultados
│   │   ├── Header/        # Cabeçalho
│   │   └── Layout/        # Layout principal
│   ├── types/             # Definições TypeScript
│   ├── utils/             # Funções utilitárias
│   ├── hooks/             # Hooks personalizados
│   └── styles/            # Arquivos CSS
└── package.json
```

## 🛠️ Tecnologias Utilizadas

- **React 18** - Framework frontend
- **TypeScript** - Tipagem estática
- **CSS3** - Estilização (sem dependências externas)
- **React Hooks** - Gerenciamento de estado

## ✨ Funcionalidades Implementadas

### ✅ Formulário Completo
- Dados básicos (idade, gênero, peso, altura)
- Seleção de objetivo (perder, manter, ganhar)
- Nível de atividade física
- Preferências alimentares (vegetariano, vegano, etc.)
- Seleção de biotipo
- Validações obrigatórias

### ✅ Cálculos Nutricionais
- Taxa Metabólica Basal (TMB) - Fórmula Mifflin-St Jeor
- Gasto Energético Total (GET)
- Ajuste de calorias por objetivo
- Distribuição de macronutrientes

### ✅ Geração de Cardápio
- Base de dados com alimentos brasileiros
- 5 refeições diárias distribuídas
- Respeita restrições alimentares
- Interface organizada por refeição

### ✅ Interface Responsiva
- Design moderno com gradientes
- Animações suaves
- Mobile-first
- Experiência visual profissional

## 🔄 Próximos Passos (Roadmap)

### Fase 2 - Melhorias
- [ ] Expandir banco de dados de alimentos
- [ ] Adicionar mais opções de restrições
- [ ] Implementar variações de cardápio
- [ ] Adicionar receitas detalhadas

### Fase 3 - Funcionalidades Avançadas  
- [ ] Geração de planos de treino
- [ ] Download do plano em PDF
- [ ] Lista de compras automática
- [ ] Sistema de substituições de alimentos

### Fase 4 - Monetização
- [ ] Gateway de pagamento
- [ ] Modelo freemium
- [ ] Links de afiliados
- [ ] Analytics de usuário

## 🚨 Aspectos Legais

O projeto inclui disclaimers apropriados informando que:
- Os planos são sugestões computadorizadas
- Não substituem orientação profissional
- Usuário deve consultar profissionais de saúde

## 📱 Responsividade

O site é totalmente responsivo e funciona perfeitamente em:
- Desktop (1200px+)
- Tablet (768px - 1199px)  
- Mobile (320px - 767px)

## 🎨 Customização

### Cores principais:
- Primária: `#667eea` (Azul)
- Secundária: `#764ba2` (Roxo)
- Gradiente: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`

### Tipografia:
- Fonte: `Segoe UI, Tahoma, Geneva, Verdana, sans-serif`

## 🧪 Como testar

1. Preencha o formulário com dados realistas
2. Teste diferentes combinações de objetivos e restrições
3. Verifique se os cálculos estão coerentes
4. Teste em diferentes tamanhos de tela

## 📊 Validação dos Cálculos

Os cálculos seguem fórmulas reconhecidas:
- **TMB Masculino**: (10 × peso) + (6,25 × altura) - (5 × idade) + 5
- **TMB Feminino**: (10 × peso) + (6,25 × altura) - (5 × idade) - 161
- **GET**: TMB × Fator de Atividade
- **Déficit/Superávit**: ±400 kcal do GET

## 🤝 Contribuindo

Para adicionar novas funcionalidades:
1. Crie novos componentes na pasta apropriada
2. Adicione os tipos em `/types`
3. Implemente a lógica em `/utils`
4. Teste thoroughly antes do commit

## 📞 Suporte

Se encontrar problemas:
1. Verifique se todas as dependências foram instaladas
2. Confirme que está usando Node.js 16+
3. Limpe o cache: `npm start --reset-cache`

---

**Desenvolvido com ❤️ para revolucionar a geração de planos nutricionais**