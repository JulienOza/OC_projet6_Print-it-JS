const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let indexSlide = 0

document.querySelector(".arrow_left").addEventListener("click", function() {
	if (indexSlide === 0) {
		indexSlide = slides.length - 1
	} else {
		indexSlide--
	}
	updateSlide()
})

document.querySelector(".arrow_right").addEventListener("click", function() {
	if (indexSlide === slides.length - 1) {
		indexSlide = 0
	} else {
		indexSlide++
	}
	updateSlide()
})

function updateSlide() {
	document.querySelector(".banner-img").src = `assets/images/slideshow/${slides[indexSlide].image}`
	document.querySelector("#banner p").innerHTML = slides[indexSlide].tagLine
	updateDots()
}

function displayDots() {
}

function updateDots() {
	const dots = document.querySelectorAll(".dot")
	dots.forEach(function(dot) {
		dot.classList.remove("dot_selected")
	})
	dots[indexSlide].classList.add("dot_selected")
}

updateSlide()
