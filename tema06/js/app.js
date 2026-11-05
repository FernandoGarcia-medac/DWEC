/*
  Tarea 6 de DWEC. Fernando José García Fernández.
  Objetos y arrays: añadir, sacar, ordenar, filtrar, buscar y transformar.
  Hay una función por botón y cada una deja un mensaje en la consola con console.log().
*/

console.log("app.js cargado");


// Ayuda: devuelve un array como texto, por ejemplo [1, 2, 3]

function comoTexto(lista) {
  return "[" + lista.join(", ") + "]";
}


// Ejercicio 1: ficha de estudiante

// Objeto con mis datos. En presentarse() uso this para leer las propiedades del propio objeto
const estudiante = {
  nombre: "Fernando José",
  apellidos: "García Fernández",
  edad: 21,
  curso: "2.º DAW",
  presentarse: function () {
    return "Soy " + this.nombre + " " + this.apellidos + ", tengo " + this.edad + " años y estudio " + this.curso + ".";
  }
};

function verFicha() {
  const salida = document.querySelector("#salida1");
  salida.textContent = "";   // vacío la ficha antes de volver a pintarla

  const lista = document.createElement("ul");
  lista.classList.add("list-group");

  // Guardo las claves en un array y leo cada valor con corchetes porque la clave está en una variable
  const claves = ["nombre", "apellidos", "edad", "curso"];
  claves.forEach(function (clave) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = clave + ": " + estudiante[clave];
    lista.append(li);
  });

  // Debajo de la lista va la frase de presentarse()
  const frase = document.createElement("p");
  frase.classList.add("fst-italic", "mt-2", "mb-0");
  frase.textContent = estudiante.presentarse();

  salida.append(lista, frase);
  console.log("Ejercicio 1: ficha", estudiante);
}

function cumplirAnios() {
  estudiante.edad = estudiante.edad + 1;
  console.log("Ejercicio 1: ahora la edad es", estudiante.edad);
  verFicha();
}

function quitarCurso() {
  delete estudiante.curso;   // la propiedad deja de existir en el objeto
  console.log("Ejercicio 1: curso borrado, ahora vale", estudiante.curso);
  verFicha();
}


// Ejercicio 2: colores

const colores = ["rojo", "verde", "azul"];

function mostrarColores() {
  const lista = document.querySelector("#listaColores");
  lista.textContent = "";   // vaciamos la lista antes de volver a pintarla

  colores.forEach(function (color) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = color;
    lista.append(li);
  });

  document.querySelector("#totalColores").textContent = colores.length;
}

function avisar2(mensaje) {
  const aviso = document.querySelector("#aviso2");
  aviso.textContent = mensaje;
  aviso.classList.remove("d-none");
}

function anadirColor() {
  const casilla = document.querySelector("#color");
  const color = casilla.value.trim();

  if (color === "") {
    avisar2("Escribe un color antes de pulsar «Añadir».");
    return;
  }

  colores.push(color);   // push añade al final
  casilla.value = "";
  document.querySelector("#aviso2").classList.add("d-none");
  mostrarColores();
  console.log("Ejercicio 2: push →", comoTexto(colores));
}

function quitarUltimo() {
  // Si no hay colores aviso y salgo sin quitar nada
  if (colores.length === 0) {
    avisar2("La lista está vacía, no hay colores que quitar.");
    console.log("Ejercicio 2: lista vacía, pop no hace nada");
    return;
  }

  const color = colores.pop();   // pop saca el último y me lo devuelve
  document.querySelector("#aviso2").classList.add("d-none");
  mostrarColores();   // vuelve a pintar la lista y actualiza el contador
  console.log("Ejercicio 2: pop ha sacado " + color + ", quedan " + comoTexto(colores));
}

function quitarPrimero() {
  if (colores.length === 0) {
    avisar2("La lista está vacía, no hay colores que quitar.");
    console.log("Ejercicio 2: lista vacía, shift no hace nada");
    return;
  }

  const color = colores.shift();   // shift saca el primero y me lo devuelve
  document.querySelector("#aviso2").classList.add("d-none");
  mostrarColores();
  console.log("Ejercicio 2: shift ha sacado " + color + ", quedan " + comoTexto(colores));
}

mostrarColores();   // pinta los tres colores de partida nada más cargar


// Ejercicio 3: catálogo de productos

const productos = [
  { nombre: "Teclado mecánico", precio: 79.9, categoria: "Periféricos" },
  { nombre: "Ratón inalámbrico", precio: 24.5, categoria: "Periféricos" },
  { nombre: "Monitor 27 pulgadas", precio: 189, categoria: "Pantallas" },
  { nombre: "Alfombrilla XL", precio: 12, categoria: "Accesorios" },
  { nombre: "Webcam HD", precio: 49.99, categoria: "Vídeo" },
  { nombre: "Auriculares con micro", precio: 59, categoria: "Audio" }
];

