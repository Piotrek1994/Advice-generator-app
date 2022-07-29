const advice = document.querySelector('.advice')
const btn = document.querySelector('.card-circle')

const URL = 'https://api.adviceslip.com/advice'

btn.addEventListener('click', () => {
	console.log('ok')
	fetch(URL)
		.then(res => res.json())
		.then(data => advice.innerHTML = data.slip.advice)
		.catch(error => console.log(error))
})

