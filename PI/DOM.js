function addFilter(value){
  if (value=="azulejo") {
    addFilterAzulejo();
  }
  if (value=="tinta") {
    addFilterTinta();
  }

}

function addFilterAzulejo(){
  clearForm();
  var form = document.querySelector("form#form-filter");

  /*Add campo de Filtro de Cor de Azulejo*/
  var div = document.createElement("div");
  div.classList.add("form-group");

  var label = document.createElement("label");
  /*label.for.add("FormFilter");*/
  label.setAttribute("for", "aljCor");
  label.textContent = "Cor";

  var input = document.createElement("input");
  input.classList.add("form-control");
  input.type = "text";
  input.id = "aljCor";
  input.placeholder = "Azul, amarelo, vermelho";

  div.appendChild(label);
  div.appendChild(input);
  form.appendChild(div);
}

function addFilterTinta(){
  clearForm();
  var form = document.querySelector("form#form-filter");
  /*Add campo de Filtro de Cor de Azulejo*/
  var div = document.createElement("div");
  div.classList.add("form-group");

  var label = document.createElement("label");
  /*label.for.add("FormFilter");*/
  label.setAttribute("for", "qttinta");
  label.textContent = "Quantidade de tinta";

  var input = document.createElement("input");
  input.classList.add("form-control");
  input.type = "text";
  input.id = "qttinta";
  input.placeholder = "1L, 10L, 5L";

  div.appendChild(label);
  div.appendChild(input);
  form.appendChild(div);
}


function clearForm(){
  var form = document.querySelector("form#form-filter");
  form.innerHTML = "";
}
