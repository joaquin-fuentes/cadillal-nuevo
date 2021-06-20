window.addEventListener("load", function() {

    let nav = document.querySelector(".listado-header-gral")
    let menu = document.querySelector(".menu-hamburguesa")

   
    menu.addEventListener("click",function(){
        nav.classList.toggle("activado")
    })
})