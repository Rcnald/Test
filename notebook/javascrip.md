# Variaveis
* Nomes simbolicos para receber algum valor
* Atalho de codigo
* Identificadores

## Três palavras reservadas para se criar variavel
* var
* let 
	* var e let podem ser alteradas ao longo da aplicação (var... varia)
* const 
	* const não pode ser alterada ao longo da aplicação (const... constante)

# tipada  
### JS não é fortimente tipada ou seja não é necessario atribuir a variavel de que tipo ela é, quando voce atribui um valor ela automaticamente o identifica
* typeof 
	* mostra o tipo da variavel

### mudar tipo sem converter 

# Scope 
* ### Determina a visibilidade de alguma variavel no JS

### Block statment
* Inicia-se com:

```js
//vamos iniciar o block
{
	//aqui é um bloco posso colocar qualquer coisa
} 
//aqui fechamos o bloco
```
#### var

* var é uma variavel **Global** e podera funcionar fora de um espaço de bloco 
	* **Global** é tudo que esta executando na aplicação e **local** é somente oque esta dentro de um bloco

	```js
	console.log('> existe x antes do bloco', x);

	{
		var x = 0;
	}

	console.log('> existe x depois do bloco', x);
	```
	  * Ou seja o `console.log()` *antes* do **bloco** sera executado sem problema, apenas com a **var** como `undefined`
	  * Ja o *depois* sera executado com a var x recebendo 0

#### let e const

* **_let_** e **_const_** são variaveis **Locais** e só funcionam no escopo em que foram criados. 

	```js
	console.log('> existe y antes do bloco', y);

	{
		let y = 0;
	}

	console.log('> existe y antes do bloco', y);
	```

	* Aqui **não** existe `y` nem _antes_ nem _depois_ do bloco.
		* Ele so existiria *dentro* do bloco assim: 

		```js
		{
		let y = 0;
		console.log('> existe y no bloco', y);
		}
		```
* **_let_** pode ser atualizada dentro do escopo se for inicializada fora dele e sua atualização permanece para fora do escopo tambem
```js
let y = 1;
{
	y = 0;
}
console.log(y);
```
	* o valor a ser exibido será `0`.

* podemos criar **_let_**'s e **_const_**'s com o mesmo nome uma dentro e outra fora do escopo que não resultará em problemas futuros

	```js
	let y = 1;
	{
		let y = 0;
		console.log(y);
	}
	console.log(y);
	```
	* o _primeiro_ `console.log()` exibirá `0` e o _segundo_ `1`.

.
===

### Criar nomes de variaveis

* JS é case-sensitive
* JS aceita a cadeia de caracteres Unicode

- Posso:
	* Iniciar com esses caracteres especias: $ e _
	* Iniciar com letras
	* Colocar acentos
	* Letras maiusculas e minusculas tem diferença

- Não posso: 
	* Iniciar com números
	* Colocar espaços vazios

- **Ideal**:
	* Criar nome que fazem sentido
	* Explique o que a variavel faz ou é
	* Escrever em inglês
		* snake_case
		* camelCase

.
===

### Concatenar

* Exibir o valor de uma variavel dentro de uma `string`

	```js
	let name = "Ronald"
	let age = 17

	console.log('o ' + name +' tem ' + age + ' anos.')
	```
	* Usando `+` entre as `' '` podemos adicionar variveis na string

#### Interpolando valores
* Em vez de `' '` usamos ` ` ` `

	```js
	let name = "Ronald"
	let age = 17

	console.log(`o ${name} tem ${age} anos`)
	```
	* Assim não precisamos abrir novas `' '` entre as stings, basta apenas envolver a **_var_** em `${}`

.
===

### Objects

* Propriedade, atributos
	* Para abrir um objeto precisa de { } // {propridade: "valor"}

	```js
	const me = {
		name: 'Ronald',
		age: 13,
		isAdmin : true
	}

	console.log(`${me.name} tem ${me.age} anos`)
	```
		* Para **acessar** esses valores você deve escrever, `me` que seria a propriedade e para acessar os atributos que estão dentro dessa propriedade colocamos um **.** e logo apóes `name` que seria o atributo

.
===

### Arrays

* Vetores, vlw guanabara , varios dados(qualquer tipo) agrupados
	* Para abrir um array precisa de [ ]

	```js
	const animals = [
		'Lion',
		{
			name: Monkey,
			age :3
		},
		'Shay'

		console.log(animals[2].name)
	]
	```
	* Para **acessar** os valores dentro do array colocamos a **posição** dentro de [ ]
		
		```js
		console.log(animals [3])
		```
		* O valor a ser exibido será `'Shay'`

			* Para saber **quantos** dados existem em um array basta eu escrever 
			```js 
			console.log(animals.lenght)
			```
			, ele irá exibir a **quantidade** de dados nesse array no caso `3`

.
===

# Functions

* ## É um `Object`/`Scope` que é utilizada quando se necessita de reutilizar o mesmo bloco de codigo repetidas vezes.

### function statement 
	
* declaração de função

	```js
		function createGreeting(){
			console.log('oi')
			console.log('ola')
			console.log('hi')
		}
	```
	`function, functioname, (), {codeblock}`
	
### function expression

