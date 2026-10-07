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
 
    const booleanoDeTexto = Boolean("texto");//espero: true de tipo boolean
    console.log('Boolean("texto") →', booleanoDeTexto, typeof booleanoDeTexto);
 
    const booleanoDeVacio = Boolean("");//espero: false de tipo boolean
    console.log('Boolean("") →', booleanoDeVacio, typeof booleanoDeVacio);
}


//Ejercicio 3: Coerción y comparaciones
function ejercicio3() {
    console.log("Ejercicio 3: Coerción y comparaciones ---");
    // Seis expresiones que mezclan tipos
    console.log('"5" - 2 →', "5" - 2);// espero: 3
    console.log('"5" + 2 →', "5" + 2); //espero:"52"
    console.log('"10" * "2" →', "10" * "2");//espero: 20
    console.log("true + 1 →", true + 1);   // espero: 2
    console.log('"3" + 4 + 5 →', "3" + 4 + 5);//espero: "345"
    console.log('"hola" - 1 →', "hola" - 1);//espero: NaN
 
    // Tres parejas comparadas con == y con ===
    console.log('5 == "5" →', 5 == "5");// espero:true
    console.log('5 === "5" →', 5 === "5");//espero:false
    console.log("0 == false →", 0 == false);//espero:true
    console.log("0 === false →", 0 === false);//espero:falso
    console.log("null == undefined →", null == undefined);// espero: true
    console.log("null === undefined →", null === undefined);//espero: false
}


//Ejercicio 4: Tu ficha con plantillas de cadena
function ejercicio4() {
    console.log("Ejercicio 4: Tu ficha con plantillas de cadena");
 
    //Mis datos, con const
    const nombre = "Fernando";
    const ciclo = "DAW";
    const curso = "2º";
    const aficion = "programador";
 
    //Un dato que cambia, con let
    let horasEstudiadas = 6;
    horasEstudiadas += 4;
 
    //La ficha con plantilla de cadena:con ${ }
    const ficha = `Me llamo ${nombre}, estudio ${ciclo} en ${curso} y mi afición es ${aficion}. Esta semana he estudiado ${horasEstudiadas} horas.`;
    alert(ficha);
    console.log("Ficha con plantilla:", ficha);
 
    //La misma ficha concatenando con +
    const fichaConMas = "Me llamo " + nombre + ", estudio " + ciclo + " en " + curso + " y mi afición es " + aficion + ". Esta semana he estudiado " + horasEstudiadas + " horas.";
    console.log("Ficha con +:", fichaConMas);

    // Comparo las dos con ===: tiene que salir true
    console.log("¿Son iguales? →", ficha === fichaConMas);
 
    // El error de dar otro valor a una const se provoca en la consola del navegador, no aquí.
}
