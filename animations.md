# Transitions

## transition-property
- indidica me qual propriedade a transição vai funcionar.

```css
transition-property: background-color, border-radius;
```

## transition-duration
- Dita a duração da transição.

```css
transition-duration: 2s, 1s;
```
> separados por virgula respectivamente indiciados as propriedades indicadas.

## transition-delay
- Dita quanto tempo é necessario para a transição iniciar-se.

```css
transition-delay: 1s;
```

## transition-timing-function
- função de estilo de visualização de determinados valores intermediarios?
    - ease
    - ease-in
    - MDN

### cubic-bezeir()
- transition-timing-function custom.

[easing](https://easings.net)

[cubic-bezeir.com](https:   //cubic-bezier.com/#.17,.67,.83,.67)


# Animations

[animista](https://animista.net)

## @keyframes
- Determina passos a serem seguidos em uma sequencia.

```css
@keyframes keyframe{
    0% {
        scale:1.1;
    }

    50%{
        scale:2.1;
    }

    100%{
        scale:3.1;
    }
}
```
> o 0% pode ser substituido para `from`.
> o 100% pode ser substituido para `to`.

```css
@keyframes keyframe{
    from {
        scale:1.1;
    }

    50%{
        scale:2.1;
    }

    to{
        scale:3.1;
    }
}
```

## animation

### animation-name
- o nome dado ao @keyframes

```css
h1{
    animation-name: keyframe;
}
```

### animation-duration
- a duração da animação

```css
h1{
    animation-duration: 2s;
}
```

### animation-timing-function
- função de estilo de visualização de determinados valores intermediarios?
    - ease
    - ease-in
    - MDN

```css
h1{
    animation-timing-function: ease;
}
```

### animation-delay
- a intervalo de tempo para a animação ser inciada.

```css
h1{
    animation-delay: 300ms;
}
```

### animation-iteration-count
- quantas vezes a animação dever ser repetido antes de parar

```css
h1{
    animation-iteration-count: 3.2;
    animation-iteration-count: infinite;
    animation-iteration-count: 2;
}
```

### animation-direction
- direção da animação

```css
h1{
    animation-direction: reverse;
    animation-direction: alternate;
    animation-direction: alternate-reverse;
}
```

### animation-fill-mode
- quais valorem sao aplicados antes ou/e depois da animacao.
    - forwards
        O ultimo estado da animação deve ser mantido.
    - backwards
        O estado inicial da animação deve ser mantido.
    - both
        O ultimo estado da animação deve ser mantido, mas o estado inicial permanece inalterado caso se repita a animação.

```css
h1{
    animation-fill-mode: forwards;
    animation-fill-mode: backwards;
    animation-fill-mode: both;
}
```

```css
h1{
    animation-delay: 300ms;
}
```

### animation-play-state
- define se a animação esta sendo executada ou pausada.

```css
h1{
    animation-play-state: running;
    animation-play-state: paused;
}
```
> hover?

## shorthand

```css
h1{
    animation: name duration timing-function delay iteration-count direction fill-mode play-state   
}
```
