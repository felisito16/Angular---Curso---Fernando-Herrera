(function () {

    // Extraer propiedades de un objeto directamente
    const avenger = {
        nombre: 'Steve',
        clave:  'Capitán América',
        poder:  'Droga'
    };
    
    const extraer = ( { nombre, clave, poder }: any ) => {
        
        // const { nombre, clave, poder } = avenger;
        
        console.log( nombre );
        console.log( clave );
        console.log( poder );
    }
    
    extraer( avenger );
    
    // Extraer el valor de las posiciones de un array directamente
    const avengers: string[] = ['Thor', 'Ironman', 'Spiderman'];

    const [ thor, ironman, spiderman ] = avengers;

    // Para coger solamente la tercera posicion del array y darle una
    // variable concreta para usarla
    // const [ , , spiderman ] = avengers;

    console.log(thor);
    console.log(ironman);
    console.log(spiderman);

    const extraerArray = ( [ thor, ironman, spiderman ]: string[] ) => {
        console.log( thor );
        console.log( ironman );
        console.log( spiderman );
    }

    extraerArray( avengers );
    
})();
