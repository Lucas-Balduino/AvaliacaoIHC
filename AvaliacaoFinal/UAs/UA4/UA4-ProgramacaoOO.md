# Modelando o Mundo Real: Programação Orientada a Objetos com TypeScript

---

## Objetivo da Atividade

A Unidade de Aprendizagem 4 trouxe uma virada de perspectiva em relação às anteriores: saiu do campo da análise de interfaces e entrou no da **implementação técnica**. O cenário apresentado foi o do comércio eletrônico — um mercado em expansão constante, onde sistemas web precisam representar digitalmente entidades e operações do mundo real.

O conceito central explorado foi o de **Programação Orientada a Objetos (POO)**, com TypeScript como linguagem de desenvolvimento. A POO parte de uma ideia elegante: se o mundo real é composto por objetos com características e comportamentos próprios, por que não modelar o software da mesma forma? Uma cadeira, um mouse, uma venda — todos esses elementos podem ser representados como *classes* no código, com seus atributos e métodos bem definidos.

O desafio era colocar esse conceito em prática desenvolvendo três entregas complementares:

- **(a)** A modelagem da classe `Produto`, representando um item comercial com seus atributos característicos
- **(b)** A modelagem da classe `Venda`, que agrupa produtos e calcula o valor total da transação
- **(c)** Um exemplo de utilização completo, instanciando produtos reais e executando o fluxo de uma venda

---

## Solução Desenvolvida

### a) Classe `Produto` — representando um item comercial

O primeiro passo foi modelar a entidade mais fundamental do sistema: o produto. Em orientação a objetos, uma **classe** funciona como um molde — ela define quais atributos um objeto daquele tipo deve ter, sem ainda criar nenhum objeto concreto. É a abstração antes da instância.

Para um produto em um sistema de vendas, os atributos essenciais são aqueles que o identificam e o descrevem de forma suficiente para uma transação comercial:

```typescript
class Produto
{
  id: number;
  nome: string;
  descricao: string;
  valor: number;
  fabricante: string;
}
```

Cada atributo tem um **tipo definido** — `number` para valores numéricos como `id` e `valor`, e `string` para textos como `nome`, `descricao` e `fabricante`. Essa é uma das vantagens do TypeScript em relação ao JavaScript puro: a tipagem estática evita erros comuns em tempo de desenvolvimento, sinalizando incompatibilidades antes mesmo de o código ser executado.

---

### b) Classe `Venda` — agrupando produtos e calculando o total

Com a classe `Produto` definida, o próximo passo foi criar a classe `Venda` — uma entidade de nível superior que *compõe* múltiplos produtos em uma única transação. Aqui entra um dos conceitos mais importantes da POO: a **composição de objetos**, em que uma classe utiliza instâncias de outra como parte de sua estrutura.

```typescript
class Venda
{
  constructor(produtos: Array<Produto>)
  {
    this.produtos = produtos;
  }

  produtos: Array<Produto>;

  valorVenda()
  {
    let soma = 0;
    for (let produto of this.produtos)
    {
      soma = soma + produto.valor;
    }
    alert("O valor total da venda é: " + soma);
  }
}
```

Três elementos merecem destaque nessa implementação:

- **O construtor** recebe um `Array<Produto>` como parâmetro — ou seja, ao criar uma venda, já é necessário informar quais produtos ela contém. Isso torna o objeto semanticamente correto desde o momento em que é criado
- **O atributo `produtos`** armazena essa coleção internamente, tornando-a acessível para os métodos da classe
- **O método `valorVenda()`** percorre todos os produtos da venda com um laço `for...of`, acumula os valores individuais em uma variável `soma` e exibe o resultado ao usuário via `alert`

> O método `valorVenda()` encapsula uma regra de negócio — o cálculo do total de uma venda. Esse é o princípio do **encapsulamento** em ação: a lógica fica dentro da classe que a pertence, não espalhada pelo código.

---

### c) Utilização — instanciando objetos e executando uma venda

Com as duas classes definidas, a etapa final foi demonstrar seu uso na prática. O exemplo cria dois produtos distintos, os adiciona a um array e executa o cálculo do valor total da venda:

```typescript
let produtos = new Array<Produto>();

let produto1 = new Produto();
produto1.id = 1;
produto1.nome = "Cadeira presidente";
produto1.descricao = "Cadeira muito confortável para ser usada no escritório.";
produto1.valor = 499.99;
produto1.fabricante = "Fábrica Brasil";

let produto2 = new Produto();
produto2.id = 2;
produto2.nome = "Mouse sem fio";
produto2.descricao = "Mouse sem fio da marca Brasil com o máximo de desempenho.";
produto2.valor = 20;
produto2.fabricante = "Fábrica Brasil";

produtos.push(produto1);
produtos.push(produto2);

let venda = new Venda(produtos);
venda.valorVenda(); // Resultado: "O valor total da venda é: 519.99"
```

O fluxo demonstrado aqui segue uma sequência lógica direta: *criar os produtos → montar o array → instanciar a venda → executar o cálculo*. Cada etapa usa os moldes definidos pelas classes anteriores, mostrando na prática como a POO permite construir sistemas a partir de peças reutilizáveis e bem definidas.

---

### Resumo da estrutura implementada

| Classe | Tipo | Responsabilidade |
|---|---|---|
| `Produto` | Entidade | Representa um item com seus atributos comerciais |
| `Venda` | Entidade + Comportamento | Agrupa produtos e calcula o valor total da transação |

---

## Ferramentas Utilizadas

- **TypeScript** — linguagem principal utilizada na implementação, escolhida pela disciplina por oferecer tipagem estática sobre o JavaScript, tornando o código mais seguro e legível
- **Conceitos de POO** — aplicação prática de classes, atributos, métodos, construtor, encapsulamento e composição de objetos, estudados no conteúdo teórico da UA
- **Claude (Anthropic)** — utilizado como assistente para a **formatação, estruturação e organização deste documento em Markdown**, incluindo a apresentação dos blocos de código com a sintaxe correta. O desenvolvimento da solução, a implementação das classes e as análises conceituais são de autoria própria; a IA atuou na organização e no refinamento do material escrito

---

## Consideração Final

O que mais se destaca nesta unidade é a percepção de que a Programação Orientada a Objetos não é apenas uma técnica de codificação — é uma forma de **pensar sobre o problema antes de escrever qualquer código**. Antes de abrir o editor, é preciso entender quais entidades existem no domínio, quais atributos as definem e quais comportamentos lhes pertencem.

No contexto do e-commerce, essa clareza conceitual tem impacto direto na qualidade do sistema. Uma classe `Produto` bem modelada desde o início facilita manutenções futuras, evita duplicações de lógica e torna o código legível para qualquer desenvolvedor que venha a trabalhar nele depois.

Há também uma conexão sutil, mas relevante, com os princípios de IHC que permearam toda a disciplina: assim como uma interface bem projetada torna a experiência do usuário mais intuitiva, um código bem estruturado torna a experiência do desenvolvedor mais clara. Em ambos os casos, *a atenção à organização e à clareza não é um detalhe — é o que faz a diferença entre algo que funciona e algo que funciona bem.*
