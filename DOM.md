# Tags
Interface entre o HTML e o JS.

document.get: 
- ElementById()
- ElementsByTagName()
- (classes) ElementsByClassName()
- (aceita tags css) .querySelector()
- (parecido com array) querySelectorAll()

```js
 <script>
 //selecionando objetos por ID
 document.getElementById("title1").textContent = "novo texto" //para alterar o
texto da propriedade
 document.querySelector("#title1").textContent = "outro texto" //passa qualquer
seletor de CSS (., # etc.)
 document.getElementsByClassName("paragrafo2")[0].textContent = "editado"
 </script>
 ```

você não consegue modificar ou seja acessar as propriedades quando se usa
`ClassName`, diretamente por exemplo, é necessário colocar o indice pois é parecido com uma
array. Com o query também é necessário passar um indíce.

```js
document.querySelectorAll(".paragrafo2")[1].textContent = "editado tbm"
```

Se há apenas um `h1` (ou vc quer editar o primeiro apenas), e vc usa o
`querySelector`, é possível editar suas propriedades diretamente. Mas se você usa o `All`, é necessário indicar o indice de qual h1 vc está querendo.

```js
 document.querySelector("h1").textContent = "nsjbsb"
 document.querySelectorAll("h1")[1].textContent = "aaaaa"
 ```

# Acessando a árvore DOM
Você pode acessar as propriedades caso armazene o pai em uma variável, podendo modificar elas: (quando recebe uma coleção, tem que passar o indice)

```js
 let teste = document.getElementById("idmain") //é uma section
 teste.getElementsByTagName("p")[0].textContent = "bbbbb"
 ```

Uma maneira mais fácil, é usar o query selector pois possui as propriedades do css.

```js
 document.querySelector("#idmain p").textContent = "2222" //o querySelector sempre vai retornar o primeiro p. e usando o All vc seleciona mais
```

## _Exercício Saudação_

```js
(function(){
 const NomeUsuario = "Shay"
 document.querySelector(".top-bar p").textContent += NomeUsuario
 //ou
 const elemento = document.querySelector(".top-bar p")
 elemento.textContent += NomeUsuario
})()
//outra forma de concatenar
elemento.textContent = elemento.textContent + NomeUsuario
```

a propriedade elemento.textContent serve tanto para modificar um texto, quanto para recupera-lo.

Para deixar o texto em **negrito**

 ```js
 elemento.innerHTML += "<b>" + NomeUsuario + "</b>"
 ```

# Escondendo elemento

```js
(function(){
 const NomeUsuario = null
 const elemento = document.querySelector(".top-bar p")
 if(NomeUsuario){
 elemento.innerHTML += "<b>" + NomeUsuario + "</b>"
 }else{
 elemento.style.display = "none"
 //ou voce pode acessar o pai
 elemento.parentElement.style.display = "none"
 //seleciona os filhos do corpo
 document.querySelector("body").children[0] //para acessar o primeiro filho
 }
})()
```

## Removendo elemento

Para remover um elemento, você precisa acessar o pai e a partir dele acessar o filho (ou usa .remove() mas não dá suporte para todos os browsers)

```js
(function(){
 const NomeUsuario = null
 const elemento = document.querySelector(".top-bar p")
 if(NomeUsuario){
 elemento.innerHTML += "<b>" + NomeUsuario + "</b>"
 }else{
 //o parentElement nesse caso seria o pai da tag p (top-bar)
 const elementoRemovido = elemento.parentElement
 //agora vamos acessar o pai do pai do elemento kkkk
 elementoRemovido.parentElement.removeChild(elementoRemovido) //ele ta removendo
o filho dele top-bar
 }
})()
```
Ainda assim não é perfeito, o ideal seria criar um elemento caso haja usuário, não remover:

## Adicionando elemento

```js 
(function(){
 const NomeUsuario = "Shay"
 if(NomeUsuario){
 const TopBar = document.createElement("div")
 TopBar.className = "top-bar"
 TopBar.innerHTML = `<p>Olá, <b> ${NomeUsuario} </b></p>`
 //agora precisa fazer isso ser colocado em algum lugar
 //a partir do elemento pai, vai ser inserido um elemento(novoElemento)
antes da referencia
 //elementoPai.insertBefore(novoElemento, elementoReferencia)
 const Pai = document.querySelector(".hero")
 Pai.insertBefore(TopBar, Pai.firstElementChild)
 }
})()
```