- variável que recebe uma função sem `fucntioname` // **TEM COMPORTAMENTE DIFERENTE DA** `function statement`
	```js
	const sum = function(){
		
	}
	```
	> declarar uma variável que recebe uma função sem `functioname` ou podemos escrever com `function sum()` tambem

### call function

- chamar função, rodar

	```js
	createGreeting()
	```
	`functioname, ()`

### argumentos e parâmetros

```js
const sum = function(num1, num2){
	console.log(num1 + num2)
}

sum(2,3)

> 5
```
- Assim nós chamamos a variável function adionando dados, **argumentos**, que seriam (2,3).

- Já os **parâmetros** seriam _num1_ e _num2_.

- Sendo _num1_ e _num2_ **variáveis locais**, ou seja só funcionarão em seu **bloco/escopo** `function`

- Os **argumentos** são _atribuidos_ aos **parâmetros**, posicionando-os entre as `,` então ficará assim:

	```js
	num1 = 2
	num2 = 3
	```

### retornando valores

- Para a function retorna um valor não apenas executar um comando no scope global adicionamos **return**, `function`'s que não retornam valores são `Undefined`

	```js
	const sum = function(num1, num2){
		total = num1 + num2
		return total
	}

	let num1 = 12
	let num2 = 32

	console.log(`o número 1 é ${num1}`)
	console.log(`o número 2 é ${num2}`)
	console.log(`a soma é ${sum(num1,num2)}`)

	> o número 1 é 12
	> o número 2 é 32
	> a soma é 44
	```

	- Dessa forma removemos o `console.log()` de dentro da `function` e apenas utilizamos no scope global o que realmente queremos, o resultado da soma entre o argumento num1 e num2.

	- **Sem** o _return_ a `function` se colocaria no scope global e necessitaria de um `console.log()`, **com** o _return_ ela executa o codeblock em um scope local e envia o dado de `total` para aonde o `function` foi chamada.

#### declaração de variável 

- **Se não** usarmos `let, var, const` em _total_ que é uma **function com parâmetros** essa variável pode ser usada fora do scope local da `function`, isso pode ocasionar em varios problemas futuros... então **SEMPRE** use `let, var, const` para declarar essas variáveis que serão usadas apenas em `function`.

#### function Scope

- Não entendi então... Discover > Trilha Fundamentar > Guia Estelar JavaScript > Funções > **Function Scope**

- Entendi agora, melhor exemplificar do que tentar explicar

```js
let subject = 'create video'

function createThink(subject){//                <--
	subject = 'study' // está ligado ao parâmetro |
	return = subject
}

console.log(createThink(subject))
console.log(subject)

> 'study'
> 'create video'
```

- O `subject` do _let_ é diferente do _parâmetro_ `subject`

```js
let subject = 'create video'//                <----
						//						|
function createThink(){//                		 |
	subject = 'study' // está ligado ao let -------
	return = subject
}

console.log(createThink(subject))
console.log(subject)

> 'study'
> 'study'
```

- Como não existe _parâmetro_ com o nome `subject` então _let_ é "escolhido".

### fuction hoisting

- A `function` em si possui _hoisting_ (conceito de 'elevar' determinada declaração de dado se ele for chamada antes de sua inicialização)

```js
console.log(sayMyName())

function sayMyName(){
	console.log('Ronald')
}

> Ronald
```

- Porém só funciona com `function statement` propriamente ditas **não** com **fucntion expression** ou seja:

```js
console.log(sayMyName())

var sayMyName = function(){
	console.log('Ronald')
}

> error.
```

### arrow function

- Jeito compacto e morderno de escrever funções.
- Funciona apenas em _function expression_

```js
const sayMyName = () => {
	console.log('Ronald')
}

sayMyName()

> Ronald
```

### callback function

- Uma `function` que executa outra `function`, usada como argumento/parâmetro.

	```js
	function sayMyName(name){
		name()
	}

	sayMyName(function(){
		console.log('Ronald')
	})

	> Ronald
	```

	- É como se eu estive atribuindo uma `function expression` ao parâmetro _name_.

	- Então após isso eu devo executar a `function` dentro da outra `function`.

### fucntion() constructor

- Expressão _new_
- Criar um novo `object`
- _this_ keyword

	```js
	function Person() {}

	const ronald = new Person()

	console.log(ronald)

	> Person {}
	```
	> declarei a `function` (sempre com inicial maiuscula), uma _const_ atribuindo a ela `new functioname()`, ou seja como o `new` antecendo a `function` ela agora é uma 	**function constructor**, me retornando sempre um `object`.

- Construindo o `object`

	```js
	function Person(nome) {
		this.name = nome
	}

	const ronald = new Person("Ronaldo")
	const amor = new Person("Shay")

	console.log(ronald)
	console.log(amor)

	> Person {name: 'Ronaldo'}
	> Person {name: 'Shay'}
	```

	> O **_this_** declara o _atributo_ do `object`.

- Functions dentro do `object`

	```js
	function Person(nome) {
	    this.name = nome
	    this.walk = () => {
	        return this.name + " walka"
	    }
	}

	const ronald = new Person("Ronaldo")
	const amor = new Person("Shay")

	console.log(ronald.walk())
	console.log(amor)

	> Ronaldo walka
	> Person {name: 'Shay'}
	```

	> `this.walk = () => {}` cria uma `function` dentro do `obejct` podendo ser chamada através da função base dos `objects`: **(ronald.walk())**

