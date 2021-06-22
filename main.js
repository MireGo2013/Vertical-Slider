const controls = document.querySelector('.controls')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const container = document.querySelector('.container')
const slidesCount = mainSlide.querySelectorAll('div').length
let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

controls.addEventListener('click', changeSlideMouse)
document.body.addEventListener('keydown', changeSlideKeyboard)

function changeSlideMouse(e) {
	if (e.target.classList.contains('up-button')) {
		changeSlide('up')
	} else if (e.target.classList.contains('down-button')) {
		changeSlide('down')
	}
}

function changeSlideKeyboard(e) {
	if (e.key === 'ArrowUp') {
		changeSlide('up')
	} else if (e.key === 'ArrowDown') {
		changeSlide('down')
	}

}

function changeSlide(direction) {
	if (direction === 'up') {
		activeSlideIndex++
		if (activeSlideIndex === slidesCount) {
			activeSlideIndex = 0
		}
	} else if (direction === 'down') {
		activeSlideIndex--
		if (activeSlideIndex < 0) {
			activeSlideIndex = slidesCount - 1
		}
	}
	const height = container.clientHeight
	mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
	sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}
