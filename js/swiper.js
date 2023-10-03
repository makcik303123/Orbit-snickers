import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs";

const swiper = new Swiper(".swiper", {
	// Optional parameters
	direction: "horizontal",
	// loop: true,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},

	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});
