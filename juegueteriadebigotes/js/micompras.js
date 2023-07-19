let allProductsBuy = JSON.parse(localStorage.getItem("allProductsBuy"));
let txtFecha = document.getElementById("text-fecha");
let mes = document.getElementById("mes");
let dia = document.getElementById("dia");
let UserBuys = document.getElementById("UserBuys");
let hayText = document.getElementById("hay-text");
let btnAcordeon = document.getElementById("btn-acordeon-filter");
let sctCompras = document.querySelector(".sct-compras");

if (allProductsBuy == null) {
  btnEncuesta.classList.add("d-none");
} else {
  btnEncuesta.classList.remove("d-none");
}

let date = () => {
  fecha = `${dia.value}/${mes.value}/2023`;
  txtFecha.value = fecha;
};

let filtrar = () => {
  Swal.fire({
    position: "center",
    title: "Buscando... ",
    showConfirmButton: false,
    timer: 1500,
  }).then(() => {
    if (txtFecha.value === "") {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Fecha invalida. ",
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (allProductsBuy == null) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "No hay compras registradas aun. ",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      let busca = allProductsBuy.filter((n) => n.date == txtFecha.value);
      if (busca.length == 0) {
        Swal.fire({
          icon: "warning",
          position: "center",
          title: "No hay compras registradas este dia. ",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      {
        setTimeout(() => {
          limpiarHTMLd();
          btnAcordeon.click();
          busca.forEach((producte) => {
            producte.productos.forEach((product) => {
              let cardsProduct = document.createElement("div");
              // row 1
              let row1 = document.createElement("div");
              let col12 = document.createElement("div");
              let titleCard = document.createElement("h5");
              let hr = document.createElement("hr");
              // row2
              let row2 = document.createElement("div");
              let col4 = document.createElement("div");
              let col5 = document.createElement("div");
              let imgP = document.createElement("img");
              let skuP = document.createElement("span");
              let cantidadP = document.createElement("span");
              let priceP = document.createElement("span");
              let titleSKu = "SKU:";
              let titleCantidad = "Cantidad: ";
              let titlePrice = "Precio: ";
              let divPrice = document.createElement("div");
              let spanTitlePrice = document.createElement("span");
              let spanValuePrice = document.createElement("span");

              // add classes
              cardsProduct.classList.add("card", "my-3", "card-product");
              // row1
              row1.classList.add("row");
              col12.classList.add(
                "col-12",
                "d-flex",
                "justify-content-center",
                "align-items-center",
                "pt-4",
                "pb-0"
              );
              titleCard.classList.add("name-cart-product", "fw-bold");
              //  row2
              row2.classList.add("row", "px-2");
              col4.classList.add(
                "text-center",
                "col-12",
                "col-md-6",
                "d-flex",
                "justify-content-center",
                "align-items-center"
              );
              imgP.classList.add("img-fluid", "w-50");
              col5.classList.add(
                "text-center",
                "col-12",
                "col-md-6",
                "d-flex",
                "flex-column",
                "justify-content-center",
                "align-items-md-start",
                "align-items-center"
              );
              skuP.classList.add("fw-semibold", "skup");
              cantidadP.classList.add("fw-semibold", "cantidadp");
              priceP.classList.add("fw-semibold", "pricep");
              spanTitlePrice.classList.add("fw-semibold", "pricep");
              spanValuePrice.classList.add("fw-semibold", "pricep", "priceV");
              // content
              titleCard.innerText = product.name;
              imgP.src = product.imgProduct;

              imgP.alt = product.name;
              skuP.innerText = `${titleSKu} ${product.id}`;
              cantidadP.innerText = `${titleCantidad} ${Number(
                product.cantidad
              )}`;
              let pricetotal = Number(product.price) * Number(product.cantidad);
              spanTitlePrice.innerText = titlePrice;
              spanValuePrice.innerText = `₡${pricetotal.toLocaleString(
                "en-US"
              )}`;
              priceP.innerText = `${titlePrice}${pricetotal.toLocaleString(
                "en-US"
              )}
            `;
              UserBuys.appendChild(cardsProduct);
              cardsProduct.appendChild(row1);
              cardsProduct.dataset.productId = product.id;
              row1.appendChild(col12);
              col12.appendChild(titleCard);
              cardsProduct.appendChild(hr);
              cardsProduct.appendChild(row2);
              row2.appendChild(col4);
              col4.appendChild(imgP);
              row2.appendChild(col5);
              col5.appendChild(skuP);
              col5.appendChild(cantidadP);
              divPrice.appendChild(spanTitlePrice);
              divPrice.appendChild(spanValuePrice);
              col5.appendChild(divPrice);
            });
          });
        }, 800);
        document.getElementById("form-compras").reset();
      }
    }
  });
};

function limpiarHTMLd() {
  while (UserBuys.firstChild) {
    UserBuys.removeChild(UserBuys.firstChild);
  }
}
let dateN = new Date();
let year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(dateN);
let month = new Intl.DateTimeFormat("en", { month: "numeric" }).format(dateN);
let day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(dateN);

$("#text-fecha").attr("placeholder", `${day}/${month}/${year}`);

btnAcordeon.addEventListener("click", () => {
  sctCompras.classList.toggle("active_filter");
});
