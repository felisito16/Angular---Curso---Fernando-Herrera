"use strict";
(function () {
    // Parte 1
    let miFuncion = function (a) {
        return a.toUpperCase();
    };
    function function2(a) {
        return a.toUpperCase();
    }
    const miFuncionFlecha = (a) => a.toUpperCase();
    console.log(miFuncion("Normal"));
    console.log(function2("Normal 2"));
    console.log(miFuncionFlecha("Flecha"));
    // Parte 2
    const sumarN = function (a, b) {
        return a + b;
    };
    const sumarNFlecha = (a, b) => a + b;
    console.log(sumarN(2, 3));
    console.log(sumarNFlecha(2, 3));
    // Parte 3
    const hulk = {
        nombre: 'Hulk',
        smash() {
            setTimeout(() => {
                console.log(`¡¡¡ ${this.nombre} smash !!!`);
            }, 1000);
        }
    };
    hulk.smash();
})();
