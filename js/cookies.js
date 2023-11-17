import { setCookie } from "./setCookie.js";

const btnCookies = document.querySelectorAll(".cookies-button");
const popUp = document.querySelector(".approv");

function getCookie(name) {
	const decodedCookies = decodeURIComponent(document.cookie);
	let value = undefined;

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
	const userDataCookie = getCookie("coockies-setting");

	if (!userDataCookie) {
		document.body.classList.add("lock");
		popUp.classList.add("active");
	} else {
		popUp.remove();
		userDataCookie === "true" ? addMetrica() : "";
	}
}

function addMetrica() {
	const script = document.createElement("script");
	script.type = "text/javascript";
	script.async = true;
	script.innerHTML = `
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(95445044, "init", {
      clickmap:true,
      trackLinks:true,
      accurateTrackBounce:true,
      webvisor:true
    });
  `;
	document.head.appendChild(script);

	const noscript = document.createElement("noscript");
	noscript.innerHTML = `<div><img src="https://mc.yandex.ru/watch/95445044" style="position:absolute; left:-9999px;" alt="" /></div>`;
	document.head.appendChild(noscript);
}

function confirmAnswer(index) {
	document.body.classList.remove("lock");
	popUp.classList.remove("active");

	if (index === 2) {
		setCookie("coockies-setting", true, 365);
		addMetrica();
	}
	if (index === 1) {
		setCookie("coockies-setting", false, 365);
	}
}

btnCookies.forEach((button, index) =>
	button.addEventListener("click", () => confirmAnswer(index))
);

document.addEventListener("DOMContentLoaded", checkCookies);
