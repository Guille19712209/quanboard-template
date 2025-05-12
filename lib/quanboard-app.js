// Cytoescape

const cy = cytoscape({
    container: document.getElementById('cy'),
    elements: [
      { data: { id: 'a', title: 'Title', name: 'Object A', nameSize: "1em", value: '600',valueSize: "2em", unit: '$', unitSize: "1em", shape: 'ellipse', borderColor: "#000",  nodeColor: "rgba(0,128,255,0.7)",  fontColor: "rgba(100, 100, 100, 1)",size: 300 } },
      { data: { id: 'b', title: '', name: 'Object B', nameSize: "1em", value: '900',valueSize: "2em", unit: '$', unitSize: "1em",shape: 'ellipse', borderColor: "#000",  nodeColor: "rgba(0,128,255,0.7)",  fontColor: "rgba(100, 100, 100, 1)",size: 200 } },
      { data: { id: 'c', title: '', name: 'Object C', nameSize: "1em", value: '30',valueSize: "2em", unit: '$', unitSize: "1em",shape: 'roundrectangle', borderColor: "#000",  nodeColor: "rgba(0,128,255,0.7)",  fontColor: "rgba(100, 100, 100, 1)",size: 100 } },
      { data: { id: 'd', title: '', name: 'Object D', nameSize: "1em", value: '600',valueSize: "2em", unit: '$', unitSize: "1em", shape: 'ellipse', borderColor: "#000",  nodeColor: "rgba(0,128,255,0.7)",  fontColor: "rgba(100, 100, 100, 1)",size: 350 } },
      { data: { id: 'e', title: '', name: 'Object E', nameSize: "1em", value: '100',valueSize: "2em", unit: '$', unitSize: "1em",shape: 'ellipse', borderColor: "#000",  nodeColor: "rgba(0,128,255,0.7)",  fontColor: "rgba(100, 100, 100, 1)",size: 200 } },
      { data: { id: 'f', title: '', name: 'Object F', nameSize: "1em", value: '500',valueSize: "2em", unit: '$', unitSize: "1em",shape: 'star', borderColor: "#000",  nodeColor: "rgba(0,128,255,0.7)",  fontColor: "rgba(100, 100, 100, 1)",size: 150 } },

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
            <div style="font-weight:light; font-size: ${data.nameSize}; color: ${data.fontColor}; line-height: 1;">${data.name}</div>
            <div style="font-weight:bold; font-size: ${data.valueSize}; color: ${data.fontColor}; line-height: 1;">${data.value}</div>
            <div style="font-weight:light; font-size: ${data.unitSize}; color: ${data.fontColor}; line-height: 1;">${data.unit}</div>
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
  createPicker('#picker-6', '#d-objectColor-object', 'rgba(0, 128, 255, 0.7)');
  createPicker('#picker-7', '#d-textColor-object', 'rgba(100, 100, 100,1)');
  createPicker('#picker-8', '#d-objectBorder-object', 'rgba(100, 100, 100,0.7)');
   createPicker('#picker-9', '#d-objectBorder-object', 'rgba(255, 1, 1, 0.7)');

// CAMBIOS EN CY desde MODEL STYLE 

function changeModelStyle() {
    const bgColor = document.getElementById('d-bgColor-model').value;
    document.getElementById('cy').style.backgroundColor = bgColor;
    const txColor = document.getElementById('d-textColor-model').value; 
    cy.nodes().style('color',txColor);
    cy.nodes().forEach(n => n.data('fontColor', txColor));
    const egColor = document.getElementById('d-edgesColor-model').value; 
    cy.edges().style('line-color',egColor);
    cy.edges().style('target-arrow-color', egColor);
    const obColor = document.getElementById('d-objectsColor-model').value; 
    const alpha1 = parseFloat(obColor.match(/rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*([\d.]+)\s*\)/)[1]);
    cy.nodes().style({
        'background-color': obColor,
        'background-opacity': alpha1
     })
    const boColor = document.getElementById('d-objectsBorder-model').value; 
    const alpha2 = parseFloat(boColor.match(/rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*([\d.]+)\s*\)/)[1]);
    cy.nodes().style('border-color', boColor);
    cy.nodes().style('border-opacity', alpha2);
    const nsize = document.getElementById('d-nameFontSize-model').value+"em"; 
    cy.nodes().forEach(n => n.data('nameSize', nsize));
    const vsize = document.getElementById('d-valueFontSize-model').value+"em"; 
    cy.nodes().forEach(n => n.data('valueSize', vsize));
    const usize = document.getElementById('d-unitFontSize-model').value+"em"; 
    cy.nodes().forEach(n => n.data('unitSize', usize));
    const shape = document.getElementById('d-shape-model').value; 
    cy.nodes().style('shape', shape);


  }

// DEVOLVER ETIQUETA NEW OBJECT

  function backToNew() {
    document.getElementById('d-label-newObject').innerText = "NEW OBJECT";
  }

// APAGA OFFCANVAS AL ABRIR CUALQUIER MODAL

document.addEventListener('show.bs.modal', () => {
  // Buscar cualquier offcanvas abierto
  const offcanvasEl = document.querySelector('.offcanvas.show');
  if (offcanvasEl) {
    const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasEl);
    if (offcanvasInstance) {
      offcanvasInstance.hide();

  const backdrop = document.querySelector('.offcanvas-backdrop');
  if (backdrop) {
    backdrop.remove();
    document.body.classList.remove('offcanvas-backdrop');
    document.body.style.overflow = ''; 
  }
    }
  }
});

