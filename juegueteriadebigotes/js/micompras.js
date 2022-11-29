let allProductsBuy = JSON.parse(localStorage.getItem("allProductsBuy"));
let txtFecha = document.getElementById("text-fecha");
let mes = document.getElementById("mes");
let dia = document.getElementById("dia");
let UserBuys = document.getElementById("UserBuys");
let hayText = document.getElementById("hay-text");

let date = () => {
  fecha = `${mes.value}/${dia.value}/2022`;
  txtFecha.value = fecha;
};

let filtrar = () => {
  Swal.fire({
    position: "center",
    title: "Buscando... ",
    showConfirmButton: false,
    timer: 1500,
  });

  if (allProductsBuy == null) {
    Swal.fire({
      position: "center",
      title: "No hay compras registradas aun. ",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    let busca = allProductsBuy.filter((n) => n.date == txtFecha.value);
    if (busca.length == 0) {
      Swal.fire({
        position: "center",
        title: "Buscando... ",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        Swal.fire({
          icon: "warning",
          position: "center",
          title: "No hay compras registradas este dia. ",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    }
    {
      setTimeout(() => {
        limpiarHTMLd();
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
              "col-6",
              "d-flex",
              "justify-content-center",
              "align-items-center"
            );
            imgP.classList.add("img-fluid", "w-50");
            col5.classList.add(
              "col-6",
              "d-flex",
              "flex-column",
              "justify-content-center",
              "align-items-start"
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
            spanValuePrice.innerText = `₡${pricetotal.toLocaleString("en-US")}`;
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
            // col5.appendChild(priceP);
          });
        });
      }, 2000);
      document.getElementById("form-compras").reset();
    }
  }
};

function limpiarHTMLd() {
  while (UserBuys.firstChild) {
    UserBuys.removeChild(UserBuys.firstChild);
  }
}
