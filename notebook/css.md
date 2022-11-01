# Seletores
- Conecta um elemento HTML com o CSS a fim de alterar o elemento.

## Tipos
### Element selector
- todos os elementos HTML.

    ```css
    body{
        background-color: #fff;
    }
    
    h1{
        font-size: 1.5em;
    }
    ```
    > **body**, **h1** elementos do HTML.
    
### ID selector
- Se refere a um elemento HTML que tenha o atributo `id`.
- Cada `id` deve ser unico.

    ```html
    <h1 id="title">Titulo</h1>
    ```

    ```css
    #title{
        font-size: 1.5em;
    }
    ```
    > **#** está se referindo ao `id` com o nome _title_.

### Class selector
- Se refere a um elemento HTML que tenha o atributo `class`.
- Podemos ter uma ou mais classes em um mesmo elemento e em diferentes elementos.

    ```html
    <h1 id="title" class="red big">Titulo</h1>
    <h1 class="red">Titulo1</h1>
    ```

    ```css
    .red{
        color: red;
    }

    .big{
        font-size: 20px;
    }
    ```
    > **.** está se referindo a `class` com o nome _red_, mas apenas o element com a class `.big` terá 20px.
    >
    > A color red foi aplicada nos dois elementos que estavam com sua classe.

### Attribute selector
- Um elemento que tenha um atributo especifico.

    ```html
    <h1 id="title" class="red big" title="algum titulo">Titulo</h1>
    <h1 class="red">Titulo1</h1>
    ```

    ```css
    [title] {
        color: orange;
    }
    ```
    > **[ ]** se refere a um `atributo` com o nome _title_, ele pega todos os elementos com esse atributo e aplica a cor laranja.

### Pseudo-class selector
- Elementos em um estado especifico.

    > Estado de hover

    ```html
    <h1 id="title" class="red big" title="algum titulo">Titulo</h1>
    <h1 class="red">Titulo1</h1>
    ```

    ```css
    h1:hover {
        color: green;
    }
    ```
    > A aplicação só acontecerá quando o elemento estiver em **estado** de _hover_ (mouse em cima).

## Multiplos
- Você poderá selecionar múltiplos elementos e aplicar alguma regra css para todos eles.
- Usamos separação por virgula.

    ```css
    h1, p, .red{
        color: purple;
    }
    ```
    > **,** entre os elementos sinalizar que você concatenando eles, ou seja todos vão ser como um só e ser estilizados da mesma forma.
    >
    > Tanto `h1`,`p` e `.red` foram aplicados a cor purple.

# Combinators
- Combinadores, poís eles trabalham para buscar e combinar seletores a fim de aplicar uma estilização.

## Decendant combinator
- Identificado por um espaço entre os seletores.
- Busca um elemento dentro do outro.
- Estilizar apenas o elemento que se encaixa na "identação".

    ```css
    body article h1{

    }
    ```
    > Primeiro entrou no `body`, procurou um elemento `article`, o achou e por fim estiliza **apenas** o elemento `h1`.
    >
    > Necessariamente **não** precisa estar diretamente **ligado** ao article  o h1, pode estar dentro de 4 elementos antes do article mas **ainda** assim esta dentro de article no **fim**.

## Child combinator
- identificado pelo sinal `>` entre dois seletores.
- Seleciona somente o elemento que é filho direto do pai.
- Elementos depois do filho direto serão desconsiderados.

    **SEM CHILD COMBINATOR**
    ```html
    <body>
        <ul>
            <li>Item 1</li><!-- vermelho -->
            <li>Item 3</li><!-- vermelho -->
            <ul>
                <li>Item 2</li><!-- vermelho -->
            </ul>
        </ul>
    </body>
    ```

    ```css
    body ul li{
        color: red;
    }
    ```
    > Irá aplicar a cor vermelho para **todos** os li dentro de `body` `ul` `li`.

    **COM CHILD COMBINATOR**
     ```html
    <body>
        <ul>
            <li>Item 1</li><!-- vermelho -->
            <li>Item 3</li><!-- vermelho -->
            <ul>
                <li>Item 2</li>
            </ul>
        </ul>
    </body>
    ```

    ```css
    body > ul > li{
        color: red;
    }
    ```
    > Só aplicará a cor vermelho para primeiro `ul` do `body` e o `li` dentro desse mesmo `ul`.

