# Variaveis

## var
- Declaração de variaveis ES5 para baixo.
- pode ser declarada com o mesmo nome varias vezes substituindo o valor anterior.
- pode ser inicializada após sua criação.
- função, global

    ```js
        var variavelComVar = "esta é uma variavel com 'var'"
    ```
## let
- Declaração de variavel ES6+.
- poder ser declarada com o mesmo nome apenas uma vez.
- pode ser inicializada após sua criação.
- bloco, local

    ```js
        let variavelComLet = "esta é uma variavel com 'let'"
    ```

## const
- Diferente das variaveis que podem 'variar' seu conteudo, a const é uma constante, seu valor permanece o mesmo até o fim da interpretação.
- Declaração de constante ES6+.
- poder ser declarada com o mesmo nome apenas uma vez.
- Não pode ser alterada nem inicializada fora da sua linha de criação.
- bloco, local

    ```js
        const constanteComConst = "esta é uma constante com 'const'"
    ```

# Tipos de dados

## strings
- Sempre envolto em aspas duplas ou simples ('',"")
- Depende se o conteudo tiver determinado tipo de aspas, senão qualquer uma funciona perfeitamente.
- Para concatenação de variaveis(ou não, fique ao seu critério) mais pratica, a crase (``) tambem é aceita.
    - ES6+
    ```js
        let minhaString = 'isso ai'
        let minhaString2 = "isso 'ai'"
        let minhaString3 = `isso aki ${minhaString2}`
        console.log(minhaString3)
            > isso aki isso 'ai'
    ```
## numbers
- Todos os números sem ter divisão de int e float.
    ```js
        let minhaNumber = 1
        let minhaNumber1 = 1.1
        console.log(typeof minhaNumber, typeof minhaNumber1)
            > number number
    ```
## boolean
- Ou é verdade ou é mentira.

    ```js
        const isValid = false
        console.log(`isValid: ${isValid}`)
            > isValid: false
    ```

## undefined
- Variavel foi declarada mas não inicializada.
     ```js
        let number
        console.log(typeof number)
            > undefined
    ```

## null
- Você por algum motive define aquela variavel com um valor nulo.
    ```js
        let number = null
        console.log(typeof number)
            > object
    ```
# Conversão de dados
- Conversão automatico do JS com multiplicação de number e string, concatenação etc.

## ParseInt
- Converte string em number int.
- Pode descartar letras após o número, não antes dele(números depois da letra tambem são descartados).
     ```js
        let number = "10.823"
        number = ParseInt(number)
        console.log(typeof number, number)
            > number 10
    ```

## ParseFloat
- Converte string em number float.
- Pode descartar letras após o número, não antes dele(números depois da letra tambem são descartados).
     ```js
        let number = "10.823addsad"
        number = ParseFloat(number)
        console.log(typeof number, number)
            > number 10.823
    ```
## Number
- Converte para number.
- Não converte letras após o número, nem antes dele.
- Nesses casos retorna (NaN)
    ```js
        let number = "10.823addsad"
        number = Number(number)
        console.log(typeof number, number)
            > number NaN
    ```

## .toString
- Converte number para string.
    ```js
        let number = "10"
        number = number.toString()
        console.log(typeof number, number)
            > string "10"
    ```
    > tambem funciona
    ```js
        let number = "10"
        number = number + " "
        console.log(typeof number, number)
            > string "10"
    ```

# Incremento ++
# Decremento --
- quando antes da variavel sempre incrementa, quando depois pode ser incrementada apenas na proxima linha.
- O JS interpreta o ++ ou -- depois de imprimir o number.
    ```js
        let number = "10"
        console.log(number++)
        console.log(number)
            > 10
            > 11
    ```
    > antes

    ```js
        let number = "10"
        console.log(++number)
        console.log(number)
            > 11
            > 11
    ```

# Ternario
- condição ? "true" : "false"

    ```js
        let podeViajar = true

        let msg = podeViajar ? "Sim, você pode viajar" : "Não, você não pode viajar"

        console.log(msg)
            > Sim, você pode viajar
    ```

# Truthy e Falsy

## Falsy
- 0
- " "
- NaN
- undefined
- null
- false

## Truthy
- TODO O RESTO
- é muita coisa

# Curto-circuito
- Utiliza do Falsy Truthy.
- Consiste na execução da 'condição' não do true or false
    > sem cc

## OU ||
```js
    let n = 0
    if(!n){
        n = 10
    }
    console.log(n)
        > 10
```
> com cc

```js
    let n = 0
    n = n || 10
    console.log(n)
        > 10
```

## E &&
> sem cc

```js
    let isValid = true
    if(isValid){
        console.log("é valido")
    }
        > é valido
```

> com cc

```js
    let isValid = true
    
    isValid && console.log("é valido")
        > é valido
```


```js
    let isValid = false
    
    isValid && console.log("é valido")
```

> com ou

```js
    let isValid = false
    
    isValid || console.log("é valido")
        > é valido
```
> como 1 é false executa o segundo

```js
    let isValid = true
    
    isValid && console.log("é valido")// if normal
    isValid || console.log("Não é valido") //esle
        > é valido
```
> como 1 é true não precisa executa o segundo

# For in
- mostrar propriedades dos objects.

```js
    const pessoa = {
    nome: "Maria",
    idade: 28,
    "email": "ela@server.com"
    }


    for (let sexo in pessoa) {
    console.log(sexo)
    console.log(pessoa[sexo])
    }
```
> `sexo` seria a variavel que armazena a propriedade
>
> e quando se coloca uma variavel dentro de [] para acessar propriedades de objects ela se torna o nome do object(claro que se estiver armazenado nela o nome de alguma propriedade)

# Metodos
- Uma função atrelada a uma propriedade.

```js
const product = {
    name:"consolo",
    amount: 13,
    comprar : function(n){
        if(n > this.amount){
            return console.log("não tem td isso não")
        }
        this.amount -= n
    }
}

product.comprar(15)
    > não tem td isso não

```

```js
const product = {
    name:"consolo",
    amount: 13,
    comprar(n){
        if(n > this.amount){
            return console.log("não tem td isso não")
        }
        this.amount -= n
    }
}

product.comprar(2)
console.log(product.amount)
    > 11
```
# Iterar Objects dentro de Arrays
```js

const pessoas = [
    {
        nome:"Ronaldo",
        idade:13 ,
        santo: "claro",
    },{
        nome:"Shayare",
        idade: 15,
        safada: "com certeza",
    },{
        nome:"Pietra",
        idade:10 ,
        fode: "sim",
    },{
        nome:"Bianca",
        idade: 12,
    },{
        nome:"Ronaldinho",
        idade: 1,
    },
]
for(let i = 0; i <= pessoas.length; ++i){
    for(let pessoa in pessoas[i]){
        console.log(`${pessoa}:${pessoas[i][pessoa]}`)
    }
    console.log(" ")
}
```

```js
nome:Ronaldo
idade:13
santo:claro
 
nome:Shayare
idade:15
safada:com certeza
 
nome:Pietra
idade:10
fode:sim
 
nome:Bianca
idade:12
 
nome:Ronaldinho
idade:1
```

# Valor x Referência 
- um dado primitivo ele é passado como valor.
    - ele apenas copia o valor dentro dele, não se copia, podendo sofrer alteração.
- ja um dado object sendo passado como referência.
    - ele se "projeta" e pode ser alterado.

    ```js
    function alteraArray(a) {
    a.push("adicionado")
    }

    let arr = ["a"]
    console.log(arr)
    alteraArray(arr)
    console.log(arr)

    function alteraPrimitivo(p) { //"mensagem"
        p += " adicionado"
        console.log(" dentro da funcao: ", p)
    }
    let msg = "mensagem"
    console.log(msg)
    alteraPrimitivo(msg)
    console.log(msg)

    ```
    ```js
    >   [ 'a' ]
    >   [ 'a', 'adicionado' ]
    >   mensagem
    >   dentro da funcao:  mensagem adicionado
    >   mensagem
    ```
    > o dado object foi alterado porque era ele se projetando
    >
    > ja o primitivo apenas copiou o valor para dentro do parametro.

# try catch
- throw
- try
- catch

    ```js
    function sum(n1, n2){
        if(typeof n1 !== "number" || typeof n2 !== "number"){
            throw Error("sum precisa de numeros") // lanca um (possivel) erro
        }

        return n1 + n2
    }

    try{ //esta preparado para receber o erro
        console.log(sum(2,"a"))
    }catch (e){ //se o erro realmente existir e foi provisto no 'throw' oque esta dentro desse block de codigo será executado
        console.log("deu ruim so numero cabaco")
        console.log(e) // e sendo a menssagem do erro do 'throw'
    }
    ```

    ```js
    > deu ruim so numero cabaco
    > Error: sum precisa de numeros
        at sum (aaa.js:3:15)
        at aaa.js:11:17
    ```
    > erro no caso é dado string onde so deveria receber number.
    >
    > para aparecer apenas a menssagem use `e.message`.

## finnaly
- será executado sempre, independendo se pegou um erro ou não

    ```js
    function sum(n1, n2){
        if(typeof n1 !== "number" || typeof n2 !== "number"){
            throw Error("sum precisa de numeros") // lanca um (possivel) erro
        }

        return n1 + n2
    }

    try{ //esta preparado para receber o erro
        console.log(sum(2,"a"))
    }catch (e){ //se o erro realmente existir e foi provisto no 'throw' oque esta dentro desse block de codigo será executado
        console.log("deu ruim so numero cabaco")
        console.log(e) // e sendo a menssagem do erro do 'throw'
    }finally{
        console.log("sempre será executado")
    }
    ```
    ```js
    > deu ruim so numero cabaco
    > Error: sum precisa de numeros
        at sum (aaa.js:3:15)
        at aaa.js:11:17
    > sempre será executado
    ```
# this

## function normal
- se um this criado dentro de uma function (this globla), for passado como metodo em um objeto o this vai ser 'dinamico'.
    - esse this agora trabalha pro objeto, então vai se referir ao objeto
- se um this é criado dentro de uma **arrow** function, e for passado metodo em um objeto o this vai ser estatico, vai sempre se referir ao global(onde originalmente ele foi criado).

# Function auto-invocavel
- Para não puluir o escoco global com funções, (que podem vir a se repetir em outros arquivos ser sobescritas e etc...)
- gerar um escopo isolado
- não vaza para o escopo gobal.

    ```js
    (function()){console.log("função anonima, que se executa sozinha")}()
    ```
    ```js
        > função anonima, que se executa sozinha
    ```
    > Aqui temos uma função que se executa sozinha, ele existe dentro dela msm.
    >
    > assim ela não faz parte do escopo global.

- assim podemos ter 'varias' function com msm nome sem que entrem em conflitos.

## parametros em functions auto-invicaveis
- os parametros são inseridos nos '()' do lado da palavra 'function' e os argumentos nos '()' de fora.

    ```js
    (function(n1, n2)){ //parametros
        console.log(n1 + n2)
    }(2 ,3) // argumentos
    ```
    ```js
        > 5
    ```

## let
- esquecer de usar let.
 ```js
    (function(n1, n2)){ //parametros
    isValid = false
        console.log(n1 + n2)
    }(2 ,3) // argumentos
    ```
    ```js
        > 5
```

- isValid agora faz parte do escopo global.
- use strict, para impedir isso.

# arguments
- Como se fosse um array.
- coloca todos os argumentos de uma função em uma especie de array light.
- não precisando passar parametros.
    ```js
   function somar() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    return total
    }
    console.log(somar(1, 2, 3))
    console.log(somar(1, 2, 3, 4, 5))
    console.log(somar(1, 2, 3, 4, 5, 12, 14, 50))
    ```
    ```js
    >6
    >15
    >91
    ```
- **NÃO EXISTE em arrow functions.**

## .name
- propriedade da function que retorna seu nome.
   ```js
   const somar = function() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    return total
    }
    console.log(somar.name)
    ```
    ```js
        > somar
    ```
    > server para 

- principalmente para functions expression.

    ```js
    const somar = function multiplicar() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    return total
    }
    console.log(somar.name)
    ```
    ```js
        > multiplicar
    ```

# Passando funções como parametro
```js
function fn(cb){
    console.log('executar acao de callback')
    typeof cb === "function" && cb()
}

function callback(){
    console.log('function passada pro callback')
}

fn(callback)
```
```js
    > 'executar acao de callback'
    > 'function passada pro callback'
```
> a função é executada dentro de outra função como parametro.

```js
const obj = {
    callback //(mesma coisa que 'callback : callback') propriedade que eu criei 'callback' recebe a function callback
}

obj.callback()
```
```js
    > 'function passada pro callback'
```
> pode ser acessada por um metedo de um object.

## Funções retornando funções
- o return de uma function é outra function

    ```js
    function fn3(){
    return function(){
        console.log("funcao retornada")
        }
    }

    const fn4 = fn3()

    fn4()
    ```
    > a 'const' ja é a function que retorna da 'fn3'

# Função é um objeto
- como functions sao objetos posso atribuir propriedades a ela normalmente.

    ```js
    function fn3(){
    fn3.contador++
        return function(){
        console.log("funcao retornada")
        }
    }
    fn3.contador = 0


    const fn4 = fn3()

    fn4()

    fn3()
    fn3()
    fn3()
    fn3()

    console.log(fn3.contador)
    ```
    ```js
    > "funcao retornada"
    > 5
    ```

## Calcular média

```js
function avarage(){
let total = 0
let amount = arguments.length
for(let i = 0; i < amount; ++i){
    if(typeof arguments[i] !== "number"){
        throw Error("so são aceitos números")
    }
        total +=  arguments[i]
}
return (total / amount) || 0
}
```

## Calcular IMC

```js
function IMC(weight, height){
    let imc = weight/ (height * height) || " "
    if(typeof imc !== "number"){
        throw Error("Insira número para calcular o IMC")
    }

    const messageIMC = (function(imc){
        if(imc > 40){
            return `Obesidade Grau III`
        }else if(imc >= 35){
            return `Obesidade Grau II`
        }else if(imc >= 30){
            return `Obesidade Grau I`
        }else if(imc >= 25){
            return `Acima do peso`
        }else if(imc >= 18.5 ){
            return `Peso normal`
        }else if(imc >= 17){
            return `Abaixo do peso`
        }else if(imc >= 16){
            return `Muito abaixo do peso`
        }else{
            return `passando fome?`
        }
    })(imc)

    return console.log(imc.toFixed(2), messageIMC)
}

IMC(0, 0)
```