```html
(HTML)
 <header class="hero">
 <!-- <div class="top-bar">
 <p>Bem-vindo(a), </p>
 </div> -->
 <div class="hero-content">
 <h1>Curso Javascript Completo</h1>
 <p>Aprenda Javascript de verdade</p>
 </div>
 </header>
 ```

# Simulando Email

```js 
function Cad_Email() {
 const txtEmail = document.getElementById("txtEmail")
 const txtUser = document.getElementById("newsletterFeedback")
 let txtEmailValue = txtEmail.value
 txtUser.textContent = `O usuário ${txtEmailValue} foi cadastrado`
}
//onclick exige que a função seja global
//é a partir do momento que clico no botao que quero o valor do input, se caso sua
variavel for colocada fora do evento ele nao vai funcionar pois o valor nao foi
recuperado
```

```html
(HTML)
 <div id="newsletterForm">
 <label for="txtEmail">Email:</label>
 <input type="email" id="txtEmail" autocomplete="off">
 <button id="btn" onclick="Cad_Email()">Enviar</button>
 </div>
 <div id="newsletterFeedback">
[...]
```

### Habilitando e desabilitando input

```js
//acionando input
function editar(){
 txtEmail.disabled = false
 btnEmail.disabled = false
 txtEmail.focus() //já da foco assim que clicar
}
function disabledEmail(){
 txtEmail.disabled = true
 btnEmail.disabled = true
}
```

```html
(HTML)
 <div id="newsletterForm">
 <label for="txtEmail">Email:</label>
 <input type="email" id="txtEmail" autocomplete="off" disabled
onblur="disabledEmail()"> <!--onblur faz executar unma função quando perder o foco-->
 <button id="btn" onclick="Cad_Email()" disabled>Enviar</button>
 </div>
 <div id="newsletterFeedback">
 </div>
 <br>
 <button id="editar" onclick="editar()">Editar</button>
```

# Propriedades

- p propriedade readonly é parecido com disabled (muda só a questão visual), porem para colocar no js é necessário colocar letra maiscula
- para acessar o maxlenght é necessário usar letra maiscula  (maxLength)
- para acessar a classe basta colocar className

```html
 <script>
 const txtNome = document.querySelector("#txtNome")
 const txtEmail = document.querySelector("#txtEmail")
 txtEmail.readOnly = true
    //for é uma palavra reservada para acessa-la o html precisa fazer isso:
 const contrato = document.querySelector("label[for='Contrato']")
 console.log(contrato.htmlFor)
 console.log(txtEmail.className)
 </script>
```

```html
(HTML)
 <input type="email" placeholder="email" id="txtEmail" class="classeDoEmail"><br>
<br>
 <input type="text" placeholder="nome" id="txtNome"><br><br>
 <!-- Se você coloca no id o mesmo nome do for da label, eles são
conectados, e quando vc clicar na label vc aciona a checkbox -->
 <input type="checkbox" name="contrato" id="Contrato">
 <label for="Contrato">Li e aceito o contrato</label><br>
 <textarea readonly name="textarea_cont" id="textarea_cont" cols="30"
rows="10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ut
inventore consequatur eos earum modi aperiam. Nisi libero voluptates molestiae iusto,
consequuntur porro architecto optio tempore omnis nostrum pariatur. Odit.Z</textarea>
```

## _Exercício checkbox_

```js
 //let btn = document.getElementById("btn_enviar")
 //ou
 let btn = document.querySelector('button[type="submit"]')
 btn.disabled = true
 function dis_enabled(){
 const chackbosta = document.getElementById("Contrato")
 let checked2 = chackbosta.checked
 // if (checked){
 // btn.disabled = false
 // }else{
 // btn.disabled = true
 // }
 btn.disabled = !checked2
 // se checked2 for true, btn.disabled é falso
 }
 ```

> É importante que o `disabled` seja colocado com o js, pq se o script não funcionar o usuário nunca vai ter acesso ao botão.

---

# HTMLCollection vs NodeList

- `HTMLCollection`: constitui elementos
- `NodeList`: constitui nós

```js
document. 
    getElementsByTagName()
    getElementsByClassName() //tudo que começa com get retorna HTMLCollection

    querySelectorAll() //retorna uma NodeList
```

