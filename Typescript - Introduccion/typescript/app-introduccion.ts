(function () {


    function saludar(nombre: string, apellido: string) {
        console.table('Hola ' + nombre + ' ' + apellido); // Hola Logan
    }
    
    const wolverine = {
        nombre: 'Logan',
        apellido: 'Wayne'
    };
    
    saludar(wolverine.nombre, wolverine.apellido);
    
})();
