const headerBtn = document.querySelector(".header");

const handleChange = () => {
	if (window.scrollY > 50) {
		headerBtn.classList.add("isRed");
	} else {
		headerBtn.classList.remove("isRed");
	}
};

window.addEventListener("scroll", handleChange);