.
===

# Manipulando dados

## Prototype

- Prototipo (aquilo que ja foi criado previamente).

- Funcionalidades nativas do JS.

### checar funcionalidades

- `.__proto__`

```js
"ronaldo".__proto__

v String {'', constructor: ƒ, anchor: ƒ, at: ƒ, big: ƒ, …}
>anchor: ƒ anchor()
at: ƒ at()
big: ƒ big()
blink: ƒ blink()
bold: ƒ bold()
charAt: ƒ charAt()
charCodeAt: ƒ charCodeAt()
codePointAt: ƒ codePointAt()
concat: ƒ concat()
constructor: ƒ String()
endsWith: ƒ endsWith()
fixed: ƒ fixed()
fontcolor: ƒ fontcolor()
fontsize: ƒ fontsize()
includes: ƒ includes()
indexOf: ƒ indexOf()
italics: ƒ italics()
lastIndexOf: ƒ lastIndexOf()
length: 0
link: ƒ link()
localeCompare: ƒ localeCompare()
match: ƒ match()
matchAll: ƒ matchAll()
normalize: ƒ normalize()
padEnd: ƒ padEnd()
padStart: ƒ padStart()
repeat: ƒ repeat()
replace: ƒ replace()
replaceAll: ƒ replaceAll()
search: ƒ search()
slice: ƒ slice()
small: ƒ small()
split: ƒ split()
startsWith: ƒ startsWith()
strike: ƒ strike()
sub: ƒ sub()
substr: ƒ substr()
substring: ƒ substring()
sup: ƒ sup()
toLocaleLowerCase: ƒ toLocaleLowerCase()
toLocaleUpperCase: ƒ toLocaleUpperCase()
toLowerCase: ƒ toLowerCase()
toString: ƒ toString()
toUpperCase: ƒ toUpperCase()
trim: ƒ trim()
trimEnd: ƒ trimEnd()
trimLeft: ƒ trimStart()
trimRight: ƒ trimEnd()
trimStart: ƒ trimStart()
valueOf: ƒ valueOf()
Symbol(Symbol.iterator): ƒ [Symbol.iterator]()
[[Prototype]]: Object
[[PrimitiveValue]]: ""
﻿

```
> `.__proto__` exibir todas os _prototypes_ disponíveis para aquele dado.

### exemplos aleatórios

```js
"ronaldo".length
```
> `.lenght` exibi a quantidade de caracteres do **dado**

- Number

```js
10.0.hasOwnProperty

> ƒ hasOwnProperty() { [native code] }
```
> sem o `.0` não iria funcionar poís o JS reconhece o número como `float`.

## Type conversion (typecasting) vs coersion

- Alteração do tipo de dado 
- **conversion** a gente faz essa alteração, **coersion** o JS força essa alteração.
	- type coersion
	```js
	console.log('9' + 5)

	> 95
	```
	> o JS forço a converção do datatype `number` 5 para `string`.
	```js
	console.log('9' + '5')
	```

	- type conversion
	```js
	console.log(Number('9') + 5)

	> 14
	```
	> Assim eu manualmente converti a `string` 9 para `number`.

## Manipulação de strings e números

- ### Converter String para Number

	```js
	let string = "123"
	console.log(Number(string))

	> 123
	```
	> Utilizando de uma **fucntion interna** do JS `Number()`.

- ### Converter Number para String

	```js
	let number = 321
	console.log(String(number))

	> '321'
	```
	> Utilizando de uma **fucntion interna** do JS `String()`.

- ### Contar quantidade de caracteres
	- String
		```js
		let word = "Paralelepipedo"
		console.log(word.lenght)

		> 14
		```
		> Utilizando de uma **prototype** do JS `.lenght` que informa a quantidade de caracteres de uma  _string_.
	
	- Number 
		```js
		let number = 1234
		console.log(number.lenght)

		> Undefined
		```
		> o _prototype_ `.lenght` não funciona em `number`, então basta fazer a converção para `string`
		```js
		let number = 1234
		console.log(String(number.lenght))

		> 4
		```

- ### Número de casas decimais 

	```js
	let number = 543.943289
	console.log(number.toFixed(2))

	> 543.94
	```
	> a function `.toFixed()` regula quantas casas decimais aparecem e quando atrelada a um obejct (number) é chamada de metodo

- ### Substituir caracteres

	```js
	let number = 543.943289
	console.log(number.toFixed(2).replace(".", ","))
	
	> 543,94
	```
	> um object pode ter varias functions atreladas a si. a function `replace()` pega o primero argumento, `"."` e substitui pelo segundo, `","`. E tambem o datatype do object number deixa de ser `Number` e passa a ser `String` poís a `,` não é algo natural do datatype number, Assim o JS faz uma _coersion_.

- ### Maiúsculas e minúsculas
	- maiusculas
		```js
		let word = "Programar é coisa de duente"
		console.log(word.toUpperCase())
		```
		> Com a function `.toUpperCase()` todos os caracteres serão **maiúsculos**

	- minúsculas
		```js
		let word = "Programar é coisa de duente"
		console.log(word.toLowerCase())
		```
		> Com a function `.toLowerCase()` todos os caracteres serão **minúsculos**x

