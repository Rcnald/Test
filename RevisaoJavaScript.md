## Conversão entre tipos
parseInt, parseFloat, Number()

```js
    let n1 = "10"; //string
    n1 = parseInt(n1);
```

__Você também pode converter números flutuantes para inteiros.__

```js
    n2 = 11;
    n2 = n2.toString();
    console.log(n2, typeof n2);
```

## Operadores aritméticos

> ** (ao quadrado)
% resto da divisão

```js
    let n1 = 4;
    let n2 = 2;

    console.log(n1 % n2);
    console.log(2 ** 3); //dois ao cubo
```

## Operadores de atribuição

```js
    let n3 = 20;
    n3 -= 15; //subtrai e atribui
    console.log(n3); //retorna 5
```

## Operadores lógicos

|     |                |           |
|-----|----------------|-----------|
| !=  | Diferente de   | (a !== b) |
| === | Idêntico a     | (a === b) |
| !== | Não idêntico a | (a !== b) |

## Operador ternário (If&Else)

```js
    let idade = 18;
    let msgMaiorIdade = (Idade >= 18) ? "true" : "false";
```

- () condição
- ? If
- : Else

> ele vai executar a primeira se for verdadeira, e a segunda se for falsa.
> condição || condição

```js
    let isValid = true
    isValid && console.log ("é válido")
    isValid || console.log ("não é válido")
```

#### Valores falsos

- 0, "", NaN, undefined, null, false

Neste caso se true, mostra o primeiro, se false mostra o segundo.

# Switch
Comparando valores específicos.

```js
let diaSemana = 3
let dia = ""
	switch (diaSemana){
		case 0:
		dia = "segunda"
		break
		case 1:
		dia = "terça"
		break
                default:
                dia = "--"
	}
```

# For

```js
for(let j = 0; j <=10; j++){}
```

### Break and Continue
o Break quebra o código e o continue continua pulando a condição por exemplo

```js
[...]
if(dia === 5){
	continue
}
document.write(dia)
```

Quando for cinco, ele irá pular e mostrar o 6

# Function
### Arrow function

```html
const ola = () => {
console.log("olá mundo")
}

```

### Retornando valores

```html
function umDiadaSemana(){
return 7
}

let dia = umDiadaSemana() //armazena 7

return new Data().getDay() //retorna dia da semana

```

### Atribuindo valores

```html
function somar(n, n2){
return n + n2
}
let soma = somar (1, 4)
```

> Você pode colocar um valor nas variáveis, fazendo ser o valor padrão caso não seja
passado nenhum parametro.


```html

function somar(n = 0, n2){
return n + n2
}
let soma = somar (1, 4)

```

# Array

```html
arr = new Array(true, "Shay", 17, "Hello world")
arr2 = new Array(true, "Oie", 17, new Array(1,20,30))

console.log(arr)
console.log(arr2)
console.log(arr[1])
arr[2] = "oi"

console.log(arr[2])
console.log(arr.length)//para mostrar quantos componentes há na array
console.log(arr2[3][1])//pra acessar a array na array
console.log(arr2[3][arr2[3].length - 2])//pega a array no indice 3, mais a mesma mostra
qual o valor que está segundo a quantidade de componentes -2
```

```html
(output)
[ true, 'Shay', 17, 'Hello world' ]
[ true, 'Oie', 17, [ 1, 20, 30 ] ]
Shay
oi
4
20
20
```

### Outra forma de adicionar array
```js
 //outra forma de adicionar array
const arr3 = ["Daniel", [1,2,3], "frutose"]
console.log(arr3)
 //adicionando novo valor na array
arr3[3] = "Novo valor"
console.log(arr3)
 //ou adicionando ao final da array
arr3[arr3.length] = "Mais um valor"
console.log(arr3)
 //adicionando com push
arr3.push("terceiro valor")
console.log(arr3)
arr3.push("a", 2, 3)
console.log(arr3)
 //acessando valores com variavies
let n = 5
console.log(arr3[n])
```

```js
(output)
[ 'Daniel', [ 1, 2, 3 ], 'frutose' ]
[ 'Daniel', [ 1, 2, 3 ], 'frutose', 'Novo valor' ]
[ 'Daniel', [ 1, 2, 3 ], 'frutose', 'Novo valor', 'Mais um valor' ]
[
 'Daniel',
 [ 1, 2, 3 ],
 'frutose',
 'Novo valor',
 'Mais um valor',
 'terceiro valor'
]
[
 'Daniel',
 [ 1, 2, 3 ],
 'frutose',
 'Novo valor',
 'Mais um valor',
 'terceiro valor',
 'a',
 2,
 3
]
terceiro valor
```

### Iterar arrays
forma de fazer uma interação com array
**Acessando as propriedades de uma array**

```js
const nomes = ["João", "Maria", "Rebeca"]
for(let i = 0; i < nomes.length; i++){
 console.log(`${i}: Nome é ${nomes[i]}`)
}

```
```js
(output)
0: Nome é João
1: Nome é Maria
2: Nome é Rebeca
```

### Array while

