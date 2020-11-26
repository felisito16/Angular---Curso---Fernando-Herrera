(function() {

    
    const enviarMision = ( xmen: { nombre: string } ) => {
        console.log(`Enviando a ${ xmen.nombre } a la misión.`);
    }
    const regresarAlCuartel = ( xmen: { nombre: string } ) => {
        console.log(`Enviando a ${ xmen.nombre } al cuartel.`);
    }

    const wolverine = {
        nombre: 'Logan',
        edad: 60
    }

    enviarMision( wolverine );

})