Ele não atualiza conforme as alterações sofridas no dom. Por exemplo, ao adicionar mais um componente, a `NodeList` permanece estática não mostra que tem um item a mais, diferentemente do `collection`. E isso não tem nada a ver com o document, tem a ver com as primeiras constantes.
```html
    <div class="container">
        <ul id="list">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
        </ul>
    </div>

    <script>
        const nodelist = document.querySelectorAll("#list li")
        const collection = document.getElementById("list").getElementsByTagName("li")

        console.log(nodelist)
        console.log(collection)

        document.querySelector("#list").innerHTML += "<li>Item 6</li>"

        console.log(nodelist) //retorna nodeList 5 ainda
        console.log(collection) //retorna coleção 6

        document.getElementById("list").innerHTML += "<li>Item 7</li>"

        console.log(nodelist)
        console.log(collection)
    </script>
```
# Node vs Element

Há 12 tipos diferentes de "nós" no DOM HTML (elemento (body, div, li etc.), atributo (class, id etc.), texto, comentário etc.).
Um elemento é só um tipo específico de nó.

## Navegando entre nós

| Node. |                 |
|-------|-----------------|
|Mostra a mesma coisa que o parentElement na grande maioria das vezes.               | parentNode     |
|Mais usado, e apotam para o pai.| parentElement  |
|Pega o próximo irmão            | nextSibling    |
|Pega o irmão anterior           | previousSibling|

_Exemplo_

```html
    <h1>Teste DOM</h1>

    <div class="container">
        <p>teste 1</p>
        <p>lorem <a href="#">link</a> .</p>
        <p>teste 2</p>

        <h2>Lista</h2>
        <ul>
            <li>item 1</li>
            <li>item 2
                <ul>
                    <li>item 2.a</li>
                    <li>item 2.b</li>
                    <li>item 2.c</li>
                </ul>
            </li>
            <li>item <a href="#">link</a></li>
        </ul>
    </div>
```
### parentElement e parentNode
```js
   console.log(document.body) //para acessar o body mais rápido

   console.log(document.body.parentElement)
   console.log(document.body.parentNode)
   ```
> No exemplo, ambos apontam para o HTML

**São diferentes quando:**
```js
   const html = document.body.parentElement
   console.log(html.parentElement) //mostra null porque o "html" não tem um pai do tipo elemento
   console.log(html.parentNode) //mostra document
```
O `parentNode` mostra um nó do html, já que a constante "html" não tem uma referência pai.

### nextSibling e previousSibling
```js
   const h2 = document.querySelector("h2")   
   console.log(h2.nextElementSibling) //mostra elemento irmão "ul" e seus filhos "li"
   console.log(h2.nextSibling) //mostra "text" devida uma quebra de linha entre o h2 e o ul

   console.log(h2.previousSibling) //mostra tudo quvem antes, todos os nós
   console.log(h2.previousElementSibling) //retorn "teste 2" que é a tag "p "
```
## Para acessar os filhos

| Node. |                 |
|-------|-----------------|
|Mostra uma coleção com todos os nós| childNodes       |
|Só retorna os elementos.           | children         |
|Mostra a primeira cria do nó.      | firstChild       |   
|Mostra a primeira cria elemento.   | firstElementChild|
|Mostra o último cria do nó.        | lastChild        |
|Mostra o último cria elemento.     |lastElementChild  |
|Retorna um bollean caso tenha filhos. Vai mostrar qualquer nó.                        |hasChildNodes()   |

### childNodes e children
```js
        const link = document.querySelector("a")
        const list = document.querySelector("ul ul")

        console.log(list.childNodes) //(text - por causa das quebras de linha, li etc.)
        console.log(list.children) //"li"

        console.log(link.parentElement.children) //mostra os filhotes da tag "p" ("a")
```

### firstChild e firstElementChild

```js
        console.log(link.parentElement.firstChild) //mostra o texto
        console.log(link.parentElement.firstElementChild) //a própria tag link (não tem cria)
```

### hasChildNodes
```js
      console.log(list.lastElementChild.hasChildNodes())//retorna true, pois há um texto
```
## Adicionando nós

| ParentNode. |Não dão suporte para IE11           |
|-------|-----------------|
|Adiciona antes do primeiro filho.| prepend()      |
|Adiciona depois do último filho. | append()       |

```js
document.querySelector(".container").prepend(title)
```

> Vantagem: aceitam mais de um parametro

```js
document.querySelector(".container").prepend(title, "texto novo") //adiciona depois do H1 já inserido
```

| Node. |                 |
|-------|-----------------|
|Adiciona no final, depois do último filho do elemento.|appendChild()|
|Espera receber dois parametros, um novo filho, e o filho de referência.  | insertBefore()   |
|Clona elementos| cloneNode()      |

