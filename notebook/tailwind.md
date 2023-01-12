# Instalando

## No terminal 
- npm install -D tailwindcss
  - Instala o tailwind
- npx tailwindcss init
  - Inicializa

## Arquivo CSS

```css
    @tailwind base;

    @tailwind components;

    @tailwind utilities;
```
> inicializar ou informar o que do tailwind será usado.

## Arquivo de configuração 
- no arquivo de configuração

```json
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
- npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch

> -i = input ,o 1 style.css é o arquivo de referência.

> -o = output , vulgo aonde sera criado o arquivo.

# Instalando liveserver no arquivo
- npm install -g live-server

# linkando com o arquivo
- live-server src/

> src/ = pasta que será utilizado o live server.

# Extensão VS tailwind
- Tailwind CSS IntelliSense

# Responsivo - mobile first
- Todas as classe podem ser aplicadas a um determinado **breakpoint**.
- Os por padrão do framework são:`sm, md, lg e xl`.
- *Não* utilizaremos breakpoint para atingir o mobile.

# Criando components
- ```css
  @layer components{

  }
  ```

  > basicamente tudo que estiver ai dentro será adicionado como component quando o output for buildado.
- Em seguido coloca-se o nome do seu component.
  ```css
  @layer components{
    .btn-blue{
      
    }
  }
  ```
- E com o `@apply`, podemos usar as classes do tailwind para "estilizar" nosso componente.
  ```css
  @layer components{
    .btn-blue{
      @apply bg-blue-500 text-white font-bold py-2 px-4 rounded;
    }
  }
  ```
- Importande dizer que tem que fragmentar o hover nessa parte.
  ```css
  @layer components{
    .btn-blue{
        @apply bg-blue-500 text-white font-bold py-2 px-4 rounded;
    }

    .btn-blue:hover{
        @apply bg-blue-700;
    }
  }
  ```

