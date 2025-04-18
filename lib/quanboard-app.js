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

const themeSwitch = document.getElementById('b-darkMode');
const htmlElement = document.documentElement;
const logo = document.getElementById("logo");
		


themeSwitch.addEventListener('change', () => {
if (themeSwitch.checked) {
	htmlElement.setAttribute('data-bs-theme', 'dark');
	localStorage.setItem('theme', 'dark');				
	} else {
	htmlElement.setAttribute('data-bs-theme', 'light');
	localStorage.setItem('theme', 'light');
	}
}); 

// OPEN FILES ALBUM

  
  

 


//

const modelfiles1 = [
    { model:"Model name A", imagen: 'assets/greenboard.png', version: '1.2', user1: 'Guille', date1:'21/06/93',user2: 'Guille', date2: '16/12/72' },
    { model:"Model name B", imagen: 'assets/blackboard.png', version: '1.2', user1: 'Maxi', date1:'21/06/93',user2: 'Mia', date2: '16/12/72' },
    { model:"Model name C", imagen: 'assets/greenboard.png', version: '1.2', user1: 'Guille', date1:'21/06/93',user2: 'Guille', date2: '16/12/72' },
    { model:"Model name A", imagen: 'assets/greenboard.png', version: '1.2', user1: 'Guille', date1:'21/06/93',user2: 'Guille', date2: '16/12/72' },
    { model:"Model name XX", imagen: 'assets/blackboard.png', version: '1.2', user1: 'Maxi', date1:'21/06/93',user2: 'Mia', date2: '16/12/72' },
    { model:"Model name A", imagen: 'assets/blackboard.png', version: '1.2', user1: 'Maxi', date1:'21/06/93',user2: 'Mia', date2: '16/12/72' },
    { model:"Model name YY", imagen: 'assets/greenboard.png', version: '1.2', user1: 'Guille', date1:'21/06/93',user2: 'Guille', date2: '16/12/72' },
    { model:"Model name A", imagen: 'assets/blackboard.png', version: '1.2', user1: 'Maxi', date1:'21/06/93',user2: 'Mia', date2: '16/12/72' }, 
    { model:"Model name A", imagen: 'assets/greenboard.png', version: '1.2', user1: 'Guille', date1:'21/06/93',user2: 'Guille', date2: '16/12/72' },
    { model:"Model name B", imagen: 'assets/blackboard.png', version: '1.2', user1: 'Maxi', date1:'21/06/93',user2: 'Mia', date2: '16/12/72' },
    { model:"Model name C", imagen: 'assets/greenboard.png', version: '1.2', user1: 'Guille', date1:'21/06/93',user2: 'Guille', date2: '16/12/72' },
    { model:"Model name A", imagen: 'assets/greenboard.png', version: '1.2', user1: 'Guille', date1:'21/06/93',user2: 'Guille', date2: '16/12/72' },
    { model:"Model name XX", imagen: 'assets/blackboard.png', version: '1.2', user1: 'Maxi', date1:'21/06/93',user2: 'Mia', date2: '16/12/72' },
    { model:"Model name A", imagen: 'assets/blackboard.png', version: '1.2', user1: 'Maxi', date1:'21/06/93',user2: 'Mia', date2: '16/12/72' },
    { model:"Model name YY", imagen: 'assets/greenboard.png', version: '1.2', user1: 'Guille', date1:'21/06/93',user2: 'Guille', date2: '16/12/72' },
    { model:"Model name A", imagen: 'assets/blackboard.png', version: '1.2', user1: 'Maxi', date1:'21/06/93',user2: 'Mia', date2: '16/12/72' }, 
  
  ]; 


  const modelfiles2 = [
    { model:"Model name A", imagen: 'assets/greenboard.png', version: '1.2', user1: 'Guille', date1:'21/06/93',user2: 'Guille', date2: '16/12/72' },
    { model:"Model name B", imagen: 'assets/blackboard.png', version: '1.2', user1: 'Maxi', date1:'21/06/93',user2: 'Mia', date2: '16/12/72' },
    { model:"Model name C", imagen: 'assets/greenboard.png', version: '1.2', user1: 'Guille', date1:'21/06/93',user2: 'Guille', date2: '16/12/72' },
    { model:"Model name A", imagen: 'assets/greenboard.png', version: '1.2', user1: 'Guille', date1:'21/06/93',user2: 'Guille', date2: '16/12/72' },
    { model:"Model name XX", imagen: 'assets/blackboard.png', version: '1.2', user1: 'Maxi', date1:'21/06/93',user2: 'Mia', date2: '16/12/72' },
    { model:"Model name A", imagen: 'assets/blackboard.png', version: '1.2', user1: 'Maxi', date1:'21/06/93',user2: 'Mia', date2: '16/12/72' },
   
  
  ]; 


  const modelfiles3 = [
    { model:"Model name A", imagen: 'assets/greenboard.png', version: '1.2', user1: 'Guille', date1:'21/06/93',user2: 'Guille', date2: '16/12/72',price:'FREE', button:'Open' },
    { model:"Model name B", imagen: 'assets/blackboard.png', version: '1.2', user1: 'Maxi', date1:'21/06/93',user2: 'Mia', date2: '16/12/72',price:'FREE', button:'Open'},
    { model:"Model name C", imagen: 'assets/greenboard.png', version: '1.2', user1: 'Guille', date1:'21/06/93',user2: 'Guille', date2: '16/12/72',price:'$12' , button:'Buy!'},
    { model:"Model name A", imagen: 'assets/greenboard.png', version: '1.2', user1: 'Guille', date1:'21/06/93',user2: 'Guille', date2: '16/12/72',price:'FREE' , button:'Open'},
    { model:"Model name XX", imagen: 'assets/blackboard.png', version: '1.2', user1: 'Maxi', date1:'21/06/93',user2: 'Mia', date2: '16/12/72',price:'$8' , button:'Buy!'},
    { model:"Model name A", imagen: 'assets/blackboard.png', version: '1.2', user1: 'Maxi', date1:'21/06/93',user2: 'Mia', date2: '16/12/72',price:'$32' , button:'Buy!'},
    { model:"Model name YY", imagen: 'assets/greenboard.png', version: '1.2', user1: 'Guille', date1:'21/06/93',user2: 'Guille', date2: '16/12/72',price:'FREE', button:'Open'},
    
  
  ]; 