- ### Separar string em array

	```js
	let phrase = "Eu ja vivo o amor!"
	let myArray = phrase.split(" ")
	console.log(myArray)

	> (5) ['Eu', 'ja', 'vivo', 'o', 'amor!']
	```
	> a fucntion `split()`, separa os caracteres como base no argumento inserido. Como o argumento foi `" 	"` a function apagou o `" "` e colocou os caracteres em volta em um array.

	```js
	console.log(myArray[4])

	> amor!
	```
	> realmente é um `array`.

- ### Juntar array em string

	```js
	let phrase = "Eu ja vivo o amor!"
	let myArray = phrase.split(" ")

	let textAgain = myArray.join()
	console.log(textAgain)

	> Eujavivooamor!
	``` 
	> com a function `.join()` ele pega todos valores dentro do array e simplesmento os uni, como nõ tinha nenhum argumento ele foi separado por virgula

	> Agr se eu coloca uma argumento, por exemplo `.join(" ")` ele será separado por espaços.
	```js
	let textAgain = myArray.join(" ")
	console.log(textAgain)

	> Eu ja vivo o amor!
	```
- ### Checar existencia de uma palavra

	```js
	let phrase = "Eu quero viver o amor!"
	console.log(phrase.includes("amor"))

	> true
	```
	> com a function `.includes()` eu insiro a argumento que eu quero saber se existe dentro da string, ele 	me retorna um valor `boolean`

- ### Criar array com constructor

	```js
	let myArray = new Array('a', 'b', 'c')
	console.log(myAray)

	> (3) ['a', 'b', 'c']
	```
	> se eu não configurar uma `function constructor` e declarar argumentos, esses argumentos se transformam em valores dentro de um array.

- ### Contar elementos array
	- Basta usar a function `.lenght` que funciona perfeitamente

- ### Strings para array
	- Transforam cadeia de caracteres em elementos/valores de um `array`

	```js
	let word = "Manipulação"
	console.log(Array.from(word))
	```
	> o metodo `Array.from()` pega um argumento e trasnforma cada caracter dele em um **elemento** de array

## Manipulando arrays

```js
let techs = ['html', 'css' , 'js']
console.log(techs)

> (3) ['html', 'css', 'js']
```

- ### Adicionar um item no fim do array

	```js
	techs.push("nodejs")
	console.log(techs)

	> (4) ['html', 'css', 'js', 'nodejs']
	```
	> `.push()`

- ### Adicionar um item no inicio do array

	```js
	techs.unshift("sql")
	console.log(techs)

	> (5) ['sql', 'html', 'css', 'js', 'nodejs']
	```
	> `.unshift()`

- ### Remove um item no inicio do array

	```js	
	techs.shift()
	console.log(techs)

	> (4) ['html', 'css', 'js', 'nodejs']
	```
	> `.shift()`

- ### Remove um item no fim do array

	```js	
	techs.pop()
	console.log(techs)

	> (3) ['html', 'css', 'js']
	```
	> `.pop()`

- #### Manter determinados itens do array
	
	```js	
	console.log(techs.slice(1,2))

	> (1) ['css']
	```
	> `.slice()` arumento 1, em que item vai iniciar, argumento 2,  em que item terminar (modifica exibição não array 'aparentemente')

- ### Remover um ou mais itens em qualquer posição do array

	```js	
	techs.splice(1,2)
	console.log(techs)

	> (1) ['html']
	```
	> `.splice()` arumento 1, em que item vai iniciar, argumento 2,  em que item terminar (se for 1 , será terminar nele mesmo)

- ### Saber posição de elemento dentro do array

	```js	
	let index = techs.indexOf('css')
	console.log(index)

	> 1
	```
	> `.indexOf()`	

- ### Exemplo foda de manipulação de dados de arrays
 
	```js	
	let index = techs.indexOf('css')
	techs.splice(index, 1)

	> (2) ['html', 'js']
	```
	> Qualquer item q eu atribuior ai `.indexOf` será removido.

# Expressões e Operadores

<!-- ## Expressions -->

## Operators

- ### Binary

	```js
	let number = 1;
	console.log(number + 1)

	> 2
	```
	> Operadores que precisam de 2 dados/elementos para funcionar, como é o caso do operador `+`

- ### Unary

	```js
	let number = 1;
	console.log(--number)

	> 0
	```
	> Operadores que precisam de apenas 1 dados para funcionar, como é o caso do operador `--` que _decrementa o object_

	> `typeof` é um operador unary por exemplo.

- ### Ternary

	```js
	let number = 1;
	console.log(true ? 'alo' : 'nada')

	> alo
	```
	> Um unico caso de operador que necessita de 3 elementos para funcionar.

## New

- ### Criar um novo `object` usando as `functions constructors`

	```js
	let name = new String("Ronald")
	let age = new Number(13)
	console.log(name, age)

	> String {'Ronald'} 
	> Number {13}
	```
	> Criação de um `object`

	```js
	let name = new String("Ronald")
	name.surName = "Rocha"
	let age = new Number(13)
	console.log(name, age)

	> String {'Ronald', surName: 'Rocha'} 
	> Number {13}
	```
	> `name.surName =` adiciona uma propriedade ao `object`

## Operator unários