## Calcular IMC callback
```js
function IMC(weight, height, cb){
    let imc = weight/ (height * height) || " "
    if(typeof imc !== "number"){
        throw Error("Insira número para calcular o IMC")
    }

    if(typeof cb === "function"){
        return console.log(cb(imc))
    } 
    return console.log(imc.toFixed(2))
}

const messageIMC = function(imc){
    if(imc > 40){
        return `Obesidade Grau III`
    }else if(imc >= 35){
        return `Obesidade Grau II`
    }else if(imc >= 30){
        return `Obesidade Grau I`
    }else if(imc >= 25){
        return `Acima do peso`
    }else if(imc >= 18.5){
        return `Peso normal`
    }else if(imc >= 17){
        return `Abaixo do peso`
    }else if(imc >= 16){
        return `Muito abaixo do peso`
    }else{
        return `passando fome?`
    }
}

IMC(60, 1.70, messageIMC)
```
```js
    > Peso normal
```

# DOM

## Altera texto element
```js
    const element = document.getElementByID("title")

    element.textContent = "Alterei o texto"
```

## HtmlCollection/NodeList
- Para acessar mais de um elemento você pode pegar varias tags, classes.
- Para acessar cada uma individualmente deve se usar um indice, como nos arrays.

```js
    const element = document.getElementsBytag("h2")

    element[0].textContent = "Alterei o texto do primero h2"
    element[1].textContent = "Alterei o texto do segundo h2"
```

## parentElement
- Consguir elemento pai do elemtento selecionado
```js
    const element = document.getElementsBytag("h2")

    console.log(element[0].parentElement)
```
```js
    > <div>...</div>
```

## children
- Consguir todos os elementos filho do elemento selecionado
- Eles podem ser acessados individualmente por meio de [].
```js
    const element = document.getElementsBytag("h2")

   let pai =  element[0].parentElement

   console.log(pai.children)
```
```js
    > HTML Collection (1){
        0:h2
    }
```

## remove element(.remove())
- remove o elemento selecionado, do HTMl, não apenas visualmente
```js
    pai.remove()
```
- removeChild()
    - gambiarra para remover ie11
    - basicamente você tem que acessar o pai do elemento que você quer remover e manda ele remover o elemento que você quer remover que é filho dele
    - passa por parametro o elemento que quer remover
    
    ```js
        pai.parentElement.removeChild(pai)
    ```

## criar element
- criar e colocar elemento no DOM
    ```js
    (function(){
    const userName = ""


    if(userName){
        const topBar = document.createElement('div')
        const topBarParagraph = document.createElement('p')

        const pai = document.getElementsByClassName('hero')[0]
        const referencia = pai.getElementsByClassName('hero-content')[0]

        topBarParagraph.innerText = `Bem Vindo(a), ${userName}`
        topBar.appendChild(topBarParagraph)
        topBar.className = "top-bar"

        pai.insertBefore(topBar, referencia)
    }
    })()
    ```
    > `.createElement()` cria o elemento.

    > `.appendChild()` adiciona esse elemento como filho de outro elemento(não sei se em ultimo ou em primero ainda)

    > `.insertBefore()` adiciona o elemento antes de outro elemento referencia no elemento pai

    > `firstChild` , `firstElementChild`.

    - **LEMBRE-SE: Tudo é filho. escolha os Element.**

## valores de forms

```js
const txtEmail = document.getElementById('txtEmail')

function mostraEmail() {
    const feedBack = document.getElementById('newsletterFeedback')
    const Email = txtEmail.value
    let msg = document.createElement('p').innerText = `Seu email ${Email} foi cadastrado`
    console.log(msg)
    feedBack.innerText = msg
    
}
```
```js
> `.value` value de input, digitado pelo usuario
>
> valor é pego quando a funcao é executada, se for antes input tem `value: " "`.
```

## Elementos Objects
- Para o DOM um elemento é a mesma coisa que um objeto.
- então podemos acessar(ativas e desativalas) as propriedades de um elemento por meio de um . 

```js
const txtEmail = document.getElementById("txtEmail")



function editarEmail() {
    txtEmail.disabled = false
    txtEmail.focus()// da foco no elemnto.
}

function disableEmail() {
    txtEmail.disabled = true
}
```

- Para propriedades que tem 2 palavra utilizamos camelCase
- Para propriedades que sao palavras reservados no JS utilizamos 'html' antes como se fosse parte do cameCase.

```js
    Element.htmlFor
```

- E para class sempre coloque `className`

# Arrays

## Verificar elementos de um array 

### .every()
- O método every() testa se todos os elementos do array passam pelo teste implementado pela função fornecida. Este método retorna um valor booleano
- se todos os valores dentro do array, forem validos retorna 'true', mesmo que apenas um não seja retorna 'false'
- a execução para quando achar um valor 'false'

    ```js
        const arr = [1, 5, 10, "dada", true]
    
    let soNumero = arr.every(function(element, index, array){
        return typeof el === "number"
    })
    
    console.log(soNumero)
    ```
    ```js
        > false
    ```
    > sendo `el` cada valor do array.

### .some()
- O método some() testa se pelo menos um elemento do array passam pelo teste implementado pela função fornecida. Este método retorna um valor booleano
- se um valor dentro do array, for valido retorna 'true', se todos reprovarem retorna 'false'
- a execução para quando achar um valor 'true'

    ```js
        const arr = [1, 5, 10, "dada", true]
    
    let soNumero = arr.some(function(element, index, array){
        return typeof el === "number"
    })
    
    console.log(soNumero)
    ```
    ```js
        > true
    ```
    > sendo `element` cada valor do array.

    > `index` de cada valor do array.

    > `array` o proprio array

## filter()
- filtra apenas os elementos que passarem em determinado test implementado por uma function.
- não altera o array original, apenas exibi os filtrados

```js
const arr = [1, 5, 10, "dada", true]

let soNumero = arr.filter(function(element){
    return typeof element === "number"
})

console.log(soNumero)
```
```
    > [1, 5, 10]
```

## forEach()
- como se fosse um loop for que mostra todos os elementos dentro do array.
- nao retorna nada.

```js
const arr = [1, 5, 10, "dada", true]

arr.forEach(function(element){
    console.log(element) 
})

soNumero
```
```js
    > 1
    > 5
    > 10
    > dada
    > true
```

## map()
- como se fosse um loop for que mostra todos os elementos dentro do array.
- retorna.
- não altera array original mas pode cria uma novo array modificado.

```js
const arr = [1, 5, 10]

let soNumero = arr.map(function(element){
    return  element * element
})

console.log(soNumero)
console.log(arr)


```
```js
    > [ 1, 25, 100 ]
    > [ 1, 5, 10 ]
```

## indexOf()
- Retorna o index do elemento(o primeiro) que vocé quer procura
- quando ele não existe retorna -1

## lastIndexOf()
- Retorna o index do ultimo elemento que vocé quer procura
- quando ele não existe retorna -1

## includes()
- Retorna o valor boolean
- verifica se elemento passado por argumento existe no array.

## find()
- retorna o primeiro elemento que satisfaca a verificaçao de uma função.
- se não satifazer retorna `undefined`

```js
    let arr = [4,5,10,20,35,4,5]

console.log(arr.find(function(el){
    return el > 10
}))
```
```js
    > 20
```

## findLast()
- retorna o ultimo elemento que satisfaca a verificaçao de uma função.
- se não satifazer retorna `undefined`

```js
    let arr = [4,5,10,20,35,4,5]

console.log(arr.findLast(function(el){
    return el > 10
}))
```
```js
    > 35
```

## findIndex()
- retorna o indice do primeiro elemento que satisfaca a verificaçao de uma função.
- se não satifazer retorna `undefined`

```js
    let arr = [4,5,10,20,35,4,5]

console.log(arr.findIndex(function(el){
    return el > 10
}))
```
```js
    > 3
```

## findLastIndex()
- retorna o indice do ultimo elemento que satisfaca a verificaçao de uma função.
- se não satifazer retorna `undefined`

```js
    let arr = [4,5,10,20,35,4,5]

console.log(arr.findLastIndex(function(el){
    return el > 10
}))
```
```js
    > 4
```

## toString()
- Simplesmente pega os elementos do array e tranforma em uma so string

```js
let arr1 = [1, 2, 3]

console.log(arr1.toString())
```
```js
    > "1,2,3"
```

## join()
- Pega esses elementos mas usa o argumento do metodo com separados dos items

```js
let arr1 = [1, 2, 3]

console.log(arr1.join(" - "))
```
```js
    > "1 - 2 - 3"
```

## concat()
- pega um array e concateca com outra (criar um novo array)
- pode receber valores separados por virgula e arrays literais

```js
let arr1 = [1, 2, 3]
let arr2 = [5, 6, 7]


let arr3 = arr1.concat(arr2, 4, 89, 9, 10, ["ola", "mundo"])
console.log(arr3)
```
```js
    > [
    1,  2,     3,
    5,  6,     7,
    4,  89,    9,
    10, 'ola', 'mundo'
    ]
```
## push()
- acresenta novo elemento no fim do array
- varios valores no mesmo parametro.
- modifica array original.

## pop()
- remove o ultimo elemento do array
- modifica array original.

## shift()
- remove o primerio elemento do array
- modifica array original.

## unshift()
- acrescenta novo elemento no inicio do array
- modifica array original.

## slice()
- recorta elementos que determinar inicio e fim.
- primeiro parametro indice de onde comeca, segundo indice, quantos elementos ele irá recortar.
- se colocar apenas 1 parametro, ele sera usado como indice de inicio e recortará até o ultimo elemento do array.
- retorna valores recortados.
- não modifica array original

```js
let arr = [1, 3, 5, 7, 9, 11, 13, true, "ola mundo"]

let arr2 = arr.slice(5 , 10)
console.log(arr2)
console.log(arr)
```
```js
    >   [ 11, 13, true, 'ola mundo' ]
        [ 1, 3, 5, 7, 9, 11, 13, true, 'ola mundo' ]
```

## splice()
- recorta elementos que determinar inicio e fim.
- primeiro parametro indice de onde comeca, segundo indice, quantos elementos ele irá recortar.
- se colocar apenas 1 parametro, ele sera usado como indice de inicio e recortará até o ultimo elemento do array.
- se tiver mais de 2 parametros, a partir do 3, esses parametros serão adicionados ao fim do array original
- Retorna os valores removidos
- modifica array original

```js
let arr = [1, 3, 5, 7, 9, 11, 13, true, "ola mundo"]

let arr3 = arr.splice(2, 4, "ola mundo", 10, 100, 1000)

console.log(arr)
console.log(arr3)
```
```js
    >   [ 1, 3, 'ola mundo', 10, 100, 1000, 13, true, 'ola mundo' ]
        [ 5, 7, 9, 11 ] 
```

## reverse()
- inverte a ordem dos valores
- altera o array original.

## reduce()
- Tem como objetivo, transformar uma array em um único valor.

### Sintax
```js
arr.reduce(function(acumulador, valorAtual){}, 0)
```
- acumlador é o unico valor que será transformado.
- o valor atual é o item atual do array no loop, a principio index '0'.
- o '0' indica o valor inicial e o tipo de dado que sera retornado.
    - se não tiver esse indicador, o `acumulador` será o index '0', e o `valorAtual` o '1'.

    ```js
        const pessoas = [
        {nome:'Daniel', idade: 28},
        {nome:'Maria', idade: 29},
        {nome:'Marta', idade: 29},
        ]
    ```

    ```js
        let mesmaIdade = pessoas.reduce(function(pessoa, pessoaAtual) {
        if(pessoa[pessoaAtual.idade]){
            pessoa[pessoaAtual.idade].push(pessoaAtual.nome)
        }else{
            pessoa[pessoaAtual.idade] = []
            pessoa[pessoaAtual.idade].push(pessoaAtual.nome)
        }

         return pessoa
        }, { })

        console.log(mesmaIdade)
    ```
    > retorno como `object`

    ```js
        > { '28': [ 'Daniel' ], '29': [ 'Maria', 'Marta' ] }
    ```

## Array.from()
- Na prática o Array.from() cria uma array a partir de array-like.
    ```js
        let paragrafos = document.querySelectorAll('p')
        console.log(paragrafos)

        paragrafos = Array.from(paragrafos)

        paragrafos.map(function (p, i) {
            p.textContent = `${++i} - ${p.textContent}`
        })
    ```
    > `Array` sendo uma constructor.

    > pega os elemento do array-like e da como se fosse um push ao mesmo tempo que transforma o object em array.

## spread operator
- ...
- quebra o array em argumentos(elementos) separados por virgula.
    ```js
         const arr = [1, 2, 3]

        sum(1, 2, 3) // arguments.lenght = 3
        sum(arr) // arguments.lenght = 1

        sum(...arr)//mesma coisa
        sum(1,2,3)/mesma coisa
    ```

## destructuring
- pega elementos do array e coloca em variaveis.
- [var]

    ```js
        //[] = arr isso é uma destructuring
        const arr = [2,56,6,3]
        const [n1, n2] = arr //tirar da array o valor que eu quero, criando uma constante
        console.log(n1)
        console.log(n2)
        //pega as duas primeiras constantes
        //retorna 2, 56
    ```

## for of
- for in de array
- for in pega a propriedade do objeto
- for of pega o valor do array.

    ```js
    const arr = [1, 2, 3]

    for (n of arr) {
        console.log(n)
    }
    ```
    ```js
        > 1 
        > 2
        > 3
    ```

# HTML Collection x NodeList

## querySelectorAll()
- Geram uma `NodeList`.

## getElementsByTagName() e getElementsByClassName() 
- Geram uma `HTML Collection`.

Ex:
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
```

```js
const nodeList = document.querySelectorAll("#list li")
const collection = document.getElementById("list").getElementsByTagName("li")

console.log(nodeList)
console.log(collection)
```

```js
    > NodeList(5) [li,li,li,li,li]
    > HTMLCollection(5) [li,li,li,li,li]
