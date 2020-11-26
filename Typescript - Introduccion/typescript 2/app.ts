(function () {
  // let mensaje = 'Hola'; Tambien valdria asi, y ademas TS lo tiparia solo
  let mensaje: string = "Hola";
  let numero: number = 123;
  let booleano: boolean = true;
  let hoy: Date = new Date();

  // Mezclas -> Valida que se le puedan poner 2 tipos de variables
  let camaleon: string | number;
  camaleon = "Hello";
  camaleon = 123;

  // Objetos
  let spiderman = {
    nombre: "Peter",
    edad: 30,
  };
  spiderman = {
    nombre: "Felix",
    edad: 26,
  };

  console.log(mensaje);
})();