```js
//criar um gerador de numeros randomicos que não se repitam
//a propriedade indexOf retorna o primeiro índice em que o elemento pode ser encontrado

no array, retorna -1 caso o mesmo não esteja presente.
function geradorNumb(max){
 return parseInt(Math.random() * 50) //para executar numeros até o 50
}
let arr = []
while(arr.length <= 20){
 let randomNumber = geradorNumb(50)
 console.log(randomNumber)
 if(arr.indexOf(randomNumber < 0)){
 arr.push(randomNumber) //adiciona um random novo, pois não existe
 //se o numero não existir, ele vai adicionar um número na array "arr"
 }
}
console.log(arr)

```
```js
(output)
[...][
 3, 19, 14, 23, 13, 1, 41,
 10, 32, 29, 45, 39, 47, 38,
 42, 8, 18, 17, 14, 2, 13
]
```
# Object

Quando se tem um agrupamento de informações, o melhor a se usar é o "object"
para que as informações sejam melhor organizadas, manipuladas e armazenadas.

```js
const pessoa = new Object()
pessoa.nome = "Augusto"
pessoa.idade = 23
console.log(pessoa)
```
```js
(output)
{ nome: 'Augusto', idade: 23 }

```

Para pegar informações separadas do objeto, basta colocar "pessoa.nome" por
exemplo. Ou assim: (entre aspas, porque não existe uma variavel)

```js
console.log(pessoa["idade"])
```
outra forma de fazer um objeto:

```js
const pessoa2 = {
 nome: "alice",
 idade: 12
}
console.log(pessoa2)
```

### Iterar object
**Acessando as propriedades de um objeto**

```js
const pessoa = {
 nome: "larissa",
 idade: 12,
 "email": "larissa@gmail.com"
}
//interação sob as propriedades do objeto
for(let prop in pessoa){
 //"prop" seria cada propriedade do objeto, no caso o "nome, idade e email"

 console.log(prop)//mostrando a propriedade
 console.log("--------------------------")
 console.log(pessoa[prop])//mostrando o valor
}
```

```js
(output)
nome
--------------------------
larissa
idade
--------------------------
12
email
--------------------------
larissa@gmail.com

```

### Métodos object

- "this" com ele você pode acessar os valores no próprio objeto, modificando
etc.

Método é a associação de algo com e um valor, podendo ser até mesmo uma função
```js
//this faz referencia ao objeto que neste caso é o produto
const produto = {
 nome:"caneta",
 qnt:10,
 comprar: function(n){ //ou "comprar(n)" sem function, é a mesma coisa
 if(n > this.qnt){
 return console.log("quantidade não disponivel")
 }
 this.qnt -= n
 }
}
produto.comprar(11)
console.log(produto)

```

> objetivo: subtrair o valor que o usuário quer de um produto verificando se há a
quantidade suficiente de produto.

```js
(output)
quantidade não disponivel
{ nome: 'caneta', qnt: 10, comprar: [Function: comprar] }
```
> atenção ao usar this!

```js
[...],
 teste1: function(){
 console.log("teste 1")
 console.log(this) //retorna o this fazendo referencia ao objeto normalmente
 },
 teste2: () => { //arrow não funciona
 console.log("teste 2")
 console.log(this) //retorna um this vazio, isso é um problema
 }

produto.comprar(11)
console.log(produto)
console.log("-----------------")
produto.teste1()
produto.teste2()

```
```js
(output)
quantidade não disponivel
{
 nome: 'caneta',
 qnt: 10,
 comprar: [Function: comprar],
 teste1: [Function: teste1],
 teste2: [Function: teste2]
}
-----------------
teste 1
{
 nome: 'caneta',
 qnt: 10,
 comprar: [Function: comprar],
 teste1: [Function: teste1],
 teste2: [Function: teste2]
}
teste 2
{}

```

### array-object

```js
//criando uma array de objetos
const pessoas = [{
 nome:"shay",
 idade:13
},
{
 nome:"ronaldo",
 idade:13
}
]
console.log(pessoas) //para ver todas as pessoas
console.log(pessoas[1]) //para acessar as pessoas de acordo com o indice do array
console.log(pessoas[1].nome) //para acessar algo especifico da pessoa

```
```js
(output)
[ { nome: 'shay', idade: 13 }, { nome: 'ronaldo', idade: 13 } ]
{ nome: 'ronaldo', idade: 13 }
ronaldo
```
### Iterar array-object


```js
for(let i = 0; i < pessoas.length; i++){
 console.log(`${pessoas[i].nome} tem ${pessoas[i].idade} anos`)
}

```
```js
(output)
shay tem 13 anos
ronaldo tem 13 anos
```

# Tratatamento de erro

```js
function sum(n1,n2){
 if(typeof n1 !== "number" || typeof n2 !== "number"{
 throw Error("sum aceita apenas números") //vai mostrar no console
 }
 return n1+n2
}
try{ //tente
let soma = sum (3, "a")
}catch(e){
 alert("Ocorreu um erro") //vai mostrar para o usuário
 console.log(e) //ou console.log(e.message)
}
console.log(soma)

```

após o catch, podemos acrescentar o bloco **"finally"**, que será executado sempre,
indepedente de erro ou não.