```

Modificando HTML via DOM.

```js
document.querySelector("#list").innerHTML += "<li> Item 6 </li>"
```

```js
    > NodeList(5) [li,li,li,li,li]
    > HTMLCollection(6) [li,li,li,li,li,li]
```
> Apenas a `HTMLCollection` foi atualizada, ela é "viva".
>
> Já o `NodeList` é estatica, vai ser **sempre** aquele dado que foi recuperado no momento de sua declaração.

# Element x Node

Há 12 tipos diferentes de "nós"(Node) no DOM HTML (elemento (body, div, li etc.), atributo (class, id etc.), texto, comentário etc.). **Um elemento é só um tipo específico de nó**.

```html
<h1>teste DOM</h1>

    <div class="container">
        <p>teste 1</p>
        <p>lorem <a href="#"> link </a> jkasbkjask djas </p>
        <p>teste 2</p>

        <h2>Lista</h2>
        <ul>
            <li>item 1</li>
            <li>item 2
                <ul>
                    <li>item 2.a</li>
                    <li>item 2.b</li>
                    <li>item 2.c</li>
                    <li>
                        <!-- asdasd  -->
                    </li>
                </ul>
            </li>
            <li>item <a href="#">link</a></li>
        </ul>
    </div>
```

# Navegar entre Nodes

## Node.parentNode x Node.parentElement

### Node.parentNode
- Retorna o `Node`(geralmente Elemento) pai, que engloba tal Node(geralmente Elemento).

### Node.parentElement
- Retorna o `Element` pai, que engloba tal Elemento.




Exemplo:
```js
console.log(document.body.parentElement)
console.log(document.body.parentNode)
```

```html
> <html></html>
> <html></html>
```

> Apontam para o mesmo elemento(Node do tipo element).
---
Exemplo 1:

```js
const html = document.body.parentElement
```

```js
console.log(html.parentElement)
console.log(html.parentNode)
```

```js
> null
> #document
```

> O `Element` retorna nulo, pois não existe um elemento que engloba `html`.
>
> O `Node` retorna '#document', um node.

## Node.nextSibling x Node.nextElementSibling

### Node.nextSibling
- Retorna o `Node`(geralmente Elemento) irmao á direita(em baixo).

### Node.nextElementSibling
- Retorna o `Element` irmao á direita(em baixo).

Exemplo:

```js
const h2 = document.querySelector("h2")
```
 
```js
console.log(h2.nextSibling)
console.log(h2.nextElementSibling)
```

```html
> #text
> <ul></ul>
```

> O `nextSibling` retornou uma 'quebra de linha'.
>
> O `nextElementSibling` retornou o proximo `Element`.

## Node.previousSibling x Node.previousElementSibling


### Node.previousSibling
- Retorna o `Node`(geralmente Elemento) irmao á esquerda(em cima).

### Node.previousElementSibling
- Retorna o `Element` irmao á esquerda(em cima).

Exemplo:

```js
const h2 = document.querySelector("h2")
```
 
```js
console.log(h2.previousSibling)
console.log(h2.previousElementSibling)
```

```html
> #text
> <p></p>
```

> O `previousSibling` retornou uma 'quebra de linha'.
>
> O `previousElementSibling` retornou o `Element` anterior.

## Acessar filhos

## Node.childNodes x Node.children

### Node.childNodes
- Retorna uma `NodeList` com todos os `nós` filhos de tal Node(geralmente Elemento).

### Node.children
- Retorna uma `HTMLCollection` com todos os `Elements` filhos de tal Node(geralmente Elemento).

Exemplo:

```js
const list = document.querySelector("ul ul")
```

```js
console.log(list.childNodes)
console.log(list.children)
```

```js
> NodeList(9) [text, li, text, li, text, li, text, li, text]
> HTMLCollection(4) [li, li, li, li]
```
> O `childNodes` retornou todos os nós filhos dele.(element e quebra de linha).
>
> O `children` retornou todos o elementos filhos dele.

## Node.firstChild x Node.firstElementChild

### Node.firstChild
- Retorna o primeiro nó de tal Node(geralmente Element).

### Node.firstElementChild
- Retorna o primeiro Elemento de tal Node(geralmente Element).

Exemplo:

```js
const link = document.querySelector("a")
```

```js
console.log(link.parentElement.firstChild)
console.log(link.parentElement.firstElementChild)
```

```js
> "Lorem"
> <a></a>
```
> O `firstChild` retornou o primeiro nó de tal Node(geralmente Element).
>
> O `firstElementChild` retornou o primeiro elemento de tal Node(geralmente Element).


## Node.lastChild x Node.lastElementChild

### Node.lastChild
- Retorna o ultimo nó de tal Node(geralmente Element).

### Node.lastElementChild
- Retorna o ultimo Elemento de tal Node(geralmente Element).

Exemplo:

```js
const link = document.querySelector("a")
```

```js
console.log(link.parentElement.firstChild)
console.log(link.parentElement.firstElementChild)
```

```html
> "."
> <a></a>
```
> O `lastChild` retornou o ultimo nó de tal Node(geralmente Element).
>
> O `lastElementChild` retornou o ultimo elemento de tal Node(geralmente Element).

## hasChildNodes()
- Retorna um boolean, que indica se tal Node(geralmente Element) tem nós filhos.

Exemplo:

```js
console.log(list.lastElementChild.hasChildNodes())
```

```js
> true
```

# criando elementos no DOM

## document.createElement()
- Cria um elemento.
- Esse elemento é atribuido dentros dos parenteses por meio de aspas.

```js
const title = document.createElement("h1")
```

```js
console.log(title)
```

```html
> <h1></h1>
```

## document.createAttribute()
- Cria um atributo.
- Esse atribuido é atribuido dentros dos parenteses por meio de aspas.

```js
const atributo = document.createAttribute("id")
```
Atribuindo valor:

```js
atributo.value = "title1"
```

## Node.setAttributeNode()
- Atribui um atributo criado a um elemento existente.

```js
title.setAttributeNode(atributo)
```

```js
console.log(title)
```

```html
> <h1 id="title1"></h1>
```

## Node.setAttribute()
- Cria e adiciona atributos a um elemento.

```js
title.setAttribute("id", "title1")
```
> O primeiro parametro é o `tipo` do atributo.
>
> O segundo parametro é o `valor` do atributo.

```js
console.log(title)
```

```html
> <h1 id="title1"></h1>
```

## document.createTextNode()
- Cria um texto.

```js
const text = document.createTextNode("te amo caramelinho")
```

## Node.textContent
- Mostra texto dentro do nó
- Tambem atribui texto.

```js
title.textContent = "te amo caramelinho"
```

```js
console.log(title)
```

```html
> <h1 id="title1">te amo caramelinho</h1>
```

# Adicionando um nó em outro.

## appendChild()
- adiciona um elemento como filho de um node.
- precisa de um elemento com parametro.
- inseri no final do nó.

```js
title.appendChild(text)
```

```js
console.log(title)
```

```html
> <h1 id="title1">te amo caramelinho</h1>
```

Exemplo:

```js
document.body.appendChild(title)
```

```html
<h1>teste DOM</h1>

    <div class="container">
        <p>teste 1</p>
        <p>lorem <a href="#"> link </a> jkasbkjask djas </p>
        <p>teste 2</p>

        <h2>Lista</h2>
        <ul>
            <li>item 1</li>
            <li>item 2
                <ul>
                    <li>item 2.a</li>
                    <li>item 2.b</li>
                    <li>item 2.c</li>
                    <li>
                        <!-- asdasd  -->
                    </li>
                </ul>
            </li>
            <li>item <a href="#">link</a></li>
        </ul>
    </div>
    <!-- ó ele aqui  -->
    <h1 id="title1">te amo caramelinho</h1>
```

## Node.append()
- adiciona qualquer coisa como filho de um node.
- aceita mais de um parametro
- inseri no final do nó.


```js
tilte.append("Hello doce")
```

```js
console.log(title)
```

```html
> <h1 id="title1">Hello doce</h1>
```
> com `appendChild` essa linha de codigo resultaria em um erro.

## Node.preprend()
- adiciona qualquer coisa como filho de um node.
- aceita mais de um parametro
- inseri no começo do nó.


Exemplo: 

```js
document.body.prepend(title)
```

```html
<h1>teste DOM</h1>
    <!-- ó ele aqui  -->
    <h1 id="title1">te amo caramelinho</h1>
    <div class="container">
        <p>teste 1</p>
        <p>lorem <a href="#"> link </a> jkasbkjask djas </p>
        <p>teste 2</p>

        <h2>Lista</h2>
        <ul>
            <li>item 1</li>
            <li>item 2
                <ul>
                    <li>item 2.a</li>
                    <li>item 2.b</li>
                    <li>item 2.c</li>
                    <li>
                        <!-- asdasd  -->
                    </li>
                </ul>
            </li>
            <li>item <a href="#">link</a></li>
        </ul>
    </div>
```

## Node.insertBefore()
- adiona um elemento **antes** de determinado elemento.

Exemplo:

```js
const list = document.querySelector("ul")
title.textContent = "te amo muito pipoca de caramelho hehe"
```
 
```js
document.querySelector(".container").insertBefore(title, list)
```
> O primeiro parametro é o elemento a ser `adionado.`
>
> O segundo parametro é o elemento `referência` onde o elemento será adiconado antes.

```html
<h1>teste DOM</h1>
    <div class="container">
        <p>teste 1</p>
        <p>lorem <a href="#"> link </a> jkasbkjask djas </p>
        <p>teste 2</p>

        <h2>Lista</h2>
        <!-- ó ele aqui  -->
        <h1 id="title1">te amo muito pipoca de caramelho hehe</h1>
        <ul>
            <li>item 1</li>
            <li>item 2
                <ul>
                    <li>item 2.a</li>
                    <li>item 2.b</li>
                    <li>item 2.c</li>
                    <li>
                        <!-- asdasd  -->
                    </li>
                </ul>
            </li>
            <li>item <a href="#">link</a></li>
        </ul>
    </div>
```

# OBS: QUANDO VOCÊ MANIPULA UM ELEMENTO QUE JA EXISTE NO DOM, ELE É APENAS MODIFICADO NUNCA DUPLICADO, APENAS COM `cloneNode`.

Exemplo:

- Mover a segunda ul de lugar

```html
<h1>teste DOM</h1>
    <div class="container">
        <p>teste 1</p>
        <p>lorem <a href="#"> link </a> jkasbkjask djas </p>
        <p>teste 2</p>

        <h2>Lista</h2>
        <ul>
            <li>item 1</li>
            <li>item 2
                <!-- essa -->
                <ul>
                    <li>item 2.a</li>
                    <li>item 2.b</li>
                    <li>item 2.c</li>
                    <li>
                        <!-- asdasd  -->
                    </li>
                </ul>
            </li>
            <li>item <a href="#">link</a></li>
        </ul>
    </div>
```

```js
let ul2 = document.querySelector("ul ul")
const h2 = document.querySelector("h2")
```

```js
h2.insertBefore(ul2, h2.nextElementSibling)
```

```html
<h1>teste DOM</h1>
    <div class="container">
        <p>teste 1</p>
        <p>lorem <a href="#"> link </a> jkasbkjask djas </p>
        <p>teste 2</p>

        <h2>Lista</h2>
        <!-- essa -->
        <ul>
            <li>item 2.a</li>
            <li>item 2.b</li>
            <li>item 2.c</li>
            <li>
                <!-- asdasd  -->
            </li>
        </ul>
        <ul>
            <li>item 1</li>
            <li>item 2
            </li>
            <li>item <a href="#">link</a></li>
        </ul>
    </div>
```

## Node.cloneNode()
- É atribuida ao elemento uma copia do elemente indiciado.
- Valor boolena como parametro.

```js
ul2.cloneNode(true)
```
> Com o `true` como parametro tambem vai clonar todos os filhos dentro dele.
>
> Sem o `true` iria apenas clonar o `ul` vazio.

```js
h2.insertBefore(ul2, h2.nextElementSibling)
```

```html
<h1>teste DOM</h1>
    <div class="container">
        <p>teste 1</p>
        <p>lorem <a href="#"> link </a> jkasbkjask djas </p>
        <p>teste 2</p>

        <h2>Lista</h2>
        <!-- clone -->
        <ul>
            <li>item 2.a</li>
            <li>item 2.b</li>
            <li>item 2.c</li>
            <li>
                <!-- asdasd  -->
            </li>
        </ul>
        <ul>
            <li>item 1</li>
            <li>item 2
            </li>
            <!-- original -->
                <ul>
                    <li>item 2.a</li>
                    <li>item 2.b</li>
                    <li>item 2.c</li>
                    <li>
                        <!-- asdasd  -->
                    </li>
                </ul>
            <li>item <a href="#">link</a></li>
        </ul>
    </div>
```
---

## Node.after()
- Adiciona depois de um elemento.
- Aceita mais de um parametro.


```js
const h2 = document.querySelector("h2")
```

```js
h2.after("text", title)
```

```html
...
<h2>Lista</h2>
<!-- aqui -->
text
<h1 id="title1"></h1>
<ul>...</ul>
...
```

## Node.before()
- Adiciona antes de um elemento.
- Aceita mais de um parametro.

```js
const h2 = document.querySelector("h2")
```

```js
h2.before("text", title)
```

```html
...
text
<h1 id="title1"></h1>
<!-- aqui -->
<h2>Lista</h2>
<ul>...</ul>
...
```

# Insert

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

## Node.insertAdjacentHTML()
Funciona como uma especie de `innerHTML`.

Adiciona em lugares especificos do node.
- **beforebegin.**

    Antes do elemento.
- **afterbegin.**

    Primeiro filho do elemento.
- **beforeend.**

    Ultimo filho do elemento.
- **afterend.**

    Depois do elemento.

Exemplo:

```js
const container2 = document.querySelector(".container2")
```

```js
container2.insertAdjacentHTML("beforebegin", "<h1>texto h1</h1>")
```
```html
    <!-- aqui -->
    <h1>texto h1</h1>
    <div class="container2">
        <!-- afterbegin -->
        <p>paragrafo 1</p>
        <p>paragrafo 2</p>
        <p>paragrafo 3</p>
        <!-- beforeend -->
    </div>
    <!-- afterend -->
