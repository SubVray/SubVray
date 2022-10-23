const facturar = () => {
  let inputs = document.querySelectorAll("form input");
  let inputs1 = document.querySelectorAll("#into input");

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

  // operaciones
  subtotal = precio * cantidad;
  iva = subtotal * 0.13;
  servicio = 0.05 * subtotal;
  total = subtotal + iva + servicio;

  console.log(servicio);

  inputs1.forEach((input) => {
    if (input.value == "") {
      input.classList.add("invalid");
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Revise los campos en rojo!",
      });
    } else {
      input.classList.remove("invalid");
      cliente.value = nombre;
      articuloR.value = articulo;
      precioR.value = `₡${precio}`;
      cantidadR.value = cantidad;
      subtotalR.value = `₡${subtotal}`;
      ivaR.value = `₡${iva}`;
      servicioR.value = `₡${servicio}`;
      totalR.value = `₡${total}`;
    }
  });
};

const limpiar = () => {
  let inputs = document.querySelectorAll("form input");
  inputs.forEach((inputl) => {
    inputl.classList.remove("invalid");
    inputl.value = "";
    inputl.style.border = "1px solid #0000004f";
  });
};
