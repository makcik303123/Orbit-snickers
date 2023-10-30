import { setCookie } from "./setCookie.js";

const radioButton = document.querySelectorAll(".active-input");
const btnSubmt = document.querySelector(".btn-success");

let value = true;

function handlerSumbit() {
	setCookie("coockies-setting", value, 365);

	btnSubmt.disabled = true;
	btnSubmt.classList.add("disabled");

	setTimeout(() => {
		btnSubmt.disabled = false;
		btnSubmt.classList.remove("disabled");
	}, 2000);
}

function onClickRadioButton() {
	radioButton.forEach((btn) => (btn.querySelector("input").checked = false));

	const input = this.querySelector("input");
	input.checked = true;
	value = input.id === "agree";
}

btnSubmt.addEventListener("click", handlerSumbit);

radioButton.forEach((btn) => btn.addEventListener("click", onClickRadioButton));