```
> O primeiro parametro é `onde` o texto vai ser adicionado.
>
> O segundo parametro é o `text/tags HTML` que vai ser adicionado.

## Node.insertAdjacentText()
Funciona como uma especie de `textContent`.

Adiciona em lugares especificos do node.
- **beforebegin.**

    Antes do elemento.
- **afterbegin.**

    Primeiro filho do elemento.
- **beforeend.**

    Ultimo filho do elemento.
- **afterend.**

    Depois do elemento.

Exemplo:


```js
const container2 = document.querySelector(".container2")
```

```js
container2.insertAdjacentText("beforeend", "<h1>texto h1</h1>")
```
```html
    <!-- beforebegin -->
    <div class="container2">
        <!-- afterbegin -->
        <p>paragrafo 1</p>
        <p>paragrafo 2</p>
        <p>paragrafo 3</p>
        <!-- é texto confia aqui -->
        "<h1>texto h1</h1>" 
    </div>
    <!-- afterend -->
```
> O primeiro parametro é `onde` o texto vai ser adicionado.
>
> O segundo parametro é o `text` que vai ser adicionado.

## Node.insertAdjacentElement()
Inseri um `Element` de forma dinamica.

Adiciona em lugares especificos do node.
- **beforebegin.**

    Antes do elemento.
- **afterbegin.**

    Primeiro filho do elemento.
- **beforeend.**

    Ultimo filho do elemento.
- **afterend.**

    Depois do elemento.

Exemplo:

```js
const container2 = document.querySelector(".container2")
const h1 = document.createElement("h1")
h1.textContet = "oi doceeee"
```

```js
container2.insertAdjacentlement("afterbegin", h1)
```
```html
    <!-- beforebegin -->
    <div class="container2">
        <!-- aqui -->
        <h1>oi doceeee</h1>
        <p>paragrafo 1</p>
        <p>paragrafo 2</p>
        <p>paragrafo 3</p>
        <!-- beforeend -->
    </div>
    <!-- afterend -->
```
> O primeiro parametro é `onde` o element vai ser adicionado.
>
> O segundo parametro é o `element` que vai ser adicionado.

# Removendo nós.

```html
<h1>teste DOM</h1>

    <div class="container">
        <p>teste 1</p>
        <p>lorem <a href="#"> link </a> jkasbkjask djas </p>
        <p>teste 2</p>

        <h2>Lista</h2>
        <ul>
            <li>item 1</li>
            <li>item 2
                <ul>
                    <li>item 2.a</li>
                    <li>item 2.b</li>
                    <li>item 2.c</li>
                    <li>
                        <!-- asdasd  -->
                    </li>
                </ul>
            </li>
            <li>item <a href="#">link</a></li>
        </ul>
    </div>
```

## Node.remove()
- Remove o node a qual ela foi atribuida.

```js
const list = document.querySelector("ul")
```

```js
list.remove()
```

```html
<h1>teste DOM</h1>

    <div class="container">
        <p>teste 1</p>
        <p>lorem <a href="#"> link </a> jkasbkjask djas </p>
        <p>teste 2</p>

        <h2>Lista</h2>
    </div>
```
> O elemento foi removido.

## Node.removeChild()
- Remove o filho do elemento selecionado.

```js
const container = document.querySelector(".container")
const list = document.querySelector("ul")
```

```js
container.removeChild(list)
```

```html
<h1>teste DOM</h1>

    <div class="container">
        <p>teste 1</p>
        <p>lorem <a href="#"> link </a> jkasbkjask djas </p>
        <p>teste 2</p>

        <h2>Lista</h2>
    </div>
```
> O elemento removido foi apartir do pai.

## Node.replaceChild()
- substitui o filho por um outro elemento.

```js
const container = document.querySelector(".container")
const list = document.querySelector("ul")
const newList = document.createElement("ol")
```

```js
container.replaceChild(newList, list)
```
> O primeiro parametro é o elemento que vai `substituir`.
>
> O segundo parametro é o elemento que vai ser `substituido`.

```html
<h1>teste DOM</h1>

    <div class="container">
        <p>teste 1</p>
        <p>lorem <a href="#"> link </a> jkasbkjask djas </p>
        <p>teste 2</p>

        <h2>Lista</h2>
        <ol></ol>
    </div>
```

# Eventos

## Event Handler - DOM level 0
Um evento atrelado a um atributo `on*=""` no elemento HTML.


\*  será o tipo de evento:
    - click
    - hover, etc.



Este atributo receber uma function() como value, que será executa quando tal evento for disparado.

## Event Handles - DOM level 2
Mais mundo real.

```js
const btn = document.getElementbyId('btn')
btn.addEventListener(evento, função, fase)
```
> Fica observando quando o evento acontecer.

### fase

```html
<document>
<div>
<p>
<a> event here
```
> Como a esta dentro de p, div e document; Quando um evento é disparado por a, ele logicamente tbm eh propagado aos seus elementos pais.

Padrão `false`, propaga eventos de baixo pra cima.


Quando `true`, propaga eventos de cima pra baixo.

#### Parar propagação de eventos.

Passando um parametro na função, e atrelando a propriedade:

`e.stopPropagation()`

A propagação de eventos irá ser interrompida.

## Delegação de eventos

Utíl quando temos varios filhos com eventos atrelados individualmente, então atrelamos o evento ao elemento pai, e identificamos qual elemento filho disparou o evento.

```html
    <div class="container">
        <button class="btn">a<button>
        <button class="btn">b<button>
        <button class="btn">c<button>
    </div>
```

```js
    const container = document.querySelector('.container')

    container.addEventListener('click', function(e){
        e.stopPropagation()//parar a propagacao do evento
        if(e.target.nodeName === "BUTTON"){
            console.log(e.target)
        }
    })
```
> `.target` sendo 'e' o objeto evento, sendo qual foi o elemento que o disparou a propagação, ja q o `button` é filho de `container` pela propagação ele seria computado o click.

### target x currentTarget

**target**: Elemento que disparou o evento.
> `button`

**currentTarget**: Elemento ao qual o evento está atrelado.
> `container`

#### Previne o comportamento padrão de um elemento.

`e.PreventDefautl()`

> se eu clico em um link, seu comportamento é seguir o 'href', mas eu posso interromper esse comportamento.

## Removendo EventListener

Para que isso seja possivel, não se pode passar funções anonimas como parametro, pois não se tem uma referencia do que precisa ser removido.

## keydown, press, up
Keydown 
- valor anterior
- todo tipo caracteres

Keydpress 
- valor anterior
- caracteres alfanumericos

Keyup 
- valor atual
- todo tipo caracteres

# Objetos
Tipo de dados que armazena coleção de dados (chave/valor)
- Um array `[]` armazena dados ordenados.
    - Pega chave/valor por ordem(indice).

- Um object `{}` armazena dados não ordenados.
    - Pega chave/valor pelo nome da chave.

## Literal x Formal

**Literal**
```js
let obj1 = {
    name: "Shayare",
}
```

**Formal**
```js
let obj2 = new Object()
obj2.name = "Ronaldo"
```

## Como um dado primitivo consegue acessar uma propriedade?
Como uma dado primitvo tal qual `string`, `Number` etc.. faz isso? Por debaixo dos panos é como se o JS transforma-se a `string` em um `object`, depois que a propriedade é executada, o JS apaga esse objeto temporario.

```js
const str = "string"
console.log(str.length)

> 6
```
> O que você escreve.

```js
const str = new String("string")
console.log(str)
console.log(str.length)

> String: {'string'}
> 6
```
> O que realmente acontece.

## New
O operador `new` faz um novo objeto. Sem o mesmo o objeto não é criado, ele apenar funciona como uma function e logo depois se transform em um dado primitivo.

```js
const data = Date()
const data1 = new Date()

console.log(data)
console.log(typeof data)
console.log(data1)
console.log(typeof data1)

> Thu Apr 06 2023 18:11:08 GMT-0300 (Brasilia Standard Time)
> string

> 2023-04-06T21:11:08.322Z
> object
```
> Sem o `new` retornou o valor
>
> Com o `new` retornou um object que tem acesso as metodos especificos.

## Functions constructors
Usada pra gerar objects.
- Começa sempre com letra maiuscula.
- o `this` dentro the um object referencia o proprio object

Base
```js
function Task(name){
    this.name = name
    this.createdAt = new Date()
    this.updatedAt = null
    this.changeName = function(newName){
        this.name = newName
        this.updatedAt = new Date()
    }
}

const task1 = new Task("task one")
```
> com o operador `new` pegando a function ja existe cria-se uma nova passando novos valores.

Mas pode-se alterar os valores, por isso utilizamos metodos.

```js
function Task(name){
    let _name = name
    this.getName = function(){
        return _name
    }
    this.createdAt = new Date()
    this.updatedAt = null
    this.changeName = function(newName){
        if(newName){
            _name = newName
            this.updatedAt = new Date()
        }
    }
}

const task1 = new Task("task one")

console.log(task1.getName())
console.log(task1)

> task one
> Task {
  getName: [Function (anonymous)],
  createdAt: 2023-04-07T12:39:11.185Z,
  updatedAt: null,
  changeName: [Function (anonymous)]    
  }
```
> Assim a propriedade `name` não pode ser alterada, ja que ele não existe, mas ainda podemos armazenar e retornar o `name`, atraves do metodo que armazena uma variavel local.


## Use new
Quando o operador `new` não é usado, o this fica atrelado ao escopo global, todas propiedades, metodos, se subescrevem e da ruim.


Para isso não acontecer:

```js
function Task(name){
    "use strict"

    if(this === undefined) return
    [...]
}
```
> Com o `"use strict"` o `this` será `undefined`, e se o this for undefined a função nunca será executada. (if...)
>
> Até da erro, mas não poluirá o escopo global.

# Function constructors nativas

## String

## replace()
Substitui uma string por outra string.

```js
let str = "o string string minha"
console.log(str.replace('str','u'))

> o uing string minha
```
> Apenas substitui a primera que encontrar

## replaceAll()
Substitui varias strings por outra string.

```js
let str = "o string string minha"
console.log(str.replaceAll('str','u'))

> o uing uing minha
```
> Substitui todas que encontrar.

## indexOf()
Retorna o indice da primeira determinada string 


Se procurar algo que não existe retorna '-1'

```js
let str = "o string string minha"
console.log(str.indexOf('string'))

> 2
```
> dentro da string a primeira 'string' esta na posição número dois.

## lastIndexOf
Retorna o indice da ultima determinada string


Se procurar algo que não existe retorna '-1'

```js
let str = "o string string minha"
console.log(str.lastIndexOf('string'))

> 9
```
> dentro da string a ultima 'string' esta na posição número nove.

## includes
Verifica se uma determinada string existe dentro de outra string


Retorna um boolean

```js
let str = "o string string minha"
console.log(str.includes('string'))

> true
```

## slice()
Recorta parte de string
- Primeiro parametro: inicio do corte(indice), incluido
- Segundo parametro: fim do corte(indice), se não existir, recortar tudo apartir do primeiro parametro, excluido.
- Não aceita número inicial ser maior que o número final.
- Aceita números negativos.
    - Começar de tras para frente.

```js
let str = "o string string minha"
console.log(str.slice(2,5))

> str
```

```js
let str = "o string string minha"
console.log(str.slice(-4, -2))

> in
```

## substring()
Recorta parte de string
- Primeiro parametro: inicio do corte(indice), incluido
- Segundo parametro: fim do corte(indice), se não existir, recortar tudo apartir do primeiro parametro, excluido.
- Aceita número inicial ser maior que o número final(faz a inversão).
- Não aceita números negativos.

```js
let str = "o string string minha"
console.log(str.slice(2,5))

> str
```

## valueOf()
Retorna o valor de um objeto string.

```js
let str = new String("string object")

console.log(str.valueOf())
console.log(str.toString())

> string object
> string object
```
> Perceba-se que o metodo `toString()`, apresenta a mesma função.

## trim(), trimStart() & trimEnd()
Remove espaços vazios, quebra de linha, pulo de linha etc inicias e finais a string.

```js
let str = `       

                Str ing              
            
`
console.log("-------")
console.log(str)
console.log("-------")
console.log(str.trim())
console.log("-------")

>
-------
       

                Str ing              
            

-------
Str ing
-------
```
> `trimStart()` remove apenas os do começo, `trimEnd()` apenas do final e `trim()` remove tudo.

## padStart() & padEnd()
Preenche a string com espaços vazios, quando não houver argumentos, se for passado um argumento ele preencherá a string com o argumento.
- Primeiro argumento: o tamanho que a string deve ter.
- Segundo argumento: o que vai preencher a string.
- Start: Preenche no começo.
- End: Preenche no final.

```js
let str = "string"
console.log(str.padStart(20))
console.log(str.padStart(20, "*"))
console.log(str.padEnd(20, "*"))

>               string
> **************string
> string**************
```

## startsWith() & endsWith()
Retorna um boolean, verificando se a string começa/termina com determinada string.


Pode receber um segundo argumento indicando em que indice começar a procurar pela string no `starts`


Pode receber um segundo argumento indicando o tamanho da string no `ends`

```js
let str = "minha string preta"

str.startsWith('minha')
str.endsWith('minha')

> true
> false
```

## split()
Cria um array apartir de uma string usando um separador como parametro.

```js
let str = 'minha string entre spaces'

let strArr = str.split(' ')

console.log(strArr)

> ['minha', 'string,', 'entre', 'spaces']
```

## Number

## toFixed()
Determina a quantidade de casas decimais.

```js
let numero = 1234567.890
console.log(numero.toFixed(2))

> 1234567.89
```

## toPrecision()
Determina a quantidade de casas.

```js
let numero = 1234567.890
console.log(numero.toFixed(2))

> 1.2e+6
```
> mantendo o número logico
>
> No exemplo notação cientifica, mas poderia arredondar e etc.

## toExponential()
Transforma o número em notação cientifica, quando passado um valor, age com um `toFixed`, ainda em notação cientifica.

```js
let numero = 1234567.890
console.log(numero.toExponential(2))

> 1.23e+6
```

## toString()
Transforma um objeto de dado primitivo `Number` para `String`


Pode ter argumentos para transforma em binario(2) ou hexadecimal(16)

```js
let numero = 14
console.log(numero.toString(2))