// Pinta en la tabla la lista de productos que le pases
function pintarProductos(lista) {
  const cuerpo = document.querySelector("#tablaProductos");
  cuerpo.textContent = "";

  lista.forEach(function (producto) {
    const fila = document.createElement("tr");

    const nombre = document.createElement("td");
    nombre.textContent = producto.nombre;

    const categoria = document.createElement("td");
    categoria.textContent = producto.categoria;

    const precio = document.createElement("td");
    precio.classList.add("text-end");
    precio.textContent = producto.precio.toFixed(2) + " €";

    fila.append(nombre, categoria, precio);
    cuerpo.append(fila);
  });
}

function mostrarProductos() {
  pintarProductos(productos);
  document.querySelector("#mensaje3").textContent = "Hay " + productos.length + " productos en el catálogo.";
  console.log("Ejercicio 3: catálogo completo,", productos.length, "productos");
}

function ordenarPorPrecio() {
  // sort cambia el array sobre el que se usa, por eso ordeno una copia y productos se queda como estaba
  const copia = [...productos];

  // Si la resta sale negativa, a va antes que b: así quedan de más barato a más caro
  copia.sort(function (a, b) {
    return a.precio - b.precio;
  });

  pintarProductos(copia);
  document.querySelector("#mensaje3").textContent = "Ordenados de más barato a más caro.";
  console.log("Ejercicio 3: el más barato de la copia es " + copia[0].nombre + " y el primero del original sigue siendo " + productos[0].nombre);
}

function filtrarCaros() {
  // filter devuelve un array nuevo solo con los productos que cumplen la condición
  const caros = productos.filter(function (producto) {
    return producto.precio > 50;
  });

  pintarProductos(caros);
  document.querySelector("#mensaje3").textContent = "Hay " + caros.length + " productos de más de 50 €.";
  console.log("Ejercicio 3: productos de más de 50 €:", caros.length);
}

function buscarProducto() {
  const mensaje = document.querySelector("#mensaje3");

  // Paso lo escrito a minúsculas para que dé igual cómo lo escriba el usuario
  const texto = document.querySelector("#buscarProducto").value.trim().toLowerCase();

  if (texto === "") {
    mensaje.textContent = "Escribe algo antes de buscar.";
    console.log("Ejercicio 3: búsqueda vacía");
    return;
  }

  // find devuelve el primer producto que cumple la condición
  const encontrado = productos.find(function (producto) {
    return producto.nombre.toLowerCase().includes(texto);
  });

  // Si ninguno la cumple, find devuelve undefined
  if (encontrado === undefined) {
    pintarProductos([]);   // con una lista vacía la tabla se queda sin filas
    mensaje.textContent = "No hay ningún producto con \"" + texto + "\".";
    console.log("Ejercicio 3: find ha devuelto", encontrado);
    return;
  }

  pintarProductos([encontrado]);
  mensaje.textContent = "Encontrado: " + encontrado.nombre + ".";
  console.log("Ejercicio 3: find ha encontrado " + encontrado.nombre);
}

mostrarProductos();   // la tabla completa nada más cargar


// Ejercicio 4: notas

const alumno = {
  nombre: "Fernando José",
  notas: [],

  // Guarda la nota solo si es un número entre 0 y 10. Devuelve true si la guarda y false si no
  anadirNota: function (nota) {
    if (Number.isNaN(nota) || nota < 0 || nota > 10) {
      return false;
    }
    this.notas.push(nota);
    return true;
  },

  // Suma las notas con reduce y divide entre cuántas hay. Sin notas devuelve 0 para no dividir entre 0
  media: function () {
    if (this.notas.length === 0) {
      return 0;
    }
    const suma = this.notas.reduce(function (total, nota) {
      return total + nota;
    }, 0);
    return suma / this.notas.length;
  }
};

function mostrarNotas() {
  const contenedor = document.querySelector("#notas");
  contenedor.textContent = "";

  // Un badge por nota: verde si está aprobada y rojo si no
  alumno.notas.forEach(function (nota) {
    const badge = document.createElement("span");
    badge.classList.add("badge", "me-1");
    if (nota >= 5) {
      badge.classList.add("text-bg-success");
    } else {
      badge.classList.add("text-bg-danger");
    }
    badge.textContent = nota;
    contenedor.append(badge);
  });

  const media = document.querySelector("#media");
  if (alumno.notas.length === 0) {
    media.textContent = "Todavía no hay notas.";
  } else {
    media.textContent = "Media de " + alumno.notas.length + " notas: " + alumno.media().toFixed(2);
  }

  console.log("Ejercicio 4: notas " + comoTexto(alumno.notas) + ", media " + alumno.media());
}