### insertBefore()
```js
      const title2 = document.createElement("h1")
      title2.textContent = "outro titulo"
      document.querySelector(".container").insertBefor(title2, document.querySelector("ul"))
```

```js
        const container = document.querySelector(".container")
        let sublevel = document.querySelector("ul ul")

        const h2_ = document.querySelector("h2") 
        h2_.textContent = "oi"
        container.insertBefore(sublevel, h2_.nextElementSibling) //pega o próximo elemento irmão e insere antes
```
Usando insertBefore ao invés de append

```js
      document.querySelector(".container").append(title)
      
      const title2 = document.createElement("h1")
      title2.textContent = "mais titulo"
      const container = document.querySelector(".container")
      container.insertBefore(title2, container.firstChild)
      //insira o título antes do primeiro filho do container
```

Clonando um elemento
```js
        let sublevel = document.querySelector("ul ul") 
        sublevel = sublevel.cloneNode(true) //passar um boleando para além de clonar o pai, clone os filhos
  ```

| ChildNode. |Funcionam a partir do filho|
|-------|-----------------|
|Adiciona depois| after()      |
|Adiciona antes.| before()     |

Aceitam nós dinâmicos e mais de um parâmetro.

> Não dão suporte para IE

| Element.|                 |
|-------|-----------------|
|Ele é a mesma coisa que o debaixo, porém precisa que crie um nó (armazene e pá) e insira como segundo parâmetro uma variável.           | insertAdjacentElement()|
|Espera uma tag HTML| insertAdjacentHTML()   |
|Mesma coisa que o de cima, mas espera apenas o texto| insertAdjacentText()|

### insertAdjacentHTML() 

```html
    <!-- beforebegin -->
    <div class="container2">
        <!-- afterbegin -->
        <p>paragrafo 1</p>
        <p>paragrafo 2</p>
        <p>paragrafo 3</p>
        <!-- beforeend -->
    </div>
    <!-- afterend -->
```

```js
        const container2 = document.querySelector(".container2")
        container2.insertAdjacentHTML()
        //primeiro passa a posição depois o valor
        container2.insertAdjacentHTML("beforebegin", "<b> texto inserido </b>")
```

As pocições dele são: `beforebegin` (insere antes da tag), `afterbegin` (insere depois do elemento), `beforeend` (insere no final, depois de todo o conteúdo mas antes de fechar a tag), `afterend` (insere depois de tudo)


## Removendo nós

|Node.||
|-------|-----------------|
|Vai substituir um filho por outro.|replaceChild()|
|A partir do pai, remove o filho.  |removeChild() |

### removeChild()
```js
  //parentNode.removeChild(list)
  list.parentElement.removeChild(list)
```

### replaceChild()
```js
        const parent = document.body
        const newChild = container.querySelector("h2")//.cloneNode(true)
        const oldChild = document.querySelector("h1")
        parent.replaceChild(newChild, oldChild)
```
Peguei o h2 e atribui ele no h1

> Se o elemento já existir no DOM, ele será movido de lugar, mas caso você queira apenas clonar use o método de clonar

|ChildNode.|Não dá suporte para IE11|
|-------|-----------------|
|Remove a partir do filho.|remove()|

## Adicionando nós

|document.|Cria um espaço na memória. Ele só vai ligar quando usar os atributos abaixo ou os anteriores.|
|-------|-----------------|
|Criando elementos no DOM.         |createElement()  |
|Atribui atributos (id por exemplo)|createAttribute()|
|Cria um texto                     |createTextNode() |
|Não é muito usado.                |write()          |

### createElement()

**Forma mais complexa: (criando nós)**
```js
      const title = document.createElement("h1")

        //método especifico para criar atributo:
      const atributo = document.createAttribute("id")
      atributo.value = "title 1"

        //vinculando:
      title.setAttributeNode(atributo)
        //<h1 id="title1"></h1>

        //colocando um texto no h1
      const texto = document.createTextNode("criando nós")
        //mais utilizado:
      title.appendChild(texto) //texto é o filho do titulo
```

**Forma mais simplificada:**

```js        
      title.setAttribute("title", "mais dinamico")
        //ou title.setAttribute("h1", "mais dinamico")
        //primeiro parametro é o tipo de atributo(h1), e o segundo é o valor
      title.setAttribute("style", "color: red;")

        //textContent é mais fácil do que criar tudo isso de nó
```