const element = document.querySelector('h1')

	console.log(element.getAttribute('class'))

	element.classList.toggle('red')

	console.log(element.getAttribute('class'))