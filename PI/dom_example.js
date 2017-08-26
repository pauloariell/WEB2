function iniciar(){
  //Ver se o botão foi clicado
  var btn = document.getElementsByTagName("button")[0];
  btn.addEventListener("click", validar);

  var btn = document.getElementsByTagName("button")[1];
  btn.addEventListener("click", verifDouble);
}

function validar(){
  //Imprimir o valor do campo
  var campo = document.querySelector("input");

  if(!Date.parse(campo.value)){
    alert("Data invalida");
  } else {
    var list = document.createElement("li");
    list.textContent = campo.value;

    var ol = document.querySelector("ol#lista"); // Não ter espaço
    ol.appendChild(list);

    var button = document.createElement("button");
    list.appendChild(button);

    button.addEventListener("click", remove);
  }
}

function verifDouble(){
  var list = document.querySelectorAll("li");
  var list2 = document.querySelectorAll("li");
  for (var i = 0; i <= list.length; i++) {
    for (var j = 0; j <= list2.length; j++) {
      if ( list[i].textContent == list[j].textContent && i!=j ) {
        list[i].style["background"] = "red";
        list[j].style["background"] = "red";
        continue;
      }
    }
  }
}

function remove(){
  var pai = this.parentNode;
  pai.parentNode.removeChild(pai);
  pai.removeChild(this);
}

window.addEventListener("load", iniciar);
