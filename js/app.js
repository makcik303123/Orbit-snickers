import "https://cdn.jsdelivr.net/npm/simplebar@latest/dist/simplebar.min.js";

const steps = document.querySelectorAll(".step__wrapper");
const containerSteps = document.querySelector(".steps");

steps.forEach((step) => step.addEventListener("mouseover", mouseHover));

function mouseHover() {
	containerSteps.style.height = containerSteps.offsetHeight + "px";
	steps.forEach((el) => el.classList.remove("flex"));
	this.classList.add("flex");
}

window.addEventListener("resize", () => {
	containerSteps.style.height = "auto";
});
