/*
  Tarea 5 de DWEC. Fernando José García Fernández.
  Manipular el DOM: seleccionar, cambiar, crear y borrar elementos con JavaScript.
  Hay una función por botón y cada una deja un mensaje en la consola con console.log().
*/

console.log("app.js cargado");


// Ejercicio 1: selectores y modificación (un selector distinto para cada párrafo)
function aplicarCambios() {
  // El primer párrafo, por su id
  const primero = document.getElementById("primero");
  primero.textContent = "Texto modificado por JavaScript";

  // El segundo párrafo, con querySelector y su clase: lo resalto
  const segundo = document.querySelector(".segundo");
  segundo.classList.add("bg-warning-subtle");

  // El tercero, con querySelectorAll y su posición en la lista (índice 2): en rojo
  const parrafos = document.querySelectorAll("#contenido p");
  parrafos[2].classList.add("text-danger");

  console.log("Cambios aplicados a los tres párrafos.");
}


// Ejercicio 2: crear y eliminar nodos
function anadirParrafo() {
  const contenido = document.querySelector("#contenido");

  // Creo el párrafo y lo cuelgo al final
  const parrafo = document.createElement("p");
  contenido.append(parrafo);

  // Le pongo el texto con el número de párrafos que hay ahora
  const n = contenido.children.length;
  parrafo.textContent = "Párrafo nuevo " + n;

  console.log("He añadido: " + parrafo.textContent);
}

function eliminarUltimo() {
  const contenido = document.querySelector("#contenido");
  const ultimo = contenido.lastElementChild;
  const aviso = document.getElementById("aviso2");

  if (ultimo === null) {
    // Ya no queda ninguno: enseño el aviso
    aviso.classList.remove("d-none");
    console.log("Ya no quedan párrafos que borrar.");
  } else {
    aviso.classList.add("d-none");
    ultimo.remove();
    console.log("He borrado el último párrafo.");
  }
}


// Ejercicio 3: resaltar al pasar el ratón
function activarResaltado() {
  const parrafos = document.querySelectorAll("#contenido p");

  for (const parrafo of parrafos) {
    // Cuando el ratón entra en el párrafo, le pongo la clase
    parrafo.addEventListener("mouseenter", function () {
      parrafo.classList.add("bg-body-secondary");
    });

    // Cuando el ratón sale, le quito la clase
    parrafo.addEventListener("mouseleave", function () {
      parrafo.classList.remove("bg-body-secondary");
    });
  }

  console.log("He activado el resaltado en " + parrafos.length + " párrafos.");
}


// Ejercicio 4: cambiar el primer párrafo
function cambiarTexto() {
  const texto = document.getElementById("nuevoTexto").value.trim();
  const error = document.getElementById("error4");
  const primero = document.querySelector("#contenido p");

  if (texto === "") {
    // Si está vacío enseño el error y no cambio nada
    error.classList.remove("d-none");
    return;
  }

  error.classList.add("d-none");
  primero.textContent = texto;
  console.log("He cambiado el párrafo con textContent: " + texto);
}

function cambiarConHtml() {
  const texto = document.getElementById("nuevoTexto").value.trim();
  const error = document.getElementById("error4");
  const primero = document.querySelector("#contenido p");

  if (texto === "") {
    error.classList.remove("d-none");
    return;
  }

  error.classList.add("d-none");
  // Con innerHTML el navegador interpreta el texto como HTML (ojo, es peligroso con lo que escribe el usuario)
  primero.innerHTML = texto;
  console.log("He cambiado el párrafo con innerHTML: " + texto);
}


// Ejercicio 5: lista de tareas
function anadirTarea() {
  const input = document.getElementById("tareaInput");
  const texto = input.value.trim();
  const error = document.getElementById("error5");

  if (texto === "") {
    error.textContent = "Escribe una tarea antes de añadirla.";
    error.classList.remove("d-none");
    return;
  }
  error.classList.add("d-none");

  // Creo el <li> con la casilla y el texto dentro
  const li = document.createElement("li");
  li.className = "list-group-item d-flex align-items-center gap-2";

  const casilla = document.createElement("input");
  casilla.type = "checkbox";
  casilla.className = "form-check-input";

  const span = document.createElement("span");
  span.textContent = texto;

  li.append(casilla, span);
  document.getElementById("listaTareas").append(li);

  // Vacío la casilla de texto y actualizo el contador
  input.value = "";
  document.getElementById("totalTareas").textContent = document.querySelectorAll("#listaTareas li").length;

  console.log("He añadido la tarea: " + texto);
}

function borrarCompletadas() {
  const marcadas = document.querySelectorAll("#listaTareas input:checked");
  const error = document.getElementById("error5");

  if (marcadas.length === 0) {
    error.textContent = "No hay tareas marcadas para borrar.";
    error.classList.remove("d-none");
    return;
  }
  error.classList.add("d-none");

  // Borro el <li> de cada casilla marcada (el <li> es el padre de la casilla)
  for (const casilla of marcadas) {
    casilla.parentElement.remove();
  }

  document.getElementById("totalTareas").textContent = document.querySelectorAll("#listaTareas li").length;

  console.log("He borrado " + marcadas.length + " tareas.");
}


// Ejercicio 6: datos de la ventana (BOM)
function verDatosVentana() {
  // El tamaño de la ventana
  const ancho = window.innerWidth;
  const alto = window.innerHeight;
  document.querySelector("#datoVentana").textContent = `${ancho} × ${alto} px`;

  // El punto de corte de Bootstrap según el ancho
  let punto;
  if (ancho < 576) {
    punto = "xs (< 576)";
  } else if (ancho < 768) {
    punto = "sm (≥ 576)";
  } else if (ancho < 992) {
    punto = "md (≥ 768)";
  } else if (ancho < 1200) {
    punto = "lg (≥ 992)";
  } else if (ancho < 1400) {
    punto = "xl (≥ 1200)";
  } else {
    punto = "xxl (≥ 1400)";
  }
  document.querySelector("#datoPunto").textContent = punto;

  // El tamaño de la pantalla, la URL y el idioma del navegador
  document.querySelector("#datoPantalla").textContent = `${screen.width} × ${screen.height} px`;
  document.querySelector("#datoUrl").textContent = location.href;
  document.querySelector("#datoIdioma").textContent = navigator.language;

  console.log("He mostrado los datos de la ventana (" + punto + ").");
}