function anadirNota() {
  const casilla = document.querySelector("#nota");
  const error = document.querySelector("#error4");

  // Miro si está vacía antes de convertir porque Number("") da 0 y contaría como una nota válida
  if (casilla.value.trim() === "") {
    error.textContent = "Escribe una nota antes de pulsar el botón.";
    error.classList.remove("d-none");
    console.log("Ejercicio 4: casilla vacía");
    return;
  }

  const nota = Number(casilla.value);

  if (alumno.anadirNota(nota) === false) {
    error.textContent = "La nota tiene que ser un número entre 0 y 10.";
    error.classList.remove("d-none");
    console.log("Ejercicio 4: nota no válida", nota);
    return;
  }

  error.classList.add("d-none");
  casilla.value = "";
  mostrarNotas();
}

function borrarNotas() {
  alumno.notas = [];
  document.querySelector("#error4").classList.add("d-none");
  console.log("Ejercicio 4: notas borradas");
  mostrarNotas();
}

mostrarNotas();


// Ejercicio 5: map, filter y reduce

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Vacía #salida5 y escribe un <div> por cada línea que le paso
function escribirSalida5(lineas) {
  const salida = document.querySelector("#salida5");
  salida.textContent = "";

  lineas.forEach(function (linea) {
    const div = document.createElement("div");
    div.textContent = linea;
    salida.append(div);
  });
}

function verDobles() {
  // map devuelve un array nuevo con lo que devuelve la función para cada número
  const dobles = numeros.map(function (numero) {
    return numero * 2;
  });

  escribirSalida5(["map: " + comoTexto(dobles), "numeros: " + comoTexto(numeros)]);
  console.log("Ejercicio 5: dobles " + comoTexto(dobles));
}

function verPares() {
  // Un número es par si al dividirlo entre 2 el resto es 0
  const pares = numeros.filter(function (numero) {
    return numero % 2 === 0;
  });

  escribirSalida5(["filter: " + comoTexto(pares), "numeros: " + comoTexto(numeros)]);
  console.log("Ejercicio 5: pares " + comoTexto(pares));
}

function verSuma() {
  // reduce va acumulando en total y empieza en 0
  const suma = numeros.reduce(function (total, numero) {
    return total + numero;
  }, 0);

  escribirSalida5(["reduce: " + suma, "numeros: " + comoTexto(numeros)]);
  console.log("Ejercicio 5: suma " + suma);
}

function verCadena() {
  // Cada paso trabaja con el resultado del anterior
  const pares = numeros.filter(function (numero) {
    return numero % 2 === 0;
  });

  const dobles = pares.map(function (numero) {
    return numero * 2;
  });

  const suma = dobles.reduce(function (total, numero) {
    return total + numero;
  }, 0);

  escribirSalida5([
    "1. filter: " + comoTexto(pares),
    "2. map: " + comoTexto(dobles),
    "3. reduce: " + suma,
    "numeros: " + comoTexto(numeros)
  ]);
  console.log("Ejercicio 5: los tres seguidos dan " + suma);
}


// Ejercicio 6: ciudades

const ciudadesOriginal = ["Granada", "Sevilla", "Málaga", "Córdoba", "Jaén", "Almería", "Cádiz", "Huelva"];
let ciudades = [...ciudadesOriginal];   // una copia: splice cambia ciudades y así podemos restaurarla

function mostrarCiudades() {
  const contenedor = document.querySelector("#ciudades");
  contenedor.textContent = "";

  // forEach le pasa a la función el elemento y también su posición en el array
  ciudades.forEach(function (ciudad, posicion) {
    const badge = document.createElement("span");
    badge.classList.add("badge", "text-bg-light", "border", "me-1", "mb-1");
    badge.textContent = posicion + " · " + ciudad;
    contenedor.append(badge);
  });

  console.log("Ejercicio 6: ciudades " + comoTexto(ciudades));
}

function verSlice() {
  // TODO: guarda ciudades.slice(2, 5) y escribe en #salida6 qué devuelve y cuántas ciudades siguen en el array.
}

function hacerSplice() {
  // TODO: si quedan menos de 3 ciudades, avisa en #salida6 de que hay que restaurar y no hagas nada más.
  // TODO: si no, ciudades.splice(2, 2): escribe en #salida6 qué devuelve y cuántas quedan, y vuelve a pintar.
}

function restaurarCiudades() {
  // TODO: vuelve a copiar ciudadesOriginal en ciudades y pinta.
}

function buscarCiudad() {
  // TODO: lee #buscarCiudad (value y trim). Si está vacío, avisa.
  // TODO: escribe en #salida6 lo que dan includes() e indexOf() con ese nombre. Si no está, indexOf da -1.
}

mostrarCiudades();