// LLEVA DATOS DEL MODAL TIME A BTN y RANGE TIME

function setTime() {
  const unit = document.getElementById('d-timeUnit-Model').value ;
  const periods = document.getElementById('d-timePeriods-model').value ;
  document.getElementById('label-time-unit').innerText = unit;
  document.getElementById('time-badge').innerText = periods;
  document.getElementById('m-time-model').innerText = 1;
  document.getElementById('v-timeline-model').max = periods;
  document.getElementById('v-timeline-model').value = 1;
  document.getElementById('d-btn-time').innerText = 1;

};


// ABRIR MODAL EDIT OBJECT 

cy.on('tap', 'node', function(evt){
  node = evt.target;
  const modal = new bootstrap.Modal(document.getElementById('m-new-object'));
  document.getElementById('d-label-newObject').innerText = "EDIT OBJECT";
  document.getElementById('d-type-object').value = "";
  const vlaueFieldRow = document.getElementById('valueFieldRow'); /// ELIMINAR CUANDO TRAIGA INFO DEFINITIVA
  valueFieldRow.classList.add('d-none') /// ELIMINAR CUANDO TRAIGA INFO DEFINITIVA
  modal.show();
});

document.getElementById('b-new-object').addEventListener('click', () => { 
  document.getElementById('d-type-object').value = "";
  const vlaueFieldRow = document.getElementById('valueFieldRow'); /// ELIMINAR CUANDO TRAIGA INFO DEFINITIVA
  valueFieldRow.classList.add('d-none') /// ELIMINAR CUANDO TRAIGA INFO DEFINITIVA
});

// SAVE OBJECT 

document.getElementById('b-save-object').addEventListener('click', () => {
  if (node) {
    const ocolor = document.getElementById('d-objectColor-object').value ;
    const modal = new bootstrap.Modal(document.getElementById('m-new-object'));
    node.style('background-color', ocolor);
    const tcolor = document.getElementById('d-textColor-object').value ;
    node.style('color', tcolor);    
    const bcolor = document.getElementById('d-objectBorder-object').value ;
    node.style('border-color', bcolor);   
    const fcolor = document.getElementById('d-textColor-object').value ;
    node.style('fontColor', fcolor); 
    const shape = document.getElementById('d-shape-object').value ;
    node.style('shape', shape); 
    const nsize = document.getElementById('d-nameFontSize-object').value+"em"; 
    node.data('nameSize', nsize);
    const vsize = document.getElementById('d-valueFontSize-object').value+"em"; 
    node.data('valueSize', vsize);
    const usize = document.getElementById('d-unitFontSize-object').value+"em"; 
    node.data('unitSize', usize);
    node.data('fontColor', tcolor);
    modal.hide();
  }
});

/// FORZAR APAGADO DE BACKDROPS DE MODALS AL CERRARLOS
document.addEventListener('hidden.bs.modal', function () {
  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.remove();
  });
  document.body.classList.remove('modal-open');
  document.body.style = ''; 
});

/// FORM PARA CARGAR VALUES 

