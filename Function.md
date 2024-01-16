## Funções auto-invocáveis
Function auto-invocáveis, são importantes para não poluir o escopo global.
Quando se tem o mesmo nome por exemplo, uma função pode sobrepor a
outra, dando outro resultado.

```js
(function(){
 let isValid = false
 console.log("auto", isValid)
 function init(){
 console.log("init")
 }
 init()
})()
```

### Parâmetros para funções auto-invocáveis
```js
(function nova(n1, n2, n3){
 console.log(n1, n2, n3)
})(1, 2, 3)
 //é possivel acersar valores globais como window e document
(function (win, doc){
 win.alert("hello world")
})(window, document)
```

> Atenção! você pode usar "use strict" no começo da função, para que evite variaveis globais como o var,
alertando para por "let, const"

# Arguments
Arguments é parecido com uma array, e se comporta como uma.
**Arguments só funciona com function declaradas ou expressadas (function exemplo()/ const exemplo = function()), não funciona com arrow function (=>).**

```js
//problemas ao passar vários parametros. resolvendo isso com array:
function somar(arr){
 let total = 0
 for (let i = 0; i < arr.length; i++){
 total += arr[i]
 }
 return total
}
console.log(somar([1,2,3]))
```

> modo para não usar array, e passar somentes o número usando arguments que é muito parecido

```js 
function somar2(){
 console.log(arguments)
 let total = 0
 for (let i = 0; i < arguments.length; i++){
 total += arguments[i]
 }
 return total
}
console.log(somar2(1,2,3))
```

```js
(output)
6
[Arguments] { '0': 1, '1': 2, '2': 3 }
6
```

# Callback
### Funções com parametros de outras funções.

```js
function fn(cb){
 console.log("executar ação de callback")
 console.log(typeof cb)
 typeof cb === "function" && cb()
}
//cb() executar cb, é executar a função abaixo.
fn(function(){
 console.log("função passada por parametro")
})
//uma função que será executada dentro de "cb"
```

```js
(output)
executar ação de callback
function
função passada por parametro
```
### Outra forma de passar função por parâmetro é:

```js 
function callback(){
 console.log("função passada por parametro")
}
fn(callback)
```

### Função/callbacks podem ser atribuidas em objetos:

```js
const obj = {
 callback
}
obj.callback()
```
### Retornando uma função como resultado de outra função:

```js 
function fn2(n1){
 return function(n2){
 return n1 * n2
 }
}
const funcao2 = fn2(10) //a função será atribuida a "função2" e o número 10 será
parametro de fn2
const mult = funcao2(2) //dentro de funcao2 tinha a função anonima na qual agora recebe
o parametro 2 (n2), e vai
//retornar a multiplicação
console.log(fn2)
console.log(funcao2)
console.log(mult)
```

```js
(output)
[Function: fn2]
[Function (anonymous)]
20
```

### Outra forma de compreender:

```js
function fn3(){
 return function _fn3(){
 return console.log("função passada por parametro")
 }
}
const funcao3 = fn3() //armazenando a função
funcao3() //executando _fn3
```

```js
(output)
função passada por parametro
```

### Colocando minha próprias propriedades nas funções:

```js 
function fn4(){
 fn4.count++
 return function _fn4(){
 return console.log("função passada por parametro")
 }
}
fn4.count = 0 //propriedade qualquer
console.log(fn4.count)
const funcao4 = fn4()
funcao4()
console.log(fn4.count)
```

Você pode passar uma função por parametro e executar ela dentro da outra função, isso se chama callback.

```js
function teste(cb){
 console.log("função passada por parametro")
obj_primeira_classe.js 1 kB
 cb() //executando função passada por parametro
}
teste(function(){
 console.log("função anonima de callback")
})
//ou voce pode passar uma função normal
function fn(){
 console.log("função não anonima de callback")
}
teste(fn)
```

você pode passar parametro na callback (você pode armazenar funções em
constantes):

```js
const teste = function teste(cb){
 console.log("função passada por parametro")
 cb(30)//parametro passado para a prox. função
 //typeof cb === "function" && cb(30)
}
const fn = function(param){
 console.log("função não anonima de callback")
 console.log(param)//espera receber parametro
}
teste(fn)
```

## _Desafio Média Aritmética_
```js
(function(){
 function calcularMedia(){
 let total = 0
 let qtd = arguments.length;
 for(let i = 0; i < qtd; i++){
 if(typeof arguments[i] !== "number"){
 throw Error("only numbers")
 }
 total += arguments[i]
 }
 return (total / qtd) || 0
 }
 let media = calcularMedia(2,4,5)
 console.log(media.toFixed(2))
})()
```

## _Desafio IMC_

```js
(function(){
 let imc = 0
 function CalcularImc(peso, alt){
 if(typeof peso === undefined|| typeof alt === undefined){
 throw Error("Quantidade de números incompletos")
 }
 imc = ((peso / (alt ** 2)).toFixed(2))
 if(imc <= 16 || imc <= 16.9){
 console.log("Muito abaixo do peso")
 }else if(imc >= 17 || imc <= 18.4){
 console.log("Abaixo do peso")
 }else if(imc >= 18.5 || imc <= 24.9){
 console.log("Peso ideal")
 }else if(imc >= 25 || imc <= 29.9){
 console.log("Acima do peso")
 }else if(imc >= 30){
 console.log("Obesidade")
 }
 return imc
 }
 console.log(CalcularImc(100, 1.70))
})()
```

```js
function CalculandoIMC(pes, altura){
 if(typeof pes === undefined || typeof altura === undefined){
 throw Error("Quantidade de números incompletos")
 }
 return pes/(altura * altura)
}
function ClassificandoIMC(imc){
 if(imc <= 16 && imc <= 16.9){
 console.log("Muito abaixo do peso")
 }else if(imc >= 17 && imc <= 18.4){
 console.log("Abaixo do peso")
 }else if(imc >= 18.5 && imc <= 24.9){
 console.log("Peso ideal")
 }else if(imc >= 25 && imc <= 29.9){
 console.log("Acima do peso")
calculando_media.js 1 kB
calculando_imc.js 2 kB
 }else if(imc >= 30){
 console.log("Obesidade")
 }
}
let imc = CalculandoIMC(100, 1.80)
console.log(imc)
console.log(ClassificandoIMC(imc))
```

### Usando Callback
```js
function calcIMC(alt, peso, cb){
 if(typeof alt === undefined || typeof peso === undefined){
 throw Error ("Voce precisa passar parametros")
 }
 let imc = 0
 imc = (peso / (alt ** 2)).toFixed(2)
 if(typeof cb === "function"){
 console.log("Função classificação adquirida")
 cb(imc)
 }else{
 return console.log(imc)
 }
}
function fc(imc){
 if(imc <= 16 || imc <= 16.9){
 console.log("Muito abaixo do peso")
 }else if(imc >= 17 || imc <= 18.4){
 console.log("Abaixo do peso")
 }else if(imc >= 18.5 || imc <= 24.9){
 console.log("Peso ideal")
 }else if(imc >= 25 || imc <= 29.9){
 console.log("Acima do peso")
 }else if(imc >= 30){
 console.log("Obesidade")
 }
}
calcIMC(1.80)
```