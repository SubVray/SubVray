let select1 = document.querySelector("#lugar select");
let select2 = document.querySelector("#fecha select");

let tab1 = document.getElementById("tab1");
let tab2 = document.getElementById("tab2");
let tab3 = document.getElementById("tab3");
let tienda1 = document.getElementById("content-tienda1");
let outlet1 = document.getElementById("content-outlet1");
let tienda2 = document.getElementById("content-tienda2");
let outlet2 = document.getElementById("content-outlet2");
let tienda3 = document.getElementById("content-tienda3");
let outlet3 = document.getElementById("content-outlet3");

select1.onchange = function () {
  if (select1.value == 1) {
    tab1.classList.add("active-tab");
    tab2.classList.remove("active-tab");
    tab2.classList.add("disable-tab");
    tab3.classList.remove("active-tab");
    tab3.classList.add("disable-tab");
  }
  if (select1.value == 2) {
    tab1.classList.add("disable-tab");
    tab1.classList.remove("active-tab");
    tab3.classList.add("disable-tab");
    tab3.classList.remove("active-tab");
    tab2.classList.add("active-tab");
  }
  if (select1.value == 3) {
    tab1.classList.remove("active-tab");
    tab2.classList.remove("active-tab");
    tab2.classList.add("disable-tab");
    tab1.classList.add("disable-tab");
    tab3.classList.add("active-tab");
  }
};

select2.onchange = function () {
  if (select2.value == "tienda") {
    document.querySelectorAll(".op").forEach((lk) => {
      lk.innerHTML = "/ Tienda";
    });
    // 1
    outlet1.classList.add("disable-tab");
    outlet1.classList.remove("active-tab");
    tienda1.classList.remove("disable-tab");
    tienda1.classList.add("active-tab");
    // 2
    outlet2.classList.add("disable-tab");
    outlet2.classList.remove("active-tab");
    tienda2.classList.remove("disable-tab");
    tienda2.classList.add("active-tab");
    // 3
    outlet3.classList.add("disable-tab");
    outlet3.classList.remove("active-tab");
    tienda3.classList.remove("disable-tab");
    tienda3.classList.add("active-tab");
  }
  if (select2.value == "outlet") {
    document.querySelectorAll(".op").forEach((lk) => {
      lk.innerHTML = "/ Outlet";
    });
    // 1
    outlet1.classList.remove("disable-tab");
    outlet1.classList.add("active-tab");
    tienda1.classList.remove("active-tab");
    tienda1.classList.add("disable-tab");
    // 2
    outlet2.classList.remove("disable-tab");
    outlet2.classList.add("active-tab");
    tienda2.classList.remove("active-tab");
    tienda2.classList.add("disable-tab");
    // 3
    outlet3.classList.remove("disable-tab");
    outlet3.classList.add("active-tab");
    tienda3.classList.remove("active-tab");
    tienda3.classList.add("disable-tab");
  }
};