function modifyValueField() {

  const vlaueFieldRow = document.getElementById('valueFieldRow');
  const type = document.getElementById('d-type-object').value;
  const valueLabel = document.getElementById('d-valueLabel-object');
  const valueContent = document.getElementById('d-valueContent-object');
  const valueCom = document.getElementById('d-valueCom-object');

  
  if (type == "Constant" ) {
    valueContent.style.height = "1em";
    valueContent.style.width = "100%";
    valueLabel.innerText = "Constant value"
    valueContent.placeholder = "Number ..."
    valueCom.innerText ="Enter one value that will be the same for all periods"
    valueFieldRow.classList.remove('d-none');
  }

  if (type == "Formula" ) {
    valueContent.style.height = "100%";
    valueContent.style.width = "100%";
    valueLabel.innerText = "Calculation formula"
    valueContent.placeholder = "= Object A + 1 ..."
    valueCom.innerHTML ="Enter the calculation formula that will generate a value for each period.<br> Using the name of another object creates a relationship between them."
    valueFieldRow.classList.remove('d-none');
  }

  if (type == "Series" ) {
    valueContent.style.height = "100%";
    valueContent.style.width = "100%";
    valueLabel.innerText = "Series of values"
    valueContent.placeholder = "1, 2, 3, 4 ..."
    valueCom.innerHTML ="Enter a series of values ​​separated by commas or spaces.<br> The number of terms must be equal to the number of time periods defined."
    valueFieldRow.classList.remove('d-none');
  }

  if (type == "External" ) {
    valueContent.style.height = "1em";
    valueContent.style.width = "100%";
    valueLabel.innerText = "External Source"
    valueContent.placeholder = "http:// ..."
    
    valueCom.innerText ="Enter the url of a external reference"
    
    valueFieldRow.classList.remove('d-none');
  }

}

/// NEW VERSION FORM

function newVers() {
  const modelName = document.getElementById('d-name-model');
  const newName = modelName.value + " V1";
  modelName.value = newName;
}

/// LIMPIA MODALS AL ABRIRLOS

const modales = document.querySelectorAll('.modal');

modales.forEach(modal => {
  modal.addEventListener('show.bs.modal', function () {
    const inputs = modal.querySelectorAll('input, textarea, select');

    inputs.forEach(el => {
      if (el.type === 'checkbox' || el.type === 'radio') {
        el.checked = false;
      } else {
        el.value = '';
        el.disabled = false ;
      }
    });
  });
});

function shareObj() {
  const shareType = document.getElementById('d-shareType-model');
  const rowShare = document.getElementById('object-row-share');

  if (shareType.value === 'Single object' || shareType.value === 'Object and childs') {
  rowShare.classList.remove('d-none');
  rowShare.classList.add('d-flex'); 
  } else {
  rowShare.classList.remove('d-flex');
  rowShare.classList.add('d-none');
  }

}


// TABLA EJEMPLO

 document.addEventListener("DOMContentLoaded", function () {
  const filaNumeros = document.getElementById("filaNumeros");
  const filaMeses = document.getElementById("filaMeses");
  const cuerpoTabla = document.getElementById("cuerpoTabla");

  const meses = ["ene", "feb", "mar", "apr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
  const mesesDesdeMayo = [...meses.slice(4), ...meses.slice(0, 4)];
  const nombresObjetos = Array.from({ length: 12 }, (_, i) => `Objeto ${i + 1}`);

  // Header: fila 1
  const thInicial = document.createElement("th");
  thInicial.setAttribute("rowspan", "2");
  thInicial.innerText = "";
  filaNumeros.appendChild(thInicial);

  mesesDesdeMayo.forEach((_, i) => {
    const th = document.createElement("th");
    th.textContent = i + 1;
    filaNumeros.appendChild(th);
  });

  // Header: fila 2
  mesesDesdeMayo.forEach((mes) => {
    const th = document.createElement("th");
    th.textContent = mes;
    filaMeses.appendChild(th);
  });

  // Elegimos 5 filas al azar para deshabilitar
  const filasDeshabilitadas = [];
  while (filasDeshabilitadas.length < 5) {
    const r = Math.floor(Math.random() * 12);
    if (!filasDeshabilitadas.includes(r)) filasDeshabilitadas.push(r);
  }

  nombresObjetos.forEach((nombre, rowIndex) => {
    const fila = document.createElement("tr");
    const celdaTitulo = document.createElement("th");
    celdaTitulo.className = "text-start";
    celdaTitulo.textContent = nombre;
    fila.appendChild(celdaTitulo);

    const esDeshabilitada = filasDeshabilitadas.includes(rowIndex);

    mesesDesdeMayo.forEach(() => {
      const valor = Math.floor(Math.random() * 996) + 5;
      const td = document.createElement("td");
      const input = document.createElement("input");
      input.type = "number";
      input.value = valor;
      input.className = "form-control form-control-sm text-center";
      input.style.backgroundColor = esDeshabilitada ? "white" : "var(--bs-secondary-bg-subtle)";
      if (esDeshabilitada) {
        input.disabled = true;
      }
      td.appendChild(input);
      fila.appendChild(td);
    });

    cuerpoTabla.appendChild(fila);
  });
});

