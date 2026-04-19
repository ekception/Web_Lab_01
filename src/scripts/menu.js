const header = document.querySelector("header");
const visual_id = document.querySelector("header .visual-id");
const btn_menu = document.querySelector("header .btn-menu");
const menu = document.querySelector("header .menu");
const header_cta = document.querySelector("header .cta");
const overlay = document.querySelector("#overlay");

function toggleMenu() {
	menu.classList.toggle("open");
	btn_menu.classList.toggle("active");
	overlay.classList.toggle("visible");
	
	if (menu.classList.contains("open")) {
		// When opening menu
		menu.appendChild(header_cta);
	} else {
		// When closing menu
		header.appendChild(header_cta);
	}
}

btn_menu.addEventListener("click", (e) => {
	toggleMenu();
});

overlay.addEventListener("click", (e) => {
	toggleMenu();
});

visual_id.addEventListener("click", (e) => {
	window.location.href = "index.html"
})
