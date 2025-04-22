// Cytoescape

const cy = cytoscape({
    container: document.getElementById('cy'),
    elements: [
      { data: { id: 'a', title: 'Title', name: 'Object A', nameSize: "1em", value: '600',valueSize: "2em", unit: '$', unitSize: "1em", shape: 'ellipse', borderColor: "#000",  nodeColor: "#000",  fontColor: "#000",size: 300 } },
      { data: { id: 'b', title: '', name: 'Object B', nameSize: "1em", value: '900',valueSize: "2em", unit: '$', unitSize: "1em",shape: 'ellipse', borderColor: "#000",  nodeColor: "#000",  fontColor: "#000",size: 200 } },
      { data: { id: 'c', title: '', name: 'Object C', nameSize: "1em", value: '30',valueSize: "2em", unit: '$', unitSize: "1em",shape: 'roundrectangle', borderColor: "#000",  nodeColor: "#000",  fontColor: "#000",size: 100 } },
      { data: { id: 'd', title: '', name: 'Object D', nameSize: "1em", value: '600',valueSize: "2em", unit: '$', unitSize: "1em", shape: 'ellipse', borderColor: "#000",  nodeColor: "#000",  fontColor: "#000",size: 350 } },
      { data: { id: 'e', title: '', name: 'Object E', nameSize: "1em", value: '100',valueSize: "2em", unit: '$', unitSize: "1em",shape: 'ellipse', borderColor: "#000",  nodeColor: "#000",  fontColor: "#000",size: 200 } },
      { data: { id: 'f', title: '', name: 'Object F', nameSize: "1em", value: '350',valueSize: "2em", unit: '$', unitSize: "1em",shape: 'star', borderColor: "#000",  nodeColor: "#000",  fontColor: "#000",size: 100 } },

      { data: { source: 'a', target: 'b' } },
      { data: { source: 'c', target: 'b' } },
      { data: { source: 'e', target: 'c' } },
      { data: { source: 'f', target: 'a' } },
      { data: { source: 'a', target: 'd' } },
      { data: { source: 'd', target: 'b' } },
      { data: { source: 'a', target: 'c' } },
      { data: { source: 'c', target: 'b' } }
    ],
    style: [
      {
        selector: 'node',
        style: {
          "label": "data(title)",
          "font-family": "poppins",
          "font-weight": "200",
          "text-margin-y": "-18",
          "shape": "data(shape)",
          "border-width": "3px",
          "border-color": "data(borderColor)",
          "border-opacity": "0.5",
          "background-color": "data(nodeColor)",
          "background-opacity": "0.5",
          "text-valign": "top",
          "font-size": "2em",
          "color": "",
          "width": "data(size)",
          "height": "data(size)",
          "text-wrap": "wrap",      

        }
      },
      {
        selector: 'edge',
        style: {
            'line-color': '#aaa',
            'target-arrow-color': '#aaa',
            'curve-style': 'unbundled-bezier',
            'source-endpoint': 'outside-to-node',
            'target-endpoint': 'outside-to-node',
            'target-arrow-shape': 'triangle'
        }
      }
    ],
    layout: {
      name: "cose",
      quality: "proof",
      randomize: true,
      animate: false,
      fit: true,
      padding: 30,
      nodeDimensionsIncludeLabels: true,
      uniformNodeDimensions: false,
      packComponents: true,
      step: "all",
      sampleSize: 25,
      nodeSeparation: 75,
      nodeRepulsion: (node) => 6500,
      idealEdgeLength: (edge) => 50,
      edgeElasticity: (edge) => 0.45,
      nestingFactor: 1,
      numIter: 2500,
      tile: false,
      tilingCompareBy: undefined,
      tilingPaddingVertical: 10,
      tilingPaddingHorizontal: 10,
      gravity: 0.25,
      gravityRangeCompound: 1.5,
      gravityCompound: 1.0,
      gravityRange: 3.8,
      initialEnergyOnIncremental: 0.3,
      }
    
  });

  cy.nodeHtmlLabel([
    {
      query: 'node',
      halign: 'center',
      valign: 'center',
      halignBox: 'center',
      valignBox: 'center',
      tpl: function (data) {
        return `
          <div style="text-align:center; font-family: poppins;">
            <div style="font-size: ${data.nameSize}; color: ${data.fontColor}; line-height: 1;">${data.name}</div>
            <div style="font-size: ${data.valueSize}; color: ${data.fontColor}; line-height: 1;">${data.value}</div>
            <div style="font-size: ${data.unitSize}; color: ${data.fontColor}; line-height: 1;">${data.unit}</div>
          </div>
        `;
      }
    }
  ]);


  

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
            <img class="bd-placeholder-img card-img-top" width="100%" height="120px" src="${t.imagen}" role="img"></img>  
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
            <img class="bd-placeholder-img card-img-top" width="100%" height="120px" src="${t.imagen}" role="img"></img>  
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
            <img class="bd-placeholder-img card-img-top" width="100%" height="120px" src="${t.imagen}" role="img"></img>  
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

  /// COLOR PIKR

  function createPicker(pickerId, inputId, defaultColor) {
    const pickr = Pickr.create({
      el: pickerId,
      theme: 'classic',
      default: defaultColor,
      components: {
        preview: true,
        opacity: true,
        hue: true,
        interaction: {
          input: true,
          save: true
        }
      }
    });

    pickr.on('save', (color) => {
      const [r, g, b, a] = color.toRGBA();
      const rgba = `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${Math.round(a * 100) / 100})`;
      const input = document.querySelector(inputId);
      input.value = rgba;
      input.dispatchEvent(new Event('change'));
      pickr.hide();
    });

    return pickr;
  }

  createPicker('#picker-1', '#d-bgColor-model', 'rgba(0, 0, 0, 0)');
  createPicker('#picker-2', '#d-textColor-model', 'rgba(100, 100, 100,1)');
  createPicker('#picker-3', '#d-edgesColor-model', 'rgba(100, 100, 100,0.7)');
  createPicker('#picker-4', '#d-objectsColor-model', 'rgba(0, 128, 255, 0.7)');
  createPicker('#picker-5', '#d-objectsBorder-model', 'rgba(100, 100, 100, 0.7)');

// Cambios en cy al cambiar style
function changeCyBg() {
    const color = document.getElementById('d-bgColor-model').value;
    document.getElementById('cy').style.backgroundColor = color;
  }

function changeCyTx() {
    const color = document.getElementById('d-textColor-model').value; 
    cy.nodes().style('color',color);
    cy.nodes().forEach(n => n.data('fontColor', color));
    // cy.nodeHtmlLabel().update();
    
  }

  function changeCyEg() {
    const color = document.getElementById('d-edgesColor-model').value; 
    cy.edges().style('line-color',color);
    cy.edges().style('target-arrow-color', color);
  }

  function changeCyOb() {
    const color = document.getElementById('d-objectsColor-model').value; 
    const alpha = parseFloat(color.match(/rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*([\d.]+)\s*\)/)[1]);

    cy.nodes().style({
        'background-color': color,
        'background-opacity': alpha
     })
  }

  function changeCyBo() {
    const color = document.getElementById('d-objectsBorder-model').value; 
    const alpha = parseFloat(color.match(/rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*([\d.]+)\s*\)/)[1]);
    cy.nodes().style('border-color', color);
    cy.nodes().style('border-opacity', alpha);
   
  }

  const modal = new bootstrap.Modal(document.getElementById('m-new-object'));
  
  cy.on('tap', 'node', function(evt){
    const node = evt.target;
    modal.show();
  });