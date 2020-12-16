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

        constructor( public nombre: string,
                     public equipo: string,
                     public nombreReal?: string,
                     public puedePelear: boolean = true,
                     public peleasGanadas: number = 0 ) {
        }

    }

    const antman = new Avenger('Antman', 'Capi');

    console.log(antman);

})();