> 1110
```

## toLocaleString()
Formata o número para uma leitura humana universal.

Com argumentos as possibilidades são diversas.

```js
let numero = 123456.7890

console.log(numero.toLocaleString('pt-BR', {style: "currency", currency: "BRL"}))

> R$ 123.456,79
```
> primeiro argumento, algum padrão; segundo argumento, `options`.

## isNaN()
Verifica se o argumento pode ser convertido para número. Retorna valor boolean

```js
let numero = "12334"
console.log(isNaN(numero))

> false
```
> a string "12334", pode ser convertida em número.

## Maths
`Math` é um object, que não pode ser atribuido ele é o que ele é. Tem diversos metodos.

## Math.min()
Retorna o menor valor passado a ele.

```js
console.log(Math.min(2,1,3,9,6,3)) 

> 1
```

## Math.min()
Retorna o maior valor passado a ele.

```js
console.log(Math.max(2,1,3,9,6,3)) 

> 9
```

## Math.round()
Arredonda um valor 
- >= .5 arrendonda para cima
- < .5 arrendonda para baixo

```js
console.log(Math.max(2.5)) 

> 3
```

## Math.floor() // chao
Arredonda sempre para baixo

```js
console.log(Math.max(2.9)) 

> 2
```

## Math.ceil() // teto
Arredonda sempre para cima

```js
console.log(Math.max(2.1)) 

> 3
```

## Math.pow()
Potencia.

```js
console.log(Math.pow(5, 2)) 

> 25
```

## Math.sqrt()
Raiz quadrada.

```js
console.log(Math.sqrt(36)) 

> 6
```

## Math.cbrt()
Raiz cubica.

```js
console.log(Math.sqrt(8)) 

> 2
```

## Math.random()
Retorna um número randomico de `0.1... a 0.9...`

```js
console.log(Math.random()) 
console.log(Math.random()) 

> 0.9678590536124967
> 0.7072669839733008
```

## Date
Não existe em forma literal, apenas criada a partir do operador `new`.

## get...

```js
const data = new Date()

console.log(data.getDay())// dia da semana
console.log(data.getDate())// dia do mes
console.log(data.getMonth())// mes do ano (janiero = 0)
console.log(data.getTime())// time stamp, ms de 01/01/1970
console.log(data.getFullYear())// ano atual
console.log(data.getHours())//hora
console.log(data.getUTCHours())// hora univrsal

> 2
> 25
> 3
> 1682459327378
> 2023
> 18
> 21
> 25
```
> veja MDN para mais info.


## set...
Se com o `get` você recebe dados, com o `set` você atribui dados a um object do tipo `Date`.

## toString...

```js
const data = new Date()

console.log(data.toString())// string nomral
console.log(data.toUTCString())// horaria universal em string
console.log(data.toDateString())// sem horario
console.log(data.toISOString())//padrao
console.log(data.toLocaleString())//string formatada, que pode receber settings
console.log(data.toLocaleString("en-US", {settings...}))//string formatada, padrao americano
console.log(data.toLocaleDateString())// apenas data formatada...

Tue Apr 25 2023 18:57:50 GMT-0300 (Brasilia Standard Time)
Tue, 25 Apr 2023 21:57:50 GMT
Tue Apr 25 2023
2023-04-25T21:57:50.494Z
4/25/2023, 6:5
```
> [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options)

OBS: obsject do tipo Date com '+' igual a : Date.getTime() = +Date

# Intervalos

## setTimeOut()
Executa função depois de um certo tempo.

## setInterval()
Executa função de tempos em tempos.

## clearTimeOut()
Interrompe um setTimeOut().


## clearInterval()

Interrompe um setInterval() em determinado momento.

```js
let n
const interval = setInterval(() => {
    n++
    console.log(n)
    if(n > 15){
        clearInterval(interval)
    }
}, 2000)

> 1
> 2
> 3
> 4
> 5
> 6
> 7
> 8
> 9
> 10
> 11
> 12
> 13
> 14
> 15
> 16
```
> o `setInterval` tem que ser referenciado assim como um elemento do DOM.


## JavaScript é single Thread.

Basicamente se você agendar um timeOut apos 3s e o JS estiver executando um codigo que exigira um pouco de demanda, seu timeOut n sera executado em 3s , talvez em 5 ou 6 apos o processo anterior, quando você agenda um timeOut, interval ele apenas coloca na fila apos determinado tempo. se o JS não estiver executando nada que demande dele funcionara no tempo estimado senão terá de esperar. Então o tempo de intervalo é para colocar a function na fila, não sua real execução.

# BOM
Funcionam apenas para browsers.

## window.innerHeight
Relativo a `Altura` da area util do browser(tela).
- Retorna a Height da tela em pixels.
- Zoom afeta a area disponivel, como se tivesse mais ou menos pixels

## window.innerWidth
Relativo a `Largura` da area util do browser(tela).
- Retorna a Width da tela em pixels.
- Zoom afeta a area disponivel, como se tivesse mais ou menos pixels


## window.outerHeight
Relativa a `Altura` de browser inteiro(tabs, inspesct), o tamanho da janela do browser.
-  Retorna a Height da tela em pixels.

## window.outerWidth
Relativa a `Largura` de browser inteiro(tabs, inspesct), o tamanho da janela do browser.
- Retorna a Width da tela em pixels.

## window.screenY
Mostra a distancia do browser no eixo Y em relação tela todo do seu computador.

## window.screenX
Mostra a distancia do browser no eixo X em relação tela todo do seu computador.

# history
Um object que armazena a quantidade de paginas que navegamos a partir de links.

## history.back()
Simula o que a seta que existem nos browser faz, volta um link.

## history.forward()
Simula o que a seta que existem nos browser faz, avança um link ja carregado.

## history.go()
- quando recebe `-1` volta.
- quando recebe `1` avança.

# location
Informações referentes a URL.

## location.href
Retorna a URL completa.

## location.hash
Retorna valor de # na URL, quando você navegar por headers.

```js
console.log(location.hash)

>#elvis
```

## location.search
Retorna valor de ? na URL, quando você passa dados pela URL.

```js
console.log(location.hash)

> ?verdadeiro=true&falso=false
```

## location.protocol
Retorna o protocolo da URL.

```js
console.log(location.protocol)


> file:,
> HTTP:...
```

## location.asisgn()
Navega pela URL passada por parametro, literalemente atribui uma nova URL a pagina atual.

```js
location.assing("https://google.com")
```

## location.reload()
Simplesmente recarrega a pagina.

## location.replace()
Você passa uma URL como parametro, você é redirecionada aquela nova pagina, porem ela não pode ser acessada atravez do `history`, você não pode voltar ou avancar para esta pagina novamente.

# navigator
Informaçoes sobre o user agent.
- cookies
- plataform
- pluguins
Just check it out.

# screen
O monitor não o browser.

## screen.width
Retorna a `largura` do monitor em pixels.

## screen.availWidth
Retorna a `largura` disponivel do monitor em pixels(excluindo a barra de tarefas).

## screen.height
Retorna a `altura` do monitor em pixels.

## screen.availHeight
Retorna a `altura` disponivel do monitor em pixels(excluindo a barra de tarefas).

# window
Browser em si.

## window.alert()
Abre um modal padrão do browser.

## window.prompt()
Abre um modal padrão do browser pedindo algum dado para o usuario.

## window.confirm()
Abre um modal padrão do browser com dois botões(ok, cancel).


Retorna boolean

## window.open()
O metodo `open()`, executa o que lhe for passado por parametro(URL), tanto uma nova aba, quanto uma nova janela.(aquelas de verificação).

```js
open("URL", "nome-janela", "width=600, height=300")
```
> primeiro argumento : URL
> 
> segundo argumento : Nome da janela
> 
> terceiro argumento : options [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/open)

## window.close()
Fecha apenas o que foi aberto com o metodo `open()`.

**OBS**: quando pagina aberta pelo metodo `open()` cria-se um `opener` que armazena dados na pagina que foi executado o `open()`(um perigo)

## window.print()
Abre janela para imprimir o document.

## scrollTo()
O scroll vai para a posição determinada.

```js
scrollTo(0, 100)
```
> x = 0
> y = 100
>
> ou seja o scrollY vai para a posição de 100 pixel abaixo do topo.

## scrollBy()
O scroll adiciona pixels.

```js
scrollBy(0, 100)
```
> toda vez que for executada o scroll, ganhará mais 100 pixels de distancia do topo y.

## pageYOffSet
Retorna a posição do scroll no eixo y.

## pageXOffSet
Retorna a posição do scroll no eixo X.

# Evento referentes ao BOM

## load
Quando a pagina for carregada(assets,HTML,CSS,TUDO) disparará o evento

## DOMContentLoaded
Quando elementos do DOM(nodeElements) estiverem disponiveis para manipulação disparará o evento

## resize
Quando a area util da pagina tiver seu width ou heigth alterada disparará o evento

## scroll
Quando o scroll for movido disparará o evento

## unload & beforeUnload
Quando a pagina é fechada. 

# style

## getComputedStyle()
um object window, que por argumento recebe um elemento do DOM, e apartir dele, tem a informação de todos os estilos aplicados nele.

```css
.dom{
    background: #FFF;
} 
```

```js
const dom = doc...

console.log(getComputedStyle(dom).background)

> rgb(255,255,255)
```

## offSetHeight()
Metodo de elementos DOM, indica qual a altura atual do elemento em relação ao documento

## offSetWidth()
Metodo de elementos DOM, indica qual a largura atual do elemento em relação ao documento

## offSetTop()
Metodo de elementos DOM, indica quantos pixels de distancia elemento está do top do documento.

## offSetLeft()
Metodo de elementos DOM, indica quantos pixels de distancia elemento está da esquerda do documento.

# getBoundingClientRect()
Metodo de elementos do DOM que possui algumas propriedades:


## .height
Indica a altura do elemento dentro da view port.

## .width
Indica a largura do elemento dentro da view port.

## .bottom
Indica a distancia do elemento de baixo do elemento ao topo da view port.

## .top
Indica a distancia do elemento do topo do elemento ao topo da view port.

## .left
Indica a distancia do elemento da esquerda, dentro da view port.

## .right
Indica a distancia do elemento da direita, dentro da view port.

# Arrow function

## this
o `this` é referente á function ou metodo na qual ele se encontra.

```js
function sexo(){
    console.log(this)
}

sexo()

const obj = {
    nome: "adoro",
    sexo
}

obj.sexo()

> Window {window: Window, self: Window, document: document, name: '', location: Location, …}
> {nome: 'adoro', sexo: ƒ}
```
> O mesmo `this` (em tese, mesma function...), se referio a diferentes objects.
>
> dentro da function se referencia ao elemento global(window)
>
> Já no objeto se referencia a ele mesmo.


## this na arrow function
Quando o `this` for executado dentro de uma arrow function, seu valor sempre será fixo.

```js
const sexo = () =>{
    console.log(this)
}

sexo()

const obj = {
    nome: "adoro",
    sexo
}

obj.sexo()

> Window {window: Window, self: Window, document: document, name: '', location: Location, …}
> Window {window: Window, self: Window, document: document, name: '', location: Location, …}
```

EXEMPLO:

`function declaration`
```js
function sexo(){
    console.log(this)

    setTimeout(function(){
        console.log(this)
    },2000)
}

const obj = {
    nome: "adoro",
    sexo
}

obj.sexo()

> { nome: 'adoro', sexo: [Function: sexo] }
> Timeout {_idleTimeout: 2000,_idlePrev: null,_idleNext: null,_idleStart: 29,_onTimeout: [Function (anonymous)],_timerArgs: undefined,_repeat: null,_destroyed: false,[Symbol(refed)]: true,[Symbol(kHasPrimitive)]: false,[Symbol(asyncId)]: 4,[Symbol(triggerId)]: 1}
```
> O primeiro `this` referencia o object,
>
> Já o segundo `this` referencia o timeOut

`arrow function`
```js
function sexo(){
    console.log(this)

    setTimeout(() => {
        console.log(this)
    },2000)
}

const obj = {
    nome: "adoro",
    sexo
}

obj.sexo()

> { nome: 'adoro', sexo: [Function: sexo] }
> { nome: 'adoro', sexo: [Function: sexo] }
```
> O primeiro `this` referencia o object,
>
> Já o segundo `this`tambem se referencia o object pois na arrow function o this é fixo.

## Atrelando metedos as objects.

### 1

```js
function sexo(){
    console.log(this)

    setTimeout(() => {
        console.log(this)
    },2000)
}

const obj = {
    nome: "adoro",
    sexo
}

obj.sexo()
```
> function de mesmo nome que atributo.

### 2

```js
const obj = {
    nome: "adoro",
    sexo: function (){
    console.log(this)

        setTimeout(() => {
            console.log(this)
        },2000)
    }
}

obj.sexo()
```
> function anonima como valor de atributo

### 3

```js
const obj = {
    nome: "adoro",
    sexo(){
    console.log(this)

        setTimeout(() => {
            console.log(this)
        },2000)
    }
}

obj.sexo()
```
> como function.

## call()
com o metodo ``call()` o primeiro argumento passado, será referente a o que o this dentro de outro metodo referenciará.


o `this` será modificado APENAS naquela execução.


para passar outros argumento para a function apenas coloque a virgula e coloque os argumento normalmente, o primeiro argumento que referencia `this` será descartado para os parametros.

```js
const faco = function(){
    this.nome = 'faco sim'
}

const obj = {
    nome: "adoro",
    sexo(){
        faco()
        console.log(this.nome)
    }
}

obj.sexo()

> adoro
```
> a funtion 'faco' não conseguir modificar o 'name', pois o `this` neste caso, está referenciando `sexo()`

```js
const faco = function(){
    this.nome = 'faco sim'
}

const obj = {
    nome: "adoro",
    sexo(){
        faco.call(this)
        console.log(this.nome)
    }
}

obj.sexo()

> faco sim
```
> com o metodo `call()`, this como argumento o this dentro de 'faco()' agora se refere ao this dentro de 'sexo()' ou seja o `obj`

## apply()
Basicamente tem a mesma função do `call()`, porem os argumentos da functio são passados por um array.


o `this` será modificado APENAS naquela execução.

```js
exemplo.apply({name:"shay"}, ['argumento1', 20])
```

