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


// Ejercicio 2 · Conversiones explícitas
function ejercicio2() {
  console.log("--- Ejercicio 2 · Conversiones explícitas ---");

  const a = String(123);   // espero:
  console.log("String(123) →", a, typeof a);

  const b = Number("123");   // espero:
  console.log('Number("123") →', b, typeof b);

  const c = Number("12abc");   // espero:
  console.log('Number("12abc") →', c, typeof c);

  const d = Number("");   // espero:
  console.log('Number("") →', d, typeof d);

  const e = Number(true);   // espero:
  console.log("Number(true) →", e, typeof e);

  const f = Boolean(0);   // espero:
  console.log("Boolean(0) →", f, typeof f);

  const g = Boolean("texto");   // espero:
  console.log('Boolean("texto") →', g, typeof g);

  const h = Boolean("");   // espero:
  console.log('Boolean("") →', h, typeof h);
}


// Ejercicio 3 · Coerción y comparaciones
function ejercicio3() {
  console.log("--- Ejercicio 3 · Coerción y comparaciones ---");

  // Ejemplo: una expresión que mezcla tipos
  console.log('"5" - 2 →', "5" - 2);   // espero [tu predicción]

  // TODO: cinco expresiones más que mezclen tipos (al menos dos inventadas por ti), cada una con su «espero …».

  // Ejemplo: la misma pareja comparada con == y con ===
  console.log('5 == "5" →', 5 == "5");     // espero [tu predicción]
  console.log('5 === "5" →', 5 === "5");   // espero [tu predicción]

  // TODO: haz lo mismo con 0 y false, y con null y undefined.
}


// Ejercicio 4 · Tu ficha con plantillas de cadena
function ejercicio4() {
  console.log("--- Ejercicio 4 · Tu ficha con plantillas de cadena ---");

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
