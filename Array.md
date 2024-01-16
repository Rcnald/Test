# Sintaxes

|arr. |                |
|-----|----------------|
| Retorna uma boolean, caso determinada condição seja verdadeira para todos do indice da array, ele retorna true. |every()|
| Parecida com every, mas verifica se pelo menos um componente da array é verdadeira a partir se uma condição. | some()|
| Não altera a array original, não tem valor de retorno sendo ele undefined. Serve para fazer interações na array ao invés de usar for ou while por exemplo. | forEach() |
| Retorna a array com seus dados modificados caso você coloque ela na mesma variável. | map() |
| Filtra arrays com determinadas condições, e descartas as demais. (Pode receber o "elemento" = o que contém a array, o indice e a própria array) O filter não altera a array original ele apenas retorna uma nova array. | filter() |

### every()

```js
const exEvery = [1,2,4,"ooi"]
//vai retornar true caso todas as verificações da array para cada indice seja verdadeira
let numbers = exEvery.every(function(elemento){
 return typeof elemento === "number" //retorna falso pq nem todas as array sao
numeros

})
console.log(numbers) //retorna false
```

### some()

```js
const exEvery = [1,2,4,"ooi"]
//vai retornar true caso todas as verificações da array para cada indice seja verdadeira
let numbers = exEvery.some(function(elemento){
 return typeof elemento === "number" //retorna falso pq nem todas as array sao
numeros
})
console.log(numbers) //retorna true
```

### filter()

```js
const novaArray = exEvery.filter(function(el, i, _arr){
 //constituintes da array que retorne true será retornada para a nova array
(filtrada)
 return typeof el === "number"
})
console.log(novaArray)
```

### ForEach()

```js
novaArray.forEach(function(el, i, _arr){ //elemento, indice, a própria array
 console.log(i, " :", el)
})
```

```js
(output)
0 : 1
1 : 2
2 : 4
```

### map()

```js
let arrayMap = [1,4,5,6]
arrayMap = arrayMap.map(function(el, i, _arr){
 return el * el
})
console.log(arrayMap)
```
```js
(output)
[ 1, 16, 25, 36 ]
```

---

|arr. |                |
|-----|----------------|
| Indica o valor do indice do primeiro elemento encontrado. |indexOf()|
| Indica o valor do indice do último elemento encontrado.| lastIndexOf()|
| Vai retornar false ou true caso o valor seja encontrado. (boolean) | includes() |
| Vai retornar o indice do primeiro valor encontrado que satisfaz uma função. | findIndex()|
|Vai retorna o primeiro valor encontrado que satisfaça uma função| find() |

### indexOf()
```js
let arr = [2, 4, 6, 8, 10, 4]
console.log(arr.indexOf(4)) //retorna 1
```

### lastIndexOf()
```js
let arr = [2, 4, 6, 8, 10, 4]
console.log(arr.lastIndexOf(4)) //retorna 5
```

Caso esses dois não encontre o número na array, vão retornar -1. Já o `includes` retorna false se não for encontrado.

### includes()

```js 
let arr = [2, 4, 6, 8, 10, 4]
console.log(arr.includes(5555)) //retorna false
```

### find()

```js
console.log(arr.find(function(el){
 return el > 6
})) //retorna 9
```

### findIndex()

```js
console.log(arr.findIndex(function(el){
return el > 6
})) //retorna 3
```
---