## bind()
com o metodo `bind()` cria-se uma nova function a partir de uma ja existente, passando um `this` fixo, não apenas em sua execução como com `call()` e `apply()`

```js
const module = {
  x: 42,
  getX: function() {
    return this.x;
  }
};

const unboundGetX = module.getX;
console.log(unboundGetX());

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());

> undefined
> 42
```
> `boundGetX()` sempre tera seu `this` referenciado a `module`.

# clousers
Quando uma function "se lembra de variaveis" no contexto a qual ela foi criada, que não pode ser usada no escopo global.

**Aula 216**

# Encadeamento || chain
O conceito de encadear metodos, parte da premisa que o metedo retorne um valor e você pode usar esse valor para utilizar outro metodo.


Quando tentamos encadear um metedo que não retorna nada(undefined) com outro metedo, da erro.

```js
const calc = {
    value: 0,
    soma(n) {
        this.value += n
        return this
    },
    subtrai(n) {
        this.value -= n
        return this
    },
    log() {
        console.log(this.value)
        return this
    }
}
calc.soma(5).soma(2).subtrai(3).soma(2).log().soma(4).log()

> 6
> 10
```
> Como cada metodo retorna o proprio object, ele pode ser "metodado" novamente.

# reveal pattern
Forma de isolar variaveis umas das outras para que seus nomes não entrem em conflito.

```js

const calcRevealPattern = (function () {
    let n = 0

    function _checkNumber(n) {
        if (typeof n !== "number") {
            throw TypeError("precisa passar numero")
        }
    }

    function somar(_n) {
        _checkNumber(_n)
        n += _n
        return this
    }

    function subtrair(_n) {
        _checkNumber(_n)
        n -= _n
        return this
    }

    function log() {
        console.log(n)
        return this
    }

    return {
        somar,
        subtrair,
        log
    }
})()
calcRevealPattern.somar(5).somar(7).subtrair(2).log()
calcRevealPattern.log()

> 10
> 10
```
> Uma function auto executavel que retorna um object com metodos selecionado, que com o conceito de clouser tem acesso a variavel n dentro disso tudo ai.

# Factories functions
Funcionam mais ou menos como uma function constructor, mas é uma function que retorna um object com metodos e talz.

```js
function criarCachorro(name) {
    let posicao = 0
    return {
        name,
        latir() {
            console.log(this.name, "está latindo")
        },
        andar(distancia) {
            posicao += distancia
            console.log(this.name, "andou ", distancia, " m")
        },

        posicao() {
            console.log(`a posicao atual de ${this.name} é ${posicao}`)
            return posicao
        }
    }
}

const rex = criarCachorro("Rex")
rex.andar(10)
rex.andar(5)

console.log("rex.posicao()")   
console.log(rex.posicao())
console.log(rex)


const toto = criarCachorro("Totó")
toto.andar(20)
toto.andar(-3)
toto.andar(-17)


> Rex andou  10  m
> Rex andou  5  m
> rex.posicao
> a posicao atual de Rex é 15
> 15
> {
   name: 'Rex',
   latir: [Function: latir],
   andar: [Function: andar],
   posicao: [Getter]
  }
> Totó andou  20  m
> Totó andou  -3  m
> Totó andou  -17  m
```

## Pegando valor atravez de propriedade não metodo.
Basta adicionar `get` antes do metodo que você consegue o usar como propriedade. Se tornando um `getter`

```js
function criarCachorro(name) {
    let posicao = 0
    return {
        name,
        latir() {
            console.log(this.name, "está latindo")
        },
        andar(distancia) {
            posicao += distancia
            console.log(this.name, "andou ", distancia, " m")
        },

        get posicao() {
            console.log(`a posicao atual de ${this.name} é ${posicao}`)
            return posicao
        }
    }
}

const rex = criarCachorro("Rex")
rex.andar(10)
rex.andar(5)

console.log("rex.posicao")   
console.log(rex.posicao)


> Rex andou  10  m
> Rex andou  5  m
> 'rex.posicao'
> a posicao atual de Rex é 15
```

# rest operator
Ao contrario do `spread operator` o rest agrupa elemento individuais em uma lista de iteraveis(array). Em functions, obrigatoriamente como ultimo parametro

```js
function teste(n1, n2, ...ns) {
    console.log(n1)
    console.log(n2)
    console.log(ns)
    console.log(typeof ns)
}

teste(1,2,3,4,5,6,7,8)

> 1
> 2
> [ 3, 4, 5, 6, 7, 8 ]
> object
```

# POO (Programação Orientada a Objetos)

## Objeto
Um objeto é uma unidade que une dados (propriedades) e suas funções (metodos).


Tem coesão que une a função com o dado que a função necessita (telefone e lista telefonica, o objeto serio um celular com os contatos nele proprio)

## Classe
É uma especificação (um molde) para criar objetos, e o objeto criado a partir desse molde é uma `instancia`.


Ex. Apartir de um projeto de cadeira, eu consigo construir cadeiras. Que apresenta alguns metodos e propriedades.
- Numero de pes
- Altura
- Cor
- Parafusos
- SuportarPeso()

Modificar? Agora quero cadeira de balanco.


Não precisa criar um completamente novo, pode se reutilizar da classe atravez de herença.

## Classe genericas
Quando tem uma conta corrente e conta poupanca, eles podem herdar coisa em comum de uma conta bancaria generica (abstrata) e ter suas modificações especificas (concretas).
- não se pode ter instancias abstratas, elas servem de molde
- pode ter instancias concretas.

## Tudo fake
Por baixo do panos o javascript apenas faz como no ES5, ele apenas padronizou para o ES6.
- Class =  function constructor
- extends = prototype

## prototype x __proto__
Todo object herde metodos do `Object` diga-mos pai, todos as suas propriedades e metodos ficam em `.prototype`, quando você cria um object que não contem tais metodos o JS começa a vasculhar nas cadeias de prototypes acima, ate chegar em uma que tenha tal.

```js
function Animal(tipo) {
    this.tipo = tipo
}

let cachorro = new Animal("mamifero")

console.log(Animal.prototype === cachorro.__proto__)

> true
```
> a propriedade `prototype` de uma function constructor armazena um obeject.
>
> e a function instace criada a partir dessa function constructor, tem uma propriedade `__proto__` que referencia ao object armazenado dentro da function contructor `.prototype`.
>
> **OU SEJA toda e qualquer propriedade de Animal.prototype vai ser heradade por suas instancias**.


```js
Animal.prototype.obterTipo = function () {
    return this.tipo
}

console.log(cachorro.obterTipo())

> `mamifero`
```
> a instancia cachorro não tem o metedo, tem a propriedade `__proto__` que armazena Animal prototype que detem o metodo, assim o JS consegue fazer que a instancia herde da constructor, vasculhando prototype acima dela.
>

```js
function Animal(tipo) {
    if (tipo) this.tipo = tipo
}

Animal.prototype.tipo = "desconhecido"
```
> por padrão o `tipo` agora é "desconhecido". Para TODAS as instancias, mas pode ser alterado individualmente.

## herança
Como herdar propriedades de objects contructors em outros object constructors

```js
function Cachorro(nome, tipo) {
    this.nome = nome
    Animal.call(this, tipo)
    this.constructor = Cachorro
}
```
> Assim o `Cachorro` herda de `Animal`, com call se referencia agora ao object atual
>
> `this.constructor = Cachorro` para que o constructor volte a ser `Cachorro` não `Animal`

## criando cadeia de prototipos.

```js
Cachorro.prototype = new Animal()
```

## hasOwnProperty()
Ë um metodo de objects, que retorna um boolean indiciando se a propriedade é de fato do object ou foi herdada.
```js
console.log(rex.hasOwnProperty('obterTipo'))

> false
```

## instanceof
que retorna um booleanIndica se tal object é instancia de um constructor. Ele busca em todas as cadeias de prototipos.

```js
console.log(rex instanceof Animal)

> true
``` 

## isPropotypeOf()
Metodo que indica se o prototype de um constructor é prototipo de uma instancia. Ele busca em todas as cadeias de prototipos.

```js
console.log(Cachorro.prototype.isPrototypeOf(rex))

> true
```

## Object.getPrototypeOf()
Retorna o object constructor de instancia passada por argumento.

```js
console.log(Object.getPrototypeOf(rex))

> Animal{}
```

## Object.defineProperty()
Definir uma propriedade de outra maneria.

```js
function Cachorro(nome, tipo) {
    Object.defineProperty(Cachorro.prototype, "constructor", {
        value: Cachorro,
        enumerable: false
    })
}
```
> ele está definindo, 1 o nome da propriedade depois o valor, e adiciona um object de configuração.
>
> que com a propriedade `enumerable` indica se aquela propriedade é iteravel ou não.

# ES5 vs ES6

## GERAL

## ES5
```js
function Animal(tipo) {
    if (this instanceof Animal) {
        if (tipo) this.tipo = tipo
    } else {
        throw new Error("Animal must be created with new operator")
    }
}

Animal.prototype.obterTipo = function () {
    return this.tipo
}

Animal.prototype.tipo = "desconhecido"
```
> `instanceof` serve para que ninguem consiga modificar a function constructor diretamente, so instancias que se baseem nela

## ES6
```js
class AnimalC {
    constructor(tipo) {
        if (tipo) {
            this.tipo = tipo
        }
    }

    obterTipo() {
        return this.tipo
    }
}

AnimalC.prototype.tipo = "desconhecido"
```
> `class` é onde declaramos a functio constructor.
> `constructor` as propriedas e parametros
> `obterTipo()` metodos direto no prototype.

## extends

## ES5

```js
function Cachorro(nome) {
    this.nome = nome
    Animal.call(this, "mamifero")
}
Cachorro.prototype = new Animal()
Cachorro.prototype.constructor = Cachorro

let dog = new Cachorro("Dog")
```
> a propriedade `tipo` defato existe em Cachorro, ela não é herdada.
> 
## ES6

```js
class GatoC extends AnimalC {
    constructor(nome) {
        super("mamifero")
        this.nome = nome
    }
}
```
> `extends` seria o `=`
> `super` seria você executando a function, passando seu argumento que nem na linha de `call` acima. E a propriedade criada a base do super, ocupa seu lugar.

## metodos prototype
Metodos devem ser atrelados sempre ao prototype, pois senão sempre sera criado um novo metodo para cada instancia mesmo sendo o mesmo metodo.

## Factories

```js
const cachorroProto = {
    latir() {
        console.log(this.name, "está latindo")
    },
    andar(distancia) {
        this.posicao += distancia
        console.log(this.name, "andou ", distancia, " m")
    }
}

function criarCachorro(name) {
    let posicao = 0

    const obj = {
        name,
        get posicao() {
            console.log(`a posicao atual de ${this.name} é ${posicao}`)
            return posicao
        },

        set posicao(newPosition) {
            console.log(`a nova posicao de ${this.name} é ${newPosition}`)
            posicao = newPosition
        }
    }

    Object.setPrototypeOf(obj, cachorroProto)

    return obj
}
```
> `setPrototypeOf()` Uma outra forma de setar um object ao prototype de um object.
> `get` recupera o valor, como uma propriedade. Transforma o que seria metodo em propriedade
> `set` me permite altera "ele mesmo" com uma function. Transforma o que seria propriedade em metodo +/-


# class abstract
Classes abstratas são quando a classe pode apenas ser extendida.

```js
class Animal {
    constructor(tipo) {

        if (this.constructor === Animal) {// A
            throw new Error("Animal is an abstract class")// K
        }// I

        if (tipo) {
            this.tipo = tipo
        }
    }

    comer() {
        throw new Error("Method 'comer()' must be implemented")
    }
}

class Gato extends Animal {
    constructor(nome) {
        super("mamifero")
        this.nome = nome
    }

    comer() {
        console.log(`${this.nome} está comendo`)
    }
}

// const animal = new Animal("mamifero")
const mingal = new Gato("mingal")
```
> `Animal` é abstrato
> `.constructor` e `constructor{}` so são ativados com o operador `new`,
> Entao quando o constructor é chamado ele verifica se não é o `Animal` que foi executado, e lança um erro se sim.
 
## metodos estaticos
Quando a classe nao é um constructor, assim como `Math` seus metodos estao diretos nele, não em seu *prototype*.

```js
class Cachorro {
    constructor(nome) {
        this.nome = nome
        console.log("chamando metodo estático de dentro do constructor")
        Cachorro.beber()
    }

    static comer() {
        // console.log(this) // Cachorro
        console.log("comendo")
        this.beber()
    }

    static beber() {
        console.log("bebendo")
    }
}

const dog2 = new Cachorro("rex")
```
> com a diretiva `static` antecendo o metodo, o `this` daquele metedo fica restrito a propria class no caso `Cachorro`, assim não existindo em suas instancias.
>

## polimorfismo 

5. Polimorfismo
   criar uma classe especializada em transferir. 
   Essa classe tera um único método execute(contaOrigem, contaDestino, valor). 
   Tanto contaOrigem quanto contaDestino precisam ser instancias de ContaBancaria. 
   Tanto CC quanto CP tem o metodo sacar(), que têm implementações diferentes. 
   Mas como sabemos que contaOrigem e contaDestino possuem o metodo sacar, 
   independente se for CC ou CP podemos chamar esse método.

```js
class Transferir {
    static execute(contaOrigem, contaDestino, valor) {
        if (!contaOrigem instanceof ContaBancaria ||
            !contaDestino instanceof ContaBancaria) {
            throw new Error("contas precisam herdar de ContaBancaria")
        }
        try {
            contaOrigem.sacar(valor)
            contaDestino.depositar(valor)
        } catch (e) {
            console.log("deu ruim", e.message)
        }
    }
}
```
> `sacar` é um metodo independente e diferente nas duas contas, mas existe na classe abstrata.

# getters e setters
Quando se usa `get` ou `set` oque para o object seria um metedo, para o "usuario" seria uma propriedade.

## get
Executa um metodo que não aceita argumentos, como se fosse uma propriedade

```js
let tipo = ""

const cachorro = {
    name : "rex",
    get tipo(){
        return tipo
    },
}

cachorro.tipo
```
> executa o metodo como se fosse propriedade.

## set
Como se executa-se um metodo e o argumento, seria como de estive-se atribuindo um valor a uma propriedade.

