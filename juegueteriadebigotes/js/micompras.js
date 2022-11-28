let allProductsBuy = JSON.parse(localStorage.getItem("allProductsBuy"));
let txtFecha = document.getElementById("text-fecha");
let mes = document.getElementById("mes");
let dia = document.getElementById("dia");
let UserBuys = document.getElementById("UserBuys");
// txtFecha.value = new Date().toISOString().split("T")[0];
let hayText = document.getElementById("hay-text");

let date = () => {
  fecha = `2022-${mes.value}-${dia.value}`;
  txtFecha.value = fecha;
};

let filtrar = () => {
  Swal.fire({
    position: "center-center",
    title: "Buscando... ",
    showConfirmButton: false,
    timer: 1500,
  });
  let busca = allProductsBuy.filter((n) => n.date == txtFecha.value);

  setTimeout(() => {
    limpiarHTMLd();
    busca.forEach((producte) => {
      producte.productos.forEach((product) => {
        let btnBorrar = document.createElement("button");
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
        let titlePrice = "Precio: ₡";

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
        // content
        titleCard.innerText = product.name;
        imgP.src = product.imgProduct;

        imgP.alt = product.name;
        skuP.innerText = `${titleSKu} ${product.id}`;
        cantidadP.innerText = `${titleCantidad} ${Number(product.cantidad)}`;
        let pricetotal = Number(product.price) * Number(product.cantidad);
        priceP.innerText = `${titlePrice}${pricetotal.toLocaleString("en-US")}
			`;
		UserBuys.classList.add('d-flex' ,'gap-3','flex-wrap')
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
        col5.appendChild(priceP);
      });
    });
  }, 2000);
  document.getElementById("form-compras").reset();
  //   txtFecha.value = new Date().toISOString().split("T")[0];
};

function limpiarHTMLd() {
  while (UserBuys.firstChild) {
    UserBuys.removeChild(UserBuys.firstChild);
  }
}
