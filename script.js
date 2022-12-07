
/*
document.querySelector(".hamburguer").addEventListener("click",()=>
    document.querySelector(".container").classList.toggle("show-menu"));*/

var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click",function(){
    var sideber = document.querySelector(".container").classList.toggle("show-menu");
});



