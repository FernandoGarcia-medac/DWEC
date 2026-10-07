/*
  Tarea 3 · DWEC · Fernando José García Fernández
  Variables, tipos y conversiones.

  Cómo usar esta plantilla:
  · Hay una función por ejercicio. Cada una se ejecuta al pulsar su botón «Ejecutar» de index.html.
  · Escribe tu código DENTRO de cada función, donde pone TODO. Cuando lo hagas, borra el TODO.
  · Solo console.log() y alert(): el JavaScript no escribe nada dentro de la página.
  · let y const, nunca var. Comillas rectas (" o ').
*/

console.log("app.js cargado: pulsa «Ejecutar» en cada ejercicio");


// Ejercicio 1: Variables y typeof
function ejercicio1() {
    console.log("Ejercicio 1: Variables y typeof");
    // number
    const edad = 21;   // espero que sea number
    console.log("edad =", edad, "→", typeof edad);
    // string
    const nombre = "Fernando";   // espero que sea string
    console.log("nombre =", nombre, "→", typeof nombre);
    // boolean
    const estudiaDaw = true;   // espero que sea boolean
    console.log("estudiaDaw =", estudiaDaw, "→", typeof estudiaDaw);
    // null
    const segundoTitulo = null;   // espero que sea object (es un error histórico de JavaScript)
    console.log("segundoTitulo =", segundoTitulo, "→", typeof segundoTitulo);
    // bigint (entero terminado en n)
    const numeroGrande = 10n;   // espero que sea bigint
    console.log("numeroGrande =", numeroGrande, "→", typeof numeroGrande);
    // undefined: let sin valor al declararla
    let horasEstudiadas;   // espero que sea undefined
    console.log("horasEstudiadas =", horasEstudiadas, "→", typeof horasEstudiadas);
    // Ahora le doy valor a la let y vuelvo a mostrar su typeof
    horasEstudiadas = 6;   // espero que sea number
    console.log("horasEstudiadas =", horasEstudiadas, "→", typeof horasEstudiadas);
}


// Ejercicio 2: Conversiones explícitas
// Escribo el comentario «espero» ANTES de ejecutar. Si fallo, no lo cambio: lo marco en la tabla de la página.
function ejercicio2() {
    console.log("Ejercicio 2: Conversiones explícitas");
 
    const textoDe123 = String(123);// espero: 123 string
    console.log("String(123) →", textoDe123, typeof textoDe123);
 
    const numeroDe123 = Number("123");//espero: 123 number
    console.log('Number("123") →', numeroDe123, typeof numeroDe123);
 
    const numeroDe12abc = Number("12abc");//espero: NaN y number
    console.log('Number("12abc") →', numeroDe12abc, typeof numeroDe12abc);
 
    const numeroDeVacio = Number("");//espero: 0, number
    console.log('Number("") →', numeroDeVacio, typeof numeroDeVacio);
 
    const numeroDeTrue = Number(true);// espero: 1, number
    console.log("Number(true) →", numeroDeTrue, typeof numeroDeTrue);
 
    const booleanoDeCero = Boolean(0);// espero: false de tipo boolean
    console.log("Boolean(0) →", booleanoDeCero, typeof booleanoDeCero);
 
    const booleanoDeTexto = Boolean("texto");//
    console.log('Boolean("texto") →', booleanoDeTexto, typeof booleanoDeTexto);
 
    const booleanoDeVacio = Boolean("");//
    console.log('Boolean("") →', booleanoDeVacio, typeof booleanoDeVacio);
}


// Ejercicio 3: Coerción y comparaciones
function ejercicio3() {
  console.log("Ejercicio 3: Coerción y comparaciones");

  // Ejemplo: una expresión que mezcla tipos
  console.log('"5" - 2 →', "5" - 2);   // espero [tu predicción]

  // TODO: cinco expresiones más que mezclen tipos (al menos dos inventadas por ti), cada una con su «espero …».

  // Ejemplo: la misma pareja comparada con == y con ===
  console.log('5 == "5" →', 5 == "5");     // espero [tu predicción]
  console.log('5 === "5" →', 5 === "5");   // espero [tu predicción]

  // TODO: haz lo mismo con 0 y false, y con null y undefined.
}


// Ejercicio 4: Tu ficha con plantillas de cadena
function ejercicio4() {
  console.log("Ejercicio 4: Tu ficha con plantillas de cadena");

  // Tus datos, con const
  const nombre = "[Tu nombre]";
  // TODO: ciclo, curso y una afición, también con const.

  // Un dato que cambia, con let
  // TODO: por ejemplo, las horas que has estudiado esta semana. Después súmale algo con +=.

  // La ficha con plantilla de cadena: backticks (`) y ${ }
  const ficha = `Soy ${nombre}.`;
  // TODO: completa la ficha con todos tus datos y muéstrala con alert() y en la consola.

  // TODO: escribe la misma ficha concatenando con + en una constante fichaConMas y muéstrala en la consola.
  // TODO: compara las dos con === y muestra el resultado en la consola: tiene que salir true.

  // Recuerda: el error de dar otro valor a una const se provoca en la consola del navegador, no aquí.
}
