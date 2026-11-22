/*
  Tarea 8 · DWEC · Fernando José García Fernández
  Formulario de inscripción.

  Cómo usar esta plantilla:
  · Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · Los ejercicios 1 a 3 son HTML: el formulario se valida y se envía solo, sin JavaScript.
  · Desde el ejercicio 4, la validación la haces tú: añade novalidate al <form>.
  · Los errores se escriben debajo de cada campo con mostrarError(); nada de alert().
  · Como en el tema 7: flechas en los callbacks. Dentro de ellos, this NO es el formulario:
    usa e.target o la constante form.
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");

const form = document.querySelector("#inscripcion");


// ============================================================
// Mostrar y quitar los errores junto al campo
// Cada campo está en un <div class="mb-3"> con su <div class="invalid-feedback">
// ============================================================

// Ya está hecha: es el modelo
function mostrarError(campo, mensaje) {
  campo.classList.add("is-invalid");                         // borde rojo de Bootstrap
  const aviso = campo.closest(".mb-3").querySelector(".invalid-feedback");
  aviso.textContent = mensaje;
  aviso.classList.add("d-block");                            // visible también en los radio
}

function quitarError(campo) {
  // TODO: lo contrario de mostrarError(): quita "is-invalid" al campo, vacía su .invalid-feedback
  //       y quítale "d-block".
  //       Ojo con los radio: el error es de todo el grupo. Si campo.type es "radio", quita "is-invalid"
  //       a todos los de su grupo: form.querySelectorAll(`[name="${campo.name}"]`).
  if (campo.type === "radio") {
    form.querySelectorAll(`[name="${campo.name}"]`).forEach((radio) => {
      radio.classList.remove("is-invalid");
    });
  } else {
    campo.classList.remove("is-invalid");
  }

  const aviso = campo.closest(".mb-3").querySelector(".invalid-feedback");
  if (aviso !== null) {
    aviso.textContent = "";
    aviso.classList.remove("d-block");
  }
}


// ============================================================
// Ejercicio 4 · El mensaje de cada error
// ============================================================

// El texto de cada campo obligatorio cuando está vacío. La clave es el name (o el id, si no tiene name)
const OBLIGATORIOS = {
  nombre: "Escribe tu nombre y apellidos.",
  // TODO: email, email2, nacimiento, modalidad, taller y condiciones
  email: "Escribe tu correo electrónico.",
  email2: "Repite tu correo electrónico.",
  telefono: "Escribe tu teléfono.",
  nacimiento: "Indica tu fecha de nacimiento.",
  modalidad: "Selecciona una modalidad.",
  taller: "Elige un taller.",
  condiciones: "Debes aceptar las condiciones para inscribirte."
};

function mensajeDe(campo) {
  // TODO: mira campo.validity y devuelve el texto que toque:
  //       · valueMissing → OBLIGATORIOS[campo.name || campo.id]
  //       · typeMismatch → el de un correo mal escrito
  //       · tooShort → «Escribe al menos N caracteres.» (campo.minLength)
  //       · patternMismatch, rangeUnderflow o rangeOverflow → campo.title
  //       · customError → campo.validationMessage (el de setCustomValidity)
  if (campo.validity.valueMissing) {
    return OBLIGATORIOS[campo.name || campo.id];
  }
  if (campo.validity.typeMismatch) {
    return "Escribe un correo electrónico válido.";
  }
  if (campo.validity.tooShort) {
    return `Escribe al menos ${campo.minLength} caracteres.`;
  }
  if (campo.validity.patternMismatch || campo.validity.rangeUnderflow || campo.validity.rangeOverflow) {
    return campo.title;
  }
  if (campo.validity.customError) {
    return campo.validationMessage;
  }
  return "Revisa el valor de este campo.";
}


// ============================================================
// Ejercicio 4 · La validación al enviar
// Hasta que llegues a este ejercicio, deja la función vacía: el formulario se enviará solo
// ============================================================

form.addEventListener("submit", (e) => {
  // TODO 1: e.preventDefault(), para que no se envíe todavía.
  // TODO 2: coge todos los campos: e.target.querySelectorAll("input, select, textarea").
  // TODO 3: recórrelos con forEach. Si campo.checkValidity() es true, quitarError(campo);
  //         si no, mostrarError(campo, mensajeDe(campo)) y apúntate el primero que falla.
  // TODO 4: si alguno ha fallado, pon el foco en el primero (focus()) y no sigas (return).
  // TODO 5: si todo está bien, envíalo de verdad: e.target.submit().
  e.preventDefault();
  comprobarCorreos();
  const campos = e.target.querySelectorAll("input, select, textarea");
  let primerCampoInvalido = null;

  campos.forEach((campo) => {
    if (campo.checkValidity()) {
      quitarError(campo);
    } else {
      mostrarError(campo, mensajeDe(campo));
      if (primerCampoInvalido === null) {
        primerCampoInvalido = campo;
      }
    }
  });

  if (primerCampoInvalido !== null) {
    primerCampoInvalido.focus();
    return;
  }

  e.target.submit();
});


// ============================================================
// Ejercicio 5 · Eventos de los campos
// ============================================================

// TODO: el contador de la textarea: con el evento "input" de #comentarios, escribe en #contador
//       cuántos caracteres lleva (value.length).
const comentarios = document.querySelector("#comentarios");
const contador = document.querySelector("#contador");
comentarios.addEventListener("input", (e) => {
  contador.textContent = `${e.target.value.length} de 200`;
});

// TODO: el nivel: con el evento "input" de #nivel, escribe su valor en #valorNivel.
const nivel = document.querySelector("#nivel");
const valorNivel = document.querySelector("#valorNivel");
nivel.addEventListener("input", (e) => {
  valorNivel.textContent = e.target.value;
});

// TODO: comprobarCorreos(): si #email2 no está vacío y no coincide con #email, ponle un error propio con
//       setCustomValidity("Los dos correos no coinciden."); si coincide, quítaselo con setCustomValidity("").
//       Llámala en el evento "input" de los dos correos y también al empezar la validación del submit.
const email = document.querySelector("#email");
const email2 = document.querySelector("#email2");

function comprobarCorreos() {
  if (email2.value !== "" && email2.value !== email.value) {
    email2.setCustomValidity("Los dos correos no coinciden.");
  } else {
    email2.setCustomValidity("");
  }
}

email.addEventListener("input", comprobarCorreos);
email2.addEventListener("input", comprobarCorreos);

// TODO: que el error desaparezca en cuanto se corrige: a cada campo, un "input" que llame a quitarError()
//       si campo.checkValidity() ya es true.
const camposFormulario = form.querySelectorAll("input, select, textarea");
camposFormulario.forEach((campo) => {
  campo.addEventListener("input", (e) => {
    if (e.target.checkValidity()) {
      quitarError(e.target);
    }
    if (e.target === email && email2.checkValidity()) {
      quitarError(email2);
    }
  });
});

// TODO: con el evento "reset" del formulario, quita los errores y vuelve a poner el contador a 0 y el nivel a 5.
form.addEventListener("reset", () => {
  email2.setCustomValidity("");
  camposFormulario.forEach((campo) => quitarError(campo));
  contador.textContent = "0 de 200";
  valorNivel.textContent = "5";
});


// ============================================================
// Ejercicio 6 · Resumen con FormData
// ============================================================

// TODO: con el evento "click" de #verResumen:
//       · const datos = new FormData(form);
//       · recórrelo con for (const [campo, valor] of datos) y pinta un <li class="list-group-item"> por par
//         en #resumen (createElement y textContent; si el valor está vacío, «(vacío)»);
//       · escribe en #avisoResumen cuántos datos hay y por qué falta «Repite el correo».
const botonResumen = document.querySelector("#verResumen");
const listaResumen = document.querySelector("#resumen");
const avisoResumen = document.querySelector("#avisoResumen");

botonResumen.addEventListener("click", () => {
  const datos = new FormData(form);
  let cantidadDatos = 0;
  listaResumen.replaceChildren();

  for (const [campo, valor] of datos) {
    const elemento = document.createElement("li");
    elemento.className = "list-group-item";
    elemento.textContent = `${campo}: ${valor === "" ? "(vacío)" : valor}`;
    listaResumen.append(elemento);
    cantidadDatos += 1;
  }

  avisoResumen.textContent = `Hay ${cantidadDatos} datos. «Repite el correo» no aparece porque ese campo no tiene atributo name y FormData solo recoge campos que tienen name.`;
});
