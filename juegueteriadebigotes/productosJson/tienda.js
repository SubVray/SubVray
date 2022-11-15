let mostrador = document.getElementById("mostrador");
let seleccion = document.getElementById("seleccion");
let imgSeleccionada = document.getElementById("img");
let modeloSeleccionado = document.getElementById("modelo");
let descripSeleccionada = document.getElementById("descripcion");
let precioSeleccionado = document.getElementById("precio");

function cargar(item) {
  mostrador.style.width = "100%";
  seleccion.style.width = "70%";
  seleccion.style.opacity = "1";

  imgSeleccionada.src = item.getElementsByTagName("img")[0].src;

  modeloSeleccionado.innerHTML = item.getElementsByTagName("p")[0].innerHTML;

  descripSeleccionada.innerHTML = "Descripción del modelo ";

  precioSeleccionado.innerHTML = item.getElementsByTagName("span")[0].innerHTML;
}
function cerrar() {
  mostrador.style.width = "100%";
  seleccion.style.width = "0%";
  seleccion.style.opacity = "0";
}

function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("mostrador");
  li = ul.getElementsByClassName("product");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("p")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
