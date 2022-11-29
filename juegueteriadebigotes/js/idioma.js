const langEl = document.querySelector(".langWrap");
const links = document.querySelectorAll("header button");
const inicio = document.querySelector(".inicio");
const promocionesHeader = document.querySelector(".promociones-h");
const sucursales = document.querySelector(".sucursales");
const categoriasHeader = document.querySelector(".categorias-h");
const bebes = document.querySelector(".bebes");
const juegosMesa = document.querySelector(".juegos-mesa");
const deportes = document.querySelector(".deportes");
const nerf = document.querySelector(".nerf");
const motorafina = document.querySelector(".motorafina");
const verano = document.querySelector(".verano");
const promociones = document.querySelector(".promociones");
const categorias = document.querySelector(".categorias-s");

// perfil.html
const miCompras = document.querySelector(".mis-compras");
const btnLogout = document.querySelector(".btn-logout");
const btnEncuesta = document.querySelector(".btn-encuesta");
const labelDia = document.querySelector(".label-dia");
const optionDia = document.querySelector(".option-dia");
const labelMes = document.querySelector(".label-mes");
const optionMes = document.querySelector(".option-mes");
// encuesta
const titleEncuesta = document.querySelector(".title-encuesta");
const titleE1 = document.querySelector(".title-e-1");
const titleE2 = document.querySelector(".title-e-2");
const titleE3 = document.querySelector(".title-e-3");
const titleE4 = document.querySelector(".title-e-4");
const titleE5 = document.querySelector(".title-e-5");

// categories images
const imgBebes = document.querySelector(".img-bebes");
const imgJuegosMesa = document.querySelector(".img-juegos-mesa");
const imgDeportes = document.querySelector(".img-deportes");
const imgNerf = document.querySelector(".img-nerf");
const imgMotoraFina = document.querySelector(".img-motorafina");
const imgVerano = document.querySelector(".img-verano");

links.forEach((r) => {
  r.addEventListener("click", () => {
    const attr = r.getAttribute("language");
    inicio.textContent = changeLanguage[attr].inicio;
    promocionesHeader.textContent = changeLanguage[attr].promocionesHeader;
    sucursales.textContent = changeLanguage[attr].sucursales;
    categoriasHeader.textContent = changeLanguage[attr].categoriasHeader;
    bebes.textContent = changeLanguage[attr].bebes;
    juegosMesa.textContent = changeLanguage[attr].juegosMesa;
    deportes.textContent = changeLanguage[attr].deportes;
    nerf.textContent = changeLanguage[attr].nerf;
    motorafina.textContent = changeLanguage[attr].motorafina;
    verano.textContent = changeLanguage[attr].verano;

    if (
      window.location ==
        "http://127.0.0.1:5501/juegueteriadebigotes/perfil.html" ||
      window.location ==
        "http://127.0.0.1:5500/juegueteriadebigotes/perfil.html"
    ) {
      miCompras.textContent = changeLanguage[attr].miCompras;
      labelMes.textContent = changeLanguage[attr].labelMes;
      optionMes.textContent = changeLanguage[attr].optionMes;
      labelDia.textContent = changeLanguage[attr].labelDia;
      optionDia.textContent = changeLanguage[attr].optionDia;
      btnLogout.textContent = changeLanguage[attr].btnLogout;
      btnEncuesta.textContent = changeLanguage[attr].btnEncuesta;
      titleEncuesta.textContent = changeLanguage[attr].titleEncuesta;
      titleE1.textContent = changeLanguage[attr].titleE1;
      titleE2.textContent = changeLanguage[attr].titleE2;
      titleE3.textContent = changeLanguage[attr].titleE3;
      titleE4.textContent = changeLanguage[attr].titleE4;
      titleE5.textContent = changeLanguage[attr].titleE5;
    }
    if (
      window.location ==
        "http://127.0.0.1:5501/juegueteriadebigotes/home.html" ||
      window.location == "http://127.0.0.1:5500/juegueteriadebigotes/home.html"
    ) {
      imgBebes.src = changeLanguage[attr].imgBebes;
      imgJuegosMesa.src = changeLanguage[attr].imgJuegosMesa;
      imgDeportes.src = changeLanguage[attr].imgDeportes;
      imgNerf.src = changeLanguage[attr].imgNerf;
      imgMotoraFina.src = changeLanguage[attr].imgMotoraFina;
      imgVerano.src = changeLanguage[attr].imgVerano;
      promociones.textContent = changeLanguage[attr].promociones;
      categorias.textContent = changeLanguage[attr].categorias;
    }
  });
});

let changeLanguage = {
  spanish: {
    inicio: "Inicio",
    promocionesHeader: "Promociones",
    sucursales: "Sucursales",
    categoriasHeader: "Categorías ",
    bebes: "Bebes",
    juegosMesa: "Juegos de mesa",
    deportes: "Deportes",
    nerf: "Armas Nerf",
    motorafina: "Motorafina",
    verano: "Verano",
    // agregar titulos
    promociones: "Promociones",
    categorias: "Categorías ",

    // perfil
    miCompras: "Mis Compras",
    labelMes: "Mes",
    optionMes: "Mes",
    btnLogout: "Cerrar sesión",
    btnEncuesta: "Encuesta",
    labelDia: "Dia",
    optionDia: "Dia",

    // encuesta
    titleEncuesta: "Encuesta",
    titleE1: "Calidad general:",
    titleE2: "Experiencia de compra:",
    titleE3: "Experiencia de primer uso:",
    titleE4: "Calidad de Producto:",
    titleE5:
      "Servicio posterior a la compra (garantía, atención al cliente, etc.):",

    // images categories
    imgBebes: "images/categorias/bebes.png",
    imgJuegosMesa: "images/categorias/juegosmesa.gif",
    imgDeportes: "images/categorias/deportes.png",
    imgNerf: "images/categorias/armas-nerf.png",
    imgMotoraFina: "images/categorias/motorafina.png",
    imgVerano: "images/categorias/verano.png",
  },

  // english
  english: {
    inicio: "Home",
    promocionesHeader: "Promotions",
    sucursales: "Branches",
    categoriasHeader: "categories ",
    bebes: "Babies",
    juegosMesa: "Table games",
    deportes: "Sports",
    nerf: "Gun Nerf",
    motorafina: "Fine Motor Skills ",
    verano: "Summer",

    // agregar titulos
    promociones: "Promotions",
    categorias: "categories ",

    // perfil
    miCompras: "My purchases",
    btnLogout: "Logout",
    btnEncuesta: "Survey",
    labelMes: "Month",
    optionMes: "Month",
    labelDia: "Day",
    optionDia: "Day",
    // encuesta
    titleEncuesta: "Survey",
    titleE1: "General quality:",
    titleE2: "Shopping experience:",
    titleE3: "First use experience:",
    titleE4: "Product Quality:",
    titleE5: "Post-purchase service ( warranty, attention to client, etc. ):",

    // images categories
    imgBebes: "images/categorias/babies.png",
    imgJuegosMesa: "images/categorias/tablegames.gif",
    imgDeportes: "images/categorias/sports.png",
    imgNerf: "images/categorias/nerfguns.png",
    imgMotoraFina: "images/categorias/finemotorskills.png",
    imgVerano: "images/categorias/summer.png",
  },
};