## Adjacent sibling combinator
- Identificado pelo sinal `+` entre dois seletores.
- Seleciona somente o elemento do lado direito que é irmão direto na hierarquia.

    ```html
    <!-- HTML-->
    <h1>
        Titulo
    </h1>

    <p>
        esse é um paragrafo<!-- vermelho -->
    </p>

    <p>
        tambem é paragrafo
    </p>
    ```

    ```css
    /* CSS */
    h1 + p{
        color: red;
    }
    ```
    #
    ```html
    <!-- HTML-->
    <h1>
        Titulo
    </h1>

    <p>
        esse é um paragrafo
    </p>

    <p>
        tambem é paragrafo<!-- vermelho -->
    </p>
    ```

    ```css
    /* CSS */
    p + p{
        color: red;
    }
    ```
    > Estilizar apeanas o irmão **direto** que está do lado, não irmãos em geral.

## General sibling combinator
- Identificado pelo sinal `~` entre dois seletores.
- Seleciona todos os elementos irmãos.

    ```html
    <!-- HTML-->
    <h1>
        Titulo
    </h1>

    <p>
        esse é um paragrafo<!-- vermelho -->
    </p>

    <p>
        tambem é paragrafo<!-- vermelho -->
    </p>

    <button>
        botao
    </button>

    <p>
        mais outro paragrafo<!-- vermelho -->
    </p>
    ```

    ```css
    /* CSS */
    h1 ~ p{
        color: red;
    }
    ```
    > Aplica a cor vermelho para **todos** seus irmãos `p`.

# Pseudo-classes
- É um tipo de seletor que irá selecionar um elemento que estiver em um estado especifico.
    - Primeiro elemento dentro de uma caixa.
    - Elemento está com o ponteiro do mouse em cima dele.
- Começam com `:` seguido do nome da pseudo class.
    - `:pseudo-class-name`

## Selecionando elementos com pseudo-classes.

### :first-child
- Seleciona o primeiro filho de um grupo de elementos.

    ```html
    <!-- HTML-->
    <ul>
        <li>Eu</li>
        <li>Escolho</li>
        <li>As</li>
        <li>palavras</li>
    </ul>
    ```
    ```css
    /* CSS */
    ul li:first-child{
    color:yellow;
    }   
    ```
    > Seleciona o primeiro filho `li` de `ul`
    - <span style="color:yellow">Eu</span>
    - Escolho
    - As
    - Palavras
    
    ---
- Se o primerio filho **não** for o **indicado**, ele não funciona.
    ```html
    <!-- HTML-->
    <ul>
        <h3>Sim</h3>
        <li>Eu</li>
        <li>Escolho</li>
        <li>As</li>
        <li>palavras</li>
    </ul>
    ```

    ```css
    /* CSS */
    ul li:first-child{
        color:yellow;
    }   
    ```

    > Seleciona o primeiro filho `li` de `ul`, **MAS** como o primeiro filho **não** é _li_ não estiliza nenhum elemento.	

    ### Sim
    - Eu
    - Escolho
    - As
    - Palavras

### :nth-of-type( )
- Escolhe qual dos filhos de um determinado tipo será selecionado.

    ```html
    <!-- HTML-->
    <article>
        <h3>Sim</h3>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    </article>
    ```

    ```css
    /* CSS */
    article p:nth-of-type(2){
        color:yellow;
    } 
    ```
    > Seleciona filho `p` por ordem.

    ### Sim

    Lorem ipsum, dolor sit amet consectetur adipisicing elit.

    <span style="color:yellow">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>

    Lorem ipsum, dolor sit amet consectetur adipisicing elit.

### :nth-child( )
- Escolhe qual dos filhos será selecionado.

    ```html
    <!-- HTML-->
    <article>
        <h3>Sim</h3>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    </article>
    ```

    ```css
    /* CSS */
    article p:nth-child(2){
        color:yellow;
    } 
    ```
    > Seleciona filho por ordem, não se importando com o tipo de elemento(como `1` seria o `h3`, não funciona).

    ### Sim

    <span style="color:yellow">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>

    Lorem ipsum, dolor sit amet consectetur adipisicing elit.

    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    
    ---

    ```css
    /* CSS */
    article p:nth-child(3){
        color:yellow;
    } 
    ```
    ### Sim

    Lorem ipsum, dolor sit amet consectetur adipisicing elit.

    <span style="color:yellow">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>

    Lorem ipsum, dolor sit amet consectetur adipisicing elit.

#### Even & Odd

