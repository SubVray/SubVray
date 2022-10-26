let select1 = document.querySelector("#lugar select");
let select2 = document.querySelector("#fecha select");

let tab1 = document.getElementById("tab1");
let tab2 = document.getElementById("tab2");
let tab3 = document.getElementById("tab3");

select1.onchange = function () {
  if (select1.value == 1) {
    tab1.classList.add("active-tab");
    tab2.classList.remove("active-tab");
    tab2.classList.add("disable-tab");
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
