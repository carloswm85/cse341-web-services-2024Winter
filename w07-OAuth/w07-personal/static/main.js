const URL_PARAMS = new URLSearchParams(window.location.search);
const TOKEN = URL_PARAMS.get("token");

// Show an element
const show = (selector) => {
	document.querySelector(selector).style.display = "block";
	document.querySelector(selector).style.height = "65%";
};

// Hide an element
const hide = (selector) => {
	document.querySelector(selector).style.display = "none";
};

if (TOKEN) {
	hide(".content.unauthorized");
	show(".content.authorized");
}
