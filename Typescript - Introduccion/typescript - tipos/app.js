"use strict";
(function () {
    function setEdad(masEdad) {
        return "La edad ahora es : (" + (edad + masEdad) + ")";
    }
    var nombre = "Felix";
    var apellido = "del Rio";
    var edad = 33;
    // const salida = nombre + apellido + edad;
    // const salida = nombre + " " + apellido + " (" + edad + ")";
    //const salida = `${ nombre } 
    //${ apellido }
    //${ edad } )`;
    var salida = nombre + "\n" + apellido + "\n" + setEdad(5);
    console.log(salida);
})();
