let canvas = document.getElementsByClassName("rain")[0];

let c = canvas.getContext("2d");

const faq = document.querySelector(".faq");
const footer = document.querySelector(".footer");

console.log(faq.clientTop);

canvas.width = window.innerWidth;
canvas.height = footer.offsetTop - faq.offsetTop;

const img = new Image();

img.src = "./assets/pads-gum 1.png";

function randomNum(max, min) {
	return Math.floor(Math.random() * max) + min;
}

function RainDrops(x, y, endy, velocity, degree) {
	this.x = x;
	this.y = y;
	this.endy = endy;
	this.velocity = velocity;
	this.deg = degree;
	this.width = innerWidth / 22 + 30;
	this.height = innerWidth / 22 + 30;

	this.draw = function () {
		c.beginPath();

		c.translate(this.x + img.width / 2, this.y + img.height / 2);

		c.rotate((Math.PI / 180) * this.deg);

		c.drawImage(img, -img.width / 2, -img.height / 2, this.width, this.height);

		c.rotate(-(Math.PI / 180) * this.deg);

		c.translate(-(this.x + img.width / 2), -(this.y + img.height / 2));
	};

	this.update = function (num) {
		let rainEnd = window.innerHeight + 100;
		if (this.y >= rainEnd) {
			createUnicRain(num);
		} else {
			this.y = this.y + this.velocity;
		}
		this.draw();
	};
}

let rainArray = new Array(15);

for (let i = 0; i < rainArray.length; i++) {
	createUnicRain(i);
}

function createUnicRain(el) {
	let rainXLocation = Math.floor(Math.random() * window.innerWidth) + 1;
	let rainYLocation = Math.random() * -500;
	let randomRainHeight = randomNum(10, 2);
	let randomSpeed = randomNum(15, 5.2);
	let randomDegree = Math.random() * 360;
	rainArray[el] = new RainDrops(
		rainXLocation,
		rainYLocation,
		randomRainHeight,
		randomSpeed,
		randomDegree
	);
}

function animateRain() {
	requestAnimationFrame(animateRain);
	c.clearRect(0, 0, canvas.width, canvas.height);

	for (let i = 0; i < rainArray.length; i++) {
		rainArray[i].update(i);
	}
}

animateRain();

window.addEventListener("resize", () => {
	canvas.width = window.innerWidth;
	canvas.height = footer.offsetTop - faq.offsetTop;
});
