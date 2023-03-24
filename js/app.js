// Menu Responsive:
var btnMenuOpen = document.getElementById("btnMenuOpen"),
    btnMenuClose = document.getElementById("btnMenuClose"),
    menuResponsive = document.getElementById("menuBar"),
    enlaces = document.getElementById("enlaces");

    // Click Abrir menu:
    btnMenuOpen.addEventListener("click", function(){
        menuResponsive.classList.add("active");
    });

    // click Cerrar Menu:
    btnMenuClose.addEventListener("click", function(){
        menuResponsive.classList.remove("active");
    });


    // Cerrar menu con delay:
    enlaces.addEventListener("click", function(){
        menuResponsive.style.transitionDelay = "0.5s";
        menuResponsive.classList.remove("active");
    });

    
    
// SLIDER PRODUCTOS

// Tener en cuenta, con querySelector, llamamos a la clase con "."
var contenedor = document.querySelector(".slider");
    btnIzquierdo = document.getElementById("btn-izquierda"),
    btnDerecho = document.getElementById("btn-derecha");

    // EVENTO PARA BOTON DERECHO:
    btnDerecho.addEventListener("click", function(){
        contenedor.scrollLeft += contenedor.offsetWidth;
    });

    btnIzquierdo.addEventListener("click", function(){
        contenedor.scrollLeft -= contenedor.offsetWidth;
    });