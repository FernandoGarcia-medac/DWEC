/*
  Tarea 5 · DWEC · [Tu nombre y apellidos]
  Manipular el DOM.

  Cómo usar esta plantilla:
  · Desde este tema, el JavaScript escribe en la página: selecciona elementos y cambia su texto, sus clases...
  · Hay una función por botón. Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · app.js se carga en el <head> con defer: cuando se ejecuta, el HTML ya está leído.
  · Selecciona con document.querySelector() / querySelectorAll() (o getElementById).
  · Texto con textContent; aspecto con classList y las clases de Bootstrap (no con style).
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");


// ============================================================
// Ejercicio 1 · Selectores y modificación
// Un selector distinto para cada párrafo
// ============================================================

function aplicarCambios() {
  // El modelo: el primer párrafo, por su id
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


// ============================================================
// Ejercicio 2 · Crear y eliminar nodos
// ============================================================

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


// ============================================================
// Ejercicio 3 · Resaltar al pasar el ratón
// ============================================================

function activarResaltado() {
  const parrafos = document.querySelectorAll("#contenido p");

  for (const parrafo of parrafos) {
    // addEventListener("mouseenter", ...) ejecuta la función cuando el ratón entra en el párrafo.
    // Los eventos los veremos a fondo en el tema 9: de momento, copia este modelo.
    parrafo.addEventListener("mouseenter", function () {
      parrafo.classList.add("bg-body-secondary");
    });

    // Lo mismo con "mouseleave": cuando el ratón sale, quito la clase
    parrafo.addEventListener("mouseleave", function () {
      parrafo.classList.remove("bg-body-secondary");
    });
  }

  console.log("He activado el resaltado en " + parrafos.length + " párrafos.");
}


// ============================================================
// Ejercicio 4 · Cambiar el primer párrafo
// ============================================================

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


// ============================================================
// Ejercicio 5 · Lista de tareas
// ============================================================

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


// ============================================================
// Ejercicio 6 · Datos de la ventana (BOM)
// ============================================================

function verDatosVentana() {
  // El modelo: el tamaño de la ventana
  const ancho = window.innerWidth;
  const alto = window.innerHeight;
  document.querySelector("#datoVentana").textContent = `${ancho} × ${alto} px`;

  // TODO: con if / else if, el punto de corte de Bootstrap según el ancho: xs (< 576), sm (≥ 576), md (≥ 768),
  //       lg (≥ 992), xl (≥ 1200) y xxl (≥ 1400). Escríbelo en #datoPunto.
  // TODO: el tamaño de la pantalla (screen.width y screen.height) en #datoPantalla.
  // TODO: la URL (location.href) en #datoUrl y el idioma del navegador (navigator.language) en #datoIdioma.
}
