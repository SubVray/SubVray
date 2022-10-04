

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
  let games = document.getElementById("games").innerHTML;
  document.getElementById("resultado-juegos").innerHTML = games;
  document.getElementById("resultado-juegos").classList.add("d-none");
  document.getElementById("btn-ocultar-games").classList.add("d-none");
  document.getElementById("btn-mostrar-games").classList.remove("d-none");
}

function mostrarStreamers() {
  // la variable x muestra la lis ta por medio del ID myList
  let streamers = document.getElementById("streamers").innerHTML;
  document.getElementById("resultado-streamers").innerHTML = streamers;
  document.getElementById("resultado-streamers").classList.remove("d-none");
  document.getElementById("btn-ocultar-streamers").classList.remove("d-none");
  document.getElementById("btn-mostrar-streamers").classList.add("d-none");
}
function ocultarStreamers() {
  // la variable x muestra la lis ta por medio del ID myList
  let streamers = document.getElementById("streamers").innerHTML;
  document.getElementById("resultado-streamers").innerHTML = streamers;
  document.getElementById("resultado-streamers").classList.add("d-none");
  document.getElementById("btn-ocultar-streamers").classList.add("d-none");
  document.getElementById("btn-mostrar-streamers").classList.remove("d-none");
}

function mostrarPeliculas() {
  // la variable x muestra la lis ta por medio del ID myList
  let peliculas = document.getElementById("peliculas").innerHTML;
  document.getElementById("resultado-peliculas").innerHTML = peliculas;
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