```js
let tipo = ""

const cachorro = {
    name : "rex",
    get tipo(){
        return tipo
    },
    set tipo(_tipo){
        tipo = _tipo
    }
}
console.log(cachorro.tipo)
cachorro.tipo = "cachorro"
console.log(cachorro.tipo)

> ""
> "cachorro"
```

Assim consegue-se preservar o dado, e não pode simplesmente sair substituindo propriedades por ai. Como se fosse uma validação

```js
let tipo = ""

const tiposPermitidos = ["mamifero", "anfibio"]

const cachorro = {
    name : "rex",
    get tipo(){
        return tipo
    },
    set tipo(_tipo){
        if (tiposPermitidos.indexOf(_tipo) >= 0) {
            tipo = _tipo
        }
    }
}

cachorro.tipo = "mamifero"
console.log(cachorro.tipo)
cachorro.tipo = "cachorro"
console.log(cachorro.tipo)

> "mamifero"
> "mamifero"
```
> cachorro não foi alterado ja que não esta na lista.

## não poluir escopo global
Função auto envocavel, que ao fim, adiciona o object ao escopo global.

```js
; (function () {
        let tipo = ""
        // const tiposPermitidos = { "mamifero": true, "anfibio": true, "reptil": true }
        const tiposPermitidos = ["mamifero", "anfibio"]

        const gato = {
            name: "mingal",
            get tipo() {
                return tipo
            },
            set tipo(_tipo) {
                // if (tiposPermitidos[_tipo]) { padrão objeto
                if (tiposPermitidos.indexOf(_tipo) >= 0) {
                    tipo = _tipo
                }
            }
        }
        this.gato = gato
    })()
```
> `this.gato = gato` adiciona object gato local, no gato global.

Ex's

```js
;(function(){
    let quantidade = 0
    let count = 0

    const produto = {
        get quantidade(){
            count++
            return `${quantidade}, foi consultada ${count} vezes`
        },
        set quantidade(_quantidade){
            if(!(_quantidade >= 0)) throw new Error("Quantidade deve ser maior que 0")
            quantidade = _quantidade
        }
    }

    this.produto = produto
})()

```

Ex's 1

```js
;(function(){

    let usuarios = ['ronaldo','shayare','pietra']

    const pessoa = {
        get usuarios(){
            return usuarios
        },
        get usuario(){
            return usuarios[usuarios.length-1]
        },
        set usuario(novoUsuario){
            if(usuarios.indexOf(novoUsuario) >= 0) throw new Error("Usuario ja existe")

            usuarios.push(novoUsuario)
        }
    }    

    this.pessoa = pessoa
})()

console.log(pessoa.usuarios)
console.log(pessoa.usuarios.pop())
console.log(pessoa.usuarios)

> [ 'ronaldo', 'shayare', 'pietra' ]
> pietra
> [ 'ronaldo', 'shayare' ]
```
> como pode se ver, podemos "proteger" a propriedade em si do escopo global, mas ainda não podemos privar o array de seus metodos destrutivos.


```js
  get usuarios(){
    return [...usuarios]
  },
```
> Então em vez de retornar a referencia da memoria da "propriedade", retorna uma copia.

# Object.getOwnPropertyDescriptor()
Configuracao/descricao do object.
- Primeiro recebe objeto
- Segundo recebe propriedade desse objeto

```js
const pessoa = {
    nome: "daniel"
}

console.log(Object.getOwnPropertyDescriptor(pessoa, "nome"))

> {
  value: 'daniel',
  writable: true,
  enumerable: true,
  configurable: true
 }
``` 
> `writable` pode ser reescrito
> `enumerable` iteravel, for, while
> `configurable` deletar, alterar propriedade

## Object.defineProperty()
Adiciona uma nova propriedade ao object.

```js
Object.defineProperty(pessoa, "sobrenome", {
    value: "gay"
})
```
> object
> propriedade
> {} getOwnPropertyDescriptor

```js
console.log(Object.getOwnPropertyDescriptor(pessoa, "sobrenome"))

> {
  value: 'gay',
  writable: false,
  enumerable: false,
  configurable: false
 } 
```
> Com esse metodo, eu não gero os demais, e por padrão eles recebem `false`

### varias propriedades

```js
Object.defineProperties(pessoa, {
    prop1: {
        value: "prop 1",
        writable: true
    },
    prop2: {
        writable: false,
        value: 10
    }
})
```

## Object.create()
Cria um object que referencia outro objeto passado por argumento, assim herdando metodos etc.
- Object que sera armazenado em `prototype`
- Objeto com as propriedades desse objeto que foi criado.

```js
const pai = {
    nome: "pai",
    falar(){
        console.log(`${this.nome} está falando`)
    }
}

const filho = Object.create(pai, { nome: { value: "junior", enumerable: true } })
```
> so aceita objetos como valor, entao usa-se aquele negocio de own sla das quantas (descritor).

## Object.assign()
Atribui propriedades enumeraveis de um object a outro.
- Object alvo da atribuição.
- Object que teram as propriedades atribuidas ao outro (so enumeraveis), podem ser infinitos separados por ,

```js
const obj1 = {
    a: "a",
    b: "b",
    c: "c"
}
const obj2 = {
    b: "b2",
    d: "d2"
}

const obj3 = Object.assign({},obj1, obj2)
console.log(obj3)

> { a: 'a', b: 'b2', c: 'c', d: 'd2' }  
```
> propriedades de mesmo nome, ultimo objeto prevalece, no caso `obj2`.


### Altenativa

```js
const obj3 = {...obj1, ...obj2}
```

## Object.keys()
Retorna as propriedades enumeraveis de um object em um array.
- Object

```js
console.log(Object.keys(obj2))

> {
  ['b','d']
}
```

## Object.values()
Mostra o valor de propriedades enumeraveis de um object.
- Object

```js
console.log(Object.values(obj2))

> {
  ['b2','d2']
}
```

## Object.entries()
retorna um array bidimensional (array dentro de array) com as propriedades enumeraveis e seus valores de um object.
- Object

```js
console.log(Object.entries(obj2))

> [
    [ 'b', 'b2' ],
    [ 'd', 'd2' ],
  ]
```
> sendo indice 0 nome da propriedade e o 1, o seu valor

# destructings em objetos

```js
const eu = { nome: "daniel", sobrenome: "tapias morales" }

let { nome: n, sobrenome } = eu

console.log(n)
console.log(sobrenome)

> daniel
> morales
```
> Assim pego o valor da propriedade `nome`, e consigo colocar o nome que eu quiser na variavel.

## Object.freeze()
Não pode criar, atualizar e nem remover suas propriedades.
- Object

```js
const obj = {
    prop1: "prop 1",
    prop2: "prop 2"
}

Object.freeze(obj)

obj.prop3 = "prop3"

console.log(obj)

>{ prop1: 'prop 1', prop2: 'prop 2' }
```
> Como visto não pode mais sofrem alteraçoes.


## Object.seal()
Não pode criar, e nem remover, mas pode atualizar suas propriedades.
- Object

```js
const obj = {
    prop1: "prop 1",
    prop2: "prop 2"
}

Object.seal(obj)

obj.prop3 = "prop3"
obj.prop2 = "prop 2 atualizada"

console.log(obj)

>{ prop1: 'prop 1', prop2: 'prop 2 atualizada' }
```

## Object.preventExtensions()
Não pode criar, mas pode atualizar e remover suas propriedades.
- Object

```js
const obj = {
    prop1: "prop 1",
    prop2: "prop 2"
}

Object.preventExtensions(obj)

obj.prop3 = "prop3"
obj.prop2 = "prop 2 atualizada"
delete obj.prop1

console.log(obj)

>{ prop2: 'prop 2 atualizada' }
```

## deep Freeze
Quando se congela um objeto, é raso, pois se existir uma propriedade do tipo objeto, ela nao sera congelada.

## Object.getOwnPropertyNames()
Retorna todas as propriedades, enumeradas ou não.

```js
function deepFreeze(obj) {
    const propNames = Object.getOwnPropertyNames(obj)

    propNames.forEach(name => {
        let prop = obj[name]

        if (typeof prop === "object" && prop !== null) {
            deepFreeze(prop)
        }
    })

    return Object.freeze(obj)
}
```

## Object.isFrozen()
Retorna um boolean se o object esta congelado. Não so pelo metodo `freeze()`, mas tambem qualquer um que faça ele, não ser editavel, deletavel e criavel k.
- Object

### .isSealed() 
### isExtensible()

# Symbol()
São valores primitivos unicos, sao os unicos primitivos que sao passados por referencia nao por valor. Utilizado mais para não conflitar com outras propriedades.

```js
const NOME = Symbol()
console.log(typeof NOME)

let n = 0
const user = {
    ["teste" + (++n)]: "teste" + n,
    ["teste" + (++n)]: "teste" + n,
    ["teste" + (++n)]: "teste" + n,
    [NOME]: "com symbol",
    "nome": "com string",
    3: "com numero"
}
user.nome = "nome alterado"
console.log(user)
console.log(user[NOME])

let teste = Object.getOwnPropertySymbols(user)
console.log(teste[0])
console.log(user[teste[0]])
console.log(typeof user[teste[0]])
user[teste[0]] = "nome alterado"
console.log(user)

> symbol
> {
   '3': 'com numero',
   teste1: 'teste1',
   teste2: 'teste2',
   teste3: 'teste3',
   nome: 'nome alterado',
   [Symbol()]: 'com symbol'
> }
> com symbol
> Symbol()
> com symbol
> string
> {
   '3': 'com numero',
    teste1: 'teste1',
    teste2: 'teste2',
    teste3: 'teste3',
    nome: 'nome alterado',
    [Symbol()]: 'nome alterado'
> }
```
> Como podemos ver, não é mostrado o nome, apenas `Symbol()` e para acessa-lo precisa-mos de `object[symbolName]`

## Object.getOwnPropertySymbols()
Retorna  a propriedade do object que é um symbol, dentro de um array.
- Object

```js
let teste = Object.getOwnPropertySymbols(user)
console.log(teste)

> [Symbol()]
```

## Symbol() como propriedade.

```js
class Contador {
    constructor(){
        this._symbol = Symbol()
        this[this._symbol] = 0
    }
    
    increment(){
        console.log(this[this._symbol])
        this[this._symbol]++
        console.log(this[this._symbol])
    }
}

let c1 = new Contador()
c1.increment()
c1[c1._symbol] = "dificult but not impossible"
c1.increment()


console.log(c1)

> 0
> 1
> dificult but not impossible
> NaN
> Contador { _symbol: Symbol(), [Symbol()]: NaN }
```
> Como podemos ver ainda existe o `_symbol` que é referencia do Symbol() assim o podendo modificar.


### Isolando Symbol()

```js
const Contador = (function(){
    let _symbol = Symbol()

    return class Contador{
        constructor(){
            this[_symbol] = 0
        }

        increment(){
            this[_symbol]++
        }

        get contador(){
            return console.log(this[_symbol])
        }
    }
})()

const c1 = new Contador()

console.log(c1)
```
> em um function auto invocavel, posso criar uma variavel e atribui-la a class que será retornada.


# Map & WeakMap

## Map
Diferente dos objects, que aceitam apenas strings como propriedades, os Maps aceitam qualquer tipo de dado, A unica diferença sendo a forma como atribuida e recuperada.

```js
const myMap = new Map([[0,"zero"], [1,"um"]])
```
> Criar propriedades junto ao Map.

### set()
Atribui propriedade.
- propriedade
- valor

```js
myMap.set(true,false)
```

### get()
Recupera propriedade.
- propriedade

```js
console.log(myMap.get(true))

> false
```

### has()
Boolean se existe tal propriedade

```js
console.log(myMap.has(0))

> true
```

### keys()
Retorna propriedades.

```js
console.log(myMap.keys())

> { 0, 1, true }
``` 

### values()
Retorna valor das propriedades.

```js
console.log(myMap.values())

> { 'zero', 'um', false }
```

### entries()
Retorna valor das propriedades e propriedades.

```js
console.log(myMap.entries())

> { [ 0, 'zero' ], [ 1, 'um' ], [ true, false ] }
```

## WeakMap
Não consigo iterar como map, Um object que apaga sua propriedade uma vez que sua referencia deixar de existir.

Exemplo:

```js
let _contador = new WeakMap()
class Contador {
    constructor() {
        _contador.set(this, 0)
    }
    increment() {
        _contador.set(this, _contador.get(this) + 1)
        console.log(_contador.get(this))
    }

    get contador() {
        return _contador.get(this)
    }
}

const c1 = new Contador()
console.log(c1.contador)
c1.increment()

> 0
> 1
```

# set & weakSet

## Set()
Um object que sua propriedade é seu valor, ou seja so tem o valor. Aceita apenas valores unicos (Não repetidos)

```js
const _set = new Set()
```

### add()
Adiciona valor ao set
- valor

```js
console.log(_set.add(1))
```

### has()
Boolean se existe tal propriedade

## weakSet
Um object que apaga sua propriedade uma vez que sua referencia deixar de existir, aceita apenas valor não primitivos (passados por referencia)

# dispatchEvent()
dispara um evento passado por parametro, meio que um evento "falso".
- Evento

```js
const event = new Event('input')

inputDOM.dispatchEvent(event)
```
> em `event`, cria-se um object do tipo evento.
>
> `inputDOM` dispara um evento do tipo input, sem ele acontecer, o comando fez o evento ocorrer.

# Modules

## type
Para informar o browser a utilização de modules, na tag `script` colocamos o atributo `type` com o valor `module`

```html
<script src="js/app.js" type="module"></script>
```

## export
Exportar function

```js
export default functionName
```
> `default` posso usar o nome que eu quiser na importaçao (desde que seja apenas uma function acho eu)

## import

```js
import name from './path/.js'
```

## export direto

```js
export function aipapai(){
    //dajdhsajdsajdhsja
}
```

```js
import name, {aipapai} from './path/.js'
```

OU você exporta na criação de alguma function, const etc. ou exporta posteriormente usando destructing

```js
const ola = "ola"

export {ola, quantos mais for necessario}
```

