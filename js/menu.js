const burger = document.getElementById("wrapper__icon");
const menu = document.querySelector(".menu__body");

burger.addEventListener("click", handleToggle);

function handleToggle() {
	menu.classList.toggle("active");
	burger.classList.toggle("active");
	document.body.classList.toggle("lock");
}

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
	anchor.addEventListener("click", function (e) {
		const userWidth = window.innerWidth;
		e.preventDefault();

		menu.classList.remove("active");
		burger.classList.remove("active");
		document.body.classList.remove("lock");

		const blockID = anchor.getAttribute("href").slice(1);
		let block;

		if (userWidth >= 768) {
			block = blockID === "prizes" ? "start" : "center";
		} else {
			block = blockID === "prizes" ? "center" : "start";
		}

		document.getElementById(blockID).scrollIntoView({
			behavior: "smooth",
			block,
		});
	});
}
