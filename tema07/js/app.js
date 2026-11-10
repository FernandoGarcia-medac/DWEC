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

// ============================================================
// Ejercicio 4 · Dos contadores con closure
// ============================================================

function crearContador(paso = 1) {
  let cuenta = 0;
  return function () {
    cuenta += paso;
    return cuenta;
  };
}

const contarDeUno = crearContador();
const contarDeCinco = crearContador(5);

function sumarUno() {
  const valor = contarDeUno();
  document.querySelector("#cuenta1").textContent = valor;
  console.log("Ejercicio 4: de 1 en 1 →", valor);
}

function sumarCinco() {
  const valor = contarDeCinco();
  document.querySelector("#cuenta5").textContent = valor;
  console.log("Ejercicio 4: de 5 en 5 →", valor);
}

// ============================================================
// Ejercicio 5 · Clases
// ============================================================

class Alumno {
  constructor(nombre, curso) {
    this.nombre = nombre;
    this.curso = curso;
    this.notas = [];
  }

  anadirNota(nota) {
    if (typeof nota !== "number" || Number.isNaN(nota) || nota < 0 || nota > 10) {
      return false;
    }
    this.notas.push(nota);
    return true;
  }

  media() {
    if (this.notas.length === 0) {
      return 0;
    }
    const suma = this.notas.reduce((total, nota) => total + nota, 0);
    return suma / this.notas.length;
  }

  presentarse() {
    return `${this.nombre}, de ${this.curso}`;
  }
}

class AlumnoFCT extends Alumno {
  constructor(nombre, curso, empresa) {
    super(nombre, curso);
    this.empresa = empresa;
  }

  presentarse() {
    return `${super.presentarse()}, en prácticas en ${this.empresa}`;
  }
}

const alumnos = [];
const alumnoInicial = new Alumno("Lucía Martín", "2.º DAW");
alumnoInicial.anadirNota(7);
alumnoInicial.anadirNota(8.5);
alumnos.push(alumnoInicial);

const alumnoFCTInicial = new AlumnoFCT("Mario López", "2.º DAW", "TecnoSur");
alumnoFCTInicial.anadirNota(6.5);
alumnoFCTInicial.anadirNota(9);
alumnos.push(alumnoFCTInicial);

function pintarAlumnos() {
  const contenedor = document.querySelector("#listaAlumnos");
  contenedor.textContent = "";

  alumnos.forEach((alumno) => {
    const columna = document.createElement("div");
    columna.classList.add("col-12", "col-md-6", "col-xl-4");

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("border", "rounded", "p-2", "h-100");

    const frase = document.createElement("p");
    frase.classList.add("mb-1");
    frase.textContent = alumno.presentarse();

    const media = document.createElement("span");
    media.classList.add("badge", "me-1");
    if (alumno.notas.length === 0) {
      media.classList.add("text-bg-secondary");
      media.textContent = "Sin notas";
    } else {
      media.classList.add(alumno.media() >= 5 ? "text-bg-success" : "text-bg-danger");
      media.textContent = `Media ${alumno.media().toFixed(2)}`;
    }

    tarjeta.append(frase, media);
    if (alumno instanceof AlumnoFCT) {
      const fct = document.createElement("span");
      fct.classList.add("badge", "text-bg-info");
      fct.textContent = "FCT";
      tarjeta.append(fct);
    }

    columna.append(tarjeta);
    contenedor.append(columna);
  });

  document.querySelector("#totalAlumnos").textContent = alumnos.length;
}

pintarAlumnos();

// Continuación del ejercicio 5 · Alta de alumnos

function crearAlumno() {
  const nombre = document.querySelector("#nombre5").value.trim();
  const curso = document.querySelector("#curso5").value;
  const empresa = document.querySelector("#empresa5").value.trim();
  const notasTexto = document.querySelector("#notas5").value.trim();
  const error = document.querySelector("#error5");

  if (nombre === "") {
    error.textContent = "Escribe el nombre del alumno.";
    error.classList.remove("d-none");
    return;
  }

  const notasSeparadas = notasTexto === "" ? [] : notasTexto.split(",");
  const hayNotaVacia = notasSeparadas.some((texto) => texto.trim() === "");
  const notas = notasSeparadas.map((texto) => Number(texto.trim()));
  if (hayNotaVacia || notas.some((nota) => Number.isNaN(nota) || nota < 0 || nota > 10)) {
    error.textContent = "Las notas deben ser números entre 0 y 10.";
    error.classList.remove("d-none");
    return;
  }

  const alumno = empresa === ""
    ? new Alumno(nombre, curso)
    : new AlumnoFCT(nombre, curso, empresa);
  notas.forEach((nota) => alumno.anadirNota(nota));
  alumnos.push(alumno);
  error.classList.add("d-none");
  document.querySelector("#nombre5").value = "";
  document.querySelector("#empresa5").value = "";
  document.querySelector("#notas5").value = "";
  pintarAlumnos();
}

// ============================================================
// Ejercicio 6 · Fechas y textos
// ============================================================

function diasHasta(fecha) {
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
  const diferencia = fecha.getTime() - hoy.getTime();
  return Math.round(diferencia / (1000 * 60 * 60 * 24));
}

// Continuación del ejercicio 6 · Mostrar la fecha

function mostrarDias() {
  const valor = document.querySelector("#fecha6").value;
  const salida = document.querySelector("#salida6a");

  if (valor === "") {
    salida.textContent = "Elige una fecha.";
    return;
  }

  const [anio, mes, dia] = valor.split("-").map(Number);
  const fecha = new Date(anio, mes - 1, dia);
  const dias = diasHasta(fecha);
  const fechaTexto = fecha.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  if (dias > 0) {
    salida.textContent = `Faltan ${dias} días: será ${fechaTexto}.`;
  } else if (dias === 0) {
    salida.textContent = `Es hoy: ${fechaTexto}.`;
  } else {
    salida.textContent = `Fue hace ${Math.abs(dias)} días: ${fechaTexto}.`;
  }
}

// Continuación del ejercicio 6 · Iniciales

function iniciales(nombreCompleto) {
  return nombreCompleto.trim()
    .split(" ")
    .filter((palabra) => palabra !== "")
    .map((palabra) => palabra[0].toLocaleUpperCase("es-ES"))
    .join("");
}

// Continuación del ejercicio 6 · Crear usuario

function crearUsuario(nombreCompleto) {
  const codigo = Math.floor(Math.random() * 1000).toString().padStart(3, "0");
  return iniciales(nombreCompleto).toLocaleLowerCase("es-ES") + codigo;
}

// Continuación del ejercicio 6 · Mostrar iniciales

function mostrarIniciales() {
  const nombre = document.querySelector("#nombre6").value.trim();
  const salida = document.querySelector("#salida6b");

  if (nombre === "") {
    salida.textContent = "Escribe un nombre completo.";
    return;
  }

  salida.textContent = `Iniciales: ${iniciales(nombre)} · usuario: ${crearUsuario(nombre)}`;
}

