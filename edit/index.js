let dientes = document.querySelectorAll("a");
let diente = document.querySelector(".card");
let modal = document.querySelector("#modal-info");

dientes.forEach(dt => {
    dt.addEventListener("click", ()=>{
        modal.classList.toggle("active-modal")
    })
    
});