##### Even
- Sigifica **par**(números pares).

    ```html
    <!-- HTML-->
    <ul>
        <li>Você</li>
        <li>É</li>
        <li>Muito</li>
        <li>Gay</li>
    </ul>
    ```

    ```css
    /* CSS */
    article p:nth-child(even){
        color:blue;
    } 
    ```
    > Com `even` seleciona apenas os **número pares** dos filhos.

    - Você
    - <span style="color:blue">É</span>
    - Muito
    - <span style="color:blue">Gay</span>

##### Odd
- Sigifica **Impar**(números impares).

    ```html
    <!-- HTML-->
    <ul>
        <li>Você</li>
        <li>É</li>
        <li>Muito</li>
        <li>Gay</li>
    </ul>
    ```

    ```css
    /* CSS */
    article p:nth-child(odd){
        color:blue;
    } 
    ```
    > Com `even` seleciona apenas os **número impares** dos filhos.

    - <span style="color:blue">Você</span>
    - É
    - <span style="color:blue">Muito</span>
    - Gay

## Ações do usuário

### :hover
- Quando o elemento está com o mouse em cima dele.

    ```html
    <!-- HTML-->
    <a href="">Clique aqui</a>
    ```

    ```css
    /* CSS */
    a:hover{
    color: red;
    }
    ```
    > Quando o mouse estiver em cima do elemento `a` ele mudará para cor vermelha.

    **SEM HOVER(Mouse em cima)**

    <span style="color:blue"><u>Clique aqui</u></span>

    **COM HOVER(Mouse em cima)**

    <span style="color:red"><u>Clique aqui</u></span>

### :focus
- Quando o elemento está em foco, está selecionada(eu acho).
- Usado mais em inputs.

    ```html
    <!-- HTML-->
    <input type="text">
    ```

    ```css
    /* CSS */
    input:focus{
    background-color: red;
    }
    ```
    > Quando o elemento estiver selecionado/em foco, o `input` ficará vermelho.

## Atributos

### :disabled
- Quando o elemento estiver com o atributo `disabled`.

    ```html
    <!-- HTML-->
    <input type="text" disabled>
    ```

    ```css
    /* CSS */
    input:disabled{
    background-color: red;
    }
    ```
    > Enquanto o element estiver com o atributo `disabled` ele ficará vermelho.

### :required
- Quando o elemento estiver com o atributo `required`.

    ```html
    <!-- HTML-->
    <input type="text" required>
    ```

    ```css
    /* CSS */
    input:required{
    background-color: blue;
    }
    ```
    > Enquanto o element estiver com o atributo `required` ele ficará blue.

  **[Referência](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes "Pseudo classes") EXISTE TUDO QUE VOCÊ IMAGINAR DE PSEUDO CLASSS.**

# Pseudo-elements
- Com pseudo-elements nós podemos **adiconar** elementos HTML pelo próprio CSS.
- Começam com `::` seguido do nome da pseudo element.
    - `::pseudo-element-name`

## :before
- Adicionar pseudo elementos **antes** do elemento.

    ```html
    <!-- HTML-->
    <ul>
        <li>Você</li>
        <li>É</li>
        <li>Muito</li>
        <li>Gay</li>
    </ul>
    ```

     ```css
    /* CSS */
    li::before{
    content: ">";
    }
    ```
    > `content` é necessario para adiconar/estilizar o pseudo element, mesmo que vazio.

    - \> Você
    - \> É
    - \> Muito
    - \> Gay

    ---

    ```css
    /* CSS */
    li{
    position: relative;
    }

    li::after{
    content: "";
    width: 10px;
    height: 1px;
    background: black;
    position: absolute;
    bottom: 0px;
    }
    ```
    > `content` vazio.

    - Você_
    - É_
    - Muito_
    - Gay_

## :after
- Adicionar pseudo elementos **depois** do elemento.

    ```html
    <!-- HTML-->
    <ul>
        <li>Você</li>
        <li>É</li>
        <li>Muito</li>
        <li>Gay</li>
    </ul>
    ```

    ```css
    /* CSS */
    li::after{
    content: ";";
    }
    ```

    - Você;
    - É;
    - Muito;
    - Gay;

## ::first-line
- Adicionar um pseudo elemento a um elemento somente na **primeira linha** do texto.
    - Bold

    **[Referência](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements "Pseudo elements") EXISTE POUCO QUE VOCÊ IMAGINAR DE PSEUDO ELEMENTS.**

# Layout e evolução 
- Layout tem a ver com a maneira que os elementos estão distribuidos na tela.

