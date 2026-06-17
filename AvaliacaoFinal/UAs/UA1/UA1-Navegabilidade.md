# Melhorando a Navegabilidade em um Sistema de Folha de Pagamento

---

## Objetivo da Atividade

O desafio proposto na Unidade de Aprendizagem 1 tinha um ponto de partida receber uma interface já existente, com problemas reais de usabilidade, e propor melhorias que tornassem a experiência do usuário mais fluida e intuitiva.

O conceito central trabalhado foi o de **navegabilidade**, que diz respeito à facilidade com que um usuário consegue se mover por uma interface sem se sentir perdido ou confuso. Em outras palavras, uma interface com boa navegabilidade é aquela em que o usuário sabe o que fazer, entende o que está acontecendo e consegue avançar no sistema com confiança.

O sistema escolhido como objeto de estudo foi um **gerenciador de folha de pagamento** — uma aplicação sensível, usada por muitos clientes corporativos, que vinha recebendo críticas frequentes por parte dos usuários. Entre as reclamações mais comuns estavam a dificuldade de entender o que precisava ser feito em cada etapa e a baixa taxa de conversão em determinados pontos do fluxo, o que indicava que as pessoas simplesmente desistiam de usar o sistema.

---

## Solução Desenvolvida

Ao analisar a interface original, foi possível identificar três problemas principais que comprometiam diretamente a experiência de uso:

### 1. Cores com alto impacto visual nos textos

O título da tela e a mensagem de alerta utilizavam cores muito chamativas — o que, à primeira vista, pode parecer uma boa ideia para destacar informações importantes. Na prática, porém, o excesso de cores impactantes prejudica a leitura e perde o efeito de chamar atenção justamente porque tudo parece igualmente urgente. *Quando tudo é destaque, nada é destaque.*

**Melhoria aplicada:** substituição das cores por opções mais neutras e funcionais, reservando cores de alto contraste apenas para elementos que realmente precisam de atenção imediata do usuário.

---

### 2. Ordem invertida dos botões de ação

Na interface original, o botão **"Avançar"** aparecia à esquerda e o **"Retornar"** à direita — o inverso do que os usuários esperam encontrar. Essa inversão parece pequena, mas causa um impacto real: ela contraria o padrão consolidado pela grande maioria dos sistemas e também a direção natural da leitura ocidental, que flui da esquerda para a direita.

> Interfaces que respeitam as convenções reduzem o esforço cognitivo do usuário. Quando algo está onde se espera que esteja, a navegação se torna automática — e isso é exatamente o que buscamos.

**Melhoria aplicada:** reposicionamento dos botões para o padrão esperado — cancelar/retornar à esquerda, avançar/confirmar à direita —, além da renomeação dos rótulos para textos mais claros e específicos ao contexto da ação.

---

### 3. Ausência de ícones de ajuda contextual

Quando um usuário não sabe como preencher um campo ou não entende o que o sistema está pedindo, o caminho natural é procurar alguma pista na própria tela. Sem ícones de ajuda — geralmente representados por um simples **"?"** — esse usuário fica sem saída e tende a abandonar o sistema.

**Melhoria aplicada:** inclusão de ícones de ajuda em pontos estratégicos da interface, oferecendo ao usuário um recurso de suporte contextual sem que ele precise sair da tela ou buscar ajuda externa.

---

### Resultado visual

A tabela abaixo resume as mudanças realizadas de forma comparativa:

| Elemento | Antes | Depois |
|---|---|---|
| Cores dos textos | Alto impacto, pouco funcionais | Neutras e hierarquicamente organizadas |
| Ordem dos botões | Avançar (esq.) / Retornar (dir.) | Cancelar (esq.) / Avançar (dir.) |
| Rótulo da mensagem | Genérico ("entrada deste usuário") | Específico ("exclusão do usuário 'João'") |
| Suporte ao usuário | Nenhum ícone de ajuda | Ícones de ajuda contextuais disponíveis |

---

## Ferramentas Utilizadas

- **Análise manual da interface** — identificação dos problemas com base nos princípios de usabilidade estudados na disciplina
- **Estudo dos fundamentos de IHC** — embasamento teórico sobre navegabilidade, padrões de interface e design centrado no usuário
- **Claude (Anthropic)** — utilizado como assistente para a **formatação e organização deste documento em Markdown**, ajudando a estruturar o conteúdo de forma clara e hierarquicamente coerente. O conteúdo técnico e as análises são de autoria própria; a IA colaborou na apresentação visual e textual do material

---

## Consideração Final

O que mais chamou atenção neste desafio foi perceber que os problemas identificados não eram falhas técnicas complexas — eram, na verdade, escolhas de design que ignoravam o comportamento e as expectativas do usuário. A ordem dos botões, o uso das cores, a presença de um simples ícone de ajuda: cada um desses elementos, quando mal aplicado, cria atrito. E atrito, em interfaces críticas como um sistema de folha de pagamento, se traduz diretamente em erros, retrabalho e abandono.

Trabalhar com navegabilidade reforça uma ideia fundamental da Interação Humano-Computador: **o sistema existe para servir o usuário, não o contrário**. Projetar bem significa antecipar dúvidas, respeitar convenções e tornar o caminho o mais natural possível — para que o usuário pense no que precisa fazer, e não em como usar a ferramenta.
