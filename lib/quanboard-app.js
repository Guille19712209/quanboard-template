// Cytoescape

    document.addEventListener("DOMContentLoaded", function() {
        var cy = cytoscape({
            container: document.getElementById("cy"),
            elements: [
                { data: { id: "a" } },
                { data: { id: "b" } },
                { data: { id: "c" } },
                { data: { id: "d" } },
                { data: { id: "e" } },
                { data: { source: "a", target: "b" } },
                { data: { source: "a", target: "c" } },
                { data: { source: "b", target: "d" } },
                { data: { source: "c", target: "e" } }
            ],
            style: [
                {
                    selector: "node",
                    style: {
                        "background-color": "#007bff",
                        "label": "data(id)",
                        "color": "#fff",
                        "text-valign": "center",
                        "text-halign": "center"
                    }
                },
                {
                    selector: "edge",
                    style: {
                        "width": 2,
                        "line-color": "#888",
                        "target-arrow-color": "#888",
                        "target-arrow-shape": "triangle"
                    }
                }
            ],
            layout: {
                name: "cose"
            }
        });
    });


    // DARK MODE ON OFF

const themeSwitch = document.getElementById('themeSwitch');
const htmlElement = document.documentElement;
const logo = document.getElementById("logo");
		

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
    logo.style = "opacity: 0.5";
	}
});


const dropdownElementList = document.querySelectorAll('.dropdown-toggle')
const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new bootstrap.Dropdown(dropdownToggleEl))

 // Simulación de progreso dinámico
 let progress = 0;
 function updateProgress() {
     progress += 10;
     if (progress > 100) progress = 0;

     document.getElementById("progress-bar").style.width = progress + "%";
     document.getElementById("progress-dot").style.left = `calc(${progress}% - 7px)`;
 }