## Normal flow
- Flow layout é a maneira que os elementos `block` e `inline` ficam na página.

    ```html
    <!-- HTML-->
    <p>texto block com <strong>inline</strong> dentro</p>

    <div>Outro texto</div>
    ```
    > O element `strong` é _inline_ ou seja não quebra linhas por padrão.
    >
    > O element `div` é _block_ então quebra linhas por padrão.

    texto block com **inline** dentro

    Outro texto

## Tables
-   É a maneira de tabelas onde a tag table recebe um display ` table` fazendo com que os elementos internos como ` td` e ` tr` possam ser usados para montar uma tabela.

    ```html
    <!-- HTML-->
    <table>
        <tr>
            <td>Hora</td>
            <td>20:00</td>
        </tr>
        <tr>
            <td>Hora</td>
            <td>20:37</td>
        </tr>
    </table>
    ```
    > Flow da `table`.

    | Hora | 20:00 |             |
    |------|-------|-------------|
    | Hora | 20:37 |             |
    | Hora | 20:37 | Outra coisa |

## Tableless
- Uso das propriedades `float` , `clear` para que os elementos possam mudar de posição na tela .

    ```html
    <!-- HTML-->
    <div>esquerda</div>
    <div>direita</div>
    <div>normal flow</div>
    ```
    esquerda

    direita

    normal flow

    ```css
    /* CSS */
    body div:nth-of-type(1){
        float: left;
    }
    body div:nth-of-type(2){
        float: right;
    }
    body div:nth-of-type(3){
        clear: both;
    }
    ```
    esquerda <u>direita</u>-------------------------------------------------------->*

    normal flow

## Flexbox
- A caixa se torna flex, fazendo com que os elementos internos possam receber melhor
    - Alinhamento
    - Ordenação
    - Tamanhos flexíveis

    ```html
    <!-- HTML-->
    <div class="flexbox">
        <div class="item">A</div>
        <div class="item">B</div>
        <div class="item">C</div>
    </div>
    ```

    A

    B

    C

    ```css
    /* CSS */
    .flexbox{
    display: flex;
    flex-direction: column;
    }

    .item:nth-child(1){
        order: 1;
    }
    ```
    B

    C

    A

# Terminologia
- **Flex Container**  `algo que contem`
    - **Flex item**  `o 'algo' dentro do container`
- **Nesting**  `elemento que contem outros elementos`
- **Axis**  `eixo`
    - **main**  `principal`
        - **start**, **end**   `começo , fim`
    - **cross**  `cruzado`
        - **start**, **end**  `começo , fim`
- **Flex sizing**
    - **flexível**
    - **altera width/height dos itens assim preenchendo os espaços do flex container**

# Propriedades do Flex Container
- Direção dos linhas
- Multi linhas 
- Alinhamento
    - Principal
    - Cruzado
- Espaços entre os itens

## Direção dos itens
- Flex é uma dimensão (horizontal e vertical).
- Podemos mudar a direção com `flex-direction`.
- Valores: (row | row-reverse | column | column-reverse) 

    ```html
    <!-- HTML-->
    <div class="container">
        <div class="item">A</div>
        <div class="item">B</div>
        <div class="item">C</div>
    </div>
    ```
    A 

    B 

    C

    ---
    ---

    ```css
    /* CSS */
    .container{
    display: flex;
    flex-direction: row;
    }
    ```
    
    ABC

    > `flex-direction:` direção dos itens.
    >
    > `row`
    ---

    ```css
    /* CSS */
    .container{
    display: flex;
    flex-direction: row-reverse;
    }
    ```

    <u>CBA</u>------------------------------------------>*

    > `row-reverse`

    ---

    ```css
    /* CSS */
    .container{
    display: flex;
    flex-direction: column;
    }
    ```

    A

    B

    C

    > `column`

    ---

    ```css
    /* CSS */
    .container{
    display: flex;
    flex-direction: column-reverse;
    height: 100vh;
    }
    ```

    C

    B

    A

    |

    |

    |

    |

    V

    *

    > `column-reverse`

## flex-wrap
- Podemos usar multi linhas.(varios eixos principais)
- Cada nova linha, um novo flex container.

**Exemplo**
- Muito complicado, basicamente iria jogar o elemento para a linha de baixo quando ele não couber mais na linha de cima(original).

> `flex-wrap:wrap`.

**Exemplo reverse**

- Agora iria jogar o elemento para a linha de cima quando ele não couber mais na linha de baixo(original).

> `flex-wrap:wrap-reverse`.

## flex-flow
- shorthand
- Direção e multi linha em uma unica propriedade

```css
flex-flow: column wrap;
```

## justify-content
- Alinhamento dos elementos dentro do container.
- Eixo principal.
- Distribuição dos elementos.

