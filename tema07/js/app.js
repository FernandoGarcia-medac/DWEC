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


