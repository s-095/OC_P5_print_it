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

let slideIndex = 0

function updateSlide() {
	slideImage.src = slides[slideIndex].image
	slideTagline.innerHTML = slides[slideIndex].tagLine
	updateDots();
}

function slidesEvent() {
	arrowLeft.addEventListener("click", () => {
		if (slideIndex === 0) {
			slideIndex = slides.length - 1
		} else {
			slideIndex--
		}
		updateSlide()
		console.log("clic flèche gauche!")
	})

	arrowRight.addEventListener("click", () => {
		if (slideIndex === slides.length - 1) {
			slideIndex = 0
		} else {
			slideIndex++
		}
		updateSlide()
		console.log("clic flèche droite!")
	})
	for (let dotIndex = 0; dotIndex < dots.length; dotIndex++) {
		dots[dotIndex].addEventListener("click", () => {
			slideIndex = dotIndex
			updateSlide()
			console.log("clic bullet point!")
		})
	}
}

function updateDots() {
	for (dotIndex = 0; dotIndex < dots.length; dotIndex++) {
		if (dotIndex === slideIndex) {
			dots[dotIndex].classList.add("dot_selected");
		} else {
			dots[dotIndex].classList.remove("dot_selected");
		}
	}
}

slidesEvent()
updateSlide()
