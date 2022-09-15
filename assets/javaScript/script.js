// seção de tratamento do menu mobile
const btnMobile = document.getElementById("hamburguer");
let menu = document.querySelector(".menu");

let iconMinus = document.getElementById("btn__minus");
let iconPlus = document.getElementById("btn__plus");
let counter = document.querySelector(".counter");
let acumuladora = 0;


//function menu hamburger
const iconClose = document.querySelector(".icon-close")

btnMobile.addEventListener("click", function(){
  
    menu.classList.remove("hiden");
});

iconClose.addEventListener("click", function(){
    menu.classList.toggle("hiden");
})

//function counter

iconMinus.addEventListener("click", function(){
    acumuladora--;
   counter.textContent = acumuladora;
})

iconPlus.addEventListener("click", function(){
    acumuladora++;
   counter.textContent = acumuladora;
})