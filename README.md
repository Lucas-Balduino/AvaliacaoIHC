# Avaliação Final – Interação Humano-Computador (IHC)

## Identificação do Estudante

- Nome: Lucas Gonçalves Balduino
- Matrícula: 22409139
- Curso: Ciência da Computação
- Polo: Asa Norte
- Data de Entrega: 10/06/2026

## Descrição Geral

Este repositório reúne as atividades desenvolvidas durante a disciplina de Interação Humano-Computador (IHC), 
contemplando os desafios das Unidades de Aprendizagem UA1, UA2, UA3 e UA4.

---

## UA1 – Introdução à IHC e seus benefícios

### Objetivo

Analisar uma interface existente de um sistema de folha de pagamento — que recebia críticas por dificuldade de uso e baixa conversão — e propor melhorias concretas que aperfeiçoassem a **navegabilidade**, ou seja, a facilidade com que o usuário percorre o sistema sem se sentir perdido.

### Solução Desenvolvida

Foram identificados três problemas principais e aplicadas as respectivas correções:

- **Cores dos textos:** substituídas por opções mais neutras, reservando cores de alto contraste para elementos que realmente exigem atenção
- **Ordem dos botões:** reposicionados para o padrão esperado — cancelar à esquerda, avançar à direita — alinhando a interface à leitura natural e às convenções consolidadas
- **Mensagem de confirmação:** reescrita para identificar o usuário afetado pela ação, tornando o contexto mais claro e reduzindo o risco de erro

### Arquivos Entregues

- `UA1-Navegabilidade.md`
- `ihc-desafios.html`

---

## UA2 – Interface, interação e Affordance

### Objetivo

Identificar o tipo de interface e os equipamentos mais adequados para um sistema de gerenciamento de cursos internos cujos usuários — funcionários da área de treinamento de uma empresa — são todos **pessoas com deficiência visual**, garantindo que essa limitação não impedisse o uso normal da ferramenta.

### Solução Desenvolvida

- **Tipo de interface recomendado:** interface orientada à fala, por operar inteiramente por comandos de voz e saída de áudio, eliminando qualquer dependência de elementos visuais para a interação
- **Equipamento necessário:** leitores de tela (*screen readers*), que convertem em tempo real o conteúdo exibido em áudio, permitindo ao usuário ouvir o que está na tela, verificar entradas digitadas e identificar os objetos manipulados — como botões e itens de menu

### Arquivos Entregues

- `UA2-Acessibilidade.md`

---

## UA3 – Storyboarding e prototipação de interfaces

### Objetivo

Apresentar o passo a passo do processo de design para o desenvolvimento de uma solução computacional assistiva, a partir de um caso concreto: **Ricardo**, usuário que perde a visão progressivamente e enfrenta dificuldades para se locomover em ambientes desconhecidos. A equipe parte sem conhecimento do domínio da aplicação.

### Solução Desenvolvida

O processo foi estruturado em quatro fases iterativas:

1. **Compreensão** — uso de storytelling, picture cards e jornada do usuário para mapear o perfil, as necessidades e os sentimentos de Ricardo antes de qualquer proposta
2. **Exploração** — elaboração de storyboards para visualizar diferentes propostas de solução no contexto real de uso (bengala com sensores, relógio com câmera, óculos inteligentes)
3. **Iteração** — revisão cíclica das fases anteriores até que a proposta fosse aprovada pela equipe e pelo usuário
4. **Prototipagem** — construção de protótipos de baixa fidelidade para validação com Ricardo antes do desenvolvimento final

### Ferramentas Utilizadas

- Storytelling
- Picture Cards
- Jornada do Usuário
- Storyboards
- Prototipagem de baixa fidelidade

### Arquivos Entregues

- `UA3-ProcessoDeDesign.md`

---

## UA4 – TypeScript

### Objetivo

Aplicar os conceitos de **Programação Orientada a Objetos** com TypeScript, modelando entidades de um sistema de vendas online — demonstrando na prática como classes representam abstrações do mundo real no ambiente digital.

### Funcionalidades Implementadas

- Classe `Produto` com atributos `id`, `nome`, `descricao`, `valor` e `fabricante`
- Classe `Venda` com composição de múltiplos produtos e método `valorVenda()` para cálculo e exibição do total da transação
- Exemplo de uso instanciando dois produtos (*Cadeira presidente* e *Mouse sem fio*) e executando o fluxo completo de uma venda

### Tecnologias Utilizadas

- TypeScript

### Como Executar o Projeto

#### Pré-requisitos

- Node.js instalado
- npm ou yarn

#### Instalação

```bash
npm install
```

#### Execução

```bash
npm start
```

#### Compilação

```bash
tsc
```

### Arquivos Entregues

- `UA4-ProgramacaoOO.md`

---

## Considerações Finais

As quatro unidades, embora distintas em natureza, convergiram para um mesmo princípio: **o sistema existe para servir o usuário, e não o contrário**. Da navegabilidade à acessibilidade, do processo de design à modelagem em código, cada desafio reforçou que boas decisões técnicas precisam estar ancoradas na compreensão de quem vai usar o que está sendo construído.

A disciplina de IHC tornou evidente que atenção à organização, clareza e contexto do usuário não são detalhes — são o que diferencia uma solução que funciona de uma solução que funciona bem.

---

## Declaração de Autoria

Declaro que este trabalho foi desenvolvido por mim, 
respeitando as normas acadêmicas e de integridade estabelecidas pela instituição.
Declaro que fiz uso de inteligência artificial para formatação de arquivos e geração de código.

**Nome do Estudante:** Lucas Gonçalves Balduino

**Data:** 10/06/2026