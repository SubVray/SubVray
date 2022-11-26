const langEl = document.querySelector(".langWrap");
const links = document.querySelectorAll("header button");
const inicio = document.querySelector(".inicio");
const promociones = document.querySelector(".promociones");
const sucursales = document.querySelector(".sucursales");
const categorias = document.querySelector(".categorias");
const bebes = document.querySelector(".bebes");
const juegosMesa = document.querySelector(".juegos-mesa");
const deportes = document.querySelector(".deportes");
const nerf = document.querySelector(".nerf");
const motorafina = document.querySelector(".motorafina");
const verano = document.querySelector(".verano");

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
    promociones.textContent = changeLanguage[attr].promociones;
    sucursales.textContent = changeLanguage[attr].sucursales;
    categorias.textContent = changeLanguage[attr].categorias;
    bebes.textContent = changeLanguage[attr].bebes;
    juegosMesa.textContent = changeLanguage[attr].juegosMesa;
    deportes.textContent = changeLanguage[attr].deportes;
    nerf.textContent = changeLanguage[attr].nerf;
    motorafina.textContent = changeLanguage[attr].motorafina;
    verano.textContent = changeLanguage[attr].verano;
    imgBebes.src = changeLanguage[attr].imgBebes;
    imgJuegosMesa.src = changeLanguage[attr].imgJuegosMesa;
    imgDeportes.src = changeLanguage[attr].imgDeportes;
    imgNerf.src = changeLanguage[attr].imgNerf;
    imgMotoraFina.src = changeLanguage[attr].imgMotoraFina;
    imgVerano.src = changeLanguage[attr].imgVerano;
  });
});

let changeLanguage = {
  spanish: {
    inicio: "Inicio",
    promociones: "Promociones",
    sucursales: "Sucursales",
    categorias: "Categorías ",
    bebes: "Bebes",
    juegosMesa: "Juegos de mesa",
    deportes: "Deportes",
    nerf: "Armas Nerf",
    motorafina: "Motorafina",
    verano: "Verano",
    // agregar titulos

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
    promociones: "promotions",
    sucursales: "Branches",
    categorias: "categories ",
    bebes: "Babies",
    juegosMesa: "Table games",
    deportes: "Sports",
    nerf: "Gun Nerf",
    motorafina: "Fine Motor Skills ",
    verano: "Summer",
    // agregar titulos

    // images categories
    imgBebes: "images/categorias/babies.png",
    imgJuegosMesa: "images/categorias/tablegames.gif",
    imgDeportes: "images/categorias/sports.png",
    imgNerf: "images/categorias/nerfguns.png",
    imgMotoraFina: "images/categorias/finemotorskills.png",
    imgVerano: "images/categorias/summer.png",
  },
};