|arr. |                |
|-----|----------------|
| Vai tranformar toda a array em string separadas por vírgula. |toString()|
| Parecido com toString tem a diferença de poder receber um parametro opcional que será o caracter usado para separar os valores.| join()|
| Junta arrays, e ainda pode colocar mais valores (inclusive array separando-os por virgula. | concat()| 

### toString()
```js
const arr = [1,3,4]
console.log(arr.toString()) //retorna 1,3,4
```

### join()
```js
const arr = [1,3,4]
console.log(arr.join(" * ")) //retorna 1 * 3 * 4
```

### concat()
```js
const arr = [1,3,4]
const arr2 = [1,5,6]
const arr3 = arr2.concat(arr)
console.log(arr3) //retorna [ 1, 5, 6, 1, 3, 4 ]
```

```js
const arr3 = arr2.concat(arr, 3, 5, 6)//retorna [ 1, 5, 6, 1, 3, 4, 3, 5, 6]
```

```js
const arr3 = arr2.concat(arr, 3, 5, 6, ["oie", "tudo bem", "não"]) //retorna [ 1, 5, 6, 1, 3, 4, 3, 5, 6, 'oie', 'tudo bem', 'não' ]
```

_Como fazer uma cópia de array??_

Se você armazena uma array em outra váriavel, ambas vão carregar o mesmo
espaço na memória, ou seja, se você altera uma das váriavel vc está alterando o
valor na memória das duas.

```js
const copyArray = [2,4,6]
const copyArray2 = copyArray
console.log(copyArray)
console.log(copyArray2)
copyArray[copyArray.length] = "novo valor"
console.log(copyArray)
console.log(copyArray2)
```

```js
(output)
[ 2, 4, 6 ]
[ 2, 4, 6 ]
[ 2, 4, 6, 'novo valor' ]
[ 2, 4, 6, 'novo valor' ]
```
Então para fazer uma cópia ao invés de alterar apenas um dado faça:
Para fazer uma cópia, passe uma array vazia e concatene com os valores da array
que deseja copiar.

```js
const copyArray3 = [].concat(copyArray2)
copyArray3[copyArray3.length] = "array copiada"
console.log(copyArray)
console.log(copyArray2)
console.log(copyArray3)
```

```js
(output)
[ 2, 4, 6, 'novo valor' ]
[ 2, 4, 6, 'novo valor' ]
[ 2, 4, 6, 'novo valor' ]
[ 2, 4, 6, 'novo valor' ]
[ 2, 4, 6, 'novo valor', 'array copiada' ]
```
---

|arr. |                |
|-----|----------------|
| Serve para acrescentar valores no final de uma array. |push()|
| mostra (se você quiser) o último valor da array e remove ele. (altera array original)| pop()|
| ao invés de pegar o último elemento, ele pega o primeiro (altera array original) | shift()|
| mesma coisa que o push, mas ao invés de adicionar no final, adiciona no começo | unshift()|
| retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (o fim não é incluido) | slice()|
| Acrescentar elementos novos em qualquer lugar na array e remove. (altera array original). A partir de um número ele remove determinada quantidade de elementos | splice(você é foda) |

### push()
```js
const arr = [1,4,6]
teste = arr.push(10, 4, "ola")
console.log(teste) //mostra o novo length da array
console.log(arr)
```

```js
(output)
6
[ 1, 4, 6, 10, 4, 'ola' ]
```

### pop()

```js
const novo = arr.pop()
console.log(novo)
console.log(arr)
(output)
ola
[ 1, 4, 6, 10, 4 ]
```

### shift()

```js
const novoMaisnovo = arr.shift()
console.log(novoMaisnovo)
console.log(arr)
```

```js
(output)
1
[ 4, 6, 10, 4 ]
```

### slice()

```js
const Slice = arr.slice(2, 4) //a partir do indice dois até o 4 lembrando q o final n é incluido
console.log(Slice)
console.log(arr)
```

```js
(output)
[ 10, 4 ]
[ 4, 6, 10, 4 ]
```

```js
Se você não passar valor final, ele vai até o ultimo elemento da array
splice()
const Arrayy = [1,2,3,5,6,7,8,8,9,5,2]
const Splice = Arrayy.splice(2,4)//a partir do indíce 2, ele remove 4 elementos
console.log(Arrayy)
console.log(Splice) //retorna os valores removidos
```

```js 
(output)
[1, 2, 8, 8, 9, 5, 2]
[ 3, 5, 6, 7 ]
```

```js
const Arrayys = [1,2,3,5,6,7,8,8,9,5,2]
const SpliceAcrescenta = Arrayys.splice(2,4, "good night", "bom dia")//a partir do
segundo coisa ai (4) são oq vc quer acrescentar a partir do indice 2, e ainda remove 4
elementos após
console.log(Arrayys)
console.log(SpliceAcrescenta) //retorna os valores removidos
```

```js
(output)
[ 1, 2, 'good night', 'bom dia', 8, 8, 9, 5, 2 ]
[ 3, 5, 6, 7 ]
```
--- 

|arr. |                |
|-----|----------------|
| Reverte a array |reverse()|
| Retorna um único valor.  |reduce()|

### reverse()

```js
const arr = [1,4,5]
console.log(arr.reverse()) //retorna [ 5, 4, 1 ]
```

### reduce()
```js
let soma = arr.reduce(function(acumulador, valorAtual){ //neste caso o acumulador seria
5, e o valor atual 4
 //retorna o que vai ser efetuado no loop dessa array
 return acumulador + valorAtual //vai retorna na primeira interação o 1 mais 4,
depois esse valor mais 5 até que acabe os elementos da array
})
console.log(soma) //retorna 10
```

Tbm pode receber o indice e a array original

```js 
let soma = arr.reduce(function(acumulador, valorAtual, i, _arr){
 console.log(i)
 console.log(_arr)
 return acumulador + valorAtual
})
console.log(soma)
```
```js
(output) //só executa o loop 2 vezes pq o primeiro valor é a soma dos dois primeiros
elementos
1
[ 1, 4, 5 ]
2
[ 1, 4, 5 ]
10
```
> Pode receber mais um parametro

```js
let soma = arr.reduce(function(acumulador, valorAtual, i, _arr){
 console.log("indice ",i)
 console.log(_arr)
 console.log("acumulador: " + acumulador + " valor atual:" + valorAtual)
 return acumulador + valorAtual
}, 0)
//pode passar outro parametro que seria o valor inicial. quando n se passa esse valor,
o acumulador pega os dois primeiros valores da array e toma como inicial.
//agora o acumulador recebe 0 e o atual recebe o número 1
console.log(soma)
```

```
(output) //loop ta executando 3 vezes pois foi adicionado um valor a mais
indice 0
[ 1, 4, 5 ]
acumulador: 0 valor atual:1
indice 1
[ 1, 4, 5 ]
acumulador: 1 valor atual:4
indice 2
[ 1, 4, 5 ]
acumulador: 5 valor atual:5
10
```
Se no lugar do "0" você passa uma string(aspas vazias), tudo vira uma grande string retornando um concatenação (145). Também pode receber um parametro objeto ou array.

Você pode usar os [] para pegar as letras de uma palavra.

```js
const nomes = ["Shay", "Ronaldo", "Pietra", "Paulo"]
let nomesPorOrdemDeLetra = nomes.reduce(function(nomes, nomeAtual){
let primeiraLetra = nomeAtual[0] //vc também pode pegar a primeira letra do elemento.
essa letra é armazenada (exemplo: S)
 if(nomes[primeiraLetra]){//se exister nome com primeira letra determinada. se isso
existe: nomes[S]
 nomes[primeiraLetra]++
 }else{
 nomes[primeiraLetra] = 1
 }
 return nomes
},{})//quero que retorne um objeto
//na primeira interação nomes recebe o parametro object vazio, e nomeAtual recebe Shay
console.log(nomesPorOrdemDeLetra)
```

```js
(output)
{ S: 1, R: 1, P: 2 }
```

## _Exercício_
```js
const numeros = [1,3,56,7,7,8,7,9,6,3,5,6,7,2,2,3]
const ApenasNumeros = numeros.reduce(function(num, numAtual){
 if(num.indexOf(numAtual) < 0){ //se o indice for -1 ele nao existe de novo
 num.push(numAtual) //adicionando na array
 }
 return num
},[])
console.log(ApenasNumeros)
```
```js
(output)
[1, 3, 56, 7, 8, 9, 6, 5, 2]
```

---

|Array |                |
|-----|----------------|
| Cria uma array a partir de outra array, ou um objeto que se parece uma array. | from()|
|  |of()|

### from()
```js
//como se fosse uma cópia
 const arr = new Array(1,4,5,6)
 const arr2 = Array.from(arr) //retorna a mesma array, sendo elas arrays
distintas
```
### of()
```js
 const arr3 = new Array(3)//cria uma array com 3 posições
 console.log(arr3.length) //retorna 3
 const arr4 = Array.of(3) //acrescenta um valor a array
 console.log(arr4.length) //retorna 1
 ```

Se você faz:

```js
 const paragrafos = document.querySelectorAll('p') //ele seleciona todas as tags
p
 console.log(paragrafos.length) //se comporta/parece como uma array, pois há um
conjunto de elementos
 //pode colocar paragrafos.forEach() etc.
 paragrafos.forEach(function(p, i){
 p.textContent = `${++i} - ${p.textContent}` //coloca um número antes de cada
paragráfo
})
```

O `"p"` não é uma array de verdade, portanto não consegue receber todas as funções da mesma (por exemplo, não recebe "map"). Com o from podemos tranformar ela em array de verdade.
```js
 paragrafos = Array.from(paragrafos) //criando uma array a partir dos elementos da variável
```
---

# Spread
Quebra a array e mostra os parametros/argumentos individuais da array

```js
const arr = [1,3,5]
function sum(){
 console.log(arguments)
 console.log(arguments.length)
}
sum(1,2,3)//arguments.lenght = 3
sum(arr)//arguments.lenght = 1
//ou seja oq ele estaria passando seria a array inteira sum([1,3,5])
//mas ela pode ser quebrada para ser acessada cada valor
sum(...[1,3,5]) //ou
sum(...arr)
```

```js
(output)
[Arguments] { '0': 1, '1': 2, '2': 3 } //isso que eu quero
3
[Arguments] { '0': [ 1, 3, 5 ] } //isso que acontece
1
[Arguments] { '0': 1, '1': 3, '2': 5 } //assim que deve ser
3
[Arguments] { '0': 1, '1': 3, '2': 5 } //ou assim
3
```
Outro exemplo, é quando é usado push, acontece a mesma coisa

```js
const arr2 = [1,4,5]
const arr3 = [1,6,7]
arr2.push(arr3) //acaba colocando a array toda
console.log(arr2)
arr2.push(...arr3) //resolvendo
console.log(arr2)
```

```js
(output)
[ 1, 4, 5, [ 1, 6, 7 ] ]
[ 1, 4, 5, [ 1, 6, 7 ], 1, 6, 7 ] //manteve a anterior mas resolveu a seguinte
```
--- 
# Destructuring
Recuperarando variaveis de uma array. Se você ver "[]" antes do sinal de =, significa que você está pegando os valores da array e atribuindo as variáveis.

```js
//[] = arr isso é uma destructuring
const arr = [2,56,6,3]
const [n1, n2] = arr //tirar da array o valor que eu quero, criando uma constante
console.log(n1)
console.log(n2)
//pega as duas primeiras constantes
//retorna 2, 56
```

Pode pegar o resto da array

```js
const [n1, ...n2] = arr //... e pega o resto da array
console.log(n1)
console.log(n2)
```

```js
(output)
2
[ 56, 6, 3 ]
```

E se eu quiser que ele pegue o último

```js
const [n1,,n2] = arr //ele vai ignorar o segundo elemento, e pegar o terceiro
console.log(n1)
console.log(n2)
```

```js
(output)
2
6
```
---

# For In
For In serve para percorrer objetos

```js
const obj = {
 nome: "Maria",
 idade: "28",
 email: "Maria@gmail.com"
}
for(let prop in obj){ //prop de propriedade, obj da constante
 console.log(prop) //cada elemento do objeto
}
```

```js
(output)
nome
idade
email
```
```js
console.log(obj[prop]) //para acessar o valor de cada propriedade
```

```js
(output)
28
email
Maria@gmail.com
```
# For of

Faz interação de array, retorna o valor dos elementos da array (sem precisar de `lenght`)

```js
const arr = [1,2,3]
for(n of arr){
     console.log(n)
}
```

```js
(output)
1
2
3
``` 
---

## _Exercício sun avarage_

```js
function sun(){
 const numbers = Array.from(arguments) //a partir do arguments criou um obj array pra
receber as comandas de uma array
 //ou const numbers = [...arguments]
 return numbers.reduce(function(sum, atual){
 return sum + atual
 }, 0)
}
function avarage2(){
 return sun(...arguments)/arguments.length //passando os argumentos (array fake)
separados
}
let soma2 = sun(1,2,4,5)//array fake
console.log(soma2)
let media = avarage2(1,2,3,4,5)
console.log(media)
```

```js
(output)
12
3
```










