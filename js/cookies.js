const btnCookies = document.querySelectorAll(".cookies-button");
const popUp = document.querySelector(".approv");

function setCookie(name, value, days) {
	const date = new Date();
	date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
	const expires = "expires=" + date.toUTCString();
	document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
	const decodedCookies = decodeURIComponent(document.cookie);
	const cookiesArray = decodedCookies.split(";");
	for (let i = 0; i < cookiesArray.length; i++) {
		let cookie = cookiesArray[i];

		while (cookie.charAt(0) === " ") {
			cookie = cookie.substring(1);
		}
		if (cookie.indexOf(name + "=") === 0) {
			return cookie.substring(name.length + 1, cookie.length);
		}
	}
	return "";
}

function checkCookies() {
	const userDataCookie = getCookie("user_data");
	console.log(userDataCookie);
	if (!userDataCookie) {
		document.body.classList.add("lock");
		popUp.classList.add("active");
	} else {
		popUp.remove();
		userDataCookie === "Отказ" ? "" : addMetrica();
	}
}

function addMetrica() {
	const script = document.createElement("script");
	script.type = "module";
	script.src = "js/observer.js";
	document.head.appendChild(script);
}

btnCookies.forEach((button, index) => {
	button.addEventListener("click", () => {
		document.body.classList.remove("lock");
		popUp.classList.remove("active");

		if (index === 1) {
			setCookie("user_data", "Принял", 365);
			addMetrica();
		}
		if (index === 0) {
			setCookie("user_data", "Отказ", 365);
		}
	});
});

const buttons = document.querySelectorAll(".setting__button")[1].children;
const btnAgree = buttons[0];
const btnDisAgree = buttons[1];

btnAgree.addEventListener("click", () => {
	btnAgree.children[0].checked = true;
	btnDisAgree.children[0].checked = false;
});

btnDisAgree.addEventListener("click", () => {
	btnDisAgree.children[0].checked = true;
	btnAgree.children[0].checked = false;
});

document.addEventListener("DOMContentLoaded", checkCookies);
