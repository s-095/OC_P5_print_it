const slides = [
	{
		"image": "./assets/images/slideshow/slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "./assets/images/slideshow/slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "./assets/images/slideshow/slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "./assets/images/slideshow/slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const slideImage = document.querySelector(".banner-img")
const slideTagline = document.querySelector("#banner p")
const arrowLeft = document.querySelector(".arrow_left")
const arrowRight = document.querySelector(".arrow_right")
const dots = document.querySelectorAll(".dot")

let i = 0

function updateSlide() {
	slideImage.src = slides[i].image
	slideTagline.innerHTML = slides[i].tagLine
	updateDots();
}

function slidesEvent() {
	arrowLeft.addEventListener("click", () => {
		if (i === 0) {
			i = slides.length - 1
		} else {
			i--
		}
		updateSlide()
		console.log("clic flèche gauche!")
	})

	arrowRight.addEventListener("click", () => {
		if (i === slides.length - 1) {
			i = 0
		} else {
			i++
		}
		updateSlide()
		console.log("clic flèche droite!")
	})
	for (let dotNumber = 0; dotNumber < dots.length; dotNumber++) {
		dots[dotNumber].addEventListener("click", () => {
			i = dotNumber
			updateSlide()
			console.log("clic bullet point!")
		})
	}
}

function updateDots() {
	for (dotNumber = 0; dotNumber < dots.length; dotNumber++) {
		if (dotNumber === i) {
			dots[dotNumber].classList.add("dot_selected");
		} else {
			dots[dotNumber].classList.remove("dot_selected");
		}
	}
}

slidesEvent()
updateSlide()
