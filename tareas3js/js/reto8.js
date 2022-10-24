let n = 0;
window.onload = function () {
  document.getElementById("lugares").onchange = function (e) {
    n = e.target.value;
    let archivo = `images/volcan${n}.jpg`;
    document.getElementById("img").src = archivo;

    if (n == 0) {
      document.getElementById("descripcion").innerHTML = "";
    } else if (n == 1) {
      document.getElementById("descripcion").innerHTML =
        "El Volcán Poás, es un estratovolcán activo de 2.697 metros en el centro de Costa Rica y está ubicado dentro del Parque Nacional Volcán Poás. Ha entrado en erupción 40 veces desde 1828, incluido abril de 2017 cuando los visitantes y residentes fueron evacuados.";
    } else if (n == 2) {
      descripcion.innerHTML =
        "El Volcán Arenal es un estratovolcán andesítico activo en el noroeste de Costa Rica a unos 90 km al noroeste de San José, en la provincia de Alajuela, cantón de San Carlos y distrito de La Fortuna. El volcán Arenal mide al menos 1.633 metros de altura. Tiene forma cónica con un cráter de 140 metros de diámetro.";
    } else if (n == 3) {
      descripcion.innerHTML =
        "El Volcán Irazú es un volcán activo en Costa Rica, situado en la Cordillera Central cerca de la ciudad de Cartago. El nombre podría provenir de la combinación de 'ara' y 'tzu' o de una corrupción de Iztarú, que era el nombre de un pueblo indígena en las faldas del volcán.";
    } else if (n == 4) {
      descripcion.innerHTML =
        "El Volcán Turrialba es un volcán activo en el centro de Costa Rica que ha tenido una erupción explosiva en los últimos años, incluido 2016 y en enero, marzo y abril de 2017.";
    }
  };
};