- ### Typeof

	```js

	let string = 'Ronald'
	console.log(typeof string)

	> string
	```
	> exibir o `datatype` do elemento

- ### Delete

	```js

	const person = {
		name:"Ronald",
		age: 13
	}

	delete person.age
	console.log(person)

	> {name: "Ronald"}
	```
	> `delete` é um operador que logicamente deleta uma propriedade do `object`

## Operadores aritiméticos

- ### Multiplicação

	```js
	console.log(3 * 2)

	> 6
	```
	> `*`

- ### Divisão

	```js
	console.log((3 / 2).toFixed(1).replace(".", ","))

	> 1,5
	```
	> `/`

- ### Soma

	```js
	console.log(3 + 2)

	> 5
	```
	> `+`

- ### Subtração

	```js
	console.log(3 - 2)

	> 1
	```
	> `-`

- ### Resto da divisão

	```js
	//remainder
	console.log(3 % 2)

	> 1
	```
	> `%`

- ### Incremento

	```js
	console.log(++3)

	> 4
	```
	> `++`

- ### Decremento

	```js
	console.log(--3)

	> 2
	```
	> `--`
	
- ### Exponencial

	```js
	console.log(3 ** 2)

	> 9
	```
	> `**`

## Grouping operator ()
- Os bons e velhos parentesses da matematica.
- Agrupar elemementos.

## Operadores de comparação
- Retornar valor `boolean`

- ### Igual a

	```js
	let one = 1
	let two = 2

	console.log(two == 1)
	console.log(one == "1")

	> false
	> true
	```
	> `==`

- ### Diferente de

	```js
	let one = 1
	let two = 2

	console.log(one != two)
	console.log(one != 1)
	console.log(one != "1")

	> true
	> false
	> false
	```
	> `==`

- ### Estritamente igual a
	- Compara tipo de dado dos elementos tambem.

	```js
	let one = 1
	let two = 2

	console.log(one === "1")
	console.log(one === 1)

	> false
	> true
	```
	> `===`

- ### Estritamente diferente de
	- Compara tipo de dado dos elementos tambem.

	```js
	let one = 1
	let two = 2

	console.log(two !== "2")
	console.log(two !== 2)

	> true
	> false
	```
	> `!==`

- ### Maior que

	```js
	let one = 1
	let two = 2

	console.log(one > two)

	> false
	```
	> `>`

- #### Maior igual a 

	```js
	let one = 1
	let two = 2

	console.log(one >= 1)
	console.log(two >= 1)

	> true
	> true
	```
	> `>=`

- ### Menor que

	```js
	let one = 1
	let two = 2

	console.log(one < two)

	> true
	```
	> `<`

- #### Menor igual a

	```js
	let one = 1
	let two = 2

	console.log(one <= two)
	console.log(one <= 1)
	console.log(one <= 0)

	> true
	> true
	> false
	```
	> `<=`

## Operadores de atribuição (assigment)

```js
let x

console.log(x)

> Undefined
```

- ### Assigment

	```js
	x = 1 

	console.log(x)

	> 1
	```
	> `=`

- ### Addition assigment
	- Pegar o valor ja existente na variável e somar com a valor atribuido a seguir.

	```js
	x += 2 

	console.log(x)

	> 3
	```
	> `+=`
	>
	> Na pratica seria a mesma coisa de fazer
	>
	>`x = x + 2`

- ### Subtraction assigment
	- Pegar o valor ja existente na variável e diminui com a valor atribuido a seguir.

	```js
	x -= 1

	console.log(x)

	> 2
	```
	> `-=`
	>
	> Na pratica seria a mesma coisa de fazer
	>
	>`x = x - 1`

- ### Multiplication assigment
	- Pegar o valor ja existente na variável e multiplica com a valor atribuido a seguir.

	```js
	x *= 2

	console.log(x)

	> 4
	```
	> `*=`
	>
	> Na pratica seria a mesma coisa de fazer
	>
	>`x = x * 2`

- ### Division assigment
	- Pegar o valor ja existente na variável e divide com a valor atribuido a seguir.

	```js
	x /= 2

	console.log(x)

	> 2
	```
	> `/=`
	>
	> Na pratica seria a mesma coisa de fazer
	>
	>`x = x / 2`

- ### Remainder assigment

	```js
	x %= 2

	console.log(x)

	> 0

	x += 2
	```
	> `%=`
	>
	> Na pratica seria a mesma coisa de fazer
	>
	>`x = x % 2`

- ### Exponetiation assigment
	- Pegar o valor ja existente na variável e exponencia com a valor atribuido a seguir.

	```js
	x **= 2

	console.log(x)

	> 4
	```
	> `**=`
	>
	> Na pratica seria a mesma coisa de fazer
	>
	>`x = x ** 2`

## Operadores logicos
- Valores `booleans`
- Quando verificados retornam `true` ou `false`

```js
let pao = true
let queijo = true
```

- ### AND
	- Irá retornar `true`, apenas se **todos** os valores forem `true`, se **um deles ou todos** for `false` irá retorna `false`.	

	```js
	console.log(pao && queijo)

	> true
	```
	```js
	queijo = false

	console.log(pao && queijo)

	> false
	```

	> `&&`

