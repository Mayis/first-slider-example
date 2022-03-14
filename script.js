let cont = document.getElementsByClassName("slider-wrapper");
let slider = document.getElementsByClassName("slide");
let btnN = document.querySelector("#btn-next");
let btnP = document.querySelector("#btn-prev");
let dots = document.getElementsByClassName("dots");
let index = 0;

btnN.addEventListener("click", function () {
	nextSlide("next");
});
btnP.addEventListener("click", function () {
	nextSlide("prev");
});

function nextSlide(n) {
	if (n == "next") {
		index++;
		if (index == slider.length) {
			index = 0;
		}
	} else {
		if (index == 0) {
			index = slider.length - 1;
		} else {
			index--;
		}
	}

	for (let i = 0; i < slider.length; i++) {
		slider[i].classList.remove("active");
		dots[i].classList.remove("active");
	}
	slider[index].classList.add("active");
	dots[index].classList.add("active");
}
let dots1 = dots[0];
let dots2 = dots[1];
let dots3 = dots[2];

dots1.onclick = function () {
	slider[0].classList.add("active");
	slider[1].classList.remove("active");
	slider[2].classList.remove("active");
	dots[0].classList.add("active");
	dots[1].classList.remove("active");
	dots[2].classList.remove("active");
};
dots2.onclick = function () {
	slider[0].classList.remove("active");
	slider[1].classList.add("active");
	slider[2].classList.remove("active");
	dots[0].classList.remove("active");
	dots[1].classList.add("active");
	dots[2].classList.remove("active");
};
dots3.onclick = function () {
	slider[0].classList.remove("active");
	slider[1].classList.remove("active");
	slider[2].classList.add("active");
	dots[0].classList.remove("active");
	dots[1].classList.remove("active");
	dots[2].classList.add("active");
};
