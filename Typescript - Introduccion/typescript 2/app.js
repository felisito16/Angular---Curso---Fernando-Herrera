"use strict";
(function () {
    // let mensaje = 'Hola'; Tambien valdria asi, y ademas TS lo tiparia solo
    var mensaje = "Hola";
    var numero = 123;
    var booleano = true;
    var hoy = new Date();
    // Mezclas -> Valida que se le puedan poner 2 tipos de variables
    var camaleon;
    camaleon = "Hello";
    camaleon = 123;
    // Objetos
    var spiderman = {
        nombre: "Peter",
        edad: 30,
    };
    spiderman = {
        nombre: "Felix",
        edad: 26,
    };
    console.log(mensaje);
})();
