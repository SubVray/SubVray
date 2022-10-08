let agregar = () => {
  let img = document.getElementById("img");
  let inputcolor = document.getElementById("txt-color").value;
  switch (true) {
    case inputcolor.toUpperCase() === "ROJO" ||
      inputcolor.toUpperCase() === "RED":
      img.innerHTML =
        '<img src="images/rosas-rojas.jpg" class="img-fluid"></img>';
      document.getElementById("txt-color").style.color = "red";
      document.getElementById("txt-color").style.textAlign = "center";
      document.getElementById("txt-color").classList.remove("input-invalid");
      document.getElementById("txt-color").classList.add("input-valid");
      inputcolor.toUpperCase();

      break;

    case inputcolor.toUpperCase() === "AZUL" ||
      inputcolor.toUpperCase() === "BLUE":
      img.innerHTML = '<img src="images/oceano.jpg" class="img-fluid"></img>';
      document.getElementById("txt-color").style.color = "blue";
      document.getElementById("txt-color").style.textAlign = "center";
      document.getElementById("txt-color").classList.remove("input-invalid");
      document.getElementById("txt-color").classList.add("input-valid");
      break;

    case inputcolor.toUpperCase() === "VERDE" ||
      inputcolor.toUpperCase() === "GREEN":
      img.innerHTML = '<img src="images/bosque.jpeg" class="img-fluid"></img>';
      document.getElementById("txt-color").style.color = "green";
      document.getElementById("txt-color").style.textAlign = "center";
      document.getElementById("txt-color").classList.remove("input-invalid");
      document.getElementById("txt-color").classList.add("input-valid");
      break;

    case inputcolor.toUpperCase() === "":
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Por favor complete los campos resaltados en rojo",
        confirmButtonColor: "#568d79",
        confirmButtonText: "Entendido",
      });
      img.innerHTML = '<img src="images/colors.jpg" class="img-fluid"></img>';
      document.getElementById("txt-color").classList.add("input-invalid");
      break;

    default:
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "NO hay clasificación",
        confirmButtonColor: "#568d79",
        confirmButtonText: "Entendido",
      });
      img.innerHTML = '<img src="images/colors.jpg" class="img-fluid"></img>';
      document.getElementById("txt-color").classList.add("input-invalid");
      document.querySelector("#txt-color").value = "";
      document.getElementById("txt-color").style.textAlign = "start";

      break;
  }
};

let limpiar = () => {
  document.querySelector("#txt-color").value = "";
  //Limpia todo el contenido de la tabla
  document.getElementById("img").innerHTML =
    '<img src="images/colors.jpg" class="img-fluid"></img>';
  document.getElementById("txt-color").style.color = "black";
  document.getElementById("txt-color").style.textAlign = "start";
  document.getElementById("txt-color").classList.remove("input-invalid");
};
