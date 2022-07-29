const advice = document.querySelector('.advice')
const btn = document.querySelector('.card-circle')
const id = document.querySelector('.advice-id')

const URL = 'https://api.adviceslip.com/advice'

btn.addEventListener('click', () => {
	console.log('ok')
	fetch(URL)
		.then(res => res.json())
		.then(data => advice.innerHTML = data.slip.advice, {(data => id.innerHTML = data.slip.id)})
		.catch(error => console.log(error))
})

