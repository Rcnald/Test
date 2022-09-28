# Web semântica

- Ajuda na acessibilidade
- "Padrozina" o seu site
- Melhorar o entendimento do seu codigo

# Tags

A base do HTML semântico, poís algumas tags tem significado especifico e orientações claras sobre onde as coisa ficam na pagina e o motivo dela existir.

```html
<p>
Nós (programadores) somos pagos para resolver problemas,
não para memorizar soluções.
												 ─ Mayk Brito
</p>
```
> Html padrão

```html

<blockquote> <!-- Bloco de citação -->
Nós (programadores) somos pagos para resolver problemas,
não para memorizar soluções.
												 <cite>─ Mayk Brito</cite><!-- Citou alguem->
</blockquote>

```
> Html semântico

# Seções comuns do HTMl

- `<header>` - cabeçalho
- `<nav>` - navegação
- `<main>` - conteúdo principal
- `<aside>` - barra lateral
- `<footer>` - rodapé

## Header
- Utilizar no início da página(visto como global).
- Utilizar dentro de outros elementos semânticos(visto como local).
- Não pode exister header dentro de header, e header dentro de footer, assim perde-se o seu sentido.
- Multiplos headers.
- Não possiu atributos especificos.

	```html
	<body>
		<header>
			HEADER
		</header>
	</body>
	```
	> `<header>` é **global**, o header é da página.

	```html
	<body>
		<section>
			<header>
				HEADER SECTION
			</header>
		</section>
	</body>
	```
	> `<header>` é **local**, o header é do element.

	```html
	<body>
		<header>
			HEADER
		</header>
		<section>
			<header>
				HEADER SECTION
			</header>
		</section>
	</body>
	```
	> `<header>` existe como header da pagina(global) e header do element(local.) 

## Nav
- Navegação principal, ou seja, ondes os links principais devem estar.
- Links importantes.
- Multiplos navs.
- Não possiu atributos especificos.

	```html
	<body>
		<header>
			<nav>
				NAVIGATION
			</nav>
		</header>
	</body>
	```
	> `<nav>` assim como header, pode ser usada mais de uma vez por pagina, pode ser global ou local.

## Main
- Conteudo principal da página.
- Existe apenas um por página.
- É apenas global.
- Não possiu atributos especificos.

	```html
	<body>
		<main>
			<h1>Receitas</h1>
			<p>fodase as receitas so um exemplo hehe</p>
		</main>
	</body>
	```
	> `<main>` foco da página.

## Article
- Bloco de conteudos que estejam relacionados.
- Não possiu atributos especificos.

	```html
	<body>
		<main>
			<h1>Receitas</h1>
			<p>fodase as receitas so um exemplo hehe</p>

			<article>
				<h1>Receitas de maca</h1>
				p>faca maca</p>
			</article>

			<article>
				<h1>Receitas de banana</h1>
				p>faca banana</p>
			</article>
		</main>
	</body>
	```
	> `<article>` os artigos estãl relacionados, tem a mesma função.

## Aside
- Conteudo levemente relacionado ao conteudo principal.
	- explicações
	- glossários
	- links extras
	- biografia do autor
	- informações de perfil
	- etc.
- **Não é uma side bar.**
- Multiplos asides.
- Fora da tag main.
- Não possiu atributos especificos.

	```html
		<main>
			O MAURICIO é foda
		</main>
		<aside>
			e tambem o mauricio...
		</aside>
	```
	> `<aside>` conteudo complemntar, **funfact**.

##  Footer
- Geralmente no final da página.
	- Info autor, copyright, contato...
- Não possiu atributos especificos.

	```html
		<main>
			O MAURICIO é foda
		</main>
		<aside>
			e tambem o mauricio...
		</aside>
		<footer>
			&copy; mauricio.com para mais info.
		</footer>
	```
	> `<footer>` fim da página.

## Section
- Seção relacionada ao conteudo da página.
- Agrupa elementos semânticos.
- Não possiu atributos especificos.
- Preguiça e não sei dar exemplo.

## Elementos genéricos não semânticos
- Usar atributos como id e class para entregar mais significado.

### Div 
- Usado se não conseguir achar um elemento de **bloco** semântico.

	```html
		<div class="cart">
			<h1>carrinho de compras</h1>
		</div>
	```
	> Não existe uma tag pra carrinho então a `<div>` é usada(genérico), tambem não pode ser `<section> poís não é algo relacionado ao conteudo principal`.

### Span
- Usado se não conseguir achar um elemento de **texto** semântico.

	```html
		<div class="cart">
			<h1>carrinho <span>de</span> compras</h1>
		</div>
	```
	> Uma div para textos.
