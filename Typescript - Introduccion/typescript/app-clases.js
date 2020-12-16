"use strict";
(() => {
    // Manera 1
    /* class Avenger {

        nombre: string = 'Sin nombre';
        equipo: string = 'Ninguno';
        nombreReal: string = 'Sin nombre real';

        puedePelear: boolean = true;
        peleasGanadas: number = 2;

        constructor( nombre:string, equipo: string ) {
            this.nombre = nombre;
            this.equipo = equipo;
        }

    }

    const antman = new Avenger('Antman','Capi');

    console.log(antman); */
    // Manera 2
    class Avenger {
        // nombre: string = 'Sin nombre';
        // equipo: string = 'Ninguno';
        // nombreReal: string = 'Sin nombre real';
        // puedePelear: boolean = true;
        // peleasGanadas: number = 2;
        constructor(nombre, equipo, nombreReal, puedePelear = true, peleasGanadas = 0) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
        }
    }
    const antman = new Avenger('Antman', 'Capi');
    console.log(antman);
})();
