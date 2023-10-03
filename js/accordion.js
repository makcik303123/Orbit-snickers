import "https://unpkg.com/accordion-js@3.3.4/dist/accordion.min.js";

// User options
const accordion = new Accordion(".accordion-container", {
	duration: 400,
	showMultiple: false,
	onOpen: function (currentElement) {},
});

accordion.open(0);
