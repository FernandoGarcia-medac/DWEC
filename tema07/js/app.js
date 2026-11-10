console.log("app.js cargado");

function pintarLista(selector, textos) {
  const lista = document.querySelector(selector);
  lista.textContent = "";

  textos.forEach((texto) => {
    const elemento = document.createElement("li");
    elemento.classList.add("list-group-item");
    elemento.textContent = texto;
    lista.append(elemento);
  });
}

// ============================================================
// Ejercicio 1 · Precio final
// ============================================================

function calcularPrecio(base, iva = 21, descuento = 0) {
  const precioDescontado = base - base * (descuento / 100);
  return precioDescontado + precioDescontado * (iva / 100);
}

function formatearEuros(cantidad) {
  return cantidad.toFixed(2) + " €";
}

function mostrarPrecio() {
  const baseTexto = document.querySelector("#base").value;
  const base = Number(baseTexto);
  const iva = Number(document.querySelector("#iva").value);
  const descuentoTexto = document.querySelector("#descuento").value;
  const error = document.querySelector("#error1");

  if (baseTexto === "" || Number.isNaN(base) || base < 0) {
    error.textContent = "Escribe un precio válido, igual o mayor que cero.";
    error.classList.remove("d-none");
    return;
  }

  let precioFinal;
  let descuento = 0;
  if (descuentoTexto === "") {
    precioFinal = calcularPrecio(base, iva);
  } else {
    descuento = Number(descuentoTexto);
    if (Number.isNaN(descuento) || descuento < 0 || descuento > 100) {
      error.textContent = "El descuento tiene que estar entre 0 y 100.";
      error.classList.remove("d-none");
      return;
    }
    precioFinal = calcularPrecio(base, iva, descuento);
  }

  error.classList.add("d-none");
  pintarLista("#salida1", [
    `Precio sin IVA: ${formatearEuros(base)}`,
    `Descuento: ${descuento} %`,
    `IVA: ${iva} %`,
    `Precio final: ${formatearEuros(precioFinal)}`
  ]);
}

// ============================================================
// Ejercicio 2 · Películas: de function a flecha
// ============================================================

const peliculas = [
  { titulo: "El laberinto del fauno", anio: 2006, duracion: 118 },
  { titulo: "Coco", anio: 2017, duracion: 105 },
  { titulo: "Interstellar", anio: 2014, duracion: 169 },
  { titulo: "Regreso al futuro", anio: 1985, duracion: 116 },
  { titulo: "Parásitos", anio: 2019, duracion: 132 },
  { titulo: "Toy Story", anio: 1995, duracion: 81 }
];

function comoTexto(pelicula) {
  return `${pelicula.titulo} (${pelicula.anio}) · ${pelicula.duracion} min`;
}

function verTitulos() {
  const titulos = peliculas.map((pelicula) => pelicula.titulo);
  pintarLista("#salida2", titulos);
  document.querySelector("#mensaje2").textContent = `${titulos.length} títulos.`;
  console.log("Ejercicio 2: map →", titulos);
}

function verLargas() {
  const largas = peliculas.filter((pelicula) => pelicula.duracion > 120);
  pintarLista("#salida2", largas.map(comoTexto));
  document.querySelector("#mensaje2").textContent = `${largas.length} películas duran más de 2 horas.`;
  console.log("Ejercicio 2: filter →", largas);
}

function ordenarPorAnio() {
  const ordenadas = [...peliculas].sort((a, b) => a.anio - b.anio);
  pintarLista("#salida2", ordenadas.map(comoTexto));
  document.querySelector("#mensaje2").textContent = "De la más antigua a la más reciente.";
  console.log("Ejercicio 2: sort →", ordenadas);
}

function verDuracionTotal() {
  const minutos = peliculas.reduce((total, pelicula) => total + pelicula.duracion, 0);
  pintarLista("#salida2", [`${minutos} minutos de películas`]);
  document.querySelector("#mensaje2").textContent = "La suma de las seis duraciones.";
  console.log("Ejercicio 2: reduce →", minutos);
}

function buscarAntigua() {
  const antigua = peliculas.find((pelicula) => pelicula.anio < 1990);
  if (antigua === undefined) {
    document.querySelector("#mensaje2").textContent = "No hay películas anteriores a 1990.";
    pintarLista("#salida2", []);
    return;
  }
  pintarLista("#salida2", [comoTexto(antigua)]);
  document.querySelector("#mensaje2").textContent = "La primera película anterior a 1990.";
}

// ============================================================
// Ejercicio 3 · Tu propio callback
// ============================================================

const numeros = [3, -1, 4, -1, 5, 9];
document.querySelector("#numeros3").textContent = `const numeros = [${numeros.join(", ")}];`;

function transformar(lista, operacion) {
  const resultado = [];
  for (const elemento of lista) {
    resultado.push(operacion(elemento));
  }
  return resultado;
}

function mostrar3(nombre, resultado, conMap) {
  const salida = document.querySelector("#salida3");
  salida.textContent = "";
  const lineas = [
    `${nombre} → [${resultado.join(", ")}]`,
    `con map → [${conMap.join(", ")}]`,
    `numeros → [${numeros.join(", ")}] (no cambia)`
  ];
  lineas.forEach((linea) => {
    const parrafo = document.createElement("p");
    parrafo.classList.add("mb-1");
    parrafo.textContent = linea;
    salida.append(parrafo);
  });
}

function verDobles() {
  const resultado = transformar(numeros, (n) => n * 2);
  mostrar3("dobles", resultado, numeros.map((n) => n * 2));
  console.log("Ejercicio 3: dobles →", resultado);
}

function verCuadrados() {
  const resultado = transformar(numeros, (n) => n ** 2);
  mostrar3("cuadrados", resultado, numeros.map((n) => n ** 2));
  console.log("Ejercicio 3: cuadrados →", resultado);
}

function verAbsolutos() {
  const resultado = transformar(numeros, Math.abs);
  mostrar3("valores absolutos", resultado, numeros.map(Math.abs));
  console.log("Ejercicio 3: valores absolutos →", resultado);
}

