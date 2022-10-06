const pages = document.querySelectorAll(`.page`)
const steps = document.querySelectorAll(`.step`)
const leftBtn = document.querySelector(`.left-btn`)
const rightBtn = document.querySelector(`.right-btn`)
const progressBar = document.querySelector(`.progress-bar`)
let currentStep = 1

const nextStep = () => {
	currentStep++
	if (currentStep >= steps.length) {
		currentStep = steps.length
		rightBtn.disabled = true
	}
	leftBtn.disabled = false
	handleProgressBar()
}

const prevStep = () => {
	currentStep--
	if (currentStep <= 1) {
		currentStep = 1
		leftBtn.disabled = true
	}
	rightBtn.disabled = false
	handleProgressBar()
}

const handleProgressBar = () => {
	steps.forEach((step, index) => {
		if (index < currentStep) {
			step.classList.add(`active-step`)
		} else {
			step.classList.remove(`active-step`)
		}
	})
	const activeSteps = document.querySelectorAll(`.active-step`)
	progressBar.style.width = ((activeSteps.length - 1) / (steps.length - 1)) * 100 + '%'
	handleFormPage()
}
const handleFormPage = () => {
	pages.forEach(page => {
		if (page.dataset.number == currentStep) {
			page.classList.add(`active-page`)
		} else {
			page.classList.remove(`active-page`)
		}
	})
}

leftBtn.addEventListener(`click`, prevStep)
rightBtn.addEventListener(`click`, nextStep)
