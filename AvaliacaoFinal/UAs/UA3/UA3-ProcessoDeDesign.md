# Do Problema à Solução: O Processo de Design para Ricardo

---

## Objetivo da Atividade

A Unidade de Aprendizagem 3 propôs um exercício diferente dos anteriores — em vez de analisar uma interface pronta e sugerir melhorias, o desafio era *construir o caminho* para chegar a uma solução. O ponto de partida era propositalmente incompleto: uma equipe de design recém-integrada a um projeto, sem nenhum conhecimento prévio do domínio da aplicação.

A única informação disponível era que o sistema deveria **auxiliar usuários com deficiência visual**. Todo o restante — o que o sistema faria, como funcionaria, em que contexto seria usado — precisava ser descoberto ao longo do processo.

Para tornar o problema concreto, foi apresentado o **caso de Ricardo**: um usuário que está perdendo a visão gradativamente devido a uma doença adquirida na infância. Apaixonado por tecnologia, Ricardo já faz parte do cotidiano digital — usa relógios inteligentes, smartphones e sensores acoplados à sua residência. Mas, com a perda progressiva de visão, ele passou a enfrentar uma dificuldade crescente: **locomover-se em ambientes desconhecidos**.

O objetivo da atividade, portanto, era apresentar o **passo a passo do processo de design** que uma equipe percorreria para entender o problema de Ricardo e desenvolver uma solução computacional adequada para ele.

---

## Solução Desenvolvida

O processo de design descrito a seguir não segue uma linha reta do problema à solução — ele é, por natureza, **iterativo e exploratório**. Cada etapa serve tanto para avançar quanto para revisar o que foi construído até ali. Abaixo estão as quatro fases que estruturam esse processo.

---

### Fase 1 — Compreender o Usuário e o Problema

Antes de qualquer ideia de solução, a equipe precisa *entender de verdade* quem é Ricardo, o que ele sente, o que ele precisa e como ele imagina que uma solução poderia ajudá-lo. Como o domínio da aplicação ainda é desconhecido, essa fase é especialmente crítica — não é possível projetar bem aquilo que não se compreende.

Para isso, algumas técnicas são particularmente úteis nesse estágio:

- **Storytelling** — narrativas construídas com o usuário ou a partir dele, que ajudam a equipe a visualizar o dia a dia de Ricardo, seus desafios e seus momentos de frustração
- **Picture Cards** — cartões visuais que facilitam a expressão de sentimentos e situações que podem ser difíceis de descrever apenas com palavras
- **Jornada do Usuário** — mapeamento das etapas que Ricardo percorre ao tentar se locomover em um ambiente desconhecido, identificando os pontos de dor e as oportunidades de intervenção

> Conhecer o usuário não é uma etapa burocrática do processo — é o que separa uma solução genérica de uma solução que realmente resolve o problema de alguém.

---

### Fase 2 — Explorar Possibilidades de Solução

Com o problema bem compreendido, chega o momento de abrir o leque de possibilidades. Nessa fase, a criatividade da equipe é mobilizada sem o compromisso imediato de escolher *a* solução — o objetivo é explorar diferentes abordagens e entender o que cada uma oferece.

O **storyboard** é a técnica central aqui. Por meio de sequências ilustradas, é possível visualizar como cada proposta de solução se comportaria no contexto real de uso de Ricardo. Algumas das possibilidades investigadas incluem:

- *Bengala com sensores* — um objeto familiar para usuários com deficiência visual, potencializado com tecnologia de detecção de obstáculos
- *Relógio com câmera* — aproveitando um dispositivo que Ricardo já usa no cotidiano para incorporar uma funcionalidade de navegação assistida
- *Óculos inteligentes* — uma solução mais imersiva, capaz de processar o ambiente em tempo real e fornecer informações auditivas ou táteis ao usuário

Cada proposta traz vantagens e limitações específicas. O storyboard permite que a equipe visualize essas nuances antes de qualquer linha de código ser escrita — e isso evita desperdício de tempo e recursos com caminhos que, na prática, não funcionariam.

---

### Fase 3 — Iterar até Chegar a uma Proposta Sólida

Esta é, provavelmente, a fase mais mal compreendida do processo de design: aquela em que *ainda não há nada concreto*, mas muito já aconteceu. As atividades das fases anteriores são revisitadas quantas vezes forem necessárias — não porque algo deu errado, mas porque esse amadurecimento gradual *faz parte do método*.

A cada rodada de revisão, a equipe:

- Identifica pontos que ainda não foram suficientemente investigados
- Descarta abordagens que se mostraram inviáveis na prática
- Aprofunda o entendimento sobre as necessidades reais de Ricardo
- Refina a proposta com base no que foi aprendido

**Nenhuma atividade realizada aqui significa que a solução final já foi encontrada.** Elas existem para ampliar a visão da equipe e garantir que a proposta escolhida tenha uma base sólida — tanto tecnicamente quanto em relação ao que o usuário realmente precisa. O processo só avança para a fase seguinte quando a proposta estiver aprovada pela equipe *e* por Ricardo.

---

### Fase 4 — Prototipar e Validar com o Usuário

Com uma proposta aprovada em mãos, o próximo passo é **torná-la concreta sem ainda desenvolvê-la completamente**. Os protótipos cumprem exatamente esse papel — especialmente os de *baixa fidelidade*, que podem ser desde esboços em papel até mockups simples, mas que já permitem simular o funcionamento da solução.

A validação com Ricardo é o momento central dessa fase. É ali que se descobre:

- Se a solução se comporta como o esperado na perspectiva do usuário
- Quais etapas do fluxo ainda geram dúvida ou confusão
- O que precisa ser ajustado antes de partir para o desenvolvimento final

> Prototipar antes de codificar não é perda de tempo — é economia de tempo. Corrigir um esboço em papel custa infinitamente menos do que corrigir um sistema já desenvolvido.

Ao final dessa fase, a equipe tem não apenas uma solução validada, mas também a confiança de que ela foi construída *com* Ricardo — e não apenas *para* ele.

---

## Ferramentas Utilizadas

- **Estudo teórico sobre técnicas de design** — embasamento nas metodologias de UX e design centrado no usuário apresentadas na disciplina de IHC
- **Análise do caso de Ricardo** — compreensão do perfil, das limitações, dos dispositivos utilizados e do problema central do usuário como ponto de partida para todo o processo
- **Referências em tecnologias assistivas e navegação para deficientes visuais** — aprofundamento nas soluções existentes para contextualizar as propostas exploradas
- **Claude (Anthropic)** — utilizado como assistente para a **formatação, estruturação e organização deste documento em Markdown**, contribuindo para a apresentação clara e hierárquica do conteúdo. O desenvolvimento do raciocínio, a descrição das fases do processo e as análises apresentadas são de autoria própria; a IA atuou na organização e no refinamento textual do material

---

## Consideração Final

O que a UA 3 ensina, talvez mais do que qualquer outra, é que **o processo de design é tão importante quanto o resultado final**. É tentador pular direto para a solução — especialmente quando o problema parece claro e a equipe já tem ideias na cabeça. Mas esse atalho quase sempre leva a sistemas que funcionam tecnicamente e falham humanamente.

O caso de Ricardo é um lembrete de que cada usuário carrega uma história, um contexto e necessidades que não aparecem em nenhuma especificação técnica. Só é possível chegar a uma solução que realmente funcione para ele percorrendo as etapas de compreensão, exploração e validação com cuidado — e com a humildade de revisar quantas vezes forem necessárias.

*Em IHC, o usuário não é um dado de entrada do sistema. Ele é a razão pela qual o sistema existe.*
