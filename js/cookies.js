import { setCookie } from "./setCookie.js";

const btnCookies = document.querySelectorAll(".cookies-button");
const popUp = document.querySelector(".approv");

console.log(btnCookies);

function getCookie(name) {
	const decodedCookies = decodeURIComponent(document.cookie);
	let value = false;

	const cookiesArray = decodedCookies.split(";");
	cookiesArray.forEach((cookie) => {
		cookie = cookie.split("");

		while (cookie[0] === " ") {
			cookie.shift();
		}

		cookie = cookie.join("");

		if (cookie.indexOf(name + "=") === 0) {
			value = cookie.slice(name.length + 1, cookie.length);
		}
	});

	return value;
}

function checkCookies() {
	const userDataCookie = JSON.parse(getCookie("coockies-setting"));

	if (!userDataCookie) {
		document.body.classList.add("lock");
		popUp.classList.add("active");
	} else {
		popUp.remove();
		userDataCookie ? addMetrica() : "";
	}
}

function addMetrica() {
	const script = document.createElement("script");
	script.type = "module";
	script.src = "js/observer.js";
	document.head.appendChild(script);
}

function confirmAnswer(index) {
	document.body.classList.remove("lock");
	popUp.classList.remove("active");

	if (index === 1) {
		setCookie("coockies-setting", true, 365);
		addMetrica();
	}
	if (index === 0) {
		setCookie("coockies-setting", false, 365);
	}
}

btnCookies.forEach((button, index) =>
	button.addEventListener("click", () => confirmAnswer(index))
);

document.addEventListener("DOMContentLoaded", checkCookies);