### valores

- flex-start `inicio da linha`
- flex-end `fim da linha`
- center `centro da linha`
- space-around `espaço em volta de todos os elementos`
- space-between `espaço entre os elementos`
- space-evenly  `espaco por igual entre os elementos`

**TESTE ELES!**

### align-items
- Alinhamento dos elementos do eixo cruzado.

## valores
- stretch `esticado` _padrão_
- flex-start `incio`
- flex-end `fim`
- center `centro`

## gap
- Espaços entre os elementos.
- colocado na div pai.

### valores
- Unidades de medida
    - Fixas: px, pt
    - Flexiveis: %, em, rem

# Propriedades dos itens do Flex
- flex-basis `mudar tamanho do item`
- flex-grow `adapta, cresce`
- flex-shrink `encurta, comprimi`
- flex `shorthand para os três`
- order `ordenar elementos`

## flex-basis
- Basicamente muda o tamanho dos itens.
- Se baseia no eixo principal.
- Para melhor entendimento veja.
    - Discover > Trilha Fundamentar > Alinhando os planetas > Propriedades dos itens > Largura e altura dos itens com flex-base.

## flex-grow
- O crescimento do item dentro do container em relaçao aos **espaços vazios.**

```html
 <!-- HTML-->
<div class="container">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
</div>
```

```css
/* CSS */
.box{
    border: 1px dashed red;
    display: flex;
}

.box div{
    border: 1px solid;
    width: 800px;
    flex-basis: 25px;
}

.box div:nth-child(2){
    flex-grow: 1;
}
```
> Basicamente todos os itens tem 25px, mas o item B agora preenche todo o espaço vazio.

---

```css
/* CSS */
.box{
    border: 1px dashed red;
    display: flex;
}

.box div{
    border: 1px solid;
    width: 800px;
    flex-basis: 25px;
}

.box div:nth-child(2){
    flex-grow: 1;
}

.box div:nth-child(3){
    flex-grow: 1;
}
```
> Agora B divide esse espaço vazio com C

## flex-shrink
- O encolher do item dentro do container.

```html
 <!-- HTML-->
<div class="container">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
</div>
```

```css
/* CSS */
.box{
    border: 1px dashed red;
    display: flex;
    width: 600px;
}

.box div{
    flex-basis: 100%;
    border: 1px solid;
}

.box div:nth-child(2){
    flex-shrink: 3;
}
```
> O 'shrink' do item serve para ele ser encolhido a medida que os outros itens aumentam(ou quase isso k), assim tirando o espaço que era dele.
>
> o padrão é shrink: 1

## flex
- Shorthand
    - grow
    - shrink
    - basis

```css
/* CSS */
flex: 1 1 10px;    
```
## Exemplo loco

```html
<!-- HTML-->
<div class="page">
        <aside>Aside</aside>
        <main>
            Main
            <section>Content 1</section>
            <section>Content 2</section>
            <section>Content 3</section>
        </main>
    </div>
```

```css
/* CSS */
.page{
    border: 2px solid;
    min-height: 100vh;

    display: flex;
}

aside{
    background: green;

    flex-grow: 1;
}

main{
    background: blue;

    display: flex;
    flex-direction: column;
    flex-grow: 2;
}

main section:nth-child(1){
    background: yellow;
    flex-grow: 1;
    flex-shrink: 0;
}

main section:nth-child(2){
    background: red;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 130px; 
}

main section:nth-child(3){
    background: purple;
    flex-grow: 1;
}
```
>Descubra oq faz tentando tenha em mente que:
>
> `basis` muda tamanha e subresai todo resto
>
> `grow` muda como o alemento "cresce", fração do que sobrou de espaço
>
> `shrink` muda como elemento "diminui".

## order
- Muda a ordem de um elemento.
- VISUALMENTE.
- Funciona com número negativos.

```html
<!-- HTML-->
<div class="box">
    <div>A</div>
    <div>B</div>
    <div>C</div>
    <div>D</div>
</div>
```

A B C D

---

```css
/* CSS */
.box{
    display: flex;
    border: 2px dashed;
}

.box div{
    border: 1px solid;
}

.box div:nth-child(1){
    order: 1;
}

.box div:nth-child(2){
    order: 2;
}

.box div:nth-child(3){
    order: 0;
}

.box div:nth-child(3){
    order: 0;
}
```
D C A B

> `order` por padrão é 0, quando se coloca um valor ele colocar da direita pra esquerda no eixo pricipal em ordem crescente a todos os irmãos.


