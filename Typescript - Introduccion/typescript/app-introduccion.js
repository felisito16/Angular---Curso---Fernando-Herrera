"use strict";
(function () {
    function saludar(nombre, apellido) {
        console.table('Hola ' + nombre + ' ' + apellido); // Hola Logan
    }
    const wolverine = {
        nombre: 'Logan',
        apellido: 'Wayne'
    };
    saludar(wolverine.nombre, wolverine.apellido);
})();
