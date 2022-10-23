const facturar = () => {
  let inputs = document.querySelectorAll("form input");
  let nombre = document.getElementById("nombre").value;
  let cliente = document.getElementById("cliente");
  let articulo = document.getElementById("articulo").value;
  let precio = document.getElementById("precio").value;
  let cantidad = document.getElementById("cantidad").value;
  let articuloR = document.getElementById("articuloR");
  let precioR = document.getElementById("precioR");
  let cantidadR = document.getElementById("cantidadR");
  let subtotalR = document.getElementById("subtotal");
  let ivaR = document.getElementById("iva");
  let servicioR = document.getElementById("servicio");
  let totalR = document.getElementById("total");
  let total = 0;
  let subtotal = 0;
  let iva = 0;
  let servicio = 0;

  subtotal = precio * cantidad;
  iva = subtotal * 0.13;
  servicio = 0.05 * subtotal;
  total = subtotal + iva + servicio;

  console.log(servicio);
  cliente.value = nombre;
  articuloR.value = articulo;
  precioR.value = `₡${precio}`;
  cantidadR.value = cantidad;
  subtotalR.value = `₡${subtotal}`;
  ivaR.value = `₡${iva}`;
  servicioR.value = `₡${servicio}`;
  totalR.value = `₡${total}`;

  inputs.forEach((input) => {
    if (input.value == "") {
      input.style.border = "1px solid red";
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Revise los campos en blanco!",
      });
    }
  });
};

const limpiar = () => {
  let inputs = document.querySelectorAll("form input");
  inputs.forEach((input) => {
    input.value = "";
    input.style.border = "1px solid black";
  });
};
