(function () {

    // Parte 1
    let miFuncion = function ( a: string ) {
        return a.toUpperCase();
    }
    function function2 ( a:string ) {
        return a.toUpperCase();
    }
    
    const miFuncionFlecha = ( a: string ) => a.toUpperCase();
    
    console.log( miFuncion("Normal") );
    console.log( function2("Normal 2") );
    console.log( miFuncionFlecha("Flecha") );
    
    
    // Parte 2
    const sumarN = function ( a: number, b: number ) {
        return a + b;
    }
    const sumarNFlecha = ( a: number, b: number ) => a + b;
    
    console.log( sumarN(2,3) );
    console.log( sumarNFlecha(2,3) );
    
    
    // Parte 3
    const hulk = {
        nombre: 'Hulk',
        smash() {
            setTimeout( () => {
                console.log(`¡¡¡ ${ this.nombre } smash !!!`);
            }, 1000);
        }
    }

    hulk.smash();

})();
