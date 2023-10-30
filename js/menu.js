const burger = document.getElementById("wrapper__icon");
const menu = document.querySelector(".menu__body");

burger.addEventListener("click", handlerToggle);

function handlerToggle() {
	menu.classList.toggle("active");
	burger.classList.toggle("active");
	document.body.classList.toggle("lock");
}

const anchors = document.querySelectorAll(".anchors");

for (let anchor of anchors) {
	anchor.addEventListener("click", function (e) {
		const isDesktop = window.innerWidth > 768;
		e.preventDefault();

		menu.classList.remove("active");
		burger.classList.remove("active");
		document.body.classList.remove("lock");

		const blockID = anchor.getAttribute("href").slice(1);
		let block;

		if (isDesktop) {
			block = "center";
		} else {
			block = blockID === "prizes" ? "center" : "start";
		}

		document.getElementById(blockID).scrollIntoView({
			behavior: "smooth",
			block,
		});
	});
}
