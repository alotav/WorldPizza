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

    
    
    // VALIDACION FORMULARIO

    var formulario = document.getElementById("formulario")
    
    
    function validar(e){
        //validar recibe el evento por e
        var inputNombre = document.getElementById("nombre"),
            inputEmail = document.getElementById("email"),
            inputComents = document.getElementById("comentarios"),
            alertSuccess = document.getElementById("alertSuccess"),
            alertError = document.getElementById("alertError");

        if(inputNombre.value == 0 || inputEmail.value == 0 || inputComents.value == 0){
            //detenemos el submit
            e.preventDefault();
            // alert("Datos vacios.")
            alertError.classList.remove("hide");
            alertError.classList.add("show");

            // Timeout para aparicion de alertas
            setTimeout(function() {
                alertError.classList.remove("show");
                alertError.classList.add("hide");
            }, 2000);

        }else{
            e.preventDefault();
            // alert("Datos enviados.");

            alertSuccess.classList.remove("hide");
            alertSuccess.classList.add("show");

            // Timeout para aparicion de alertas
            setTimeout(function() {
                alertSuccess.classList.remove("show");
                alertSuccess.classList.add("hide");
            }, 2000);

            inputNombre.value = "";
            inputEmail.value = "";
            inputComents.value = "";
        }

        
    }


    formulario.addEventListener("submit", validar);

    
    
// BOTON SCROLL: //

var btnTop = document.getElementById("btn-top"),
    logo = document.getElementById("logo");

// Detectar scroll:

// listener a la ventana
window.addEventListener("scroll", function(){
    //documentElement verifica al doc html
    //scrollTop es el valor en px q se realizo en el doc html
    var scroll = document.documentElement.scrollTop;

    // obtenemos el tamano completo del html
    var fullSize = document.documentElement.offsetHeight;
    // obtenemos el tamano completo del viewport (pantalla)
    var sizeVP = document.documentElement.clientHeight;

    if(scroll > 100){
        btnTop.classList.add("show");
    }else{
        btnTop.classList.remove("show");
    }


    // MODIFICAMOS POSICION DEL BTN CUANDO LLEGA AL FINAL DE PAGINA
    if(fullSize == (scroll + sizeVP)){
        btnTop.classList.add("scrollFinal");
    }else{
        btnTop.classList.remove("scrollFinal");
    }

});


    // BETECTAMOS CLICK PARA SUBIR

    btnTop.addEventListener("click", function () {
        //valores de X,Y
        window.scrollTo(0,0);
    });

    // DETECTAMOS CLICK EN EL LOGO

    logo.addEventListener("click", function(){
        window.scrollTo(0,0);
    });