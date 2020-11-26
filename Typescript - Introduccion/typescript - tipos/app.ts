(function () {

  function setEdad(masEdad: number) {
    return `La edad ahora es : (${edad+masEdad})`;
  }

  const nombre = "Felix";
  const apellido = "del Rio";
  const edad = 33;

  // const salida = nombre + apellido + edad;
  // const salida = nombre + " " + apellido + " (" + edad + ")";
  //const salida = `${ nombre } 
  //${ apellido }
  //${ edad } )`;
  const salida = `${nombre}\n${ apellido }\n${setEdad(5)}`;

  console.log(salida);

})();
