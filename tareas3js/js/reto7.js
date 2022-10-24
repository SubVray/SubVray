let a = 0;
document.querySelector("#sabor").onchange = function (e) {
  a = e.target.value;
  let img = "";
  if (a == 1) {
    img = "images/suprema.png";
  } else if (a == 2) {
    img = "images/jamonyqueso.png";
  } else if (a == 3) {
    img = "images/peperoni.png";
  } else if (a == 4) {
    img = "images/margarita.png";
  }
  document.getElementById("img-change").src = img;
};
document.getElementById("slice").onchange = function (es) {
  n = es.target.value;
};

function calcular() {
  let monto = "";
  if (document.getElementById("sabor").value == "Seleccione un sabor:") {
    swal.fire({
      icon: "info",
      title: "Atención",
      html: '<p class="formatos1"> Seleccione el sabor de la pizza... </p> ',
    });
  } else {
    if (document.getElementById("slice").value == "Seleccione el tamaño:") {
      swal.fire({
        icon: "info",
        title: "Atención",
        html: '<p class="formatos1"> Seleccione el tamaño de la pizza... </p> ',
      });
    } else {
      if (a == 1) {
        if (n == 8) {
          monto = "5.000";
          swal.fire({
            imageUrl: "images/suprema.png",
            html: "<p>Monto de la pizza Suprema de 8 slices</p> " + "₡" + monto,
            imageWidth: 600,
            imageHeight: 250,
            imageAlt: "pizza suprema",
          });
        } else if (n == 12) {
          monto = "10.000";
          swal.fire({
            imageUrl: "images/suprema.png",
            html:
              "<p>Monto de la pizza Suprema de 12 slices</p> " + "₡" + monto,
            imageWidth: 600,
            imageHeight: 250,
            imageAlt: "pizza suprema",
          });
        }
        if (n == 16) {
          monto = "15.000";
          swal.fire({
            imageUrl: "images/suprema.png",
            html:
              "<p>Monto de la pizza Suprema de 16 slices</p> " + "₡" + monto,
            imageWidth: 600,
            imageHeight: 250,
            imageAlt: "pizza suprema",
          });
        }
        if (n == 24) {
          monto = "20.000";
          swal.fire({
            imageUrl: "images/suprema.png",
            html:
              "<p>Monto de la pizza Suprema de 24 slices</p> " + "₡" + monto,
            imageWidth: 600,
            imageHeight: 250,
            imageAlt: "pizza suprema",
          });
        }
      }
      //   jamon y queso
      if (a == 2) {
        if (n == 8) {
          monto = "4.000";
          swal.fire({
            imageUrl: "images/jamonyqueso.png",
            html:
              "<p>Monto de la pizza Jamón y Queso de 8 slices</p> " +
              "₡" +
              monto,
            imageWidth: 600,
            imageHeight: 250,
            imageAlt: "pizza Jamón y Queso",
          });
        } else if (n == 12) {
          monto = "8.000";
          swal.fire({
            imageUrl: "images/jamonyqueso.png",
            html:
              "<p>Monto de la pizza Jamón y Queso de 12 slices</p> " +
              "₡" +
              monto,
            imageWidth: 600,
            imageHeight: 250,
            imageAlt: "pizza Jamón y Queso",
          });
        }
        if (n == 16) {
          monto = "10.000";
          swal.fire({
            imageUrl: "images/jamonyqueso.png",
            html:
              "<p>Monto de la pizza Jamón y Queso de 16 slices</p> " +
              "₡" +
              monto,
            imageWidth: 600,
            imageHeight: 250,
            imageAlt: "pizza Jamón y Queso",
          });
        }
        if (n == 24) {
          monto = "15.000";
          swal.fire({
            imageUrl: "images/jamonyqueso.png",
            html:
              "<p>Monto de la pizza Jamón y Queso de 24 slices</p> " +
              "₡" +
              monto,
            imageWidth: 600,
            imageHeight: 250,
            imageAlt: "pizza Jamón y Queso",
          });
        }
      }
      // Peperoni
      if (a == 3) {
        if (n == 8) {
          monto = "5.500";
          swal.fire({
            imageUrl: "images/peperoni.png",
            html:
              "<p>Monto de la pizza peperoni de 8 slices</p> " + "₡" + monto,
            imageWidth: 600,
            imageHeight: 250,
            imageAlt: "pizza peperoni",
          });
        } else if (n == 12) {
          monto = "10.500";
          swal.fire({
            imageUrl: "images/peperoni.png",
            html:
              "<p>Monto de la pizza peperoni de 12 slices</p> " + "₡" + monto,
            imageWidth: 600,
            imageHeight: 250,
            imageAlt: "pizza peperoni",
          });
        }
        if (n == 16) {
          monto = "15.500";
          swal.fire({
            imageUrl: "images/peperoni.png",
            html:
              "<p>Monto de la pizza peperoni de 16 slices</p> " + "₡" + monto,
            imageWidth: 600,
            imageHeight: 250,
            imageAlt: "pizza peperoni",
          });
        }
        if (n == 24) {
          monto = "20.500";
          swal.fire({
            imageUrl: "images/peperoni.png",
            html:
              "<p>Monto de la pizza peperoni de 24 slices</p> " + "₡" + monto,
            imageWidth: 600,
            imageHeight: 250,
            imageAlt: "pizza peperoni",
          });
        }
      }
      // margarita
      if (a == 4) {
        if (n == 8) {
          monto = "5.500";
          swal.fire({
            imageUrl: "images/margarita.png",
            html:
              "<p>Monto de la pizza margarita de 8 slices</p> " + "₡" + monto,
            imageWidth: 600,
            imageHeight: 250,
            imageAlt: "pizza margarita",
          });
        } else if (n == 12) {
          monto = "10.500";
          swal.fire({
            imageUrl: "images/margarita.png",
            html:
              "<p>Monto de la pizza margarita de 12 slices</p> " + "₡" + monto,
            imageWidth: 600,
            imageHeight: 250,
            imageAlt: "pizza margarita",
          });
        }
        if (n == 16) {
          monto = "15.500";
          swal.fire({
            imageUrl: "images/margarita.png",
            html:
              "<p>Monto de la pizza margarita de 16 slices</p> " + "₡" + monto,
            imageWidth: 600,
            imageHeight: 250,
            imageAlt: "pizza margarita",
          });
        }
        if (n == 24) {
          monto = "20.500";
          swal.fire({
            imageUrl: "images/margarita.png",
            html:
              "<p>Monto de la pizza margarita de 24 slices</p> " + "₡" + monto,
            imageWidth: 600,
            imageHeight: 250,
            imageAlt: "pizza margarita",
          });
        }
      }
    }
  }
}