# HTTP
[CODE](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

# XMLHttpRequest
- Instanciar objeto
- open()
- send()
- Listener onreadystatechange
    Codigos:
    - 0 - conexão não iniciada
    - 1 - request configurada   
    - 2 - request enviada
    - 3 - em processamento
    - 4 - resposta recebida (sucesso)

## GET
recuperar dados do servidor

## POST
enviar para o servidor novo cadastro

## PUT
Atualizar dados substituir objeto completo, precisa de id por exemplo

## PATCH
Atualizar dados substituir objeto parcial, precisa de id por exemplo 

## DELETE
, precisa de id por exemplo

## OPTIONS
permitir acesso a diferentes dominios

### open()
Abre conexão com API
- Metodo, verbo (get ou post)
- URL

### send()

## EX

```js
    const xhr = new XMLHttpRequest()

    xhr.open("GET","dados.json")
    xhr.send(null)
    xhr.onreadystatechange = ajax

    function ajax(){
        console.log(xhr.readyState)
        console.log(xhr.status)
        console.log(xhr.response)
        console.log(xhr.responseText)
    }
```
> `readyState` codigos
>
> `status` numero se deu certo, errado etc
>
> `response` o que o servidor te mandou
>
> `responseText` o que o server te mandou em texto

RESPONSE sempre em string, JSON transporta dados por string

```js
if(xhr.readyState === 4){
    if(xhr.status === 200 || xhr.status === 304){
        const json = JSON.parse(xhr.responseText)
    }
}
```
> vemos que o Object `JSON` possui o metodo `parse` que converte esta string para um object nativo do javascript.


## JSON.stringfy
Quando aplicado a um object com methods, vai ignora-los, se preocupa com os dados em si

## Promises
Executa ou function de sucesso ou uma de erro (reject).

```js
export default function createPromise (method, url, data = null) {
    return new Promise(function(resolve, reject){
        const xhr = new XMLHttpRequest()

        xhr.open(method,url)
        xhr.setRequestHeader("Content-Type","application/json;charset=UTF-8")
        xhr.send(data)
        xhr.onreadystatechange = checkAJAX

        function checkAJAX(){
            if (xhr.readyState === 4){
                if (xhr.status < 400){
                    const json = JSON.parse(xhr.responseText)
                    resolve (json)
                } else {
                    reject(Error("algo de errado aconteceu com a conexão"))
                }
            } 
        }
        })
    
```


```js
createPromise ("GET", `http://localhost:3000/users/${userId}/tasks`)
        .then(response => console.log(response))
        .catch(error => console.log(error))
        .finally(() = > console.log("finally"))
```
> `then` sucesso (sem erros)
> `catch` reject (deu errado algo)
> `finally` independente do resultado sempre será executado.


Sempre retorna algo, se no meu then retornar algo, posso concatenar mais thens que receberao esse algo como parametro

```js
createPromise ("GET", `http://localhost:3000/users/${userId}/tasks`)
        .then(response => {
            return "dadadada"
        })
        .then(msg => {...})
        .catch(error => console.log(error))
```

TUDO retorna algo para que seja passado a diante.

# FETCH
XHTTPRequest Moderno, retorna uma promise sem precisar cria-la como no exemplo anterior.

```js
createFetch (`http://localhost:3000/users/${userId}/tasks`)

export default function createFetch (method, url, data = null) {
    fetch (url)
    .then (response => console.log("foda"))
    .catch (() => console.log("erro"))
}

> foda
Error : 404 status, bla bla bla
```
> Apresentou erro, pois a url estava errada, porem não acionou o reject e sim o resolve,
>
> Unico jeito de acionar o reject seria erro de conexao mesmo (endpoint não existe).


## .json()

```js
const obj = { hello: "world" };

const request = new Request("/myEndpoint", {
  method: "POST",
  body: JSON.stringify(obj),
});

request.json().then((data) => {
  // do something with the data sent in the request
});
```

O `fetch` retorna uma promise/request, lá esta uma propriedade `body` que armazena a `response` da API, para tranforma essa response em um object javascript se utiliza do metodo `json()` que retorna a response para uma proxima `then()`.

```js
export default function createFetch (method, url, data = null) {
    return fetch (url)
}
```
> return promise.
>
> Tudo que estava na promise de verificar status, code blablabla, esta nessa `unica` linha acima.
>
> Por padrao utiliza o method "GET".

## Objeto de configuração

```js
fetch (url, {
    method,
    body: data,
    headers: {
            "Content-Type":"application/json;charset=UTF-8"
    }
})
```
> `method` metodo
>
> `body` dados que seram, PACTH, PUT etc
>
> `headers` object de configuração que indica que o conteudo é do tipo JSON.

# async / await

## await
quando marcado pré promise, indica para o "codigo" que aquela promise deve ser executada de forma sincrona, ou seja esperar retornar para depois executar o resto do codigo

## async
quando marcado pré function, indica que é uma function assincrona. await so funciona nestas condições.

```js
getTasks (userId, cb) {
        console.log("teste")
        createFetch ("GET",`http://localhost:3000/users/${userId}/tasks`)
        .then(response => console.log(response))
        console.log("teste 1")

}

> "teste"
> "teste 1"
> {...}
```

```js
async getTasks (userId, cb) {
        console.log("teste")
        await createFetch ("GET",`http://localhost:3000/users/${userId}/tasks`)
        .then(response => console.log(response))
        console.log("teste 1")

}

> "teste"
> {...}
> "teste 1"
```

Quando marcada com `async` SEMPRE retorna uma `promise`.

# Web Worker
Quando uma acao é muito custosa e atrapalha a fila, vc manda pra ele fazer a mesmo tempo(multi thread) que a fila normal (single thread).

# regex
Padroes utilizados para encontrar, modificar ou validar determinados padraoes em strings.

## //g
g significa busca global, toda a string

## //m
m siginifica multilinha

## .
caracter coringa, apenas 1 caracter

## |
ou

## []
grupo de um caracter.

```r
/[pg]ato/g
```
> le-se : p ou g seguido de a,t & o

## \
usar coisa como ele mesmo tipo ponto, dentro do grupo [] não precisa.

## -
[1-9]
> 1 até 9
> ou
> \d

## {}
Quantificadores

```r
/[1-9]{4}/g
```
> qualquer digito 4 vezes


## ,
minmax

```r
/[1-9]{4,8}/g
```
> minimo 4, maximo 8 para dar match
> se tiver apenas `4,` não tem maximo então seria infinito

## +
uma ou mais vezes

```r
/[1-9]{1,}/g
/[1-9]+/g
```

## *
zero ou mais vezes

```r
/-[1-9]{0,}/g
/-[1-9]*/g
```
> - seguido por um numero que pode ocorrer ou não.

## ?
zero ou uma vez

## mesclar

```r
/[A-Za-z]{3}-?\d{4}/g
```
> dentro do grupo [] tem de A-Z & a-z

## \w
qualquer caracter alpha numerico e _.

# posição de inicio e fim

## inicio
- ^
- todos os padrões a seguir tem que se iniciar no começo da `string`
- começa com tanana

```r
/^[A-Za-z]{3}-?\d{4}/g
```

## fim
- $
- todos os padrões a antes tem no fim da `string`
- termina com tanana

```r
/[A-Za-z]{3}-?\d{4}$/g
```

## \b
- todos os padrões a antes ou depois tem no fim da `palavra`
- termina com tanana

> termina
```r
/ato\b/g
```

> começa
```r
/\bato/g
```

## .?
deixa de ser ganancioso e vira preguiçoso, basicamente em vez de ir ate o ultimo que encontrar, para no primeiro

## \s
espaço, quebra de linha etc.

## grupo ()
- ()
basicamente é uma variavel

## so grupo sem variavel
- (?:)
- Assim so ira agrupar, não ira armazenar nada.

```r
/([1-6])....\1/g
```
> /1 se refere ao grupo ([1-6])
> 1 sendo referente a ordem que aquele grupo foi criado.

## caracter especial
Nao da pra por entao tem que colocar manualmente ;-;
- ç
- é 

# negação
/[^abdrf]/g

> o `^` na frente dos caracter indica que deverá dar match com tudo MENOS com eles.

## \W
quando tem o w MAIUSCULO, da match com tudo MENOS caracteres alphanumericos

## \B
quando tem o b MAIUSCULO, da match com tudo MENOS inicio/fim da palavra

https://regexr.com

# Regex JS
- Literal : //
- Constructo : new RegExp()

## propriedade

## lastIndex

## metodos

### .test()
- string
- retorna boolean
- se tiver tag `g` da merda
Vai testar a string.

### .exec()
Funciona que nem o match, mas cada vez que executado retorna uma nova ocorrencia. quando não tiver mais ocorrencia, retornará null

```js
let arr = regex.exec(str)

while(arr){
    console.log(`Encontrei ${arr[0]} na posição ${arr.index}. Proxima busca começa em ${regex.lastIndex}`)
    arr = regex.exec(str)
}

>Encontrei 26/02/2018 na posição 7. Proxima busca começa em 17
>Encontrei 27/02/18 na posição 32. Proxima busca começa em 40
>Encontrei 1/01 na posição 60. Proxima busca começa em 64

```

```js
let str = 'https://www.google.com/search?q=a&sxsrf=AB5stBiuIMrblIeEWrscslwOeoBTzviRlA%3A1691098321887&source=hp&ei=0RzMZOTsM7rK1sQP49un-AM&iflsig=AD69kcEAAAAAZMwq4bISL8MUtMBjXELHykthItZ5R-NK&ved=0ahUKEwikmYSWuMGAAxU6pZUCHePtCT8Q4dUDCAg&uact=5&oq=a&gs_lp=Egdnd3Mtd2l6IgFhMgcQIxiKBRgnMgcQIxiKBRgnMgQQIxgnMgsQLhiABBjHARjRAzILEC4YgAQYxwEY0QMyCxAuGIAEGMcBGNEDMgUQABiABDILEC4YgAQYxwEY0QMyCxAuGIAEGMcBGNEDMgUQABiABEizCFCsBVisBXABeACQAQCYAWegAWeqAQMwLjG4AQPIAQD4AQGoAgrCAgcQIxjqAhgn&sclient=gws-wiz';
const regex = /&(\w+)=([\w-%]+)/g

let arr = regex.exec(str)
const obj = {}

while(arr){
    obj[arr[1]] = arr[2]
    arr = regex.exec(str)
}
console.log(obj)

> 
{
    ei: "0RzMZOTsM7rK1sQP49un-AM",
    gs_lp:"Egdnd3Mtd2l6IgFhMgcQIxiKBRgnMgcQIxiKBRgnMgQQIxgnMgsQLhiABBjHARjRAzILEC4YgAQYxwEY0QMyCxAuGIAEGMcBGNEDMgUQABiABDILEC4YgAQYxwEY0QMyCxAuGIAEGMcBGNEDMgUQABiABEizCFCsBVisBXABeACQAQCYAWegAWeqAQMwLjG4AQPIAQD4AQGoAgrCAgcQIxjqAhgn",
    iflsig: "AD69kcEAAAAAZMwq4bISL8MUtMBjXELHykthItZ5R-NK",
    oq: "a",
    sclient: "gws-wiz",
    source: "hp",
    sxsrf: "AB5stBiuIMrblIeEWrscslwOeoBTzviRlA%3A1691098321887",
    uact: "5",
    ved: "0ahUKEwikmYSWuMGAAxU6pZUCHePtCT8Q4dUDCAg",
}
```


### String.replace()

```js
let str = 'hoje é 26/02/2018 e amanha será 27/02/18. Meu aniversario é 1/01';
const meses = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

const regex = /(\d{1,2})\/(\d{1,2})(?:\/(\d{2,4}))?/g

str = str.replace(regex, (a,b,c,d,e,f) => {
    console.log(a,b,c,d,e,f)
    return "exemplo"
})

> 26/02/2018 //match 0
> 26 // grupo 1 1
> 02 // grupo 2 2
> 2018 // grupo 3 , quantos tiver 3
> 7 // posicao que deu match 4
> hoje é 26/02/2018 e amanha será 27/02/18. Meu aniversario é 1/01 // string tuda 5

> hoje é exemplo e amanha será exemplo. Meu aniversario é exemplo // string modificada 
```
> resumindo por cada regex que da match, ele faz isso

```js
let str = 'hoje é 26/02/2018 e amanha será 27/02/2018. Meu aniversario é 1/01';
const meses = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

const regex = /(\d{1,2})\/(\d{1,2})(?:\/(\d{2,4}))?/g

str = str.replace(regex, (a,b,c,d,e,f) => `${b} de ${meses[parseInt(c)-1]} ${d ? `de ${d}` : ``}` )
console.log(str)

> 'hoje é 26 de fev de 2018 e amanha será 27 de fev de 18. Meu aniversario é 1 de jan'
w
```

### String.match()
- regex
- sem g
  
```js
console.log(str.match(regex))

0: "26/02/2018" // oque foi encontrado
1: "26" //grupo 1
2: "02" // grupo 2
3: "2018" // grupo 3 etc
groups: undefined
index: 7 // posicao
input: "hoje é 26/02/2018 e amanha será 27/02/18. Meu aniversario é 1/01"
length: 4
```

- com g

```js
0: "26/02/2018" // so oq encontro
1: "27/02/18" // 1 
2: "1/01" //2
```

## String.search()
- regex
- retorna posição, se não existir -1
- primeira ocorrencia, mesmo com a tag g ou sem ela.
  
# new RegExp()
Pode receber variaveis, diferente da forma literal
- expressão regular
- tags/flags
- usar duas barras '\\' em vez de uma '\'

```js
const regular = 03

const regex = new RegExp("02", "g")
const regexVar = new RegExp(regular, "g")
```

# commomJS

## require()
importa

```js
const isso  = require("./path/etc")
console.log(isso)

> {teste : "isso"}
```
> teste foi importado


## module.exports.
exporta o object

```js
module.exports.teste = isso
```
> teste foi exportado

Tambem pode ser atribuido direto a ele.

```js
module.exports = {object}
```
> `module.exports` por si so é um object vazio, so ele é exportando o `exports` não.

## sem colisão de nomes.

## ESM no Node
Apenas troque a extensão do arquivo de `.js` para `.mjs`

OU

No arquivo `package.json` adiciona uma propriedade "type" com o valor "module".

No ESM normal

```js
import { gay as homem} from "./path"
```
> basicamente agora o gay é referenciado com homem.

## __dirname & __filename
Descubra no console.log
