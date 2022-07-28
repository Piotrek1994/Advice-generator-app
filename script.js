fetch('https://api.adviceslip.com/advice')
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.log('EROR!!!!'))