const button = document.querySelector('#openModal')

const screen = document.querySelector('#nb')

button.addEventListener('click', removeInvisible)

document.onkeydown = function(event){
    if(event.key === 'Escape'){
        addInvisible()
    }
}

function removeInvisible(){
    screen.classList.remove('invisible')
}

function addInvisible(){
    screen.classList.add('invisible')
}