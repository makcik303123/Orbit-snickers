import { setCookie } from "./cookies.js";

const btnsControl = document.querySelectorAll(".setting__button")[1].children;
const btnSubmt = document.querySelector(".btn-success");
const btnAgree = btnsControl[0];
const btnDisAgree = btnsControl[1];

btnSubmt.addEventListener("click", () => {
	const market = btnAgree.children[0].checked;
	setCookie("coockies-setting", market, 365);
	btnSubmt.disabled = true;
	btnSubmt.classList.add("disabled");
	setTimeout(() => {
		btnSubmt.disabled = false;
		btnSubmt.classList.remove("disabled");
	}, 2000);
});

btnAgree.addEventListener("click", () => {
	btnAgree.children[0].checked = true;
	btnDisAgree.children[0].checked = false;
});

btnDisAgree.addEventListener("click", () => {
	btnDisAgree.children[0].checked = true;
	btnAgree.children[0].checked = false;
});