- ### OR
	- Irá retorna `true` se **um dos valores ou todos** forem `true`, só retornará `false` se **todos** os valores forem `false`

	```js

	queijo = true
	pao = true

	console.log(pao || queijo)

	> true
	```
	```js

	queijo = true
	pao = false

	console.log(pao || queijo)

	> true
	```
	```js

	queijo = false
	pao = false

	console.log(pao || queijo)

	> false
	```

	> `||`

- ### NOT
	- Nega o valor da variavel.
	- Como? invertendo seu valor.

	- #### True

	```js
	pao = true

	console.log(!pao)

	> false
	```

	- #### False

	```js
	pao = false

	console.log(!pao)

	> true
	```

	> `!`

## Operador Condicional (Ternário)
- Dependendo da condição, nós receberemos valores diferentes
- `Condição então valor 1 se não valor 2`

```js
pao = true
queijo = false

const niceBreakfast = pao && queijo ? "café top" : "café meh"

console.log(niceBreakfast)

> café meh
```
```js
pao = true
queijo = true

const niceBreakfast = pao && queijo ? "café top" : "café meh"

console.log(niceBreakfast)

> café top
```
```js
pao = false
queijo = true

const niceBreakfast = pao || queijo ? "café top" : "café meh"

console.log(niceBreakfast)

> café top
```
```js
pao = false
queijo = false

const niceBreakfast = pao || queijo ? "café top" : "café meh"

console.log(niceBreakfast)

> café meh
```
> `let letname =` Condition `?` value1 `:` value2
>
> Se _Condition_ for `true` executa __value1__, se for `false` executa __value2__

- Exemplo

	```js
	let age = 19

	const canDrive = age >= 18 ? "Pode dirigir" : "Não pode dirigir"

	console.log(canDrive)

	> Pode dirigir
	```
	> Eu que fiz tá? ESQUEÇA X.

## Operador de string

- ### Comparison

	```js
	console.log("a" == "a")

	> true
	```
	> `==` 

- ### Concatenation
	- Retornar união de duas strings.

	```js
	console.log("a" + "a")	

	> aa
	```
	```js
	let alpha = 'alpha'
	alpha += 'bet'
	console.log(alpha)

	> alphabet
	```
	> `+`

## Falsy e Truthy

- ### Falsy
- O falsy é quando um valor é considerado falso (`false`) em contextos que onde um booleano é **obrigatório** (condicionais e loops)
	
	- Todos os valores abaixo seriam representados como false em um boolean.

		- `false`
    	- `0`
    	- `-0`
    	- `""`
    	- `null`
    	- `undefined`
    	- `NaN`

	```js
	console.log( NaN ? 'verdadeiro' : 'falso' )
	
	> falso
	```
	> Condition

- ### Truthy
- O truthy é quando um valor é considerado verdadeiro (`true`) em contextos onde um booleano é **obrigatório** (condicionais e loops)
	
	- Todos os valores abaixo seriam representados como false em um boolean.

		- `{}`
    	- `[]`
    	- `1`
    	- `3.23`
    	- `"0"`
    	- `"false"`
    	- `-1`
    	- `Infinity`
    	- `-Infinity`

	```js
	console.log( Infinity ? 'verdadeiro' : 'falso' )

	> verdadeiro
	```
	> Condition

## Operator precendence
- Precendência de operadores.
- De cima para baixo, do mais importante ao menos importante.

	|grouping|( )|
	|-|-|
	|**negação e incremento**|!, ++, --|
	|**multiplicação e divisão**|*, /|
	|**adição e subtração**|+, -
	|**relacional**|<, <=, >, >=
	|**igualdade**|==, !=, ===, !==
	|**AND**|&& 
	|**OR**| \|\||
	|**condicional**|? :
	|**assignment (atribuição)**|=, +=, -=, *=, %=, **= |

# Control flow
- Fluxo que a aplicação executa as linhas de comando.

- ## If e Else
	- Estrutura condicional.
	- **Se** (algo/condição) for `true` executa x, **senão** executa y.

	```js
	let temperature = 37.8

	if (temperature >= 38){
		console.log("febre")
	}else {
		console.log("not febre")
	}
	
	> not febre
	```
	> Se a primeria condition for `true` ela entra no bloco de codigó e á executa, se for false ignora esse mesmo block e executa o proximo.
	
	- ### Multiplos if's
		- Para isso utilizamos `else if`.
	```js
		let temperature = 37.8
	
		//usar as conditions como variáveis
		let highTemperature = temperature > 38
		let mediumTemperature = temperature >= 35 && temperature <= 38
	
		if (highTemperature){
			console.log("febre")
		}else if(mediumTemperature){
			console.log("not that febre")
		}else{
			console.log("not febre")
		}
		
		> not that febre
	```
	> Se a primeria condition for `true` ela entra no bloco de codigó e á executa, se for false ignora esse mesmo block e testa se o proximo block é `true` senão o ignora e vai para o proximo...

