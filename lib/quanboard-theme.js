// DARK MODE ON OFF

const themeSwitch = document.getElementById('themeSwitch');
const htmlElement = document.documentElement;
const logo = document.getElementById("logo");
		
if (localStorage.getItem('theme') === 'dark') {
    htmlElement.setAttribute('data-bs-theme', 'dark');
	themeSwitch.checked = true;
}
		
themeSwitch.addEventListener('change', () => {
if (themeSwitch.checked) {
	htmlElement.setAttribute('data-bs-theme', 'dark');
	localStorage.setItem('theme', 'dark');
	logo.src = "assets/quanboardLogo.png";
    logo.style = "opacity: 0.5";
					
	} else {
	htmlElement.setAttribute('data-bs-theme', 'light');
	localStorage.setItem('theme', 'light');
	logo.src = "assets/quanboardLogoBlack.png" ;
    logo.style = "opacity: 0.7";
	}
});


const dropdownElementList = document.querySelectorAll('.dropdown-toggle')
const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new bootstrap.Dropdown(dropdownToggleEl))