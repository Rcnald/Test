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