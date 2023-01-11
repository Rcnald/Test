# Instalando

## No terminal 
- npm install -D tailwindcss
    - Instala o tailwind

## Arquivo CSS

```css
    @tailwind base;

    @tailwind components;

    @tailwind utilities;
```
> inicializar ou informar o que do tailwind será usado.

## Arquivo de configuração 
- no arquivo de configuração

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

> Você modifica o "content" e insere o arquivo que vai ultilizar as classes do tailwind.

> no terminal

> Customização

## Construir o arquivo do tailwind com base no "Arquivo CSS"
- npx tailwindcss -i style.css -o ./src/styles/style.css --watch

> -i = input ,o 1 style.css é o arquivo de referência.

> -o = output , vulgo aonde sera criado o arquivo.