/*
  Tarea 8 · DWEC · Fernando José García Fernández
  Formulario de inscripción.

  El formulario usa validación HTML5 y JavaScript antes de enviarse.
  · El envío se comprueba con novalidate para mostrar los errores junto a cada campo.
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
  // Limpio el estado visual del campo y, en los radio, el de todo el grupo.
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
  // Mensajes personalizados para los campos obligatorios.
  email: "Escribe tu correo electrónico.",
  email2: "Repite tu correo electrónico.",
  telefono: "Escribe tu teléfono.",
  nacimiento: "Indica tu fecha de nacimiento.",
  modalidad: "Selecciona una modalidad.",
  taller: "Elige un taller.",
  condiciones: "Debes aceptar las condiciones para inscribirte."
};

function mensajeDe(campo) {
  // Elijo el mensaje según el tipo de error que indica validity.
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
  // Compruebo los campos y solo envío el formulario si todos son válidos.
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

// Actualizo el contador de comentarios mientras se escribe.
const comentarios = document.querySelector("#comentarios");
const contador = document.querySelector("#contador");
comentarios.addEventListener("input", (e) => {
  contador.textContent = `${e.target.value.length} de 200`;
});

// Actualizo el valor mostrado del nivel mientras se mueve el control.
const nivel = document.querySelector("#nivel");
const valorNivel = document.querySelector("#valorNivel");
nivel.addEventListener("input", (e) => {
  valorNivel.textContent = e.target.value;
});

// Compruebo que los dos correos coincidan y actualizo el error personalizado.
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

// Quito el error de cada campo en cuanto su valor vuelve a ser válido.
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

// Al restablecer el formulario, limpio errores y recupero los valores iniciales.
form.addEventListener("reset", () => {
  email2.setCustomValidity("");
  camposFormulario.forEach((campo) => quitarError(campo));
  contador.textContent = "0 de 200";
  valorNivel.textContent = "5";
});


// ============================================================
// Ejercicio 6 · Resumen con FormData
// ============================================================

// Muestro los datos incluidos en FormData y explico por qué no aparece la repetición del correo.
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