- ## Switch
	- Estrutura condicional especifica.

	```js
	let expression = ''

	switch (expression) { // puxa a expressão para o switch
	  case 'a': // confere se o valor da expressão é o correto
	    console.log('a')
	    break // para a execução do switch apenas se verdadeiro
	  case 'b':
	    console.log('b')
	    break
	  default: // caso nenhum valor seja o correto, realizará a 
						 //instrução dentro de si.
	    console.log('default')
	    break
	```
	> Funciona apenas nos valores indicados.

	- Exemplo

	```js
	function calculate(number1, operator, number2){
    let result = 0;

    switch (operator) {
        case '+':
            result = number1 + number2 
            break
        case '-':
            result = number1 - number2 
            break
        case '*':
            result = number1 * number2 
            break
        case '/':
            result = number1 / number2 
            break
        case '%':
            result = number1 % number2 
            break
        case '**':
            result = number1 ** number2 
            break
		default:
			result = "operador não indicado!"
			break
    }

    return result
         
	}

	console.log(calculate(8, '+', 7))

	> 15
	```
	> utilização `switch case`

- ## Throw, Try... catch
	- `throw` lança o erro, e try catch pega esse erro sem parar a aplicação

	```js
	function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome é obrigatório'
    }

    console.log(name)
    }

	try {
    sayMyName('ronaldo')
	} 	catch(e) {
    	console.log(e)
	}

	console.log('após ao try/catch')

    > ronaldo
    > após ao try/catch
	```
	> Nesse caso o erre não foi disparado

	```js
	function sayMyName(name = '') {
    if (name === '') {
        throw new Error ('Nome é obrigatório')
    }

    console.log(name)
    }

	try {
    sayMyName()
	} 	catch(e) {
    	console.log(e)
	}

	console.log('após ao try/catch')

	> Error: Nome é obrigatório
    	at sayMyName (script.js:3:15)
    	at script.js:10:5
	> após ao try/catch
	```
	> `new Error` cria um object de erro.
	>
	> Quando o erro é disparado, ele para o fucntion, exibe a menssagem de erro mas continua o programa, quando é pego pelo `try catch`
	>
	> Sem o `try catch` a aplicação iria parar no meio.

# Estruturas de repetição
- ## For
	- Para.
	- Sabe quando vai parar.

	```js
	for(let i = 0; i < 10; i++){
		console.log(i)
	}

	> 0
	> 1
	> 2
	> 3
	> 4
	> 5
	> 6
	> 7
	> 8
	> 9
	```
	> |incializa variável|condition de continuação do loop|expressão final que vai acontecer com o fim do loop
	> |-|-|-|
	> |i = 0|(enquanto) i < 10 (continua loop)| ++i (acrescenta 1 a i)

	- ### For of
		- Stings
		- Arrays
	
	```js
	let name = "ronald"//string
	let names = ["joao", "paulo", "shay"]//array
	
	for (let letra of name){//pega letra(char) da string
	    console.log(letra)
	}

	for (let nome of names){// pega elementos do array
	    console.log(nome)
	}

	> r
	> o
	> n
	> a
	> l
	> d

	> joao
    > paulo
    > shay
	```
	> `let` parâmetro `of` var(string,array.(até onde sei)).

	- ### For in
		- Objects

	```js
	let person = {// Obejct
    name: 'ron',
    age: 13,
    weight: 91
	}

	for(let property in person){ // pega elementos do object
    console.log(property)// mostra element name
    console.log(person[property])// mostra element value
	}
	```
	> `let` parâmetro `in` var(object.(até onde sei)). 

	- #### Forma de parar loop

	```js
	for(let i = 10; i > 0; --i){
		if(i === 5){
			break// parar
		}
		console.log(i)
	}

	> 10
    > 9
    > 8
    > 7
    > 6
	```
	> `break` parou o loop.

	- #### Forma de pular loop

	```js
	for(let i = 10; i > 0; --i){
		if(i === 5){
			continue// continuar/ignorar
		}
		console.log(i)
	}

	> 10
    > 9
    > 8
    > 7
    > 6
    > 4
    > 3
    > 2
    > 1
	```
	> `continue` pulou o 5, execução do momento.

- ## While
	- Enquanto.
	- Não sabe quando vai parar.

	```js
	let i = 0
	while(i < 10){
		console.log(i)

		i++
	}

	> 0
    > 1
    > 2
    > 3
    > 4
    > 5
    > 6
    > 7
    > 8
    > 9
	```
	> Enquanto variável condtion execute, variável recebe valor.

	- Exemplo quando usar while.

	```js
	let i = 348936478
	while(i > 10){
		console.log(i)

		i /= 37
	}

	> 348936478
	> 9430715.621621622
	> 254884.20598977356
	> 6888.762324047934
	> 186.18276551480903
	```
	> Quando não sabemos quando vai parar.

# Pratica

- ## Sistema de notas escolares

	```js
		function gradesToLetters(grade){
	    let gradeA = grade >= 90 && grade <= 100
	    let gradeB = grade >= 80 && grade < 90
	    let gradeC = grade >= 70 && grade < 80
	    let gradeD = grade >= 60 && grade < 70
	    let gradeF = grade >= 0 && grade < 60
	
	    let result
	
	    if(gradeA){
	        result = "A"
	    }else if(gradeB){
	        result = "B"
	    }else if(gradeC){
	        result = "C"
	    }else if(gradeD){
	        result = "D"
	    }else if(gradeF){
	        result = "F"
	    }else{
	        result = "Nota inválida"
	    }
	
	    return result
	}
	
		console.log(gradesToLetters(-59))
		
		> Nota inválida
	```

