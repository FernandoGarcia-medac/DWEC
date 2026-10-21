/*
  Tarea 4 · DWEC Fernando José García Fernández
  Calculadora y bucles.

  Cómo usar esta plantilla:
  · Hay una función por botón. Cada una se ejecuta al pulsar su botón de index.html.
  · sumar() está hecha: es el modelo. Escribe las demás donde pone TODO y, cuando termines, borra el TODO.
  · Para leer las casillas y escribir el resultado usa las funciones de js/ayudas.js:
      leerNumero("numero1"), mostrar(texto, color), anadirLinea(texto), anadirBadge(texto, color), limpiarSalida()
  · Además de en la página, cada función deja su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");

const MAXIMO_REPETICIONES = 20;   // para que un bucle no llene la página


// ============================================================
// Ejercicio 1 · Calculadora
// ============================================================

// El modelo: lee los dos números, comprueba que están y opera
function sumar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");
 
  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Sumar: falta algún número");
  } else {
    const resultado = n1 + n2;
    mostrar(`${n1} + ${n2} = ${resultado}`);
    console.log(`Sumar: ${n1} + ${n2} = ${resultado}`);
  }
}

function restar() {
  // TODO: como sumar(), con el operador -
  
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");
 
  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Restar: falta algún número");
  } else {
    const resultado = n1 - n2;
    mostrar(`${n1} - ${n2} = ${resultado}`);
    console.log(`Restar: ${n1} - ${n2} = ${resultado}`);
  }
}


function multiplicar() {
  // TODO: como sumar(), con el operador *
  
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");
 
  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Multiplicar: falta algún número");
  } else {
    const resultado = n1 * n2;
    mostrar(`${n1} * ${n2} = ${resultado}`);
    console.log(`Multiplicar: ${n1} * ${n2} = ${resultado}`);
  }
}


function dividir() {
  // TODO: como sumar(), con el operador /
  // TODO: si el número 2 es 0, muestra un error en rojo. Ojo: en JavaScript, 5 / 0 no da error, da Infinity.
  
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");
 
  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Dividir: falta algún número");
  } else if (n2 === 0) {
    // 5 / 0 no da error, da Infinity, así que lo controlo yo
    mostrar("No se puede dividir entre 0.", "danger");
    console.error("Dividir: el número 2 es 0");
  } else {
    const resultado = n1 / n2;
    mostrar(`${n1} / ${n2} = ${resultado}`);
    console.log(`Dividir: ${n1} / ${n2} = ${resultado}`);
  }
}



function potencia() {
  // TODO: como sumar(), con el operador **
 
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");
 
  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Potencia: falta algún número");
  } else {
    const resultado = n1 ** n2;
    mostrar(`${n1} elevado a ${n2} = ${resultado}`);
    console.log(`Potencia: ${n1} ** ${n2} = ${resultado}`);
  }
}


function modulo() {
  // TODO: el resto de la división, con el operador %
  // TODO: si el número 2 es 0, muestra un error en rojo (5 % 0 da NaN).
  
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");
 
  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Módulo: falta algún número");
  } else if (n2 === 0) {
    // 5 % 0 da NaN, también lo controlo
    mostrar("No se puede sacar el resto de dividir entre 0.", "danger");
    console.error("Módulo: el número 2 es 0");
  } else {
    const resultado = n1 % n2;
    mostrar(`${n1} % ${n2} = ${resultado}`);
    console.log(`Módulo: ${n1} % ${n2} = ${resultado}`);
  }
}



// ============================================================
// Ejercicio 2 · Comparaciones
// ============================================================

function cualEsMayor() {
  // TODO: con if, else if y else, di cuál de los dos números es mayor o si son iguales.
  
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");
 
  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números para compararlos.", "danger");
    console.warn("Cuál es mayor: falta algún número");
  } else if (n1 > n2) {
    mostrar(`${n1} es mayor que ${n2}`, "info");
    console.log(`Cuál es mayor: ${n1} > ${n2}`);
  } else if (n1 < n2) {
    mostrar(`${n2} es mayor que ${n1}`, "info");
    console.log(`Cuál es mayor: ${n2} > ${n1}`);
  } else {
    mostrar(`Los dos números son iguales (${n1})`, "info");
    console.log(`Cuál es mayor: ${n1} y ${n2} son iguales`);
  }
}


function parOImpar() {
  // TODO: solo con el número 1. Usa el operador % y el ternario ( condición ? "par" : "impar" ).
  // TODO: si el número tiene decimales, avisa de que no es ni par ni impar.
  
  const n1 = leerNumero("numero1");
 
  if (Number.isNaN(n1)) {
    mostrar("Escribe el número 1.", "danger");
    console.warn("Par o impar: falta el número 1");
  } else if (n1 % 1 !== 0) {
    // si el resto entre 1 no es 0, el número tiene decimales
    mostrar(`${n1} tiene decimales, no es ni par ni impar.`, "warning");
    console.warn(`Par o impar: ${n1} tiene decimales`);
  } else {
    const tipo = n1 % 2 === 0 ? "par" : "impar";
    mostrar(`${n1} es ${tipo}`, "info");
    console.log(`Par o impar: ${n1} es ${tipo}`);
  }
}



// ============================================================
// Ejercicio 3 · Bucles con texto
// El número 1 dice cuántas veces se repite cada bucle
// ============================================================

function bucleFor() {
  const veces = leerNumero("numero1");
  limpiarSalida();
 
  if (Number.isNaN(veces) || veces % 1 !== 0 || veces > MAXIMO_REPETICIONES) {
    mostrar(`Escribe en el número 1 un entero de ${MAXIMO_REPETICIONES} como máximo.`, "danger");
    console.warn("for: número no válido");
  } else {
    let contador = 0;
 
    for (let i = 1; i <= veces; i++) {
      anadirLinea(`for: repetición ${i} de ${veces}`);
      console.log(`for: repetición ${i} de ${veces}`);
      contador++;
    }
 
    const palabra = contador === 1 ? "repetición" : "repeticiones";
    anadirLinea(`Total: ${contador} ${palabra}`);
    console.log(`for: total ${contador} ${palabra}`);
  }
}

function bucleWhile() {
  const veces = leerNumero("numero1");
  limpiarSalida();
 
  if (Number.isNaN(veces) || veces % 1 !== 0 || veces > MAXIMO_REPETICIONES) {
    mostrar(`Escribe en el número 1 un entero de ${MAXIMO_REPETICIONES} como máximo.`, "danger");
    console.warn("while: número no válido");
  } else {
    let contador = 0;
    let i = 1;
 
    // primero comprueba la condición y luego repite
    while (i <= veces) {
      anadirLinea(`while: repetición ${i} de ${veces}`);
      console.log(`while: repetición ${i} de ${veces}`);
      contador++;
      i++;
    }
 
    const palabra = contador === 1 ? "repetición" : "repeticiones";
    anadirLinea(`Total: ${contador} ${palabra}`);
    console.log(`while: total ${contador} ${palabra}`);
  }
}
function bucleDoWhile() {
  // TODO: lo mismo que bucleFor(), con un do…while. Pruébalo con 0 y con un negativo: ¿qué pasa?
  const veces = leerNumero("numero1");
  limpiarSalida();
 
  if (Number.isNaN(veces) || veces % 1 !== 0 || veces > MAXIMO_REPETICIONES) {
    mostrar(`Escribe en el número 1 un entero de ${MAXIMO_REPETICIONES} como máximo.`, "danger");
    console.warn("do while: número no válido");
  } else {
    let contador = 0;
    let i = 1;
 
    // primero repite y luego comprueba, por eso con 0 o negativo entra una vez
    do {
      anadirLinea(`do while: repetición ${i} de ${veces}`);
      console.log(`do while: repetición ${i} de ${veces}`);
      contador++;
      i++;
    } while (i <= veces);
 
    const palabra = contador === 1 ? "repetición" : "repeticiones";
    anadirLinea(`Total: ${contador} ${palabra}`);
    console.log(`do while: total ${contador} ${palabra}`);
  }
}


// ============================================================
// Ejercicio 4 · Bucles con badges
// ============================================================

function badgesFor() {
  // TODO: como bucleFor(), pero cada vuelta añade un badge con el número de la repetición:
  //         anadirBadge(i, "primary");
  // TODO: los pares, de un color y los impares, de otro. Elige el color con el operador ternario.
  const veces = leerNumero("numero1");
  limpiarSalida();
 
  if (Number.isNaN(veces) || veces % 1 !== 0 || veces > MAXIMO_REPETICIONES) {
    mostrar(`Escribe en el número 1 un entero de ${MAXIMO_REPETICIONES} como máximo.`, "danger");
    console.warn("badges for: número no válido");
  } else {
    let contador = 0;
 
    for (let i = 1; i <= veces; i++) {
      const color = i % 2 === 0 ? "primary" : "danger";
      anadirBadge(i, color);
      console.log(`badges for: ${i} en ${color}`);
      contador++;
    }
 
    const palabra = contador === 1 ? "repetición" : "repeticiones";
    anadirLinea(`Total: ${contador} ${palabra}`);
    console.log(`badges for: total ${contador} ${palabra}`);
  }
}

function badgesWhile() {
  // TODO: lo mismo que badgesFor(), con un while.
  const veces = leerNumero("numero1");
  limpiarSalida();
 
  if (Number.isNaN(veces) || veces % 1 !== 0 || veces > MAXIMO_REPETICIONES) {
    mostrar(`Escribe en el número 1 un entero de ${MAXIMO_REPETICIONES} como máximo.`, "danger");
    console.warn("badges while: número no válido");
  } else {
    let contador = 0;
    let i = 1;
 
    while (i <= veces) {
      const color = i % 2 === 0 ? "primary" : "danger";
      anadirBadge(i, color);
      console.log(`badges while: ${i} en ${color}`);
      contador++;
      i++;
    }
 
    const palabra = contador === 1 ? "repetición" : "repeticiones";
    anadirLinea(`Total: ${contador} ${palabra}`);
    console.log(`badges while: total ${contador} ${palabra}`);
  }
}

function badgesDoWhile() {
  // TODO: lo mismo que badgesFor(), con un do…while.
  const veces = leerNumero("numero1");
  limpiarSalida();
 
  if (Number.isNaN(veces) || veces % 1 !== 0 || veces > MAXIMO_REPETICIONES) {
    mostrar(`Escribe en el número 1 un entero de ${MAXIMO_REPETICIONES} como máximo.`, "danger");
    console.warn("badges do while: número no válido");
  } else {
    let contador = 0;
    let i = 1;
 
    do {
      const color = i % 2 === 0 ? "primary" : "danger";
      anadirBadge(i, color);
      console.log(`badges do while: ${i} en ${color}`);
      contador++;
      i++;
    } while (i <= veces);
 
    const palabra = contador === 1 ? "repetición" : "repeticiones";
    anadirLinea(`Total: ${contador} ${palabra}`);
    console.log(`badges do while: total ${contador} ${palabra}`);
  }
}
