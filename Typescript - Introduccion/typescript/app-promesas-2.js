"use strict";
(function () {
    const retirarDinero = (cantidadRetirar) => {
        let dineroActual = 1000;
        return new Promise((resolve, reject) => {
            if (cantidadRetirar > dineroActual) {
                reject('No hay suficiente dinero.');
            }
            else {
                dineroActual -= cantidadRetirar;
                resolve(dineroActual);
            }
        });
    };
    retirarDinero(500)
        .then(dineroActual => console.log(`Me queda ${dineroActual}.`))
        //.catch( err => console.warn('No hay suficientes fondos') )
        .catch(console.warn);
})();