- ## Fluxo de caixa

	```js
	function addReceita(input){
	    empresa.Receitas.push(input)
	}

	function addDespesa(input){
	    empresa.Despesas.push(input)
	}

	function fatura(){
	    let resultReceitas = 0
	    for(let credit of empresa.Receitas){
	        resultReceitas += credit
	    }

	    let resultDespesas = 0
	    for(let credit of empresa.Despesas){
	        resultDespesas += credit
	    }

	    let result 

	    result = resultReceitas - resultDespesas

	    if (result > 0){
	        finalResult = `Seu saldo está positivo ele é de ${result}`
	    }else{
	        finalResult = `Seu saldo está negativo ele é de ${result}`
	    }

	    return finalResult
		}

		let empresa = {
		Receitas : [],
		Despesas : []
		}

		addReceita(9)
		addReceita(872)
		addReceita(2)
		addReceita(217.7)

		addDespesa(29)
		addDespesa(872)
		addDespesa(2)
		addDespesa(217.7)

		console.log(fatura())

		> Seu saldo está negativo ele é de -20

	```

- ## Celsius e Fahrenheit

	```js
		function degreeTransform(degree){
		    const celsiusExist = degree.toUpperCase().includes("C")
		    const fahrenheitExist = degree.toUpperCase().includes("F")

		    let removeIndicator = Array.from(degree)
		    removeIndicator.pop()
		    let realDegree = Number(removeIndicator.join(""))

		    let result = 0

		    if(celsiusExist){
		        result = (realDegree * 9/5 + 32).toFixed(2).replace(".",",") + "ºF"
		    }else if(fahrenheitExist){
		        result = ((realDegree - 32) * 5/9).toFixed(2).replace(".",",") + "ºC"
		    }else{
		        result = "Termometro não informado"
		    }

		    return result
		}

		console.log(degreeTransform("90C"))
		console.log(degreeTransform("194F"))
		console.log(degreeTransform("90X"))

		> '194,00ºF'
		> '90,00ºC'
		> Termometro não informado
	```
	- ### Exemplo Mayk

	```JS
	function transformDegree(degree){
	const celsiusExists = degree.toUpperCase().includes('C')
	const fahrenheitExists = degree.toUpperCase().includes('F')
	if(!celsiusExists && !fahrenheitExists){
	    throw new Error('Grau não indentificado')
	}
	let updateDegree = Number(degree.toUpperCase().replace("F", ""))
	let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
	let degreeSign = 'C'
	if(celsiusExists){
	    updateDegree = Number(degree.toUpperCase().replace("C", ""))
	    formula = celsius => celsius * 9/5 + 32 // um parametro não necessita ()
	    degreeSign = 'F'
	}
	return formula(updateDegree) + degreeSign//argumento 
	//'updateDegree' que vira o parametro'fahrenheit'
	}
	try {
	    console.log(transformDegree("50F"))
	    console.log(transformDegree("50C"))
	    transformDegree("50Z")
	} catch (e) {
	    console.log(e.message) 
	}
	> 10C
	> 122F
	> Grau não indentificado
	```

- ## Buscando e encontrando dados em Array

	```JS
	const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
	    },
	    {
	        category: "Inteligência Emocional",
	        books: [
	            {
	                title: "Você é Insubstituível",
	                author: "Augusto Cury",
	            },
	            {
	                title: "Ansiedade – Como enfrentar o mal do século",
	                author: "Augusto Cury",
	            },
	            {
	                title: "Os 7 hábitos das pessoas altamente eficazes",
	                author: "Stephen R. Covey",
	            },
	        ],
	    },
	];

	function countAuthors() {
	    let authors = [];

	    for(let category of booksByCategory){
			// entra nas categories
	        for(let book of category.books){ 
				// entra nas propriedades das categories
	            if(authors.indexOf(book.author) == -1){// se retornar -1 quer dizer que o 
				//elemento não está 	dentro do array
	                authors.push(book.author);
					// se não estiver dentro do array, coloca o nome do autor lá
	            }
	        }

	    }
	    console.log(`Total de autores ${authors.length}`);
	}

	function authorsBooks(author) {
	    let Author = [];

	    for(let category of booksByCategory){
	        for(let book of category.books){  
	            if(book.author === author){
					// se retornar -1 quer dizer que o elemento não está 
					//dentro do 	array
	                Author.push(book.title);
	            }
	        }
	    }
	    console.log("Os livros do author "+ author+ " são: " + Author.join(", "));
		//.join() add , e espaco 	os livros
	}

	function totalCategories(){
	    console.log(`Total de categorias: ${booksByCategory.length}`)
	
	    for(let categoria of booksByCategory){
	        console.log(`A categoria ${categoria.category}`)
	        console.log(`Tem ${categoria.books.length} livros`)
	   }
	
	}

	totalCategories()
	countAuthors()
	authorsBooks('Augusto Cury')

	> Total de categorias: 2
	> A categoria Riqueza
	> Tem 3 livros
	> A categoria Inteligência Emocional
	> Tem 3 livros
	> Total de autores 5
	> Os livros do author Augusto Cury são: Você é Insubstituível, Ansiedade 
	– Como enfrentar o mal do século
	```
	> Exemplo feito: 90% de Mayk, 10% de mim k