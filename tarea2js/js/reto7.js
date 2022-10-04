

function mostrarGames() {
  // la variable x muestra la lis ta por medio del ID myList
  let games = document.getElementById("games").innerHTML;
  document.getElementById("resultado-juegos").innerHTML = games;
  document.getElementById("resultado-juegos").classList.remove("d-none");
  document.getElementById("btn-ocultar-games").classList.remove("d-none");
  document.getElementById("btn-mostrar-games").classList.add("d-none");
}
function ocultarGames() {
  // la variable x muestra la lis ta por medio del ID myList
  let musica = document.getElementById("games").innerHTML;
  document.getElementById("resultado-juegos").innerHTML = musica;
  document.getElementById("resultado-juegos").classList.add("d-none");
  document.getElementById("btn-ocultar-games").classList.add("d-none");
  document.getElementById("btn-mostrar-games").classList.remove("d-none");
}

function mostrarMusica() {
  // la variable x muestra la lis ta por medio del ID myList
  let musica = document.getElementById("musica").innerHTML;
  document.getElementById("resultado-musica").innerHTML = musica;
  document.getElementById("resultado-musica").classList.remove("d-none");
  document.getElementById("btn-ocultar-musica").classList.remove("d-none");
  document.getElementById("btn-mostrar-musica").classList.add("d-none");
}
function ocultarMusica() {
  // la variable x muestra la lis ta por medio del ID myList
  let peliculas = document.getElementById("musica").innerHTML;
  document.getElementById("resultado-musica").innerHTML = peliculas;
  document.getElementById("resultado-musica").classList.add("d-none");
  document.getElementById("btn-ocultar-musica").classList.add("d-none");
  document.getElementById("btn-mostrar-musica").classList.remove("d-none");
}

function mostrarPeliculas() {
  // la variable x muestra la lis ta por medio del ID myList
  let musica = document.getElementById("peliculas").innerHTML;
  document.getElementById("resultado-peliculas").innerHTML = musica;
  document.getElementById("resultado-peliculas").classList.remove("d-none");
  document.getElementById("btn-ocultar-peliculas").classList.remove("d-none");
  document.getElementById("btn-mostrar-peliculas").classList.add("d-none");
}
function ocultarPeliculas() {
  // la variable x muestra la lis ta por medio del ID myList
  let peliculas = document.getElementById("peliculas").innerHTML;
  document.getElementById("resultado-peliculas").innerHTML = peliculas;
  document.getElementById("resultado-peliculas").classList.add("d-none");
  document.getElementById("btn-ocultar-peliculas").classList.add("d-none");
  document.getElementById("btn-mostrar-peliculas").classList.remove("d-none");
}
