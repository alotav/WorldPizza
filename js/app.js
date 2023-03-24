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

    
    
    