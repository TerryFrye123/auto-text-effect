const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'We Love Programming!'
let index = 1
let speed = 300 / speedEl.value

const writeText = () => {
	textEl.innerText = text.substring(0, index)

	if (index === text.length) {
		index = 1
	} else {
		index++
	}

	console.log(index, speed)

	setTimeout(writeText, speed)
}

writeText()

speedEl.addEventListener('input', (e) => (speed = 300 / e.target.value))