const album1 = document.getElementById('open-models');

  modelfiles1.forEach(t => {
    album1.innerHTML += `
    
    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-3">
        <div class="card shadow-sm m-2 bg-gray">
            <img class="bd-placeholder-img card-img-top" width="100%" height="140" src="${t.imagen}" role="img"></img>  
            <div class="card-body">
                <div class="row m-0 p-0">
                    <div class="col-10 m-0">
                        <p class="fs-6 fw-bold">${t.model}</p>
                    </div>     
                </div>
                <div class="row m-0 p-0">
                    <div class="col-4 ms-0">
                        <p class="fs-7">Version:</p>
                    </div>
                    <div class="col m-0">
                        <p class="fs-7">${t.version}</p>
                    </div>
                </div>
                <div class="row m-0 p-0">
                    <div class="col-4 m-0">
                        <p class="fs-7">Created:</p>
                    </div>
                    <div class="col">
                        <p class="fs-7">${t.user1}</p>
                    </div>
                    <div class="col">
                    <p class="fs-7">${t.date1}</p>
                </div>
                </div>
                <div class="row m-0 p-0">
                <div class="col-4 m-0">
                    <p class="fs-7">Modified:</p>
                </div>
                <div class="col">
                    <p class="fs-7 ">${t.user2}</p>
                </div>
                <div class="col">
                    <p class="fs-7">${t.date2}</p>
                </div>
            </div>
            <hr>
            <div class="d-flex flex-wrap gap-1 mt-2">
                <span class="badge bg-secondary fw-light">Business Model</span>
                <span class="badge bg-secondary fw-light">Plan</span>
                <span class="badge bg-secondary fw-light">3 impact</span>
            </div>
            <hr>
            <div class="row m-0 p-0">
                <div class="col-6 m-0 d-flex justify-content-start">
                    <button price="button" class="btn btn-outline-danger text-start fs-7">Delete</button>
                </div>
                <div class="col-6  m-0 d-flex justify-content-end">
                    <button price="button" class="btn btn-sm fs-7 btn-secondary text-end">Open</button>
                </div>
            </div>
        </div>
    </div>
    `;
  });

  const album2 = document.getElementById('open-shared');

  modelfiles2.forEach(t => {
    album2.innerHTML += `
    
    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-3">
        <div class="card shadow-sm m-2 bg-gray">
            <img class="bd-placeholder-img card-img-top" width="100%" height="140" src="${t.imagen}" role="img"></img>  
            <div class="card-body">
                <div class="row m-0 p-0">
                    <div class="col-10 m-0">
                        <p class="fs-6 fw-bold">${t.model}</p>
                    </div>     
                </div>
                <div class="row m-0 p-0">
                    <div class="col-4 ms-0">
                        <p class="fs-7">Version:</p>
                    </div>
                    <div class="col m-0">
                        <p class="fs-7">${t.version}</p>
                    </div>
                </div>
                <div class="row m-0 p-0">
                    <div class="col-4 m-0">
                        <p class="fs-7">Created:</p>
                    </div>
                    <div class="col">
                        <p class="fs-7">${t.user1}</p>
                    </div>
                    <div class="col">
                    <p class="fs-7">${t.date1}</p>
                </div>
                </div>
                <div class="row m-0 p-0">
                <div class="col-4 m-0">
                    <p class="fs-7">Modified:</p>
                </div>
                <div class="col">
                    <p class="fs-7 ">${t.user2}</p>
                </div>
                <div class="col">
                    <p class="fs-7">${t.date2}</p>
                </div>
            </div>
            <hr>
            <div class="d-flex flex-wrap gap-1 mt-2">
                <span class="badge bg-secondary fw-light">Business Model</span>
                <span class="badge bg-secondary fw-light">Plan</span>
                <span class="badge bg-secondary fw-light">3 impact</span>
            </div>      
            
            <hr>
            <div class="row m-0 p-0">
                <div class="col-6 m-0 d-flex justify-content-start">
                    <button price="button" class="btn btn-outline-danger text-start fs-7">Delete</button>
                </div>
                <div class="col-6  m-0 d-flex justify-content-end">
                    <button price="button" class="btn btn-sm fs-7 btn-secondary text-end">Open</button>
                </div>
            </div>
        </div>
    </div>
    `;
  });

  const album3 = document.getElementById('open-library');

  modelfiles3.forEach(t => {
    album3.innerHTML += `
    
    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-3">
        <div class="card shadow-sm m-2 bg-gray">
            <img class="bd-placeholder-img card-img-top" width="100%" height="140" src="${t.imagen}" role="img"></img>  
            <div class="card-body">
                <div class="row m-0 p-0">
                    <div class="col-10 m-0">
                        <p class="fs-6 fw-bold">${t.model}</p>
                    </div>     
                </div>
                <div class="row m-0 p-0">
                    <div class="col-4 ms-0">
                        <p class="fs-7">Version:</p>
                    </div>
                    <div class="col m-0">
                        <p class="fs-7">${t.version}</p>
                    </div>
                </div>
                <div class="row m-0 p-0">
                    <div class="col-4 m-0">
                        <p class="fs-7">Created:</p>
                    </div>
                    <div class="col">
                        <p class="fs-7">${t.user1}</p>
                    </div>
                    <div class="col">
                    <p class="fs-7">${t.date1}</p>
                </div>
                </div>
                <div class="row m-0 p-0">
                <div class="col-4 m-0">
                    <p class="fs-7">Modified:</p>
                </div>
                <div class="col">
                    <p class="fs-7 ">${t.user2}</p>
                </div>
                <div class="col">
                    <p class="fs-7">${t.date2}</p>
                </div>
            </div>
            <hr>

            <div class="d-flex flex-wrap gap-1 mt-2">
                <span class="badge bg-secondary fw-light">Business Model</span>
                <span class="badge bg-secondary fw-light">Plan</span>
                <span class="badge bg-secondary fw-light">3 impact</span>
            </div>
                   
            
            <hr>
            <div class="row m-0 p-0">
                <div class="col-1 m-0 d-flex justify-content-start">
                    <p class="fs-6 fw-bold">${t.price}</p>
                </div>
                <div class="col d-flex justify-content-end">
                    <button price="button" class="btn btn-sm fs-7 btn-outline-secondary text-start me-1">View</button>
                    <button price="button" class="btn btn-sm fs-7 btn-primary text-end">Get!</button>
                </div>
            </div>
        </div>
    </div>
    `;
  });

  /// AGREGAR TAGS EN INFO

  const tagInput = document.getElementById("tagInput");
  const addTagBtn = document.getElementById("addTagBtn");
  const tagList = document.getElementById("tagList");
  const tagsHiddenInput = document.getElementById("tagsHiddenInput");

  let tags = [];

  function renderTags() {
    tagList.innerHTML = "";
    tags.forEach((tag, index) => {
      const span = document.createElement("span");
      span.className = "badge bg-secondary fs-7 fw-light d-flex align-items-center";
      span.innerHTML = `
        ${tag}
        <button type="button" class="btn-close btn-close-white ms-2" aria-label="Eliminar" data-index="${index}" style="font-size: 0.5rem;"></button>
      `;
      tagList.appendChild(span);
    });

    // Actualiza el input oculto con los tags como string (para enviar en formulario)
    tagsHiddenInput.value = tags.join(",");
  }

function addTag(value) {
    const cleanValue = value.trim();
    if (cleanValue !== "" && !tags.includes(cleanValue)) {
      tags.push(cleanValue);
      renderTags();
      tagInput.value = "";
    }
  }

  addTagBtn.addEventListener("click", () => {
    addTag(tagInput.value);
  });

  tagInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag(tagInput.value);
    }
  });

  tagList.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-close")) {
      const index = e.target.dataset.index;
      tags.splice(index, 1);
      renderTags();
    }
  });